"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import axiosInstance from "@/app/libs/configs/axiosConfig";
import { ResponseData } from "@/app/libs/types";

export default function ForgotPassword(){
   
    const [email, setEmail] = useState<string>('');
    const router = useRouter();

    const handleForgotPassword = async () => {
        try {
            const response:ResponseData = await axiosInstance.post("/auth/forgot-password", {
                email: email
            });

            if (response.code === 200) {
                toast.success('Vui lòng kiểm tra email của bạn để lấy lại mật khẩu', {
                    duration: 5000,
                    position: "top-right"
                });
                router.push('/admin_web/auth/login');
            } else {
                toast.error(response.message, {
                    duration: 5000, 
                    position: "top-right"
                });
            }
        } catch (error) {
            console.log(error)
            toast.error('Có lỗi xảy ra, vui lòng thử lại sau', {
                duration: 5000,
                position: "top-right" 
            });
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Quên mật khẩu</h1>
                    <p className="mt-2 text-gray-600">Nhập email của bạn để lấy lại mật khẩu</p>
                </div>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Nhập email của bạn"
                            required
                        />
                    </div>

                    <div>
                        <button
                            type="button"
                            onClick={handleForgotPassword}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Gửi yêu cầu
                        </button>
                    </div>

                    <div className="text-center">
                        <a href="/admin_web/auth/login" className="font-medium text-blue-600 hover:text-blue-500">
                            Quay lại đăng nhập
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}