'use client'

import React, { useEffect, useState } from "react";
import { Table, Tag, Space, Button, Modal, Form, Input, Select, TimePicker, DatePicker, Row, Col } from 'antd';
import { ConditionSelected, ResponseData } from "@/app/_libs/types";
import axiosInstance from "@/app/_libs/configs/axiosAdminConfig";
import ConditionSelector from "@/app/_components/ConditionSelectAutoMail";
import moment from "moment";

export default function FormSchedulingEmails({ visible, onClose }: { visible: boolean, onClose: () => void }) {
    const [form] = Form.useForm();
    const [template, setTemplate] = useState([]);
    const [condition, setCondition] = useState([]);
    const [listCondition, setListCondition] = useState<ConditionSelected[]>([]);

    const handleConditionChange = (index: number, data: any) => {
        listCondition[index] = data;
        setListCondition([...listCondition]);
    }

    const handleRemoveCondition = (index: number) => {
        setListCondition(listCondition.filter((_, i) => i !== index));
    }

    const handleAddCondition = () => {
        setListCondition([...listCondition, {
            condition: "",
            subLabel: "",
            label: "",
            value: ""
        }]);
    }

    const handleSubmit = (values: any) => {


        const data = {
            id: values.id,
            name: values.name,
            time: values.time.format("HH:mm"),
            date: values.date ? values.date.format("YYYY-MM-DD") : null,
            templateMailId: values.selectOption,
            condition: JSON.stringify(listCondition),
            isActived: false
        }

        console.log(values);

        axiosInstance.post("/email/create-or-update-script-auto-scheduling-emails", data)
            .then((res: any) => {
                if (res.code === 200) {
                    onClose();
                    form.resetFields();
                }
            })

        onClose();
        form.resetFields();
        window.location.reload();
    };

    useEffect(() => {
        axiosInstance.get("/email/get-all-template-email?page=1&pageSize=300")
            .then((res: any) => {
                if (res.code === 200) {
                    setTemplate(res.data);
                }
            })

        axiosInstance
            .get("/email/get-list-condition")
            .then((response) => {
                response.data.forEach((item) => {
                    item.conditionKey = JSON.parse(item.conditionKey);
                });
                setCondition(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);


    useEffect(() => {
        const initData = sessionStorage.getItem("data-email");
        const data = initData ? JSON.parse(initData) : null;

        if (initData != null) {
            form.resetFields();
            form.setFieldsValue({
                id: data.id,
                name: data.name,
                time: moment(data.time, "HH:mm"),
                date: data.date ? moment(data.date, "YYYY-MM-DD") : null,
                selectOption: data.templateMailId,
            });

            if (data.condition) {
                setListCondition(JSON.parse(data.condition));
            }

            sessionStorage.removeItem("data-email")
        }

    }, [visible, form])

    return (
        <Modal
            open={visible}
            width={1400}
            title={"Thêm mới"}
            onCancel={onClose}
            onOk={() => {
                form
                    .validateFields()
                    .then(handleSubmit)
                    .catch((info) => console.log('Validate Failed:', info));
            }}
        >
            <Form
                form={form}
                layout="vertical"
                initialValues={{
                    name: '',
                    time: moment(),
                    date: moment(),
                    selectOption: '',
                }}
            >
                <Form.Item
                    name="id"
                    hidden
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Tên Auto Mail"
                    name="name"
                    rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
                >
                    <Input placeholder="Nhập tên" className="rounded" />
                </Form.Item>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Giờ"
                            name="time"
                            rules={[{ required: true, message: 'Vui lòng chọn giờ!' }]}
                        >
                            <TimePicker format="HH:mm" style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Ngày (để trống nếu muốn chạy hàng ngày)"
                            name="date"
                        >
                            <DatePicker format="YYYY-MM-DD" style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item
                    label="Lựa chọn mẫu template"
                    name="selectOption"
                    rules={[{ required: true, message: 'Vui lòng chọn một giá trị!' }]}
                >
                    <Select placeholder="Chọn một giá trị">
                        {template.map((item: any) => (
                            <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>

                <div className="w-full h-fit mt-3 mb-10">
                    <label className="w-full text-center flex justify-between">
                        <span className="font-bold">Điều kiện</span>
                        <span className="bg-green-400 px-2 py-1 rounded text-white my-4 cursor-pointer"
                            onClick={handleAddCondition}>Thêm điều kiện</span>
                    </label>
                    <div className="flex flex-col gap-3 my-3">
                        {
                            listCondition.map((item, index) =>
                                <div key={index} className="flex justify-start items-center">
                                    <ConditionSelector
                                        intData={item}
                                        onChange={(data: ConditionSelected) => handleConditionChange(index, data)}
                                        data={condition} />
                                    <button
                                        className="text-red-500 px-2 py-1 rounded hover:bg-red-500 hover:text-white transition duration-300"
                                        onClick={() => handleRemoveCondition(index)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            )}
                    </div>
                </div>
            </Form>
        </Modal>
    )
}
