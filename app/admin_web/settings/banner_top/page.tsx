'use client'

import { useState, useEffect } from "react";
import { BannerHeaderTop } from "../../../_libs/types"
import axiosInstance from "@/app/_libs/configs/axiosAdminConfig";
import ModalScroll from "@/app/_components/Modal/ModalScroll";
import toast from "react-hot-toast";


export default function BannerTop() {

    const [banners, setBanners] = useState<BannerHeaderTop[]>([]);

    const [new_banner, setNew_banner] = useState<BannerHeaderTop>()

    const [isOpen, setIsOpen] = useState(false)

    const handleAddOrUpdate = (id: string) => {
        if (id != "") {
            setNew_banner(banners.find(i => i.id == id))
        } else {
            setNew_banner({
                id: "",
                content: "",
                status: "active"
            })
        }
        setIsOpen(true)
    };

    const handleDelete = (id: string) => {
        axiosInstance.get(`/settings/delete-banner-top?id=${id}`)
            .then(res => {
                console.log(res)
                toast.success("Thành công", {
                    position: "top-right",
                    duration: 3000,
                    "style": {
                        "animation": "ease-in-out"
                    }
                })
            })
        getData()
    };

    const HandleSave = () => {
        axiosInstance.post("/settings/create-or-update-banner-top", new_banner)
            .then(res => {
                console.log(res)
                toast.success("Thành công", {
                    position: "top-right",
                    duration: 3000,
                    "style": {
                        "animation": "ease-in-out"
                    }
                })
                setIsOpen(false)
                getData()
            })
    }

    const getData = () => {
        axiosInstance.get("/settings/get-banner-top")
            .then((res: any) => {
                setBanners(res.data)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="w-full flex flex-col gap-10">
            <h2 className="text-center font-[600] text-3xl">Quản lý thông báo banner trên cùng</h2>

            <div className="flex flex-row justify-between">

                <div className="relative w-64 border rounded-md bg-gray-50 shadow-sm">
                    <input
                        className="outline-none w-full py-2 pl-10 pr-3 rounded-md bg-transparent text-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Tìm kiếm..."
                    />
                </div>

                <div className="">
                    <span
                        onClick={() => handleAddOrUpdate("")}
                        className="cursor-pointer bg-green-300 px-3 py-2 rounded-xl">
                        <i className="fa-solid fa-plus"></i>
                    </span>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">STT</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Nội dung</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Trạng thái</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {banners.map((banner, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2">{banner.content}</td>
                                <td className="border border-gray-300 px-4 py-2">{banner.status == "active" ? "Đang hoạt động" : "Tắt"}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <button
                                        onClick={() => handleAddOrUpdate(banner.id)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                                    >
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button
                                        onClick={() => handleDelete(banner.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ModalScroll isOpen={isOpen} title={new_banner?.id == "" ? "Tạo thông báo mới" : "Cập nhật thông báos"} onClose={() => setIsOpen(false)}>
                <div className="space-y-4">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Nội dung</label>
                        <input
                            value={new_banner?.content}
                            onChange={(e) => setNew_banner({ ...new_banner, content: e.target.value, id: new_banner?.id || "", status: new_banner?.status || "" })}
                            className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
                            placeholder="Nhập nội dung..."
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Trạng thái</label>
                        <select
                            value={new_banner?.status}
                            className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
                            onChange={(e) => setNew_banner({ ...new_banner, content: new_banner?.content || "", id: new_banner?.id || "", status: e.target.value })}>
                            <option value="active">Hoạt động</option>
                            <option value="stop">Tắt</option>
                        </select>
                    </div>

                    <div className="flex justify-end gap-4">
                        <button className="px-4 py-2 bg-gray-400 rounded-xl" onClick={() => setIsOpen(false)}>Huỷ</button>
                        <button className="px-4 py-2 bg-green-400  rounded-xl" onClick={() => HandleSave()}>Lưu</button>
                    </div>
                </div>

            </ModalScroll>
        </div>
    )
}