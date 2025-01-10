"use client"

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axiosInstance from "@/app/_libs/configs/axiosAdminConfig";
import { SocialLinks } from "@/app/_libs/types";

export default function SocialNetworkPage() {
    const [isEditing, setIsEditing] = useState(true);
    const [socialLinks, setSocialLinks] = useState<SocialLinks[]>([]);

    const handleEdit = () => {
        setIsEditing(!isEditing);
    }

    const handleChange = (platform: string, value: string) => {
        setSocialLinks(prev => prev.map(item => {
            if (item.key === platform) {
                return { ...item, value };
            }
            return item;
        }));
    }

    const handleSave = async () => {
        try {
            const formData = new FormData();
            socialLinks.forEach((item) => {
                formData.append(item.key, item.value);
            });

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

    const fetchSocialLinks = async () => {
        const response = await axiosInstance.get('/settings/social');
        const data = response.data
        for (const item of data) {
            switch (item.key) {
                case 'facebook':
                    item.label = 'Facebook';
                    break;
                case 'facebookGroup':
                    item.label = 'Facebook Group';
                    break;
                case 'facebookPage':
                    item.label = 'Facebook Page';
                    break;
                case 'question':
                    item.label = 'Câu hỏi thường gặp';
                    break;
                case 'activity':
                    item.label = 'Hoạt động';
                    break;
                case 'blog':
                    item.label = 'Blog';
                    break;
                case 'tiktok':
                    item.label = 'Tiktok';
                    break;
                case 'youtube':
                    item.label = 'Youtube';
                    break;
            }
        }
        setSocialLinks(data);
    }

    useEffect(() => {
        fetchSocialLinks();
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
                <h1 className="text-2xl font-bold text-center">Mạng xã hội</h1>
            </div>

            <div className="space-y-4">
                {socialLinks.map((item) => (
                    <div key={item.key} className="flex flex-col">
                        <label className="text-lg font-medium capitalize mb-2">
                            {item.label}
                        </label>
                        <input
                            type="text"
                            value={item.value}
                            onChange={(e) => handleChange(item.key, e.target.value)}
                            disabled={!isEditing}
                            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder={`Nhập link ${item.label}...`}
                        />
                    </div>
                ))}
            </div>

            {isEditing && (
                <div className="mt-6 flex justify-end">
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                        <i className="fa fa-save"/> Lưu
                    </button>
                </div>
            )}
        </div>
    );
}