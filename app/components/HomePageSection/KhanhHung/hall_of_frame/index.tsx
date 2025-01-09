'use client'

import Image from "next/image"
import {useState} from "react"

export default function HallOfFrame() {


    return (
        <div id="hall_of_wall" className='w-full pb-50 relative bg-[#7c0fd1]'>

            <div className="w-full h-auto absolute top-[-1%] left-0 z-[0] bg-inherit">
                <Image src={"/template/assets/images/home/colleague-success-decor.png"} width={1000} height={10} alt=""
                       style={{width: "100%", height: "100%", objectFit: "cover"}}/>
            </div>

            <div className="w-full h-fit relative">
                <div className='w-1/2 h-auto m-auto mb-10 max-w-[1920px]'>

                    <div className='w-full relative py-5'>
                        <p className='desc'>Chìa khoá Copywriting </p>
                    </div>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-9/12 m-auto max-w-[1920px]">

                    <div className="flex flex-col gap-5 bg-white py-5 px-6 rounded-xl">
                        <div className="car_item_title">
                            <p className="font-bold text-3xl text-pink-600">Conversion Copywriting</p>
                        </div>
                        <div className="car_item_des min-h-[1   00px] mt-10">
                            <p>Nó bao gồm các kỹ thuật “viết quảng cáo chuyển đổi” dành cho những ai muốn bắt đầu tạo ra
                                tiền mặt từ văn bản.</p>
                        </div>
                        <div className="car_item_image">
                            <Image
                                src="/wp-content/uploads/2024/09/basic-xoa-nen-.png"
                                alt="basic-xoa-nen"
                                width={1215}
                                height={1215}
                                sizes="(max-width: 1215px) 100vw, 1215px"
                                style={{
                                    borderRadius: "10px",
                                    width: "100%",
                                    height: "auto",
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 bg-white py-5 px-6 rounded-xl">
                        <div className="car_item_title">
                            <p className="font-bold text-3xl text-pink-600">Master Copywriting</p>
                        </div>
                        <div className="car_item_des min-h-[100px] mt-10">
                            <p>Trong khóa học này bạn sẽ được khám phá các thủ thuật thao túng cực kỳ tàn nhẫn để tác động vào “bản ngã” của con người, nhằm phục vụ cho mục đích bán hàng.</p>
                            <p>Mà đã là con người, thì chưa một ai chối bỏ được bản ngã! (Tôi vẫn luôn run rẩy mỗi khi nhắc đến điều này).</p>
                        </div>
                        <div className="car_item_image">
                            <Image
                                src="/wp-content/uploads/2024/09/master-xoa-nen.png"
                                alt="basic-xoa-nen"
                                width={1215}
                                height={1215}
                                sizes="(max-width: 1215px) 100vw, 1215px"
                                style={{
                                    borderRadius: "10px",
                                    width: "100%",
                                    height: "auto",
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}