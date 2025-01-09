'use client'

import Image from "next/image"
import { useState } from "react"

export default function HallOfFrame() {

    const [fame, setFame] = useState([
        {
            "name": "Quyết Trần Academy",
            "preview": "/template/assets/images/home/hall-of-fame-item-quyet-tran.jpg",
            "avatar": "/template/assets/images/home/hall-of-fame-logo-quyet-tran.png"
        },

        {
            "name": "Academy Of Floral Art",
            "preview": "/template/assets/images/home/hall-of-fame-item-duy-thanh.jpg",
            "avatar": "/template/assets/images/home/hall-of-fame-logo-duy-thanh.png"
        },
        {
            "name": "Học viện bán hàng",
            "preview": "/template/assets/images/home/hall-of-fame-item-hvbh.jpg",
            "avatar": "/template/assets/images/home/hall-of-fame-logo-hvbh.png"
        },
        {
            "name": "3M Academy",
            "preview": "/template/assets/images/home/hall-of-fame-item-3m.jpg",
            "avatar": "/template/assets/images/home/hall-of-fame-logo-3m.png"
        },
        {
            "name": "Quyết Trần Academy",
            "preview": "/template/assets/images/home/hall-of-fame-item-quyet-tran.jpg",
            "avatar": "/template/assets/images/home/hall-of-fame-logo-quyet-tran.png"
        },
        {
            "name": "Quyết Trần Academy",
            "preview": "/template/assets/images/home/hall-of-fame-item-quyet-tran.jpg",
            "avatar": "/template/assets/images/home/hall-of-fame-logo-quyet-tran.png"
        },
        {
            "name": "Quyết Trần Academy",
            "preview": "/template/assets/images/home/hall-of-fame-item-quyet-tran.jpg",
            "avatar": "/template/assets/images/home/hall-of-fame-logo-quyet-tran.png"
        },
        {
            "name": "Quyết Trần Academy",
            "preview": "/template/assets/images/home/hall-of-fame-item-quyet-tran.jpg",
            "avatar": "/template/assets/images/home/hall-of-fame-logo-quyet-tran.png"
        },
        {
            "name": "Quyết Trần Academy",
            "preview": "/template/assets/images/home/hall-of-fame-item-quyet-tran.jpg",
            "avatar": "/template/assets/images/home/hall-of-fame-logo-quyet-tran.png"
        },
        {
            "name": "Quyết Trần Academy",
            "preview": "/template/assets/images/home/hall-of-fame-item-quyet-tran.jpg",
            "avatar": "/template/assets/images/home/hall-of-fame-logo-quyet-tran.png"
        },

    ])


    return (
        <div id="hall_of_wall" className='w-full pb-50 relative bg-[#7c0fd1]'>

            <div className="w-full h-auto absolute top-[-1%] left-0 z-[0] bg-inherit">
                <Image src={"/template/assets/images/home/colleague-success-decor.png"} width={1000} height={10} alt="" style={{ width: "100%", height: "100%", objectFit:"cover" }} />
            </div>

            <div className="w-full h-fit relative">
                <div className='w-1/2 h-auto m-auto mb-10 max-w-[1920px]'>

                    <div className='w-full relative py-5'>
                        <p className='desc'>Chìa khoá Copywriting </p>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-9/12 m-auto max-w-[1920px]">

                    {fame.map((item, index) => (
                        <div className="flex flex-col gap-10 p-5 rounded-2xl bg-white" key={index}>
                            <div className="flex flex-row justify-start gap-2 items-center">
                                <span className="w-12 h-12">
                                    <Image
                                        src={item.avatar}
                                        alt="100"
                                        width={100}
                                        height={100}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </span>
                                <p className="font-[500]">{item.name}</p>
                            </div>
                            <div className="h-auto w-full rounded-xl overflow-hidden">
                                <Image
                                    src={item.preview}
                                    alt=""
                                    width={100}
                                    height={100}
                                    style={{ width: '100%', height: 'auto' }}
                                    className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}