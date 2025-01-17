'use client'

import { useEffect, useState } from "react";
import { Table, message, Button, Popconfirm } from "antd";
import axiosAdminConfig from "@/app/_libs/configs/axiosAdminConfig";
import { TemplateMail } from "@/app/_libs/types";

import AddTemplate from "./_components/add_template";

import ModalViewHtml from "@/app/_components/Modal/ModalViewHtml";
import { formatTime } from "@/app/_libs/utils";

export default function Template() {
    const [data, setData] = useState<TemplateMail[]>([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 15;

    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [showContentTemplate, setShowContentTemplate] = useState("");



    const fetchTemplates = async (page: number) => {
        setLoading(true);
        try {
            const response: any = await axiosAdminConfig.get(`/email/get-all-template-email?page=${page}&pageSize=${pageSize}`);

            if (response.code === 200) {
                setData(response.data);
                setTotal(response.data.length);
            } else {
                message.error("Lấy dữ liệu thất bại!");
            }
        } catch (error) {
            message.error("Đã xảy ra lỗi khi lấy dữ liệu!");
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (id: string) => {
        const record = data.find((item) => item.id === id);
        if (!record) {
            message.error("Không tìm thấy mẫu!");
            return;
        }
        sessionStorage.setItem("templateMailData", JSON.stringify(record));
        setIsModalVisible(true);
    };

    const handleView = (id: string) => {
        const record = data.find((item) => item.id === id);
        setShowContentTemplate(record?.contentTemplate || "");
    }

    const handleDelete = async (id: string) => {
        try {
            await axiosAdminConfig.get(`/email/delete-template-email?id=${id}`);
            message.success("Xoá mẫu thành công!");
            await fetchTemplates(currentPage);
        } catch (error) {
            message.error("Đã xảy ra lỗi khi xoá mẫu!");
        }
    };


    useEffect(() => {
        document.title = "Mẫu gửi mail";
        fetchTemplates(currentPage);
    }, [currentPage]);

    const columns = [
        {
            title: "Tên mẫu",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Tên người gửi",
            dataIndex: "senderName",
            key: "senderName",
        },
        {
            title: "Tiêu đề",
            dataIndex: "subject",
            key: "subject",
        },
        {
            title: "Ngày tạo",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (createdAt: string) => formatTime(createdAt),
        },
        {
            title: "Hành động",
            dataIndex: "id",
            key: "id",
            render: (_, record) => (
                <div>

                    <Button
                        type="link"
                        onClick={() => handleView(record.id)}
                        style={{ marginRight: 8 }}
                    >
                        <i className="fa-solid fa-eye"></i> Xem
                    </Button>

                    <Button
                        type="link"
                        onClick={() => handleEdit(record.id)}
                        style={{ marginRight: 8 }}
                    >
                        <i className="fa-solid fa-pen-to-square"></i> Sửa
                    </Button>

                    <Popconfirm
                        title="Bạn có chắc chắn muốn xoá?"
                        onConfirm={() => handleDelete(record.id)}
                        okText="Có"
                        cancelText="Không"
                    >
                        <Button type="link" danger>
                            <i className="fa-solid fa-trash"></i>Xoá
                        </Button>
                    </Popconfirm>
                </div>
            )
        },

    ];

    return (
        <div className="w-full">
            <div className="flex justify-between items-center py-2 my-1 px-2 bg-white rounded">
                <h1 className="text-2xl font-bold">Danh sách mẫu gửi mail</h1>
                <span
                    className="bg-green-400 px-2 py-1 rounded-lg text-white cursor-pointer"
                    onClick={()=>setIsModalVisible(true)}
                >
                    <i className="fa-solid fa-plus"></i> Tạo mới
                </span>
            </div>

            <Table
                columns={columns}
                dataSource={data}
                rowKey={(record) => record.id}
                pagination={{
                    current: currentPage,
                    pageSize,
                    total,
                    onChange: (page) => setCurrentPage(page),
                }}
                loading={loading}
            />

            <AddTemplate openModal={isModalVisible} setOpenModal={() => setIsModalVisible(!isModalVisible)} reloadPage={() => fetchTemplates(1)} />

            <ModalViewHtml
                isOpen={showContentTemplate.length > 0}
                onClose={() => setShowContentTemplate("")}
                title="Nội dung mẫu">
                <div dangerouslySetInnerHTML={{ __html: showContentTemplate }} />
            </ModalViewHtml>
        </div>
    );
}
