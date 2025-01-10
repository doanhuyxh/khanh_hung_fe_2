'use client';

import './index.css'
import Image from "next/image";
import {useEffect, useState} from 'react';
import axiosCustomerConfig from "@/app/_libs/configs/axiosCustomerConfig";
export default function Footer(){
    const [logo, setLogo] = useState<string>('')
    useEffect(()=>{
        axiosCustomerConfig.get("/public/social-key?key=logo")
            .then(res=>{
                setLogo(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])

    return (
        <footer className="relative">
            <div className="absolute w-full h-full bg-black opacity-60 z-[-1]"></div>
            <div className="container py-20 px-4 m-auto flex flex-col lg:flex-row lg:justify-evenly gap-10 z-10">

                <div className="flex flex-col gap-2">
                    {logo && <Image src={logo} alt={"logo"} width={100} height={100}/>}
                    <p className="font-[300] text-white text-[17px] max-w-[300px]">
                        vuacontent là trang hướng dẫn ‘viết quảng cáo chuyển đổi‘ kiếm tiền NGAY.
                        Nó được thiết kế dành riêng cho người kinh doanh đang muốn bùng nổ doanh số đơn hàng!
                    </p>
                    <hr className="w-full h-1 bg-white"/>
                </div>

                <div className="flex flex-col gap-3 text-white justify-center">
                    <a className="">Kết bạn</a>
                    <a className="">Colleague Club</a>
                    <a className="">Hỏi đáp</a>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-white underline font-bold text-[18px]">Liên hệ với tôi</p>
                    <p className="text-white">
                        <i aria-hidden="true" className="fas fa-phone text-[#26A5BE]"></i> {": "} 0395.018.203
                    </p>
                    <p className="text-white">
                        <i aria-hidden="true" className="fas fa-envelope text-[#26A5BE]"></i> {": "} admin@borntowrite.vn
                    </p>
                    <p className="text-white">
                        <i aria-hidden="true" className="fas fa-home text-[#26A5BE]"></i> {": "} ACM Build, 96 Cao Thắng, P.4, Q3
                    </p>

                </div>
            </div>
        </footer>
    )
}