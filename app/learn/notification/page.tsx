'use client'

import Pagination from "@/app/_components/Pagination";
import axiosCustomerConfig from "@/app/_libs/configs/axiosCustomerConfig";
import ModalViewHtml from "@/app/_components/Modal/ModalViewHtml";
import { unixToDatetime } from "@/app/_libs/utils";
import { NotificationItem } from "@/app/_libs/types";
import { useState, useEffect, useCallback } from "react";


export default function Notification() {


    const [status, setStatus] = useState("");
    const [page, setPage] = useState(1);
    const [data, setData] = useState<NotificationItem[]>([]);
    const [totalPage, setTotalPage] = useState(0);
    const [totalResult, setTotalResult] = useState(0);
    const [totalNotification, setTotalNotification] = useState({
        read: 0,
        unread: 0
    });

    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handlePageChange = (page: number) => {
        setPage(page);
    }

    const handleStatusChange = (status: string) => {
        setStatus(status);
    }

    const GetNotification = useCallback(async () => {
        const res_data = await axiosCustomerConfig.get(`/notification/get-mail?page=${page}&status=${status}`);
        setData(res_data.data.data);
        setTotalPage(res_data.data.totalPage);
        setTotalResult(res_data.data.totalResult);
    }, [page, status]);

    const GetTotalNotification = useCallback(async () => {
        const res_data = await axiosCustomerConfig.get(`/notification/get-total-mail`);
        setTotalNotification({
            read: res_data.data.total_read,
            unread: res_data.data.total_un_read
        });
    }, []);

    const handleViewDetail = (item: NotificationItem) => {
        setTitle(item.title);
        setContent(item.content);
        setIsOpen(true);
        setData(data.map(notification =>
            notification.messId === item.messId
                ? { ...notification, status: "read" }
                : notification
        ));

        if (item.status === "un_read") {
            axiosCustomerConfig.get(`/notification/update-mail?mailId=${item.messUserId}`);
        }

    }

    useEffect(() => {
        GetNotification();
        GetTotalNotification();
    }, [page, status, GetNotification, GetTotalNotification]);

    return (
        <>
            <div className="w-11/12 m-auto ml-0 mt-10 lg:mt-30">
                <div className="w-full flex justify-center items-center mb-10">
                    <h1 className="text-3xl lg:text-6xl font-bold transform scale-150 text-color-secondary animate-jump-in animate-once animate-ease-out" >Thông báo của bạn</h1>
                </div>

                <div className="w-11/12 lg:w-full shadow-[0_0_20px_rgba(0,0,0,0.2)] shadow-gray-500/50 m-auto p-6 lg:p-12 lg:m-12 rounded-lg">
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-10 lg:gap-0 py-8 mb-10">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold opacity-80">Lịch sử các thông báo của bạn</h2>
                        </div>
                        <div className="flex gap-4">
                            <button
                                className={`cursor-pointer text-gray-600 px-5 py-3 rounded-md lg:text-3xl border border-gray-600 border-opacity-40 hover:bg-color-primary hover:text-white transition-all duration-300 ${status === "" ? "bg-color-primary text-white" : ""} relative`} onClick={() => handleStatusChange("")}>
                                Tất cả
                                <span className="absolute top-[-6px] right-[-4px] h-auto w-7 text-lg text-center text-white rounded-full bg-red-500">
                                    {totalNotification.read + totalNotification.unread}
                                </span>
                            </button>
                            <button
                                className={`cursor-pointer text-gray-600 px-5 py-3 rounded-md lg:text-3xl border border-gray-600 border-opacity-40 hover:bg-color-primary hover:text-white transition-all duration-300 ${status === "read" ? "bg-color-primary text-white" : ""} relative`} onClick={() => handleStatusChange("read")}>
                                Đã xem
                                <span className="absolute top-[-6px] right-[-4px] h-auto w-7 text-lg text-center text-white rounded-full bg-red-500">
                                    {totalNotification.read}
                                </span>
                            </button>
                            <button
                                className={`cursor-pointer text-gray-600 px-5 py-3 rounded-md lg:text-3xl border border-gray-600 border-opacity-40 hover:bg-color-primary hover:text-white transition-all duration-300 ${status === "unread" ? "bg-color-primary text-white" : ""} relative`}
                                onClick={() => handleStatusChange("un_read")}>
                                Chưa xem
                                <span className="absolute top-[-6px] right-[-4px] h-auto w-7 text-lg text-center text-white rounded-full bg-red-500">
                                    {totalNotification.unread}
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="lg:block hidden w-full overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300 rounded-xl">
                            <thead>
                                <tr className="bg-gray-100 text-black text-xl leading-normal text-nowrap">
                                    <th className="py-3 px-6 text-left">STT</th>
                                    <th className="py-3 px-6 text-left min-w-[40%]">Tiêu đề</th>
                                    <th className="py-3 px-6 text-left">Nội dung</th>
                                    <th className="py-3 px-6 text-left">Thời gian gửi</th>
                                    <th className="py-3 px-6 text-left">Thời gian xem</th>
                                    <th className="py-3 px-6 text-left">Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-xl">
                                {data && data.map((item: NotificationItem, index: number) => (
                                    <tr className="border-b border-gray-200 hover:bg-gray-50" key={index}>
                                        <td className="py-4 px-6">{index + 1}</td>

                                        <td className="py-4 px-6 font-semibold text-2xl min-w-[40%]">{item.title}</td>

                                        <td className="py-4 px-6">
                                            <span
                                                onClick={() => handleViewDetail(item)}
                                                className={`cursor-pointer text-decoration-line: underline ${item.status === "read" ? "text-gray-600" : "text-blue-600"}`}
                                            >
                                                Xem chi tiết
                                            </span>
                                        </td>

                                        <td className="py-4 px-6">{unixToDatetime(item.sendAt)}</td>

                                        <td className="py-4 px-6">{item.readAt ? unixToDatetime(item.readAt) : "-"}</td>

                                        <td className="py-4 px-6">
                                            {item.status === "read" ? (
                                                <span className="bg-green-600 text-white py-2 px-4 rounded-md">Đã xem</span>
                                            ) : (
                                                <span className="bg-red-600 text-white py-2 px-4 rounded-md">Chưa xem</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}

                                {data.length === 0 && (
                                    <tr>
                                        <td colSpan={6} className="text-center py-4">Không có thông báo nào</td>
                                    </tr>
                                )}


                            </tbody>

                        </table>
                    </div>
                    <div className="lg:hidden w-full max-h-[50vh] overflow-y-auto">
                        {
                            data.map((item: NotificationItem, index: number) => (
                                <div className="bg-white p-4 mb-2 border border-gray-300 rounded-md" key={index}>
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-gray-400">STT :</span>
                                        <span className="text-gray-400">{index + 1}</span>
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <span className="font-semibold text-gray-400 text-nowrap">Tiêu đề: </span>
                                        <span className="text-gray-700 font-semibold text-right">{item.title}</span>
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <span className="font-semibold text-gray-400">Nội dung:</span>
                                        <span
                                            onClick={() => handleViewDetail(item)}
                                            className="text-gray-600 text-decoration-line: underline">
                                            Nhấn để xem
                                        </span>
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <span className="font-semibold text-gray-400">Thời gian gửi:</span>
                                        <span className="text-gray-600">
                                            {unixToDatetime(item.sendAt)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <span className="font-semibold text-gray-400">Thời gian xem:</span>
                                        <span className="text-gray-600">
                                            {item.readAt == 0 ? unixToDatetime(item.readAt) : "-"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <span className="font-semibold text-gray-400">Trạng thái:</span>
                                        <span className={`text-white ${item.status == "read" ? "bg-green-500" : "bg-orange-400"} py-1 px-3 rounded-md`}>
                                            {item.status == "read" ? "Đã xem" : "Chưa xem"}
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <Pagination length={data.length} pageSize={30} totalResult={totalResult} page={page} totalPage={totalPage} onPageChange={handlePageChange} />
                </div>

            </div>
            <ModalViewHtml isOpen={isOpen} onClose={() => setIsOpen(false)} title={title} >
                <div className="p-4" dangerouslySetInnerHTML={{ __html: content }} />
            </ModalViewHtml>
        </>
    )
}