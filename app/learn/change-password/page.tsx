'use client'

import toast from "react-hot-toast"
import { useState } from "react"
import axiosCustomerConfig from "@/app/_libs/configs/axiosCustomerConfig"

export default function ChangePassword() {

    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleChangePassword = () => {

        if (newPassword != confirmPassword) {
            toast.error("Mật khẩu không khớp", {
                duration: 3000,
                position: "top-right",
                style: {
                    background: "red",
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                }
            })

            return;
        }

        axiosCustomerConfig.post("/Customer/set-password", {
            newPassword
        })
            .then((res: any) => {
                const code = res.code;
                if (code === 200) {
                    toast.success("Cập nhật mật khẩu thành công", {
                        duration: 3000,
                        position: "top-right",
                        style: {
                            background: "green",
                            color: "white",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                        }
                    })
                } else {
                    toast.error("Cập nhật mật khẩu thất bại", {
                        duration: 3000,
                        position: "top-right",
                        style: {
                            background: "red",
                            color: "white",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                        }
                    })
                }
            })
            .catch(() => {
                toast.error("Cập nhật mật khẩu thất bại", {
                    duration: 3000,
                    position: "top-right",
                    style: {
                        background: "red",
                        color: "white",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                    }
                })
            })
    }

    return (
        <div className="container m-auto mt-10 lg:mt-20 ">
            <div className="w-full flex justify-center items-center">
                <h1 className="text-3xl lg:text-5xl font-bold transform   text-color-secondary">Bổ sung mật khẩu</h1>
            </div>
            <div className="w-11/12 lg:w-10/12 m-auto p-10 lg:p-30 shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-xl mt-10 bg-white">
                <div className="w-full flex flex-col lg:flex-row lg:gap-50 lg:p-8">
                    <div className="text-center mb-8 hidden lg:block">
                        <h2 className="text-nowrap font-bold text-xl lg:text-3xl text-gray-800">Bổ sung mật khẩu</h2>
                    </div>
                    <div className="mx-auto w-full h-full space-y-6 ">
                        <div className="w-full">
                            <input
                                type="password"
                                className="w-full p-5 border border-gray-300 rounded-lg text-3xl transition-all outline-none"
                                placeholder="Mật khẩu mới"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>

                        <div className="w-full">
                            <input
                                type="password"
                                className="w-full p-5 border border-gray-300 rounded-lg text-3xl transition-all outline-none"
                                placeholder="Nhập lại khẩu mới"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-end items-center px-8 mt-10 lg:mt-0">
                    <button className="bg-color-primary text-white py-4 px-4 rounded-lg text-3xl transition-colors text-nowrap cursor-pointer" onClick={handleChangePassword}>
                        Cập nhật mật khẩu
                    </button>
                </div>
            </div>
        </div>
    )
}