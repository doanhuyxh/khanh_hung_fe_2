'use client'

import {useEffect, useState} from "react";
import {Table, message, Modal, Form, Input, Button, Select, Popconfirm} from "antd";
import axiosAdminConfig from "@/app/_libs/configs/axiosAdminConfig";
import {TemplateMail} from "@/app/_libs/types";
import EditorReactQuill from "@/app/_components/Editor/ReactQuill";
import ModalViewHtml from "@/app/_components/Modal/ModalViewHtml";
import {unixToDatetime} from "@/app/_libs/utils";

export default function Template() {
    const {Option} = Select;
    const [data, setData] = useState<TemplateMail[]>([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 15;

    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState<TemplateMail | null>(null);
    const [inputSubject, setInputSubject] = useState("");
    const [inputContentTemplate, setInputContentTemplate] = useState("");
    const [showContentTemplate, setShowContentTemplate] = useState("");

    const handleSelectChangeSubject = (value:any) => {
        setInputSubject(inputSubject + value);
    };

    const handleSelectChangeContentTemplate = (value:any) => {
        const updatedContentTemplate = inputContentTemplate + value;
        console.log(updatedContentTemplate);
        setInputContentTemplate(updatedContentTemplate);
        form.setFieldValue("contentTemplate", updatedContentTemplate);
    };

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
        setSelectedTemplate(record);
        form.setFieldsValue(record);
        setInputSubject(record.subject);
        setInputContentTemplate(record.contentTemplate);
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

    const handleModalClose = () => {
        setIsModalVisible(false);
        form.resetFields();
        setSelectedTemplate(null);
    };

    const handleCreateTemplate = () => {
        form.resetFields();
        setSelectedTemplate(null);
        setInputSubject("");
        setInputContentTemplate("");
        setIsModalVisible(true);
    };

    const handleSaveTemplate = async (values: TemplateMail) => {
        try {

            values.contentTemplate = inputContentTemplate;

            if (selectedTemplate?.id) {
                await axiosAdminConfig.post(`/email/create-or-update-template-email`, values);
                message.success("Cập nhật mẫu thành công!");
            } else {

                await axiosAdminConfig.post(`/email/create-or-update-template-email`, values);
                message.success("Tạo mẫu mới thành công!");
            }
            handleModalClose();
             await fetchTemplates(currentPage);
        } catch (error) {
            message.error("Đã xảy ra lỗi khi lưu dữ liệu!");
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
            render: (createdAt: number) => unixToDatetime(createdAt),
        },
        {
            title: "Hành động",
            dataIndex: "id",
            key: "id",
            render: (id: string) => (
                <div>

                    <Button
                        type="link"
                        onClick={() => handleView(id)}
                        style={{marginRight: 8}}
                    >
                        <i className="fa-solid fa-eye"></i> Xem
                    </Button>

                    <Button
                        type="link"
                        onClick={() => handleEdit(id)}
                        style={{marginRight: 8}}
                    >
                        <i className="fa-solid fa-pen-to-square"></i> Sửa
                    </Button>

                    <Popconfirm
                        title="Bạn có chắc chắn muốn xoá?"
                        onConfirm={() => handleDelete(id)}
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
                    onClick={handleCreateTemplate}
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

            <Modal
                width={1200}
                title={selectedTemplate ? "Chỉnh sửa mẫu email" : "Tạo mới mẫu email"}
                open={isModalVisible}
                onCancel={handleModalClose}
                footer={null}
                className={"text-center"}
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSaveTemplate}
                >
                    <Form.Item
                        hidden={true}
                        label="ID"
                        name="id"
                    >
                        <Input disabled className="border border-gray-300 rounded-md"/>
                    </Form.Item>
                    <Form.Item
                        label="Tên mẫu"
                        name="name"
                        rules={[{required: true, message: "Vui lòng nhập tên mẫu!"}]}
                    >
                        <Input className="border border-gray-300 rounded-md p-2"/>
                    </Form.Item>
                    <Form.Item
                        label="Tên người gửi"
                        name="senderName"
                        rules={[{required: true, message: "Vui lòng nhập tên người gửi!"}]}
                    >
                        <Input className="border border-gray-300 rounded-md p-2"/>
                    </Form.Item>
                    <Form.Item
                        label="Tiêu đề"
                        name="subject"
                        rules={[{required: true, message: "Vui lòng nhập tiêu đề!"}]}
                        style={{display: 'flex', flexDirection: 'column', gap: 8}}
                    >
                        <div style={{display: 'flex', alignItems: 'center', margin: "4px 8px", height: "100%"}}>
                            <Select
                                defaultValue=""
                                style={{width: '20%', height: '100%'}}
                                onChange={handleSelectChangeSubject}
                                className=""
                            >
                                <Option value="">Thêm nội dung</Option>
                                <Option value="{{var-email}}">Email</Option>
                                <Option value="{{var-fullname}}">Họ tên</Option>
                                <Option value="{{var-dataofbirth}}">Ngày sinh</Option>
                                <Option value="{{var-refcode}}">Mã khách hàng</Option>
                            </Select>
                        </div>
                        <Input
                            style={{width: '100%'}}
                            placeholder="Nhập tiêu đề"
                            value={inputSubject}
                            className="rounded border border-gray-300 p-2"
                            onChange={(e) => {
                                const newValue = e.target.value;
                                setInputSubject(newValue);
                                form.setFieldValue("subject", newValue);
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Nội dung mẫu"
                        name="contentTemplate"
                        rules={[{required: true, message: "Vui lòng nhập nội dung mẫu!"}]}
                        style={{display: 'flex', flexDirection: 'column', gap: 8}}
                    >
                        <div>
                            <div style={{display: 'flex', alignItems: 'center', margin: "4px 8px", height: "100%"}}>
                                <Select
                                    defaultValue=""
                                    style={{width: '20%', height: '100%'}}
                                    onChange={handleSelectChangeContentTemplate}
                                    className=""
                                >
                                    <Option value="">Thêm nội dung</Option>
                                    <Option value="{{var-email}}">Email</Option>
                                    <Option value="{{var-fullname}}">Họ tên</Option>
                                    <Option value="{{var-dataofbirth}}">Ngày sinh</Option>
                                    <Option value="{{var-refcode}}">Mã khách hàng</Option>
                                </Select>
                            </div>
                            <EditorReactQuill
                                value={inputContentTemplate}
                                onChange={(newValue) => {
                                    setInputContentTemplate(newValue);
                                    // form.setFieldValue("contentTemplate", newValue);
                                }}

                            />
                        </div>

                    </Form.Item>
                    <Form.Item className={"flex justify-end"}>
                        <Button type="primary" htmlType="submit">
                            Lưu
                        </Button>
                        <Button
                            style={{marginLeft: 10}}
                            onClick={handleModalClose}
                        >
                            Hủy
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

            <ModalViewHtml
                isOpen={showContentTemplate.length > 0}
                onClose={() => setShowContentTemplate("")}
                title="Nội dung mẫu">
                <div dangerouslySetInnerHTML={{__html: showContentTemplate}}/>
            </ModalViewHtml>
        </div>
    );
}
