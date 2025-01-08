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
        </div>
    );
}
