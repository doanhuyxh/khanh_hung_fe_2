'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function GuestActions() {

    const router = useRouter()
    const navigation = (key:string)=>{
        router.push(key)
    }

    return (
        <div className="flex gap-2">
            <div onClick={()=>navigation("/#dang-nhap")} className="btn_login cursor-pointer">
                <span className="text-nowrap cursor-pointer">Đăng nhập</span>
            </div>
            <div onClick={()=>navigation("/#dang-ky")} className="btn_register cursor-pointer">
                <span className="text-nowrap">Đăng ký và học thử ngay</span>
            </div>
            <div onClick={()=>navigation("/#dang-ky")} className="btn_register_mobile flex-col text-[1.2rem]">
                <p className="text-nowrap text-center text-white">Học ngay</p>
                <p className="text-nowrap uppercase text-center text-white">Hoàn toàn miễn phí</p>
            </div>
            
        </div>
    );
}
