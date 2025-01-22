'use client'

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "@/app/_libs/configs/axiosAdminConfig";
import { Seo } from "@/app/_libs/types";
import FileUploadImage from "@/app/_components/FileHandle/FileUploadImage";

export default function SeoSetting() {
    const [seoData, setSeoData] = useState<Seo>({
        favicon: "",
        title: '',
        description: '',
        keywords: '',
        logo: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSeoData({ ...seoData, [name]: value });
    };

    const handleChangeValue = (key: string, value: string) => {
        setSeoData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSave = async () => {
        try {
            const formData = new FormData();
            (Object.keys(seoData) as (keyof Seo)[]).forEach((key) => {
                formData.append(key, seoData[key] as string);
            });
            await axiosInstance.post('/settings/update-web-config', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success('Lưu thành công', {
                position: "top-right"
            });
        } catch (error) {
            console.log(error)
            toast.error('Có lỗi xảy ra', {
                position: "top-right"
            });
        }
    };

    useEffect(() => {
        axiosInstance.get('/settings/get-seo')
            .then(res => {
                if (Object.keys(res.data).length != 0) {
                    Object.entries(res.data).forEach(([key, value]) => {
                        setSeoData((prev) => ({
                            ...prev,
                            [key]: value
                        }));
                    });
                }
            })
            .catch(error => {
                console.error('Lỗi khi gọi API:', error);
            });
    }, []);


    return (
        <div className="w-full flex flex-col gap-10">

            <div className="w-10/12 p-10 shadow-lg overflow-x-auto m-auto bg-white rounded">
                <div className="w-full flex justify-between mb-10">
                    <h2 className="text-center font-[600] text-3xl">Quản lý cấu hình thông tin web</h2>
                    <div className="flex justify-end">
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-md" onClick={handleSave}>
                            <i className="fa fa-save"/> Lưu
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    <div className="flex flex-col gap-6">
                        
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">Title</label>
                            <input
                                type="text"
                                name="title"
                                className="border border-gray-300 rounded-md p-2"
                                placeholder="Enter meta title"
                                value={seoData.title}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">Keywords</label>
                            <input
                                type="text"
                                name="keywords"
                                className="border border-gray-300 rounded-md p-2"
                                placeholder="Enter meta keywords"
                                value={seoData.keywords}
                                onChange={handleChange}
                            />
                        </div>

                    
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">Description</label>
                            <textarea
                                name="description"
                                className="border border-gray-300 rounded-md p-2"
                                placeholder="Enter meta description"
                                value={seoData.description}
                                onChange={handleChange}
                                rows={15}
                            />
                        </div>

                    </div>

                    <div className="flex flex-col gap-6">
                        {['favicon', 'logo'].map((key, index) => (
                            <div key={key} className="flex flex-col gap-2">
                                <label className="font-semibold capitalize">{key}</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        name={key}
                                        className="border border-gray-300 rounded-md p-2 w-3/4"
                                        placeholder={`Enter ${key} URL`}
                                        value={seoData[key as keyof Seo]}
                                        onChange={handleChange}
                                    />
                                    <label
                                        htmlFor={`fileUpload_${index}`}
                                        className="bg-green-400 px-3 py-1 rounded-xl text-white cursor-pointer"
                                    >
                                        Chọn ảnh
                                    </label>
                                </div>
                                <div className={`${key == 'favicon' ? 'w-16' : 'w-auto'} h-auto`}>
                                    <FileUploadImage
                                        onChange={(newUrl: any) => handleChangeValue(key, newUrl)}
                                        value={seoData[key as keyof Seo]}
                                        index={index}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
