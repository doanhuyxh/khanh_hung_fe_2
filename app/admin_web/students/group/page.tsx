"use client";

import React, {useEffect, useState} from "react";
import {Table, Button, Space, Modal, Form, Input, Tooltip, Avatar, Checkbox, Select, DatePicker} from "antd";
import {GroupUser, ResponseData} from "@/app/_libs/types";
import axiosInstance from "@/app/_libs/configs/axiosAdminConfig";
import {unixToDatetime} from "@/app/_libs/utils";
import {toast} from "react-hot-toast";
import moment from "moment";
import dayjs from "dayjs";

const GroupStudent = () => {

    const [userInfo, setUserInfo] = useState<any[]>([])

    const [listMailTemplate, setListMailTemplate] = useState<any[]>([])

    const [groupStudent, setGroupStudent] = useState<GroupUser[]>([]);
    const [isOpenModalGroupName, setIsOpenModalGroupName] = useState(false);
    const [groupFormData, setGroupFormData] = useState<GroupUser | null>(null);

    const [userInfoSearch, setUserInfoSearch] = useState<any[]>([])

    const [isOpenedModalAddStudent, setIsOpenedModalAddStudent] = useState(false);
    const [isOpenedModalViewStudent, setIsOpenedModalViewStudent] = useState(false);
    const [groupStudentId, setGroupStudentId] = useState("");
    const [userInGroup, setUserInGroup] = useState<any[]>([]);
    const [listUserIdSelected, setListUserIdSelected] = useState<string[]>([])

    const [isOpenedModalSendMail, setIsOpenedModalSendMail] = useState(false);

    const [formGroup] = Form.useForm();
    const [formSendMail] = Form.useForm();
    const { Option } = Select;

    const columns = [
        {
            title: "Tên nhóm",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Số học viên",
            dataIndex: "numberUser",
            key: "numberUser",
        },
        {
            title: "Hành động",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <Tooltip title="Sửa tên nhóm">
                        <Button type="link" onClick={() => handleEdit(record)}>
                            <span className="px-2 py-1 rounded bg-blue-500 text-white">
                                <i className="fa-solid fa-pen-to-square"></i>
                            </span>
                        </Button>
                    </Tooltip>
                    <Tooltip title="Gửi mail">
                        <Button type="link" onClick={() => handleOpenModalSendMail(record.id)}>
                            <span className="px-2 py-1 rounded bg-green-500 text-white">
                            <i className="fa-regular fa-envelope"></i>
                                </span>
                        </Button>
                    </Tooltip>
                    <Tooltip title="Thêm học viên">
                        <Button type="link" onClick={() => handleViewStudent(record.id)}>
                            <span className="px-2 py-1 rounded bg-violet-500 text-white">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </span>
                        </Button>
                    </Tooltip>
                    <Tooltip title="Xóa nhóm">
                        <Button type="link" danger onClick={() => handleDelete(record.id)}>
                            <span className="px-2 py-1 rounded bg-red-500 text-white">
                                <i className="fa-solid fa-trash"></i>
                            </span>
                        </Button>
                    </Tooltip>
                </Space>
            ),
        },
    ];

    const columnsAddInfo = [
        {
            title: (
                <Checkbox
                    onChange={(e) => {
                        if (e.target.checked) {
                            const allIds = userInfo.map((user) => user.id); // userInGroup là dataSource
                            setListUserIdSelected(allIds);
                        } else {
                            setListUserIdSelected([]);
                        }
                    }}
                    checked={listUserIdSelected.length === userInfoSearch.length && userInfoSearch.length > 0}
                    indeterminate={listUserIdSelected.length > 0 && listUserIdSelected.length < userInfoSearch.length}
                />
            ),
            render: (_, record) => {
                return (
                    <span
                        className="rounded cursor-pointer"
                        onClick={() => {
                            const check: boolean = listUserIdSelected.includes(record.id);
                            if (check) {
                                const newList: string[] = listUserIdSelected.filter((item) => item !== record.id);
                                setListUserIdSelected(newList);
                            } else {
                                setListUserIdSelected([...listUserIdSelected, record.id]);
                            }
                        }}
                    >
                    {listUserIdSelected.includes(record.id) ? (
                        <i className="fa-solid fa-check"></i>
                    ) : (
                        <i className="fa-solid fa-plus"></i>
                    )}
                </span>
                );
            },
        },
        {
            title: "Avatar",
            dataIndex: "avatar",
            key: "avatar",
            render: (src) => <Avatar src={src}/>,
        },
        {
            title: "Tên học viên",
            dataIndex: "name",
            render: (_, record) => <span>{record.firstName} {record.lastName}</span>
        },
        {
            title: "Email (Tài khoản)",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Ngày đăng ký",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (_, record) => <span>{unixToDatetime(record.createdAt)}</span>
        },
        {
            title: "Loại học viên",
            dataIndex: "memberType",
            key: "memberType",
            render: (_, record) => <span>{record.memberType == 'free' ? "Free" : "Pro"}</span>
        },
    ];

    const columnsInfo = [
        {
            title: "Avatar",
            dataIndex: "avatar",
            key: "avatar",
            render: (src) => <Avatar src={src}/>,
        },
        {
            title: "Tên học viên",
            dataIndex: "name",
            render: (_, record) => <span>{record.firstName} {record.lastName}</span>
        },
        {
            title: "Email (Tài khoản)",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Ngày đăng ký",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (_, record) => <span>{unixToDatetime(record.createdAt)}</span>
        },
        {
            title: "Loại học viên",
            dataIndex: "memberType",
            key: "memberType",
            render: (_, record) => <span>{record.memberType == 'free' ? "Free" : "Pro"}</span>
        },
        {
            title: "Hành động",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <Tooltip title="Xóa khỏi nhóm">
                        <Button type="link" danger onClick={() => handleRemoveStudent(record.id)}>
                            <span className="px-2 py-1 rounded bg-red-500 text-white">
                                <i className="fa-solid fa-trash"></i>
                            </span>
                        </Button>
                    </Tooltip>
                </Space>
            ),
        },
    ];

    const handleEdit = (record) => {
        formGroup.setFieldsValue({
            id: record.id,
            name: record.name
        });
        setGroupFormData({
            name: record.name,
            numberUser: record.numberUser,
            id: record.id,
            key: record.id
        });
        setIsOpenModalGroupName(true);
    };

    const handleDelete = async (id) => {
        const res: ResponseData = await axiosInstance.get(`/group-user/delete-group-user?id=${id}`);
        if (res.code == 200) {
            toast.success("Xóa nhóm thành công");
            await getGroupStudent();
        } else {
            toast.error("Xóa nhóm không thành công");
        }
    };

    const handleAddGroup = () => {
        formGroup.resetFields();
        setGroupFormData({
            name: "",
            numberUser: 0,
            id: "",
            key: ""
        })
        setIsOpenModalGroupName(true);
    };

    const handleOpenModalSendMail = (key) => {
        setGroupStudentId(key)
        setIsOpenedModalSendMail(true);
    };

    const handleOpenModalSendMailToGroup = async (values) => {
        let time = "";
        if (values.dateTime) {
            time = moment(values.dateTime.$d).format("YYYY-MM-DD HH:mm:ss");
        }else{
            time = moment().format("YYYY-MM-DD HH:mm:ss");
        }

        const jsonData = {
            groupId: groupStudentId,
            dateTime: time,
            emailId: values.emailType
        }

        try {
            const res:ResponseData = await axiosInstance.post("/email/send-email-to-group", jsonData)
            if (res.code == 200) {
                toast.success("Gửi mail thành công")
                setIsOpenedModalSendMail(false)
            } else {
                toast.error("Gửi mail không thành công")
            }
        } catch (error) {
            toast.error("Gửi mail không thành công")
        }
    }

    const handleSaveGroupName = async () => {
        try {
            setIsOpenModalGroupName(false);
            const values = await formGroup.validateFields();
            const res: ResponseData = await axiosInstance.post("/group-user/create-or-update-group-user", {
                id: groupFormData?.id,
                name: values.name
            });

            if (res.code === 200) {
                await getGroupStudent();
                toast.success("Lưu tên nhóm thành công");
            } else {
                toast.error("Lưu tên nhóm không thành công");
            }

        } catch (error) {
            toast.error("Lưu tên nhóm không thành công");
        }
    }

    const handleViewStudent = async (id) => {
        setGroupStudentId(id)
        setIsOpenedModalViewStudent(true)
        await getStudentInGroupId(id)
    };

    const handleAddStudent = () => {
        setListUserIdSelected([])

        const newUserInfo = userInfo.filter((item) => {
            return !userInGroup.find((user) => user.userId == item.id)
        })

        setUserInfoSearch(newUserInfo)

        setIsOpenedModalViewStudent(false)
        setIsOpenedModalAddStudent(true)
    }

    const handleRemoveStudent = async (id) => {
        const res: ResponseData = await axiosInstance.get(`/group-user/remove-user-from-group?id=${id}`)
        if (res.code == 200) {
            toast.success("Xóa học viên khỏi nhóm thành công")
            await getStudentInGroupId(groupStudentId)
        } else {
            toast.error("Xóa học viên khỏi nhóm không thành công")
        }
    }

    const handleSaveUserInGroup = async () => {
        console.log(listUserIdSelected)
        console.log("groupStudentId", groupStudentId)

        const res: ResponseData = await axiosInstance.post(`/group-user/add-user-to-group`, {
            groupId: groupStudentId,
            userIds: listUserIdSelected
        })

        if (res.code == 200) {

            toast.success("Thêm học viên vào nhóm thành công")
        } else {
            toast.error("Thêm học viên vào nhóm không thành công")
        }
        await getStudentInGroupId(groupStudentId)
        setIsOpenedModalViewStudent(true)
        setIsOpenedModalAddStudent(false)
    }

    const getStudentInGroupId = async (id) => {
        const res: ResponseData = await axiosInstance.get(`/group-user/get-all-user-in-group-by-group-id?id=${id}`)
        if (res.code == 200) {
            res.data.forEach((item: any, index: number) => {
                item.key = item.id;
                item.avatar = userInfo.find((user) => user.id == item.userId)?.avatar
                item.email = userInfo.find((user) => user.id == item.userId)?.email
                item.firstName = userInfo.find((user) => user.id == item.userId)?.firstName
                item.lastName = userInfo.find((user) => user.id == item.userId)?.lastName
                item.createdAt = userInfo.find((user) => user.id == item.userId)?.createdAt
                item.memberType = userInfo.find((user) => user.id == item.userId)?.memberType
            })
            setUserInGroup(res.data)
        }
    }

    const getGroupStudent = async () => {
        const res: ResponseData = await axiosInstance.get(`/group-user/get-all-group-user?page=1&pageSize=1000`);
        if (res.code === 200) {
            res.data.forEach((item: GroupUser, index: number) => {
                item.key = item.id;
            });
            setGroupStudent(res.data);
        }
    }

    const getAllStudent = async () => {
        const res: ResponseData = await axiosInstance.get("/staff_manager/get-all-customer?page=1&pageSize=100000")
        if (res.code == 200) {
            setUserInfo(res.data)
            setUserInfoSearch(res.data)
        }
    }

    useEffect(() => {
        document.title = "Nhóm học viên";
        getGroupStudent();
        getAllStudent();

        axiosInstance.get("/email/get-all-template-email?page=1&pageSize=500")
            .then((res: any) => {
                if (res.code == 200) {
                    setListMailTemplate(res.data)
                }
            })
            .catch((error) => {
                toast.error("Lấy danh sách template mail không thành công")
            })


    }, []);

    return (
        <div className="w-full my-10 mx-4 p-3 bg-white">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl text-black-2 font-bold">Nhóm học viên</h3>
                <Button
                    type="primary"
                    icon={<i className="fa fa-plus"/>}
                    onClick={handleAddGroup}
                >
                    Thêm nhóm
                </Button>
            </div>
            <Table dataSource={groupStudent} columns={columns} pagination={{pageSize: 5}} className=""/>

            <Modal
                title={groupFormData?.id ? "Sửa tên nhóm" : "Thêm nhóm mới"}
                open={isOpenModalGroupName}
                onOk={handleSaveGroupName}
                onCancel={() => setIsOpenModalGroupName(false)}
                okText="Lưu"
                cancelText="Hủy"
            >
                <Form form={formGroup} layout="vertical">
                    <Form.Item
                        hidden={true}
                        name="id"
                        label="Mã nhóm"
                    >
                        <Input placeholder="Nhập mã nhóm"/>
                    </Form.Item>
                    <Form.Item
                        name="name"
                        label="Tên nhóm"
                        rules={[{required: true, message: "Vui lòng nhập tên nhóm!"}]}
                    >
                        <Input placeholder="Nhập tên nhóm mới"/>
                    </Form.Item>
                </Form>
            </Modal>

            <Modal
                title="Danh sách học viên"
                width={1200}
                open={isOpenedModalViewStudent}
                onCancel={() => setIsOpenedModalViewStudent(false)}
                footer={null}>
                <div className="w-full h-fit my-4 flex justify-end">
                    <Button type="primary" icon={<i className="fa fa-plus"/>} onClick={handleAddStudent}>
                        Thêm học viên
                    </Button>
                </div>
                <Table
                    columns={columnsInfo}
                    dataSource={userInGroup}
                    rowKey="id"
                    scroll={{x: "100%", y: 400}}
                    pagination={{pageSize: 5}}
                />
            </Modal>


            <Modal
                title="Thêm học viên"
                width={1600}
                open={isOpenedModalAddStudent}
                onCancel={() => setIsOpenedModalAddStudent(false)}
                onOk={handleSaveUserInGroup}
                okText="Lưu"
                cancelText="Hủy"
            >
                <div className="w-full h-fit my-6 flex justify-end">
                    <Input placeholder={"Tìm kiếm"} onChange={(e) => {
                        const value = e.target.value;
                        const result = userInfo.filter((item) => {
                            return item.firstName.toLowerCase().includes(value.toLowerCase()) || item.lastName.toLowerCase().includes(value.toLowerCase())
                        })
                        setUserInfoSearch(result)
                    }}/>
                </div>
                <Table
                    columns={columnsAddInfo}
                    dataSource={userInfoSearch}
                    rowKey="id"
                    scroll={{x: "100%", y: 400}}
                    pagination={{pageSize: 5}}
                />
            </Modal>


            <Modal
                title={`Gửi mail nhóm: ${groupStudent.find((item) => item.id === groupStudentId)?.name}`}
                width={600}
                open={isOpenedModalSendMail}
                onCancel={() => setIsOpenedModalSendMail(false)}
                footer={null}
            >
                <Form
                    layout="vertical"
                    onFinish={handleOpenModalSendMailToGroup}
                >
                    <Form.Item
                        label="Loại email"
                        name="emailType"
                        rules={[{ required: true, message: "Vui lòng chọn loại email!" }]}
                    >
                        <Select placeholder="Chọn loại email">
                            {
                                listMailTemplate.map((item) => {
                                    return <Option key={item.id} value={item.id}>{item.name}</Option>
                                })
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Chọn thời gian (không chọn để gửi ngay)"
                        name="dateTime"
                        rules={[{ required: false, message: "Vui lòng chọn thời gian!" }]}
                    >
                        <DatePicker
                            format="YYYY-MM-DD HH:mm"
                            showTime={{
                                defaultValue: dayjs("00:00", "HH:mm"),
                            }}
                            style={{ width: "100%" }}
                        />
                    </Form.Item>

                    <Form.Item className="flex justify-end">
                        <Button type="primary" htmlType="submit">
                            Gửi mail
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default GroupStudent;
