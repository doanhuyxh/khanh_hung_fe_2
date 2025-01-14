'use client';

import {useEffect, useState} from "react";
import {Table, Tag, Space, Button} from 'antd';
import {ResponseData} from "@/app/_libs/types";
import axiosInstance from "@/app/_libs/configs/axiosAdminConfig";
import FormSchedulingEmails from "@/app/admin_web/auto-mail-marketing/_components/form-scheduling-emails";

export default function Emails() {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res: ResponseData = await axiosInstance.get("/email/get-script-auto-scheduling-emails?page=1&pageSize=300");
        if (res.code === 200) {
            setData(res.data);
        }
    }

    useEffect(() => {
        getData()
    }, []);

    const columns = [
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Thoả mãn điều kiện',
            dataIndex: 'condition',
            key: 'condition',
            render: (text) => (
                <Tag color={text === 'Có' ? 'green' : 'red'}>{text}</Tag>
            ),
        },
        {
            title: 'Giờ gửi',
            dataIndex: 'sendTime',
            key: 'sendTime',
        },
        {
            title: 'Ngày gửi',
            dataIndex: 'sendDate',
            key: 'sendDate',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                let color = status === 'Đã gửi' ? 'green' : status === 'Đang chờ' ? 'orange' : 'red';
                return <Tag color={color}>{status}</Tag>;
            },
        },
        {
            title: 'Đã gửi',
            dataIndex: 'sent',
            key: 'sent',
        },
        {
            title: 'Đã xem',
            dataIndex: 'viewed',
            key: 'viewed',
        },
        {
            title: 'Đã click',
            dataIndex: 'clicked',
            key: 'clicked',
        },
        {
            title: 'Lỗi',
            dataIndex: 'error',
            key: 'error',
        },
        {
            title: 'Đang chờ',
            dataIndex: 'pending',
            key: 'pending',
        },
        {
            title: 'Mẫu mail',
            dataIndex: 'template',
            key: 'template',
        },
        {
            title: 'Chức năng',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary">Sửa</Button>
                    <Button type="default">Xoá</Button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data}/>
            <FormSchedulingEmails/>
        </div>
    );
}
