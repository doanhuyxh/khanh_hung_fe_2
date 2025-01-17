'use client';

import {useEffect, useState} from "react";
import {Table, Space, Button, Switch} from 'antd';
import {ResponseData} from "@/app/_libs/types";
import axiosInstance from "@/app/_libs/configs/axiosAdminConfig";



export default function Emails({setOpenMail} : {setOpenMail: any}) {
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

    const deleteEmail = async (id: string) => {
        try {
            const res: ResponseData = await axiosInstance.get(`/email/delete-script-auto-scheduling-emails?id=${id}`);
            if (res.code === 200) {
                await getData();
            }
        } catch (error) {
            console.error("Error deleting email:", error);
        }
    }

    const handleStatusChange = (record: any) => {
        axiosInstance.get("/email/update-status-script-auto-scheduling-emails?id="+record.id, {
        }).then(() => {
            getData();
            console.log("record", record)
            if(record.isActived){
                axiosInstance.get("/hangfire-schedule/delete?jobId="+record.id)
            }else{
                axiosInstance.post(`/hangfire-schedule/add?time=${record.time}&jobId=${record.id}&date=${record.date}`)
            }

        });
    };

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
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Ngày gửi',
            dataIndex: 'date',
            key: 'date',
            render  : (date) => (
                date ? date : 'Hàng ngày'
            )
        },
        {
            title: 'Trạng thái',
            dataIndex: 'isActived',
            key: 'isActived',
            render: (_, record) => (
                <Switch 
                checked={record.isActived} 
                onClick={() => handleStatusChange(record)} 
            />
            ),
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
            dataIndex: 'fail',
            key: 'fail',
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
                    <Button type="primary" onClick={()=>{
                        sessionStorage.setItem('data-email', JSON.stringify(record))
                        setOpenMail()
                    }}>Sửa</Button>
                    <Button type="default" onClick={()=>deleteEmail(record.id)}>Xoá</Button>
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
