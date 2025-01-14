'use client';

import axiosInstance from "@/app/_libs/configs/axiosAdminConfig";
import {Customer} from "@/app/_libs/types";
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {Tabs, Spin} from "antd";
import Image from "next/image";
import {unixToDatetime} from "@/app/_libs/utils";

export default function CustomerDetailPage() {
    const query = useSearchParams();
    const id = query.get('id');
    const [customerData, setCustomerData] = useState<Customer>();
    const [courseProgress, setCourseProgress] = useState<any[]>([]);
    const [emailHistory, setEmailHistory] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get(`/customer/get-by-id?id=${id}`)
            .then((res) => {
                setCustomerData(res.data);
            })
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false));

        axiosInstance.get(`/course/GetAllProgressByCustomerId?page=1&pageSize=50&customerId=${id}`)
            .then((res) => setCourseProgress(res.data))
            .catch((err) => console.error(err));

        axiosInstance.get(`/customer/get-history-mail?id=${id}&page=1&pageSize=100`)
            .then((res) => setEmailHistory(res.data))
            .catch((err) => console.error(err));

    }, [id]);

    if (isLoading) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <Spin size="large"/>
            </div>
        )
    }

    const items = [
        {
            key: 'personal',
            label: 'Thông tin cá nhân',
            children: (
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-start gap-8">
                        <div className="w-32 h-32 rounded-full">
                            {customerData?.avatar && (
                                <Image
                                    src={customerData.avatar}
                                    alt={customerData.firstName + ' ' + customerData.lastName}
                                    width={128}
                                    height={128}
                                    className="object-cover rounded-full"
                                />
                            )}
                        </div>
                        <div className="flex-grow space-y-4">
                            <h2 className="text-2xl font-bold">Họ
                                tên: {customerData?.firstName + ' ' + customerData?.lastName}</h2>
                            <p>Email: {customerData?.email}</p>
                            <p>Số điện thoại: {customerData?.phoneNumber}</p>
                            <p>Giới tính: {customerData?.gender}</p>
                            <p>Năm sinh: {customerData?.yearOfBirth}</p>
                            <p>Thành phố: {customerData?.city}</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            key: 'professional',
            label: 'Thông tin chuyên môn',
            children: (
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <p>Lĩnh vực: {customerData?.fieldOfExpertise}</p>
                    <p>Số năm kinh nghiệm: {customerData?.yearOfExperience}</p>
                    <p>Giới thiệu bản thân: {customerData?.description}</p>
                </div>
            ),
        },
        {
            key: 'bank',
            label: 'Tài khoản ngân hàng',
            children: (
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <p>Số tài khoản: {customerData?.bankAccountNumber}</p>
                    <p>Tên ngân hàng: {customerData?.accountBankName}</p>
                    <p>Chủ tài khoản: {customerData?.accountBankOwner}</p>
                </div>
            ),
        },
        {
            key: 'progress',
            label: 'Tiến độ khóa học',
            children: (
                <div className="bg-white p-4 rounded-lg shadow-md">
                    {courseProgress.map((item, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center gap-4">
                            <Image
                                src={item.courseImageThump}
                                alt={item.courseName}
                                width={100}
                                height={100}
                                className="rounded-lg"
                            />
                            <div className="flex-grow">
                                <h4 className="text-lg font-semibold">{item.courseName}</h4>
                                <div className="mt-2 bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="bg-blue-600 h-2.5 rounded-full"
                                        style={{width: `${item.progress}%`}}
                                    />
                                </div>
                                <p>Tiến độ: {item.progress}%</p>
                            </div>
                        </div>
                    ))}
                </div>
            ),
        },
        {
            key: 'affiliate',
            label: 'Thông tin Affiliate',
            children: (
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <p>Mã giới thiệu: {customerData?.codeRef}</p>
                    <p>Cấp độ Affiliate: {customerData?.level_affiliate}</p>
                    <p>Tổng số người giới thiệu: {customerData?.totalRef}</p>
                    <p>Tổng tiền hoa hồng: {customerData?.totalCommission?.toLocaleString('vi-VN')} VNĐ</p>
                    <p>Tổng tiền chiết khấu: {customerData?.totalDiscount?.toLocaleString('vi-VN')} VNĐ</p>
                </div>
            ),
        }, {
            key: 'email',
            label: 'Lịch sử email',
            children: (
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">STT</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Thời gian tạo</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Thời gian gửi</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Thời gian xem</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Mẫu mail</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Loại</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Trạng thái</th>
                        </tr>
                        </thead>
                        <tbody>
                        {emailHistory.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2">{unixToDatetime(item.createdAt)}</td>
                                <td className="border border-gray-300 px-4 py-2">{unixToDatetime(item.sendAt)}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    { item.isRead ? unixToDatetime(item.readAt) : '' }
                                </td>
                                <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.typeMailSend}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {item.isRead ?
                                        <span className="bg-green-500 px-2 py-1 rounded text-white">Đã xem</span> :
                                        <span className="bg-red-500 px-2 py-1 rounded text-white">Chưa xem</span>}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ),
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <Tabs items={items}/>
        </div>
    );
}
