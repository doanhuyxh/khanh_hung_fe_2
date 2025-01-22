'use client';

import { LinearGradient } from 'react-text-gradients'
import Image from "next/image";
import UpgradeForm from '@/app/_components/HomePageSection/KhanhHung/UpgradeForm';

export default function UpgradePage() {

    

    return <div className='w-full min-h-screen flex flex-col items-center justify-start bg-[linear-gradient(180deg,#340658,#7c0fd1)]'>
        <div className='w-full max-w-[1920px] h-auto p-4 flex flex-col xl:gap-10 items-center' style={{ backgroundImage: `url('/assets/images/up-bg-top.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <div className="w-1/2 hidden lg:block lg:h-[220px] m-auto my-4 relative bg-transparent">
                <div className="absolute w-[75rem] max-w-full z-10">
                    <Image
                        src={"/assets/images/upp-top-title-1.png"}
                        width={100}
                        height={100}
                        alt=""
                        className="w-full h-auto"
                    />
                </div>
                <div className="absolute w-[100%] top-0 left-0 z-20 bg-transparent">
                    <Image
                        src={"/assets/images/upp-top-title-1.svg"}
                        width={100}
                        height={100}
                        alt=""
                        className="w-full h-auto"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2 font-[600] text-[2rem] items-center text-white">
                <p>Chào, Loki</p>
                <p>Hãy trở thành</p>
                <div className="flex gap-2 mb-4">
                    Đồng nghiệp thứ
                    <div className="w-fit h-auto align-middle rounded-lg bg-[#651d18] border border-[#f04438] overflow-hidden px-2 py-1 flex gap-1">
                        <p className="w-[2rem] inline-block text-center rounded bg-[linear-gradient(180deg,#f04438,#aa3028_45.5%,#f04438)]">4</p>
                        <p className="w-[2rem] inline-block text-center rounded bg-[linear-gradient(180deg,#f04438,#aa3028_45.5%,#f04438)]">4</p>
                        <p className="w-[2rem] inline-block text-center rounded bg-[linear-gradient(180deg,#f04438,#aa3028_45.5%,#f04438)]">4</p>
                    </div>
                    của Khánh hùng
                </div>

                <p className="text-[1.5rem]">Đồng nghiệp đã hiểu được </p>
                <p className="text-[1.5rem] font-semibold underline underline-offset-4">“ĐỘ NGON”  của E-Learning.</p>
                <p className="text-[1.2rem]"> Vậy còn chờ gì nữa</p>
            </div>

        </div>

        <div className='w-full max-w-[1920px] h-auto p-4 flex flex-col xl:gap-10 items-center'>
            <div className="w-1/2 text-center">
                <p className="font-[600] leading-[150%] text-[3.2rem] text-[#f5851e]">Bắt đầu ngay hôm nay</p>
                <div className="w-full h-2">
                    <Image src={"/assets/images/Vector_title.svg"} width={100} height={20} alt="" style={{ width: "100%", height: "auto" }} />
                </div>
            </div>

            <div className="w-8/12 flex flex-col items-center justify-center mt-10 px-20 py-10 rounded-xl bg-[#42006a]" style={{ border: "10px", borderColor: "#8b1dd0" }}>
                <div className='text-center'>
                    <p className='text-white font-[600] text-2xl'>Cơ hội làm ăn, tạo ra một nguồn thu nhập thụ động thật sự</p>
                    <LinearGradient gradient={['to left', '#c05c00 ,#c05c00']} color='#c05c00' style={{ fontSize: "2.4rem", fontWeight: 800 }}>
                        Chỉ dành riêng cho bạn <br />
                        Một chuyên gia thật sự
                    </LinearGradient>
                </div>
            </div>


            <div className='text-center'>
                <div className='w-[80rem] mx-auto max-w-full flex flex-col gap-[8px] text-white'>
                    <p>Bên cạnh độ ngon không bàn cãi thì</p>
                    <p className="font-semibold leading-[150%] text-[2.4rem]">TẠO RA KHOÁ HỌC VÀ THỰC SỰ THÀNH CÔNG VỚI E-LEARNING</p>
                </div>
            </div>
        </div>

        <div className='w-full h-auto p-4 flex flex-col items-center' style={{ backgroundImage: `url('/assets/images/up-bg-bottom.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <UpgradeForm />
        </div>

    </div>;
}