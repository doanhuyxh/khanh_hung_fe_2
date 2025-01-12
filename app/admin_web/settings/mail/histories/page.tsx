'use client';

import { Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import axiosInstance from "@/app/_libs/configs/axiosAdminConfig";
import { ResponseData } from "@/app/_libs/types";
import { unixToDatetime } from "@/app/_libs/utils";

export default function Histories() {
    const [data, setData] = useState([]);
    const [templates, setTemplates] = useState([]);
    const [users, setUsers] = useState([]); // Đổi tên từ userInfo để đồng nhất

    const columns = [
        {
            title: 'Người nhận',
            dataIndex: 'userId',
            key: 'userId',
            render: (userId) => {
                const user = users.find((item) => item.id === userId);
                return user ? `${user.firstName} ${user.lastName}` : 'Không có';
            },
        },
        {
            title: 'Thời gian tạo',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text) => unixToDatetime(text), // Thêm `return` cho giá trị
        },
        {
            title: 'Khung giờ gửi',
            dataIndex: 'sendAt',
            key: 'sendAt',
            render: (text) => (text ? unixToDatetime(text) : ''),
        },
        {
            title: 'Thời gian xem',
            dataIndex: 'readAt',
            key: 'readAt',
            render: (text) => (text ? unixToDatetime(text) : 'Chưa xem'),
        },
        {
            title: 'Mẫu mail',
            dataIndex: 'templateMailId',
            key: 'templateMailId',
            render: (templateMailId) => {
                const template = templates.find((item) => item.id === templateMailId);
                return template ? template.name : 'Không có';
            },
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                let color;
                switch (status) {
                    case 'pending':
                        color = 'orange';
                        break;
                    case 'success':
                        color = 'green';
                        break;
                    default:
                        color = 'red';
                }
                return <Tag color={color}>{status}</Tag>;
            },
        },
    ];

    const getHistorySendEmail = async () => {
        try {
            const res: ResponseData = await axiosInstance.get(`/email/get-history-send-email?page=1&pageSize=3000`);
            if (res.code === 200 && Array.isArray(res.data)) {
                setData(res.data.map((item, index) => ({ ...item, key: index }))); // Đảm bảo `key` là duy nhất
            }
        } catch (error) {
            console.error("Lỗi khi lấy lịch sử gửi email:", error);
        }
    };

    const getTemplate = async () => {
        try {
            const res: ResponseData = await axiosInstance.get(`/email/get-all-template-email?page=1&pageSize=3000`);
            if (res.code === 200 && Array.isArray(res.data)) {
                setTemplates(res.data);
            }
        } catch (error) {
            console.error("Lỗi khi lấy mẫu email:", error);
        }
    };

    const getUsers = async () => {
        try {
            const res: ResponseData = await axiosInstance.get(`/staff_manager/get-all-customer?page=1&pageSize=3000`);
            if (res.code === 200 && Array.isArray(res.data)) {
                setUsers(res.data);
            }
        } catch (error) {
            console.error("Lỗi khi lấy thông tin người dùng:", error);
        }
    };

    useEffect(() => {
        document.title = "Lịch sử gửi mail";
        getTemplate();
        getUsers();
        getHistorySendEmail();
    }, []);

    return (
        <div className="w-full p-4 rounded mx-4 my-6 bg-white">
            <h1 className="font-bold my-5">Lịch sử gửi mail</h1>
            <Table
                dataSource={data}
                columns={columns}
                pagination={{ pageSize: 5 }}
            />
        </div>
    );
}
