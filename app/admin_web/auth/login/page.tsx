'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';    

import axiosInstance from '@/app/libs/configs/axiosAdminConfig';
import { ResponseData } from '@/app/libs/types';

export default function Login() {
    const [email, setEmail] = useState<string>('admin');
    const [password, setPassword] = useState<string>('123456');
    const router = useRouter()

    const HandleLogin = async () => {
        
        const response:ResponseData = await axiosInstance.post("/auth/login", {
            email: email,
            password: password
        })

        if (response.code == 200) {
            const data = response.data as {
                refreshToken: string;
                accessToken: string;
                user: {
                    id: string;
                    role: string;
                };
            };
            localStorage.setItem("refreshToken", data.refreshToken)
            localStorage.setItem("accessToken", data.accessToken)
            localStorage.setItem("user", JSON.stringify(data.user))
            router.push("/admin_web/dashboard")
        }else{
            toast.error(response.message, {
                duration: 5000,
                position: "top-right"
            })
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Đăng nhập Quản trị viên</h1>
                </div>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Nhập email của bạn"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm sm:text-base font-medium text-gray-700">
                            Mật khẩu
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Nhập mật khẩu của bạn"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm sm:text-base text-gray-900">
                                Ghi nhớ đăng nhập
                            </label>
                        </div>

                        <div className="text-sm sm:text-base">
                            <a href="/admin_web/auth/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                                Quên mật khẩu?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            onClick={HandleLogin}
                            type="button"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Đăng nhập
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
