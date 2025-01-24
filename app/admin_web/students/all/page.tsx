'use client';

import { useCallback, useEffect, useState } from "react";
import { Customer } from "@/app/_libs/types";
import axiosInstance from "@/app/_libs/configs/axiosAdminConfig";
import { formatTime } from "@/app/_libs/utils";
import { useRouter } from "next/navigation";
import { Table, Input, Button, Pagination, Avatar, Space, Popconfirm } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function CustomerPage() {
    const [totalResult, setTotalResult] = useState(0);
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const [searchKeyword, setSearchKeyword] = useState('');
    const [customerData, setCustomerData] = useState<Customer[]>([]);
    const [typeUser, setTypeUser] = useState("all");

    const router = useRouter();

    const handleViewCustomer = (id: string) => {
        router.push(`/admin_web/students/all/detail?id=${id}`);
    };

    const handleDeleteCustomer = (id: string) => {
        axiosInstance.get(`/customer/delete?id=${id}`)
            .then(() => {
                fetchCustomerData();
            });
    }

    const fetchCustomerData = useCallback(async () => {
        const response = await axiosInstance(
            `/customer/get-all-customer?page=${page}&pageSize=${pageSize}&search_keyword=${searchKeyword}&type_user=${typeUser}`
        );
        setCustomerData(response.data.data);
        setTotalResult(response.data.totalResult);
    }, [page, searchKeyword, pageSize, typeUser]);

    useEffect(() => {
        fetchCustomerData();
    }, [page, searchKeyword, pageSize, fetchCustomerData, typeUser]);

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
                    <Popconfirm
                        title="Bạn có chắc chắn muốn xoá?"
                        description="Hành động này không thể hoàn tác."
                        okText="Đồng ý"
                        cancelText="Hủy bỏ"
                        onConfirm={() => {
                            handleDeleteCustomer(record.id);
                        }}
                        onCancel={() => console.log('Đã hủy thao tác.')}
                    >
                        <Button type="default" className='bg-red-500 text-white'>Xoá</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h2 style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px", marginBottom: "20px" }}>
                Danh sách học viên
            </h2>

            <div className="flex justify-between mb-3 bg-white p-3 rounded-lg">

                <div className="flex space-x-3">
                    <button className={`px-2 py-0 ${typeUser == "all" ? "bg-green-500" : "bg-gray-400"} rounded text-white`} onClick={() => setTypeUser("all")}>
                        All
                    </button>

                    <button className={`px-2 py-0 ${typeUser == "free" ? "bg-green-500" : "bg-gray-400"} rounded text-white`} onClick={() => setTypeUser("free")}>
                        Pree
                    </button>
                    <button className={`px-2 py-0 ${typeUser == "pro" ? "bg-green-800" : "bg-gray-400"} rounded text-white`} onClick={() => setTypeUser("pro")}>
                        Pro
                    </button>

                    <button className={`px-2 py-0 rounded ${typeUser == "watched_5_videos" ? "bg-green-500" : "bg-gray-400"} text-white`} onClick={() => setTypeUser("watched_5_videos")}>
                        Học trên 5 video
                    </button>

                    <button className={`px-2 py-0 rounded ${typeUser == "verified" ? "bg-green-500" : "bg-gray-400"} text-white`} onClick={() => setTypeUser("verified")}>
                        Đã xác thực
                    </button>

                    <button className={`px-2 py-0 rounded ${typeUser == "not_verify" ? "bg-green-500" : "bg-gray-400"} text-white`} onClick={() => setTypeUser("not_verify")}>
                        Chưa xác thực
                    </button>

                </div>
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
