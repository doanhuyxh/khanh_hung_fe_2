'use client'

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "@/app/libs/configs/axiosConfig";
import { Seo } from "@/app/libs/types";

export default function SeoSetting() {
    const [seoData, setSeoData] = useState<Seo>({
        favicon: "",
        title: '',
        description: '',
        keywords: '',
        logo: '',
        siteName: '',
        locale: '',
        domain:"",
        OgImage:"",
        twitterImage:"",
        twitterSite:""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSeoData({ ...seoData, [name]: value });
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
            <h2 className="text-center font-[600] text-3xl">Quản lý thẻ nội dung seo</h2>

            <div className="w-10/12 p-10 shadow-lg overflow-x-auto m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Favicon */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Favicon</label>
                        <input
                            type="text"
                            name="favicon"
                            className="border border-gray-300 rounded-md p-2"
                            placeholder="Enter meta title"
                            value={seoData.favicon}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Domain */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Domain</label>
                        <input
                            type="text"
                            name="domain"
                            className="border border-gray-300 rounded-md p-2"
                            placeholder="Enter domain"
                            value={seoData.domain}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Logo */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Logo</label>
                        <input
                            type="text"
                            name="logo"
                            className="border border-gray-300 rounded-md p-2"
                            placeholder="Enter logo URL"
                            value={seoData.logo}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Title */}
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

                    {/* Description */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Description</label>
                        <textarea
                            name="description"
                            className="border border-gray-300 rounded-md p-2"
                            placeholder="Enter meta description"
                            value={seoData.description}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Keywords */}
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

                    {/* Site Name */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Site Name</label>
                        <input
                            type="text"
                            name="siteName"
                            className="border border-gray-300 rounded-md p-2"
                            placeholder="Enter site name"
                            value={seoData.siteName}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Locale */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Locale</label>
                        <input
                            type="text"
                            name="locale"
                            className="border border-gray-300 rounded-md p-2"
                            placeholder="Enter locale"
                            value={seoData.locale}
                            onChange={handleChange}
                        />
                    </div>

                    {/* OG Image */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">OG Image</label>
                        <input
                            type="text"
                            name="OgImage"
                            className="border border-gray-300 rounded-md p-2"
                            placeholder="Enter OG image URL"
                            value={seoData.OgImage}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Twitter Image */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Twitter Image</label>
                        <input
                            type="text"
                            name="twitterImage"
                            className="border border-gray-300 rounded-md p-2"
                            placeholder="Enter Twitter image URL"
                            value={seoData.twitterImage}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Twitter Site */}
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Twitter Site</label>
                        <input
                            type="text"
                            name="twitterSite"
                            className="border border-gray-300 rounded-md p-2"
                            placeholder="Enter Twitter site URL"
                            value={seoData.twitterSite}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="flex justify-end mt-4">
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-md" onClick={handleSave}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
