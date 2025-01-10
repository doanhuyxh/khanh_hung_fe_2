'use client'

import {useEffect, useState} from "react";
import Image from "next/image";
import {Customer} from "@/app/_libs/types";
import axiosCustomerConfig from "@/app/_libs/configs/axiosCustomerConfig";
import axiosConfig from "@/app/_libs/configs/axiosAdminConfig";

export default function ProfilePage() {

    const [staff, setStaff] = useState<Customer>()
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        const info = sessionStorage.getItem("staff")
        if (info !== null && info !== "" && info !== "undefined") {
            setStaff(JSON.parse(info))
        }
    }, [])

    if (!staff) {
        return <div>Loading...</div>
    }

    const handleEditClick = () => {
        setIsEditing(true)
    }

    const handleSaveClick = () => {
        setIsEditing(false)
        const formData = new FormData()
        formData.append("id", staff.id)
        formData.append("firstName", staff.firstName)
        formData.append("lastName", staff.lastName)
        formData.append("phoneNumber", staff.phoneNumber)
        formData.append("avatar", staff.avatar)
        axiosConfig.post("/staff_manager/update-info", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then((res:any) => {
            if (res.code === 200) {
                sessionStorage.setItem("staff", JSON.stringify(staff))
            }
        })
    }

    const handleImageChange = (e: any) => {
        const file = e.target.files[0]
        if (file) {
            const formData = new FormData()
            formData.append("file", file)
            axiosCustomerConfig.post("/upload/image", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                const url = res.data
                setStaff({...staff, avatar: url})
            })
        }
    }

    return (
        <div className="w-full h-auto flex gap-10 p-4">
            <label
                htmlFor={"image_handle"}
                className="w-full md:w-1/3 p-4 shadow-lg rounded-2xl flex flex-col justify-center items-center gap-2">
                <Image
                    src={staff?.avatar || "/images/user/user-01.png"}
                    alt="Admin Profile Picture"
                    width={150}
                    height={150}
                    className="rounded-full"
                />
                <input hidden type='file' id="image_handle" onChange={handleImageChange}/>
                <p className="text-xs opacity-25">click để cập nhật</p>
            </label>
            <div className="w-full md:w-2/3 p-4 shadow-lg rounded-3xl flex flex-col gap-4">
                <p className="text-lg font-semibold">Quyền hạn: <span className="font-normal">{staff?.role}</span></p>
                <p className="text-2xl font-semibold">Email/Tài khoản: <span
                    className="font-normal">{staff?.email}</span></p>
                <div className="text-2xl text-nowrap flex items-center gap-2">
                    <label className="font-semibold min-w-[10rem]">Họ:</label>
                    <input
                        type="text"
                        value={staff?.firstName}
                        onChange={(e) => setStaff({...staff, firstName: e.target.value})}
                        className="border rounded p-1 flex-1"
                        disabled={!isEditing}
                    />
                </div>
                <div className="text-2xl text-nowrap flex items-center gap-2">
                    <label className="font-semibold min-w-[10rem]">Tên:</label>
                    <input
                        type="text"
                        value={staff?.lastName}
                        onChange={(e) => setStaff({...staff, lastName: e.target.value})}
                        className="border rounded p-1 flex-1"
                        disabled={!isEditing}
                    />
                </div>
                <div className="text-2xl flex items-center gap-2">
                    <label className="font-semibold min-w-[10rem]">Số điện thoại:</label>
                    <input
                        type="text"
                        value={staff?.phoneNumber}
                        onChange={(e) => setStaff({...staff, phoneNumber: e.target.value})}
                        className="border rounded p-1 flex-1"
                        disabled={!isEditing}
                    />
                </div>
                <div className="flex gap-4 justify-end mt-4">
                    {isEditing ? (
                        <button onClick={handleSaveClick} className="bg-blue-500 text-white p-2 rounded">Lưu</button>
                    ) : (
                        <button onClick={handleEditClick} className="bg-green-500 text-white p-2 px-3 rounded">
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}