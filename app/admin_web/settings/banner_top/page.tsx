'use client';

import { useState, useEffect } from 'react';
import { Table, Button, Modal, Input, Select, Space, notification } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axiosInstance from '@/app/_libs/configs/axiosAdminConfig';
import { BannerHeaderTop } from '../../../_libs/types';

const { Option } = Select;

export default function BannerTop() {
    const [banners, setBanners] = useState<BannerHeaderTop[]>([]);
    const [newBanner, setNewBanner] = useState<BannerHeaderTop>({ id: '', content: '', status: 'active' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchText, setSearchText] = useState('');

    const getData = async () => {
        try {
            const res = await axiosInstance.get('/settings/get-banner-top');
            setBanners(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleAddOrUpdate = (id: string) => {
        if (id) {
            const banner = banners.find((i) => i.id === id);
            if (banner) setNewBanner(banner);
        } else {
            setNewBanner({ id: '', content: '', status: 'active' });
        }
        setIsModalOpen(true);
    };

    const handleSave = async () => {
        try {
            await axiosInstance.post('/settings/create-or-update-banner-top', newBanner);
            notification.success({ message: 'Thành công', description: 'Lưu thông tin thành công!' });
            setIsModalOpen(false);
            getData();
        } catch (error) {
            console.error(error);
            notification.error({ message: 'Lỗi', description: 'Không thể lưu thông tin!' });
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await axiosInstance.get(`/settings/delete-banner-top?id=${id}`);
            notification.success({ message: 'Thành công', description: 'Xóa thông tin thành công!' });
            getData();
        } catch (error) {
            console.error(error);
            notification.error({ message: 'Lỗi', description: 'Không thể xóa thông tin!' });
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const filteredBanners = banners.filter((banner) =>
        banner.content.toLowerCase().includes(searchText.toLowerCase())
    );

    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            render: (_: any, __: any, index: number) => index + 1,
        },
        {
            title: 'Nội dung',
            dataIndex: 'content',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            render: (status: string) => (status === 'active' ? 'Hoạt động' : 'Tắt'),
        },
        {
            title: 'Hành động',
            dataIndex: 'actions',
            render: (_: any, record: BannerHeaderTop) => (
                <Space>
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => handleAddOrUpdate(record.id)}
                    />
                    <Button
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete(record.id)}
                    />
                </Space>
            ),
        },
    ];

    return (
        <div className="w-full p-4">
            <h2 className="text-center text-2xl font-semibold mb-4">Quản lý thông báo banner trên cùng</h2>

            <div className="flex justify-between items-center mb-4">
                <Input
                    className="rounded"
                    placeholder="Tìm kiếm..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    style={{ width: '300px' }}
                />

                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={() => handleAddOrUpdate('')}
                >
                    Thêm mới
                </Button>
            </div>

            <Table
                dataSource={filteredBanners}
                columns={columns}
                rowKey="id"
                bordered
            />

            <Modal
                title={newBanner.id ? 'Cập nhật thông báo' : 'Tạo thông báo mới'}
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                onOk={handleSave}
            >
                <div className="mb-4">
                    <label className="font-bold">Nội dung</label>
                    <Input
                        value={newBanner.content}
                        className="rounded mt-3"
                        onChange={(e) => setNewBanner({ ...newBanner, content: e.target.value })}
                        placeholder="Nhập nội dung..."
                    />
                </div>

                <div>
                    <label className="font-bold">Trạng thái</label>
                    <Select
                        className="my-3"
                        value={newBanner.status}
                        onChange={(value) => setNewBanner({ ...newBanner, status: value })}
                        style={{ width: '100%' }}
                    >
                        <Option value="active">Hoạt động</Option>
                        <Option value="stop">Tắt</Option>
                    </Select>
                </div>
            </Modal>
        </div>
    );
}