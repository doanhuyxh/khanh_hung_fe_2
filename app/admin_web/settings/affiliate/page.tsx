'use client'

import { EditorReactQuill } from "@/app/components/Editor";
import axiosInstance from "@/app/libs/configs/axiosAdminConfig";
import axiosCustomerConfig from "@/app/libs/configs/axiosCustomerConfig";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function Affiliate() {
    const [value, setValue] = useState('');

    const [activeTab, setActiveTab] = useState('policy');
    const handleEditorChange = (content: string) => {
        setValue(content);
    }

    const handleSavePolicy = () => {
        const formData = new FormData();
        formData.append('key', 'affiliate_policy');
        formData.append('value', value);
        axiosCustomerConfig.post('/web_config/add-or-update', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(() => {
                toast.success('Lưu thành công', {
                    position: "top-right",
                })
            })
    }

    const handleSaveAffiliateInfo = () => {
        console.log(affiliateLevel);
        axiosInstance.post('/affiliate/UpdateLevel', affiliateLevel)
            .then(() => {
                toast.success('Cập nhật thành công', {
                    position: "top-right",
                });
            })
            .catch(() => {
                toast.error('Cập nhật thất bại', {
                    position: "top-right",
                });
            });
    }

    const [affiliateLevel, setAffiliateLevel] = useState<any[]>([]);

    useEffect(() => {
        axiosInstance.get('/affiliate/GetAllAffiliateLevel')
            .then((res) => {
                setAffiliateLevel(res.data)
            })

        axiosInstance.get('/affiliate/GetAffiliatePolicy')
            .then((res) => {
                setValue(res.data)
            })
    }, [])

    const renderAffiliateInfo = () => (
        <div className="flex flex-col justify-center items-center gap-10">
            <h3 className="text-center text-2xl font-bold">Thông tin Level Affiliate</h3>
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-2">
                    <p className="text-center my-2">Cấp độ Affiliate</p>
                    {affiliateLevel.map((item, index) => (
                        <div key={index} className="flex flex-row items-center justify-center align-middle gap-4">
                            <p className="px-2 py-2">{item.level}</p>
                            <div className="flex flex-col gap-1">
                                <label>Hoa hồng:</label>
                                <input
                                    type="number"
                                    value={item.commissionRate}
                                    onChange={(e) => {
                                        const newAffiliateLevel = [...affiliateLevel];
                                        newAffiliateLevel[index].commissionRate = e.target.value;
                                        setAffiliateLevel(newAffiliateLevel);
                                    }}
                                    className="border rounded p-1"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label>Chiết khấu:</label>
                                <input
                                    type="number"
                                    value={item.discountRate}
                                    onChange={(e) => {
                                        const newAffiliateLevel = [...affiliateLevel];
                                        newAffiliateLevel[index].discountRate = e.target.value;
                                        setAffiliateLevel(newAffiliateLevel);
                                    }}
                                    className="border rounded p-1"
                                />
                            </div>
                        </div>
                    ))}
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                        onClick={handleSaveAffiliateInfo}
                    >
                        <i className="fa fa-save" /> Lưu
                    </button>
                </div>
            </div>
        </div>
    )

    const renderPolicy = () => (
        <div className="w-full h-auto pb-10">
            <div className="flex flex-col gap-4 mb-3">
                <h3 className="text-center text-2xl font-bold">Chính sách Affiliate</h3>
                <EditorReactQuill value={value} onChange={handleEditorChange} />
            </div>
            <button className="bg-blue-500 w-25 text-white px-4 py-2 rounded-md float-end" onClick={handleSavePolicy}>
                <i className="fa fa-save" /> Lưu
            </button>
        </div>
    )

    return (
        <div>
            <div className="flex border-b mb-4">
                <button
                    className={`px-4 py-2 ${activeTab === 'policy' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
                    onClick={() => setActiveTab('policy')}
                >
                    Chính sách
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === 'info' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
                    onClick={() => setActiveTab('info')}
                >
                    Thông tin Level
                </button>
            </div>

            {activeTab === 'policy' && renderPolicy()}
            {activeTab === 'info' && renderAffiliateInfo()}
        </div>
    )
}