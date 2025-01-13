'use client';

import React from 'react';
import Image from 'next/image';
import { Customer } from '@/app/_libs/types';
import axiosCustomerConfig from '@/app/_libs/configs/axiosCustomerConfig';

export default function UserDropdown({ isDropdown, user, setIsDropdown }: { isDropdown: boolean, user: Customer, setIsDropdown: React.Dispatch<React.SetStateAction<boolean>> }) {

    const handleLogout = () => {
        sessionStorage.clear()
        localStorage.clear()

        axiosCustomerConfig.get(`Auth/LogOut?id=${user.id}`).then(() => {
            window.location.href = "/"
        })
    }

    return (
        <div
            onMouseLeave={() => setIsDropdown(false)}
            className={`transition-all duration-300 absolute top-20 right-[-20px] z-99999 ${isDropdown ? 'dropdown_menu' : 'hidden'}`}
        >
            <ul className="dropdown_menu_item bg-white shadow-lg rounded-lg py-2">
                <li>
                    <a href="/learn/profile" className="flex items-center gap-2 px-5 py-3">
                        <div className="flex justify-center align-middle items-center transform translate-y-[-8px] w[20px]">
                            <Image src="/assets/images/header/user-icon.svg" alt="profile" width={20} height={20} />
                        </div>
                        <div className="text-nowrap text-xl flex flex-col gap-2 cursor-pointer">
                            <span className="text-gray-500 font-semibold">Mã khách hàng:</span>
                            <p className="text-black font-thin flex items-center gap-2">
                                {user?.code || ""}
                                <span>
                                    <Image src="/assets/images/header/tag-icon.svg" alt="copy" width={15} height={15} />
                                </span>
                            </p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/learn/profile" className="flex gap-2 px-5 py-3">
                        <div className="flex overflow-hidden w-[20px]">
                            <Image src="/assets/images/header/cup-icon.svg" alt="profile" width={15} height={15} />
                        </div>
                        <p className="text-gray-500 font-semibold cursor-pointer">
                            Affiliate Level:
                            <span className="mx-2 text-orange-500 font-semibold">
                                {user?.level_affiliate || ""}
                            </span>
                        </p>
                    </a>
                </li>
                <li>
                    <a href="/learn/change-password" className="flex items-center gap-2 px-5 py-3">
                        <div className="flex justify-center transform w-[20px] cursor-pointer">
                            <Image src="/assets/images/header/key-icon.svg" alt="profile" width={15} height={15} />
                        </div>
                        <div className="text-nowrap text-xl flex flex-col gap-2">
                            <p className="text-gray-500 font-semibold cursor-pointer">Đổi mật khẩu</p>
                        </div>
                    </a>
                </li>
                <li>
                    
                </li>
                <li className='logout_btn'>
                    <div onClick={handleLogout} className="flex items-center gap-2 px-5 py-3 cursor-pointer">
                        <div className="flex justify-center text-gray-500">
                            <Image src="/assets/images/header/window.svg" alt="profile" width={15} height={15} />
                        </div>
                        <div className="text-nowrap text-xl flex flex-col gap-2">
                            <p className="text-[#f04438] font-semibold cursor-pointer">Đăng xuất</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
