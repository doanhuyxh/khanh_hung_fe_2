'use client'

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axiosInstance from "@/app/_libs/configs/axiosAdminConfig";

export default function Tracking() {

    const [isEditing, setIsEditing] = useState(true);
    const [idTracking, setIdTracking] = useState<any>({
        google_analytics: "",
        facebook_pixel: "",
        tiktok_pixel: "",
    });

    const handleEdit = () => {
        setIsEditing(!isEditing);
    }

    const handleChange = (key: string, value: string) => {
        setIdTracking(prev => ({ ...prev, [key]: value }));
    }

    const handleSave = async () => {
        try {
            const formData = new FormData();
            for (const key in idTracking) {
                formData.append(key, idTracking[key]);
            }

            await axiosInstance.post('/settings/update-web-config', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success('Lưu thành công', {
                position: "top-right"
            });
            setIsEditing(false);
        } catch (error) {
            console.log(error)
            toast.error('Có lỗi xảy ra', {
                position: "top-right"
            });
        }
    }

    useEffect(() => {
        const fetchIdTracking = async () => {
            const response = await axiosInstance.get('/settings/get-tracking-config');
            const data = response.data
            setIdTracking(data)
        }
        fetchIdTracking();
    }, []);

    return (
        <div className="p-6 bg-white rounded-lg shadow-md w-8/12 mx-auto">
            <button
                onClick={handleEdit}
                className="p-2 w-10 h-10 rounded-[50%] text-red-900 hover:bg-gray-100 float-end"
            >
                {isEditing ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-pen"></i>}
            </button>
            <div className="flex justify-center items-center mb-6">
                <h1 className="text-2xl font-bold text-center">Id Tracking web</h1>
            </div>

            <div className="space-y-4">

                <div className="flex flex-col">
                    <label className="text-lg font-medium capitalize mb-2">
                        Google Analytics
                    </label>
                    <input
                        type="text"
                        value={idTracking.google_analytics}
                        onChange={(e) => handleChange("google_analytics", e.target.value)}
                        disabled={!isEditing}
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={`Nhập id `}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-lg font-medium capitalize mb-2">
                        Facebook Pixel
                    </label>
                    <input
                        type="text"
                        value={idTracking.facebook_pixel}
                        onChange={(e) => handleChange("facebook_pixel", e.target.value)}
                        disabled={!isEditing}
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={`Nhập id `}
                    />
                </div>

                {/* <div className="flex flex-col">
                    <label className="text-lg font-medium capitalize mb-2">
                        Tiktok Pixel
                    </label>
                    <input
                        type="text"
                        value={idTracking.tiktok_pixel}
                        onChange={(e) => handleChange("tiktok_pixel", e.target.value)}
                        disabled={!isEditing}
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={`Nhập id `}
                    />
                </div> */}

            </div>

            {isEditing && (
                <div className="mt-6 flex justify-end">
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                        <i className="fa fa-save" /> Lưu
                    </button>
                </div>
            )}
        </div>
    )
}