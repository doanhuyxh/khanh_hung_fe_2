'use client';

import React, {useEffect, useState} from "react";
import {Button, Form, Input, Modal, Select, Switch} from "antd";
import axiosInstance from "@/app/_libs/configs/axiosAdminConfig";
import {ConditionSelected, ResponseData, ScriptAutoEmailMarketing} from "@/app/_libs/types";
import ConditionSelector from "@/app/_components/ConditionSelectAutoMail";
import toast from "react-hot-toast";

const {TextArea} = Input;

export default function FormScript({open, onClose}: { open: boolean, onClose:()=>void }) {
    
    const [form_data] = Form.useForm();
    const [conditions, setConditions] = useState([]);
    const [listCondition, setListCondition] = useState<ConditionSelected[]>([]);

    const [data, setData] = useState<ScriptAutoEmailMarketing>({
        id: "",
        name: "",
        description: "",
        condition: "",
        sequentially: false,
        listSchedulingEmails: []
    })

    const handleAddCondition = () => {
        setListCondition([...listCondition, {
            condition: "",
            subLabel: "",
            label: "",
            value: ""
        }]);
    }

    const handleRemoveCondition = (index: number) => {
        setListCondition(listCondition.filter((_, i) => i !== index));
    }

    const handleConditionChange = (index: number, data: any) => {
        listCondition[index] = data;
        setListCondition([...listCondition]);
    }

    const handleSaveScript = async (values: any) => {
        
        const save_data = {
            id: data.id,
            name: values.name,
            description: values.description||"",
            sequentially: values.sequentially,
            condition: JSON.stringify(listCondition),
            listSchedulingEmails: []
        }

        const res: ResponseData = await axiosInstance.post("/email/create-or-update-script-auto-email-marketing", save_data)
        if (res.code == 200) {
            onClose();
            toast.success("Lưu kịch bản thành công!");
        }

    }


    useEffect(() => {
        axiosInstance
            .get("/email/get-list-condition")
            .then((response) => {
                response.data.forEach((item) => {
                    item.conditionKey = JSON.parse(item.conditionKey);
                });
                setConditions(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    useEffect(() => {
        form_data.resetFields();
        const initData = sessionStorage.getItem("data-script");
        const data = initData ? JSON.parse(initData) : null;

        if (initData != null) {
            form_data.setFieldsValue({
                name: data.name,
                description: data.description,
                sequentially: data.sequentially
            });

            if (data.condition) {

                setListCondition(JSON.parse(data.condition));
            }
            setData(data);
            sessionStorage.removeItem("data-script")
        }
    }, [open]);


    return (
        <Modal
            width={1200}
            open={open}
            onCancel={onClose}
            title={data?.id ? "Chỉnh sửa kịch bản" : "Thêm kịch bản"}
            footer={null}
        >
            <Form
                form={form_data}
                layout="vertical"
                onFinish={handleSaveScript}
            >
                <Form.Item
                    label="Tên kịch bản"
                    name="name"
                    rules={[{required: true, message: "Vui lòng nhập tên kịch bản!"}]}
                >
                    <Input placeholder="Nhập tên kịch bản" className="rounded"/>
                </Form.Item>

                <Form.Item
                    label="Gửi theo thứ tự"
                    name="sequentially"
                    valuePropName="checked"
                >
                    <Switch/>
                </Form.Item>

                <Form.Item label="Mô tả" name="description">
                    <TextArea rows={4} placeholder="Nhập mô tả chi tiết"/>
                </Form.Item>

                <div className="w-full h-fit">
                    <label className="w-full text-center flex justify-between">
                        <span className="font-bold">Điều kiện</span>
                        <span className="bg-green-400 px-2 py-1 rounded text-white my-4 cursor-pointer"
                              onClick={handleAddCondition}>Thêm điều kiện</span>
                    </label>

                    <div className="flex flex-col gap-3 my-3">
                        {
                            listCondition.map((item, index) =>
                                <div key={index} className="flex justify-between items-center">
                                    <ConditionSelector
                                        intData={item}
                                        onChange={(data: ConditionSelected) => handleConditionChange(index, data)}
                                        data={conditions}/>
                                    <Button
                                        type="primary"
                                        danger
                                        onClick={() => handleRemoveCondition(index)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </Button>
                                </div>)
                        }
                    </div>
                </div>

                <Form.Item className="flex justify-end">
                    <Button type="primary" htmlType="submit">
                        Lưu kịch bản
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}
