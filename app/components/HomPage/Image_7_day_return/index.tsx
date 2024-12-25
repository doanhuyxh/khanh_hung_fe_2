'use client'

import Image from "next/image";

export default function Image_7_day_return() {
    return (
        <div className="relative w-36 h-36 flex justify-center items-center">
            <div className="absolute inset-0 animate-spin animate-infinite animate-duration-1000 animate-ease-linear">
                <Image
                    src={"/assets/images/mn-refund-img.svg"}
                    alt=""
                    className="w-full h-full object-contain"
                    width={100}
                    height={100}
                />
            </div>
            <div className="absolute">
                <Image
                    src={"/assets/images/mn-refund-txt.svg"}
                    alt=""
                    className="w-16 h-auto object-contain"
                    width={100}
                    height={100}
                />
            </div>
        </div>
    )
}