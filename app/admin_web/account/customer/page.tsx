'use client'

import { useCallback, useEffect, useState } from "react";
import { Customer } from "@/app/_libs/types";
import axiosInstance from "@/app/_libs/configs/axiosAdminConfig";
import { unixToDatetime } from "@/app/_libs/utils";
import Pagination from "@/app/_components/Pagination";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CustomerPage() {

    const [totalResult, setTotalResult] = useState(0)

    const [page, setPage] = useState(1)
    const pageSize = 10
    const [totalPage, setTotalPage] = useState(0)
    const [searchKeyword, setSearchKeyword] = useState('')
    const [customerData, setCustomerData] = useState<Customer[]>([])

    const router = useRouter()

    const handleViewCustomer = (id: string) => {
        router.push(`/admin_web/account/customer/detail?id=${id}`)
    }

    const fetchCustomerData = useCallback(async () => {
        const response = await axiosInstance(`/customer/get-all-customer?page=${page}&pageSize=${pageSize}&search_keyword=${searchKeyword}`)
        console.log(response)
        setCustomerData(response.data.data)
        setTotalResult(response.data.totalResult)
        setTotalPage(response.data.totalPage)
    }, [page, searchKeyword, pageSize])

    useEffect(() => {
        fetchCustomerData()
    }, [page, searchKeyword, pageSize, fetchCustomerData])

    return (
        <div className="container mx-auto">
            <div className="w-full p-4 rounded-lg flex flex-col gap-4">
                <h2 className="text-center text-lg font-bold">Danh sách khách hàng</h2>
            </div>

            <div className="w-full px-4 py-2 rounded-lg">
                <div className="flex justify-end gap-2 mb-4">
                    <input type="text" className="p-2 rounded-md border-2 border-gray-300 focus:outline-none" placeholder="Tìm kiếm khách hàng" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
                </div>

                <div className="container mb-2">
                    <table className="w-full border-collapse border border-gray-200 shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="px-4 py-2 text-left">STT</th>
                                <th className="px-4 py-2 text-left">Avatar</th>
                                <th className="px-4 py-2 text-left">Tên khách hàng</th>
                                <th className="px-4 py-2 text-left">Email</th>
                                <th className="px-4 py-2 text-left">Số điện thoại</th>
                                <th className="px-4 py-2 text-left">Ngày tham gia</th>
                                <th className="px-4 py-2 text-center">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customerData.map((customer, index) => (
                                <tr
                                    key={customer.id}
                                    className="even:bg-gray-50 hover:bg-blue-100 transition duration-300 ease-in-out"
                                >
                                    <td className="px-4 py-2 border-b">{index + 1}</td>
                                    <td className="px-4 py-2 border-b">
                                        {customer.avatar ? (
                                            <Image
                                                width={100}
                                                height={100}
                                                src={customer.avatar}
                                                alt={customer.firstName + ' ' + customer.lastName}
                                                className="rounded-lg"
                                            />
                                        ) : (
                                            <div className="w-[100px] h-[100px]"></div>
                                        )}
                                    </td>
                                    <td className="px-4 py-2 border-b">{customer.firstName + ' ' + customer.lastName}</td>
                                    <td className="px-4 py-2 border-b">{customer.email}</td>
                                    <td className="px-4 py-2 border-b">{customer.phoneNumber}</td>
                                    <td className="px-4 py-2 border-b">{unixToDatetime(customer.createdAt)}</td>
                                    <td className="px-4 py-2 border-b text-center">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition duration-300 mx-1"
                                            onClick={() => handleViewCustomer(customer.id)}
                                        >
                                            Xem
                                        </button>
                                        <button
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition duration-300"
                                            onClick={() => handleViewCustomer(customer.id)}
                                        >
                                            Xoá
                                        </button>
                                        
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination page={page} totalPage={totalPage} onPageChange={setPage} totalResult={totalResult} pageSize={pageSize} length={customerData.length} />
                </div>

            </div>
        </div>
    )
}