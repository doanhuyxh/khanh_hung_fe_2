'use client';

import {useEffect, useState} from "react";
import {Table, Tag, Space, Button, Switch} from 'antd';
import {ResponseData} from "@/app/_libs/types";
import axiosInstance from "@/app/_libs/configs/axiosAdminConfig";


export default function Emails() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const getData = async () => {
        setIsLoading(true);
        try {
            const res: ResponseData = await axiosInstance.get("/email/get-script-auto-scheduling-emails?page=1&pageSize=300");
            if (res.code === 200) {
                const dataWithKeys = res.data.map((item:any) => ({
                    ...item,
                    key: item.id, 
                }));
                setData(dataWithKeys);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false); 
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
                0
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
            dataIndex: 'isActived',
            key: 'isActived',
            render: (status:boolean) => {

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
            dataIndex: 'templateMailName',
            key: 'templateMailName',
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
            <Table columns={columns} dataSource={data} loading={isLoading}/>
        </div>
    );
}
