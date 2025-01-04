'use client'

import axiosInstance from "@/app/libs/configs/axiosAdminConfig";
import { Customer } from "@/app/libs/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function CustomerDetailPage() {
    const query = useSearchParams();
    const id = query.get('id')
    const [customerData, setCustomerData] = useState<Customer>()
    const [CourseProgress, setCourseProgress] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [activeTab, setActiveTab] = useState('personal')

    useEffect(() => {
        axiosInstance.get(`/customer/get-by-id?id=${id}`)
            .then((res) => {
                setCustomerData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            }).finally(() => {
                setIsLoading(false)
            })

        axiosInstance.get(`/course/GetAllProgressByCustomerId?page=1&pageSize=50&customerId=${id}`)
            .then((res) => {
                setCourseProgress(res.data)
                console.log(res.data)
            })
    }, [id])

    if (isLoading) {
        return <div>Loading...</div>
    }

    const renderPersonalInfo = () => (
        <div className="bg-white p-4 rounded-lg shadow-2xl">
            <div className="flex items-start gap-8">
                <div className="w-32 h-32 rounded-full">
                    {customerData?.avatar &&
                        <Image
                            src={customerData.avatar}
                            alt={customerData.firstName + ' ' + customerData.lastName}
                            width={128}
                            height={128}
                            className="object-cover"
                        />
                    }
                </div>
                <div className="flex-grow space-y-4">
                    <h2 className="text-2xl font-bold">Họ tên: {customerData?.firstName + ' ' + customerData?.lastName}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <p><span className="font-medium">Email:</span> {customerData?.email}</p>
                            <p><span className="font-medium">Số điện thoại:</span> {customerData?.phoneNumber}</p>
                            <p><span className="font-medium">Giới tính:</span> {customerData?.gender}</p>
                        </div>
                        <div className="space-y-2">
                            <p><span className="font-medium">Năm sinh:</span> {customerData?.yearOfBirth}</p>
                            <p><span className="font-medium">Thành phố:</span> {customerData?.city}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const renderProfessionalInfo = () => (
        <div className="bg-white p-4 rounded-lg shadow-2xl">
            <div className="space-y-4">
                <p><span className="font-medium">Lĩnh vực:</span> {customerData?.fieldOfExpertise}</p>
                <p><span className="font-medium">Số năm kinh nghiệm:</span> {customerData?.yearOfExperience}</p>
                <p className="max-h-[40vh] overflow-y-auto">
                    <span className="font-medium">Giới thiệu bản thân:</span>
                    {customerData?.description}
                </p>
            </div>
        </div>
    )

    const renderBankInfo = () => (
        <div className="bg-white p-4 rounded-lg shadow-2xl">
            <div className="space-y-4">
                <p><span className="font-medium">Số tài khoản:</span> {customerData?.bankAccountNumber}</p>
                <p><span className="font-medium">Tên ngân hàng:</span> {customerData?.accountBankName}</p>
                <p><span className="font-medium">Chủ tài khoản:</span> {customerData?.accountBankOwner}</p>
            </div>
        </div>
    )

    const renderCourseProgress = () => (
        <div className="bg-white p-4 rounded-lg shadow-2xl">
            <div className="flex flex-col gap-4">
                {CourseProgress.map((item, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center gap-4">
                        <div className="w-24 h-24 flex-shrink-0">
                            <Image src={item.courseImageThump} alt={item.courseName} width={100} height={100} className="rounded-lg" />
                        </div>
                        <div className="flex-grow">
                            <h4 className="text-lg font-semibold">{item.courseName}</h4>
                            <div className="mt-2 bg-gray-200 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${item.progress}%` }}></div>
                            </div>
                            <p className="mt-1">Tiến độ: {item.progress}%</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

    const renderAffiliateInfo = () => (
        <div className="bg-white p-4 rounded-lg shadow-2xl">
            <div className="space-y-4">
                <p><span className="font-medium">Mã giới thiệu:</span> {customerData?.codeRef}</p>
                <p><span className="font-medium">Cấp độ Affiliate:</span> {customerData?.level_affiliate}</p>
                <p><span className="font-medium">Tổng số người giới thiệu:</span> {customerData?.totalRef}</p>
                <p><span className="font-medium">Tổng tiền hoa hồng:</span> {customerData?.totalCommission?.toLocaleString('vi-VN')} VNĐ</p>
                <p><span className="font-medium">Tổng tiền hoa hồng:</span> {customerData?.totalDiscount?.toLocaleString('vi-VN')} VNĐ</p>
            </div>
        </div>
    )

    return (
        <div className="container mx-auto">
            <div className="w-full p-4 rounded-lg">
                <div className="flex border-b mb-4">
                    <button 
                        className={`px-4 py-2 ${activeTab === 'personal' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
                        onClick={() => setActiveTab('personal')}
                    >
                        Thông tin cá nhân
                    </button>
                    <button 
                        className={`px-4 py-2 ${activeTab === 'professional' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
                        onClick={() => setActiveTab('professional')}
                    >
                        Thông tin chuyên môn
                    </button>
                    <button 
                        className={`px-4 py-2 ${activeTab === 'bank' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
                        onClick={() => setActiveTab('bank')}
                    >
                        Tài khoản ngân hàng
                    </button>
                    <button 
                        className={`px-4 py-2 ${activeTab === 'progress' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
                        onClick={() => setActiveTab('progress')}
                    >
                        Tiến độ khoá học
                    </button>
                    <button 
                        className={`px-4 py-2 ${activeTab === 'affiliate' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
                        onClick={() => setActiveTab('affiliate')}
                    >
                        Thông tin Affiliate
                    </button>
                </div>

                {activeTab === 'personal' && renderPersonalInfo()}
                {activeTab === 'professional' && renderProfessionalInfo()}
                {activeTab === 'bank' && renderBankInfo()}
                {activeTab === 'progress' && renderCourseProgress()}
                {activeTab === 'affiliate' && renderAffiliateInfo()}
            </div>
        </div>
    )
}