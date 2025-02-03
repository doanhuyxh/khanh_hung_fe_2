'use client';

import {Table, Tag, Select, DatePicker, Popconfirm, Button} from 'antd';
import React, {useEffect, useState} from 'react';
import axiosInstance from "@/app/_libs/configs/axiosAdminConfig";
import {ResponseData, Customer, TemplateMail} from "@/app/_libs/types";
import {formatTime} from "@/app/_libs/utils";
import dayjs from "dayjs";


const {Option} = Select;

export default function Histories() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any[]>([]);
    const [templates, setTemplates] = useState<TemplateMail[]>([]);
    const [users, setUsers] = useState<Customer[]>([]);
    const [pageSize, setPageSize] = useState(5);
    const [page, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");


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
            render: (text) => formatTime(text), // Thêm `return` cho giá trị
        },
        {
            title: 'Khung giờ gửi',
            dataIndex: 'sendAt',
            key: 'sendAt',
            render: (text) => (text ? formatTime(text) : ''),
        },
        {
            title: 'Thời gian xem',
            dataIndex: 'readAt',
            key: 'readAt',
            render: (_, record) => {
                return record.isRead ? formatTime(record.readAt) : 'Chưa xem';
            },
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
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => {
                return (<Popconfirm
                title="Bạn có chắc chắn muốn hủy?"
                description="Hành động này không thể hoàn tác."
                okText="Đồng ý"
                cancelText="Hủy bỏ"
                onConfirm={() => {
                    handleDeleteHistory(record.id);
                }}
                onCancel={() => console.log('Đã hủy thao tác.')}
              >
                <Button type="default" className='bg-red-500 text-white'>Xoá</Button>
              </Popconfirm>)
            },
        }
    ];

    const handlePageSizeChange = (value) => {
        setPageSize(value);
    };

    const handleStartDateChange = (date, dateString) => {
        if (date) {
            setStartDate(dayjs(dateString).format("YYYY-MM-DD HH:mm"));
        } else {
            setStartDate('');
        }
    };


    const handleEndDateChange = (date, dateString) => {
        if (date) {
            setEndDate(dayjs(dateString).format("YYYY-MM-DD HH:mm"));
        } else {
            setEndDate("");
        }
    };

    const getHistorySendEmail = React.useCallback(async () => {
        try {
            setLoading(true);
            const res: ResponseData = await axiosInstance.get(`/email/get-history-send-email?page=${page}&pageSize=${pageSize}&startTime=${startDate}&endTime=${endDate}`);
            if (res.code === 200 && Array.isArray(res.data.data)) {
                setData(res.data.data.map((item, index) => ({...item, key: index})));
                setTotalItems(res.data.total);
            }
            setLoading(false);
        } catch (error) {
            console.error("Lỗi khi lấy lịch sử gửi email:", error);
        }
    }, [pageSize, startDate, endDate, page]);

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


    const handleDeleteHistory = async (id: string) => {
        try {
            const res: ResponseData = await axiosInstance.get(`/email/delete-history-send-email?id=${id}`);
            if (res.code === 200) {
                getHistorySendEmail();
            }
        } catch (error) {
            console.error("Lỗi khi xóa lịch sử gửi email:", error);
        }
    }


    useEffect(() => {
        document.title = "Lịch sử gửi mail";
        getTemplate();
        getUsers();
    }, []);

    useEffect(() => {
        getHistorySendEmail();
    }, [pageSize, startDate, endDate, page]);


    return (
        <div className="w-full p-4 rounded mx-4 my-6 bg-white">
            <h1 className="font-bold my-5">Lịch sử gửi mail</h1>
            <div style={{marginBottom: 16}}>
                <span style={{marginRight: 8}}>Số dòng trên mỗi trang:</span>
                <Select
                    value={pageSize}
                    onChange={handlePageSizeChange}
                    style={{width: 100}}
                >
                    <Option value={5}>5</Option>
                    <Option value={10}>10</Option>
                    <Option value={25}>25</Option>
                    <Option value={50}>50</Option>
                    <Option value={100}>100</Option>
                </Select>

                <span style={{marginLeft: 16, marginRight: 8}}>Từ ngày:</span>
                <DatePicker
                    format="YYYY-MM-DD HH:mm"
                    showTime={{
                        defaultValue: dayjs("00:00", "HH:mm"),
                    }}
                    onChange={handleStartDateChange}
                    style={{width: 250}}
                />

                <span style={{marginLeft: 16, marginRight: 8}}>Đến ngày:</span>
                <DatePicker
                    format="YYYY-MM-DD HH:mm"
                    showTime={{
                        defaultValue: dayjs("00:00", "HH:mm"),
                    }}
                    onChange={handleEndDateChange}
                    style={{width: 250}}
                />

            </div>
            <Table
                loading={loading}
                dataSource={data}
                columns={columns}
                pagination={{
                    current: page,
                    pageSize: pageSize,
                    total: totalItems, 
                    onChange: (page, size) => {
                      setCurrentPage(page);
                      setPageSize(size); 
                      console.log("Page:", page, "Page Size:", size);
                    },
                    showSizeChanger: true, // Hiển thị dropdown thay đổi số mục trên mỗi trang
                    pageSizeOptions: ["10", "20", "50"], // Các tùy chọn số mục trên mỗi trang
                    showQuickJumper: true, // Cho phép nhập số trang để nhảy trực tiếp
                    showTotal: (total, range) =>
                      `Hiển thị ${range[0]}-${range[1]} trong tổng ${total} mục`, // Tùy chỉnh hiển thị tổng số mục
                  }}
            />
        </div>
    );
}
