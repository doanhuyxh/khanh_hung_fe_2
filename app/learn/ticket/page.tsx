'use client'

import Sidebar from "@/app/components/Sidebar/Customer";
import { useState } from "react";

export default function Ticket() {
    
    const [status, setStatus] = useState('all')

    return (<div className="flex flex-col lg:flex-row xl:mt-10">
        <div className="hidden lg:block">
            <Sidebar />
        </div>
        <div className="container max-w-[1920px] m-auto mt-20">
            <div className="w-full flex flex-col lg:flex-row justify-around gap-10">

                <div className="w-1/7 hidden lg:flex flex-col gap-2">
                    <button
                        className={`px-4 py-2 rounded-md text-2xl font-bold cursor-pointer ${status === 'all' ? 'bg-color-primary text-white' : 'text-black'}`}
                        onClick={() => setStatus('all')}>Tất cả ticket
                    </button>

                    <button
                        className={`px-4 py-2 rounded-md text-2xl font-bold cursor-pointer ${status === 'reply' ? 'bg-color-primary text-white' : 'text-black'}`}
                        onClick={() => setStatus('reply')}>Ticket đã phản hồi
                    </button>
                </div>

                <div className="w-full lg:w-1/3">
                    <div className="w-full flex justify-center items-center shadow-xl rounded-lg p-5">
                        <div className="w-full p-4 m-auto border-2 rounded-lg">
                            <div className="flex justify-between">
                                <p className="text-2xl font-bold px-4 py-2 bg-orange-400 rounded-md text-white">Chờ phản hồi</p>
                                <p className="text-2xl font-bold px-4 py-2 rounded-md text-gray-600">13/12/2024</p>
                            </div>
                            <div className="max-w-full flex flex-col gap-2">
                                <p className="text-2xl font-bold">Tôi cần mua khóa học nào để học lập trình?</p>
                                <p className="text-xl opacity-80">Khoá học bị lỗi</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/3">
                    <div className="shadow-lg rounded-lg px-5 py-10">
                        <h2 className="text-2xl font-bold text-center mb-6">Gửi yêu cầu hỗ trợ</h2>                        
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-xl font-medium">Số điện thoại</label>
                                <input 
                                    type="tel"
                                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-color-primary"
                                    placeholder="Nhập số điện thoại"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xl font-medium">Vấn đề hỗ trợ</label>
                                <select className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-color-primary">
                                    <option value="">Chọn vấn đề</option>
                                    <option value="course">Khóa học</option>
                                    <option value="payment">Thanh toán</option>
                                    <option value="technical">Kỹ thuật</option>
                                    <option value="other">Khác</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xl font-medium">Tiêu đề</label>
                                <input 
                                    type="text"
                                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-color-primary"
                                    placeholder="Nhập tiêu đề"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xl font-medium">Nội dung</label>
                                <textarea 
                                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-color-primary min-h-[100px]"
                                    placeholder="Mô tả chi tiết vấn đề của bạn"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xl font-medium">Hình ảnh (tối đa 3 ảnh)</label>
                                <div className="flex gap-4">
                                    <label className="w-24 h-24 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50">
                                        <input type="file" className="hidden" accept="image/*" />
                                        <i className="fa-solid fa-plus text-2xl text-gray-400"></i>
                                    </label>
                                    <label className="w-24 h-24 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50">
                                        <input type="file" className="hidden" accept="image/*" />
                                        <i className="fa-solid fa-plus text-2xl text-gray-400"></i>
                                    </label>
                                    <label className="w-24 h-24 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50">
                                        <input type="file" className="hidden" accept="image/*" />
                                        <i className="fa-solid fa-plus text-2xl text-gray-400"></i>
                                    </label>
                                </div>
                            </div>

                            <button 
                                type="submit"
                                className="mt-4 px-6 py-3 bg-color-primary text-white rounded-md font-bold text-xl hover:bg-opacity-90"
                            >
                                Gửi yêu cầu
                            </button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>

    )
}