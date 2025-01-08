'use client'


import Image from "next/image";

export default function UpgradeForm() {

    return (
        <div className="w-full max-w-[1920px] h-auto p-4 flex flex-col xl:gap-10 items-center">
            <div className="w-1/2 text-center">
                <p className="font-[600] leading-[150%] text-[3.2rem] text-[#f5851e]">Bắt đầu ngay hôm nay</p>
                <div className="w-full h-2">
                    <Image src={"/assets/images/Vector_title.svg"} width={100} height={20} alt="" style={{ width: "100%", height: "auto" }} />
                </div>
            </div>
        </div>
    )
}