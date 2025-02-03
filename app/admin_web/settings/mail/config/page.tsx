'use client'

import React, { useEffect } from "react";
import { Collapse, Input, Form, Button, Row, Col, Select } from "antd";
import axiosInstance from "@/app/_libs/configs/axiosAdminConfig";
import { ResponseData } from "@/app/_libs/types";
import toast from "react-hot-toast";

export default function MailConfig() {

    const { Option } = Select;
    const [formSmtp] = Form.useForm();
    const [formMarketing] = Form.useForm();
    const [emailTest, setEmailTest] = React.useState<string>("");

    const handleTestEmail = async (type:string) => {
        try {
            const res: ResponseData = await axiosInstance.get(`/email/test-send-email?email=${emailTest}&type=${type}`);
            if (res.code == 200) {
                toast.success("Gửi email test thành công");
            } else {
                toast.error("Gửi email test thất bại");
            }
        } catch (error) {
            toast.error("Gửi email test thất bại");
        }
    }

    const SaveSmtpConfig = async () => {
        try {
            const values = await formSmtp.validateFields();
            const res: ResponseData = await axiosInstance.post("/email/update-smtp-config", values);

            if (res.code == 200) {
                toast.success("Lưu cấu hình SMTP thành công");
            } else {
                toast.error("Lưu cấu hình SMTP thất bại");
            }

        } catch (error) {
            toast.error("Lưu cấu hình SMTP thất bại");
        }
        setEmailTest("")
    };

    const SaveEmailMarketing = async () => {
        try {
            const values = await formMarketing.validateFields();
            const res: ResponseData = await axiosInstance.post("/email/update-email-marketing", values);

            if (res.code == 200) {
                toast.success("Lưu cấu hình Email marketing thành công");
            } else {
                toast.error("Lưu cấu hình Email marketing thất bại");
            }
        } catch (error) {
            toast.error("Lưu cấu hình Email marketing thất bại");
        }
    };

    const GetSmtpConfig = async () => {
        const res: ResponseData = await axiosInstance.get("/email/get-smtp-config");
        if (res.code == 200) {
            formSmtp.setFieldsValue(res.data);
        }
    }

    const GetEmailMarketingConfig = async () => {
        const res: ResponseData = await axiosInstance.get("/email/get-email-marketing");
        if (res.code == 200) {
            formMarketing.setFieldsValue(res.data);
        }
    }

    const items = [
        {
            key: "1",
            label: <span className="font-bold text-white">Cấu hình SMTP</span>,
            children: (
                <Form layout="vertical" form={formSmtp}>
                    <Row>
                        <Col span={24} style={{ textAlign: "right" }}>
                            <Button type="primary" onClick={SaveSmtpConfig}>Lưu cấu hình</Button>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Host</label>} name="host">
                                <Input placeholder="Nhập host" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">PORT</label>} name="port">
                                <Input placeholder="Nhập port" type="number" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Protocol</label>} name="protocol">
                                <Select placeholder="Chọn protocol">
                                    <Option value="none">None</Option>
                                    <Option value="SSL">SSL</Option>
                                    <Option value="TSL">TSL</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Authentication</label>}
                                name="authentication">
                                <Select placeholder="Chọn phương thức">
                                    <Option value="none">None</Option>
                                    <Option value="PLAIN">PLAIN</Option>
                                    <Option value="LOGIN">LOGIN</Option>
                                    <Option value="CRAM-MD5">CRAM-MD5</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Username</label>} name="username">
                                <Input placeholder="Nhập username" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Password</label>} name="password">
                                <Input.Password placeholder="Nhập password" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Tên người gửi</label>} name="sender">
                                <Input placeholder="Nhập tên người gửi" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Email</label>} name="email">
                                <Input placeholder="Nhập email" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item label={<label className="font-bold">Unsubscribe Link</label>}
                                name="unsubscribeText">
                                <Input.TextArea placeholder="Unsubscribe Link" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <div>
                                <span className="font-bold">Gửi test email</span>
                                <div className="flex items-center">
                                    <Input placeholder="Nhập email" className="rounded" value={emailTest} onChange={(e)=>{setEmailTest(e.target.value)}}/>
                                    <Button type="primary" className="ml-2" onClick={()=>handleTestEmail('smtp')}>Gửi</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Form>
            ),
        },
        {
            key: "2",
            label: <span className="font-bold text-white">Cấu hình Email Marketing</span>,
            children: (
                <Form layout="vertical" form={formMarketing}>
                    <Row>
                        <Col span={24} style={{ textAlign: "right" }}>
                            <Button type="primary" onClick={SaveEmailMarketing}>Lưu cấu hình</Button>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Host</label>} name="host">
                                <Input placeholder="Nhập host" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">PORT</label>} name="port">
                                <Input placeholder="Nhập port" type="number" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Protocol</label>} name="protocol">
                                <Select placeholder="Chọn protocol">
                                    <Option value="none">None</Option>
                                    <Option value="SSL">SSL</Option>
                                    <Option value="TSL">TSL</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Authentication</label>}
                                name="authentication">
                                <Select placeholder="Chọn phương thức">
                                    <Option value="none">None</Option>
                                    <Option value="PLAIN">PLAIN</Option>
                                    <Option value="LOGIN">LOGIN</Option>
                                    <Option value="CRAM-MD5">CRAM-MD5</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Username</label>} name="username">
                                <Input placeholder="Nhập username" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Password</label>} name="password">
                                <Input.Password placeholder="Nhập password" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Tên người gửi</label>} name="sender">
                                <Input placeholder="Nhập tên người gửi" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Email</label>} name="email">
                                <Input placeholder="Nhập email" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item label={<label className="font-bold">Unsubscribe Link</label>}
                                name="unsubscribeLink">
                                <Input.TextArea placeholder="Unsubscribe Link" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <div>
                                <span className="font-bold">Gửi test email</span>
                                <div className="flex items-center">
                                    <Input placeholder="Nhập email" className="rounded" value={emailTest} onChange={(e)=>{setEmailTest(e.target.value)}}/>
                                    <Button type="primary" className="ml-2" onClick={()=>handleTestEmail('marketing')}>Gửi</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Form>
            ),
        },
    ];


    useEffect(() => {
        GetSmtpConfig();
        GetEmailMarketingConfig();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <Collapse defaultActiveKey={["1"]} items={items} className="collapse_antd" />
        </div>
    );
}
