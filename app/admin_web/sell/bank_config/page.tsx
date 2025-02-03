'use client'

import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Card, InputNumber } from 'antd';
import axiosInstance from '@/app/_libs/configs/axiosAdminConfig';
import toast from 'react-hot-toast';

export default function BankConfig() {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log('Thông tin ngân hàng:', values);

        const formData = new FormData();
        formData.append('bankName', values.bankName);
        formData.append('accountNumber', values.accountNumber);
        formData.append('accountHolder', values.accountHolder);
        formData.append('balance', values.balance);
        formData.append('old_balance', values.old_balance);

        axiosInstance.post('/settings/update-web-config', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                toast.success('Cập nhật thông tin thanh toán thành công!', {
                    duration: 3000,
                    position: 'top-right',
                    style: {
                        backgroundColor: '#00FF00',
                        color: '#000'
                    }
                });
            })
            .catch(error => {
                toast.success('Cập nhật thông tin thanh toán thành công!', {
                    duration: 3000,
                    position: 'top-right',
                    style: {
                        backgroundColor: '#FF0000',
                        color: '#000'
                    }
                });
            });
    };

    useEffect(() => {
        axiosInstance.get("/settings/get-bank-config")
            .then(response => {
                const bankConfig = response.data;
                form.setFieldsValue({
                    bankName: bankConfig.bankName,
                    accountNumber: bankConfig.accountNumber,
                    accountHolder: bankConfig.accountHolder,
                    balance: bankConfig.balance,
                    old_balance: bankConfig.old_balance,
                });
            })
            .catch(error => {
                console.log('Lỗi:', error);
            });

        return () => {
            form.resetFields();
        }
    }, [form]);

    return (
        <Card title={<p className='text-white text-center'>Cập nhật thông tin thanh toán</p>} style={{ maxWidth: 800, margin: '0 auto', marginTop: 50, padding: 20 }}>
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                initialValues={{
                    bankName: '',
                    accountNumber: '',
                    accountHolder: '',
                }}
            >
                <Form.Item
                    label="Tên ngân hàng"
                    name="bankName"
                    rules={[
                        { required: true, message: 'Vui lòng nhập tên ngân hàng!' },
                    ]}
                >
                    <Input placeholder="Nhập tên ngân hàng" />
                </Form.Item>

                <Form.Item
                    label="Số tài khoản"
                    name="accountNumber"
                    rules={[
                        { required: true, message: 'Vui lòng nhập số tài khoản!' },
                        { pattern: /^\d+$/, message: 'Số tài khoản phải là số!' },
                    ]}
                >
                    <Input placeholder="Nhập số tài khoản" />
                </Form.Item>

                <Form.Item
                    label="Chủ tài khoản"
                    name="accountHolder"
                    rules={[
                        { required: true, message: 'Vui lòng nhập tên chủ tài khoản!' },
                    ]}
                >
                    <Input placeholder="Nhập tên chủ tài khoản" />
                </Form.Item>

                <Form.Item
                    label="Số tiền thanh toán khoá học gốc"
                    name="old_balance"
                    rules={[
                        { required: true, message: 'Vui lòng nhập số tiền!' },
                    ]}
                >
                   <InputNumber
                        style={{ width: '100%' }}
                        placeholder="Nhập số tiền"
                        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={(value) => parseFloat(value?.replace(/₫\s?|,/g, '') || '0') as 0}
                        min={0} />
                </Form.Item>

                <Form.Item
                    label="Số tiền thanh toán khoá học thanh toán"
                    name="balance"
                    rules={[
                        { required: true, message: 'Vui lòng nhập số tiền!' },
                    ]}
                >
                    <InputNumber
                        style={{ width: '100%' }}
                        placeholder="Nhập số tiền"
                        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={(value) => parseFloat(value?.replace(/₫\s?|,/g, '') || '0') as 0}
                        min={0} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className='float-right'>
                        Lưu thông tin
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
}
