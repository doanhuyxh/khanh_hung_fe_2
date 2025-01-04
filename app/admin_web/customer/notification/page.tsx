'use client'

import Loading from "@/app/components/Loading"
import { useCallback, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { FormNotification } from "@/app/components/Form"
import ModalScroll from "@/app/components/Modal/ModalScroll"
import { unixToDatetime, dateToUnixTimestamp } from "@/app/libs/utils"

import axiosInstance, { postFormData } from "@/app/libs/configs/axiosAdminConfig"
import Pagination from "@/app/components/Pagination"

export default function Notification() {

    const [isClient, setIsClient] = useState(false)
    const [isShowModelForm, setIsShowModelForm] = useState<boolean>(false)

    const [startDate, setStartDate] = useState<number>(0)
    const [endDate, setEndDate] = useState<number>(0)
    const [status, setStatus] = useState<string>('')
    const [page, setPage] = useState(1)
    const [searchKeyword, setSearchKeyword] = useState<string>('')
    const pageSize = 30;
    const [data, setData] = useState<any[]>([])

    const [checkbox, setCheckbox] = useState<string[]>([])

    const [formNotify, setFormNotify] = useState({
        Id: "",
        PrivateName: "",
        Title: "",
        Content: "",
        Type: ""
    })

    const HandleChangDate = (key: string, value: string) => {
        if (key == 'start') {
            setStartDate(dateToUnixTimestamp(value))
        }

        if (key == 'end') {
            setEndDate(dateToUnixTimestamp(value))
        }
    }

    const HandelSave = () => {
        postFormData("/notification/CreateOrUpdate", formNotify)
            .then(() => {
                toast.success("Tạo thông báo thành công", {
                    duration: 5000,
                    position: "top-right"
                })
            }).finally(() => {
                setIsShowModelForm(false)
            })
    }

    const HandleUpdate = async (id: string) => {
        axiosInstance.get(`/notification/GetById?id=${id}`)
            .then(res => {
                const data = res.data
                setFormNotify({
                    Id: data.id,
                    PrivateName: data.privateName,
                    Title: data.title,
                    Type: data.type,
                    Content: data.content
                })
                setIsShowModelForm(true)

            })
    }

    const getNotification = useCallback(async () => {
        axiosInstance.get(`/notification/GetAll?page=${page}&pageSize=${pageSize}&startTime=${startDate}&endTime=${endDate}&status=${status}&search=${searchKeyword}`)
            .then(res => {
                const data = res.data
                setData(data)
            })
    }, [page, startDate, endDate, status, searchKeyword])


    const handleChangeCheckbox = (id: string) => {
        if (id == 'all') {
            setCheckbox(data.map((i: any) => i.id))
        } else {
            setCheckbox(prev => {
                if (prev.includes(id)) {
                    return prev.filter(i => i !== id)
                }
                return [...prev, id]
            })
        }
    }

    const handleUpdateStatus = async (status: string) => {
        try {
            for (const id of checkbox) {
                await axiosInstance.get(`/notification/ChangeStatus?id=${id}&status=${status}`);
            }
            toast.success('Cập nhật trạng thái thành công', {
                duration: 3000,
                position: "top-right",
            });
            getNotification();
        } catch (error) {
            console.error('Có lỗi xảy ra khi cập nhật trạng thái:', error);
            toast.error('Cập nhật thất bại', {
                duration: 3000,
                position: "top-right",
            });
        }
    };

    useEffect(() => {
        getNotification()
    }, [page, startDate, endDate, status, searchKeyword, getNotification])

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) {
        return <Loading />
    }

    return (
        <div className="w-full">
            <div className="w-full flex items-center gap-5 mr-10 mb-10">
                <p className="font-medium">Thông báo khách hàng</p>

                <div className="flex gap-5 ml-auto">
                    <button className={`px-4 py-2 border-2 rounded-lg ${status == "" && "bg-blue-600 text-white"}`}
                        onClick={() => setStatus("")}>Tất cả</button>

                    <button className={`px-4 py-2 border-2 rounded-lg ${status == "send" && "bg-blue-600 text-white"}`}
                        onClick={() => setStatus("send")}>Đã gửi</button>

                    <button className={`px-4 py-2 border-2 rounded-lg ${status == "pending" && "bg-blue-600 text-white"}`}
                        onClick={() => setStatus("pending")}>Chưa gửi</button>

                    <button className={`px-4 py-2 border-2 rounded-lg ${status == "draft" && "bg-blue-600 text-white"}`}
                        onClick={() => setStatus("draft")}>Nháp</button>

                </div>
            </div>
            <hr />
            <div className="mt-3 flex gap-8 mb-3 mx-3 p-4 bg-gray-50 rounded-lg shadow-sm">
                <button
                    className='bg-blue-100 text-black hover:bg-green-100 hover:text-green-500 px-4 py-2 rounded-md'
                    onClick={() => handleChangeCheckbox('all')}
                >
                    <i className="fa-solid fa-check"></i>
                </button>

                <div className="flex gap-3 items-center">
                    <input
                        type="text"
                        placeholder="tìm kiêm"
                        value={searchKeyword}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                </div>
                <div className="flex gap-3 items-center">
                    <label className="font-medium text-gray-700">Từ ngày:</label>
                    <input
                        type="date"
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        onChange={(e) => HandleChangDate("start", e.target.value)}
                    />
                </div>

                <div className="flex gap-3 items-center">
                    <label className="font-medium text-gray-700">Đến ngày:</label>
                    <input
                        type="date"
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="flex items-center gap-8">

                    <button className="px-2 py-2 text-green-500 hover:bg-green-200 hover:text-green-800 rounded-lg" onClick={() => handleUpdateStatus('send')}>
                        <i className="fa-solid fa-paper-plane"></i> Gửi thông báo
                    </button>


                    <button className="px-2 py-2 text-red-500 hover:bg-red-200 hover:text-red-800 rounded-lg" onClick={() => { }}>
                        <i className="fa-solid fa-trash"></i> Xoá
                    </button>


                </div>

                <div className="flex items-center ml-auto">
                    <button className="px-4 py-2 border-2 hover:bg-green-400 rounded-xl"
                        onClick={() => setIsShowModelForm(true)}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>

            <div className="w-full overflow-y-auto mt-3">
                <table className="w-full text-sm text-left text-gray-700 border-collapse">
                    <thead>
                        <tr className="bg-gray-100 border-b text-nowrap">
                            <th className="px-6 py-4 font-medium">STT</th>
                            <th className="px-6 py-4 font-medium">Tên thông báo (nội bộ)</th>
                            <th className="px-6 py-4 font-medium">Tiêu đề</th>
                            <th className="px-6 py-4 font-medium">Nội dung</th>
                            <th className="px-6 py-4 font-medium">Trạng thái</th>
                            <th className="px-6 py-4 font-medium">Loại thông báo</th>
                            <th className="px-6 py-4 font-medium">Ngày tạo</th>
                            <th className="px-6 py-4 font-medium">Ngày gửi</th>
                            <th className="px-6 py-4 font-medium">Số lượt xem</th>
                            <th className="px-6 py-4 font-medium"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((item: any, index: number) => {
                                return <tr key={index} className="hover:bg-gray-50 border-b">
                                    <td className='p-4 flex items-center gap-1' onClick={() => handleChangeCheckbox(item.id)}>
                                        <input type='checkbox' value={item.id} checked={checkbox.includes(item.id)} onChange={() => { }} />
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4 font-medium">{item.privateName}</td>
                                    <td className="px-6 py-4">{item.title}</td>
                                    <td className="px-6 py-4 max-w-xs truncate">{item.content}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs ${item.status === 'send' ? 'bg-green-100 text-green-800' :
                                            item.status === 'pending' ? 'bg-yellow-100 text-gray-800' :
                                                item.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                                                    'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {item.status == 'pending' && "Đang chờ"}
                                            {item.status == 'draft' && "Nháp"}
                                            {item.status == 'send' && "Đã gửi"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className={`px-2 py-1 rounded-full text-xs ${item.type === 'all' ? 'bg-purple-100 text-purple-800' :
                                            item.type === 'mail' ? 'bg-blue-100 text-blue-800' :
                                                item.type === 'app' ? 'bg-orange-100 text-orange-800' :
                                                    'bg-green-100 text-green-800'
                                            }`}>
                                            {item.type === '' && "Tất cả"}
                                            {item.type === 'all' && "Tất cả"}
                                            {item.type === 'mail' && "Email"}
                                            {item.type === 'app' && "App"}
                                            {item.type === 'web' && "Web"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{unixToDatetime(item.createdAt)}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {item.sendAt == '0' ? "Chưa gửi" : unixToDatetime(item.sendAt)}
                                    </td>
                                    <td className="px-6 py-4 text-center">{item.totalRead}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button className="p-2 text-blue-600 hover:text-blue-800"
                                                onClick={() => HandleUpdate(item.id)}>
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </button>
                                            <button className="p-2 text-red-600 hover:text-red-800">
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                <Pagination pageSize={pageSize} page={page} length={data?.length} onPageChange={setPage} totalPage={10} totalResult={100} />
            </div>

            <ModalScroll isOpen={isShowModelForm} onClose={() => setIsShowModelForm(!isShowModelForm)} title="Thông báo khách hàng">
                <FormNotification formNotify={formNotify} setFormNotify={setFormNotify} save={HandelSave} />
            </ModalScroll>
        </div>
    )
}