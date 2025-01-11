'use client'

import React from "react";
import {Collapse, Input, Form, Button, Row, Col, Select} from "antd";

export default function MailConfig() {

    const {Option} = Select;

    const items = [
        {
            key: "1",
            label: <span className="font-bold text-white">Cấu hình SMTP</span>,
            children: (
                <Form layout="vertical">
                    <Row>
                        <Col span={24} style={{textAlign: "right"}}>
                            <Button type="primary">Lưu cấu hình</Button>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Host</label>} name="host">
                                <Input placeholder="Nhập host"/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">PORT</label>} name="port">
                                <Input placeholder="Nhập port" type="number"/>
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
                                <Input placeholder="Nhập username"/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Password</label>} name="password">
                                <Input.Password placeholder="Nhập password"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Tên người gửi</label>} name="senderName">
                                <Input placeholder="Nhập tên người gửi"/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Email</label>} name="email">
                                <Input placeholder="Nhập email"/>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            ),
        },
        {
            key: "2",
            label: <span className="font-bold text-white">Cấu hình Email Marketing</span>,
            children: (
                <Form layout="vertical">
                    <Row>
                        <Col span={24} style={{textAlign: "right"}}>
                            <Button type="primary">Lưu cấu hình</Button>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Host</label>} name="host">
                                <Input placeholder="Nhập host"/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">PORT</label>} name="port">
                                <Input placeholder="Nhập port" type="number"/>
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
                                <Input placeholder="Nhập username"/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Password</label>} name="password">
                                <Input.Password placeholder="Nhập password"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Tên người gửi</label>} name="senderName">
                                <Input placeholder="Nhập tên người gửi"/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label={<label className="font-bold">Email</label>} name="email">
                                <Input placeholder="Nhập email"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item label={<label className="font-bold">Unsubscribe Link</label>} name="UnsubscribeLink">
                                <Input.TextArea placeholder="Unsubscribe Link"/>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            ),
        },
    ];

    return (
        <div style={{padding: "20px"}}>
            <Collapse defaultActiveKey={["1"]} items={items} className="bg-blue-500"/>
        </div>
    );
}
