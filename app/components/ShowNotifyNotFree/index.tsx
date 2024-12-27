import { gsap } from "gsap";
import { useEffect } from "react";
import Image from "next/image";

import './index.css';
import ButtonUpgrade from "../Button/ButtonUpgrade";
import axiosCustomerConfig from "@/app/libs/configs/axiosCustomerConfig";

export default function ShowNotifyNotFree() {

    const GetFreeLesson = ()=>{
        axiosCustomerConfig.get("/course/get-first-free-lesson")
        .then(res=>{
            window.location.href="/study?lesson="+res.data.id
        })
    }


    useEffect(() => {
        gsap.fromTo(
            ".text_fill_color",
            {
                opacity: 0,
                y: -50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power1.inOut",
            }
        );
    }, []);

    return (
        <div className="w-full h-full bg-[#380b42] flex flex-col gap-4 justify-center items-center font-inter">
            <p className="text_fill_color uppercase text-center">
                Video này chỉ dành cho <br /> thành viên trả phí
            </p>
            <p className="text-white text-center">
                Hùng có nhiều video Free khác rất chất lượng,<br />
                bạn hãy xem các video FREE khác nhé!
            </p>
            <div className="flex flex-col lg:flex-row gap-3">
                <ButtonUpgrade/>
                <div onClick={GetFreeLesson} className="flex gap-3 relative items-end lg:items-center cursor-pointer group">
                    <span className="cursor-pointer group-hover:text-blue-500">Video</span>
                    <span className="flex gap-1 bg-green-700 px-1 rounded-xl text-nowrap cursor-pointer">
                        <Image src={"/assets/images/ic-tag-free.svg"} width={13} height={13} alt=""/>
                        Free
                    </span>
                    <span className="text-white cursor-pointer group-hover:text-blue-500">tiếp theo <i className="fa-solid fa-angle-right" style={{color:"white"}}></i></span>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform translate-y-[100%]"></div>
                </div>
            </div>
        </div>
    );
}
