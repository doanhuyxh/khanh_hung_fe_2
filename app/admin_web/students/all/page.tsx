'use client';

import { useCallback, useEffect, useState } from "react";
import { Customer } from "@/app/_libs/types";
import axiosInstance from "@/app/_libs/configs/axiosAdminConfig";
import { formatTime } from "@/app/_libs/utils";
import { useRouter } from "next/navigation";
import { Table, Input, Button, Pagination, Avatar, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function CustomerPage() {
    const [totalResult, setTotalResult] = useState(0);
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const [searchKeyword, setSearchKeyword] = useState('');
    const [customerData, setCustomerData] = useState<Customer[]>([]);

    const router = useRouter();

    const handleViewCustomer = (id: string) => {
        router.push(`/admin_web/students/all/detail?id=${id}`);
    };

    const fetchCustomerData = useCallback(async () => {
        const response = await axiosInstance(
            `/customer/get-all-customer?page=${page}&pageSize=${pageSize}&search_keyword=${searchKeyword}`
        );
        setCustomerData(response.data.data);
        setTotalResult(response.data.totalResult);
    }, [page, searchKeyword, pageSize]);

    useEffect(() => {
        fetchCustomerData();
    }, [page, searchKeyword, pageSize, fetchCustomerData]);

    const columns = [
        {
            title: "STT",
            dataIndex: "index",
            render: (_: any, __: any, index: number) => (page - 1) * pageSize + index + 1,
        },
        {
            title: "Avatar",
            dataIndex: "avatar",
            render: (avatar: string) =>
                avatar ? (
                    <Avatar src={avatar} size={64} />
                ) : (
                    <Avatar size={64} icon={<SearchOutlined />} />
                ),
        },
        {
            title: "Tên khách hàng",
            dataIndex: "name",
            render: (_: any, record: Customer) => `${record.firstName} ${record.lastName}`,
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Số điện thoại",
            dataIndex: "phoneNumber",
        },
        {
            title: "Ngày tham gia",
            dataIndex: "createdAt",
            render: (createdAt: string) => formatTime(createdAt),
        },
        {
            title: "Hành động",
            key: "action",
            render: (_: any, record: Customer) => (
                <Space>
                    <Button type="primary" onClick={() => handleViewCustomer(record.id)}>
                        Xem
                    </Button>
                    <Button danger onClick={() => handleViewCustomer(record.id)}>
                        Xoá
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h2 style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px" }}>
                Danh sách học viên
            </h2>
            <div style={{ marginBottom: "16px", textAlign: "right" }}>
                <Input
                    placeholder="Tìm kiếm khách hàng"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    style={{ width: "300px" }}
                    suffix={<SearchOutlined />}
                />
            </div>
            <Table
                dataSource={customerData.map((customer) => ({
                    ...customer,
                    key: customer.id,
                }))}
                columns={columns}
                pagination={false}
                bordered
            />
            <div className="flex justify-end">
            <Pagination
                current={page}
                total={totalResult}
                pageSize={pageSize}
                onChange={(page) => setPage(page)}
                style={{ marginTop: "16px", textAlign: "right" }}
            />
            </div>
        </div>
    );
}
