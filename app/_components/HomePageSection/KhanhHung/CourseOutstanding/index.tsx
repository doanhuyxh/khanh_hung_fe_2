import Image from "next/image";

export default function CourseOutstanding(){

    return (
        <div className="w-full pb-70 relative bg-[#7c0fd1]">
            <div className="w-full h-full absolute top-[-1%] left-0 z-[0] bg-inherit ">
                <Image src={"/template/assets/images/home/colleague-success-decor.png"} width={1000} height={10} alt=""
                       style={{width: "100%", height: "100%", objectFit: "cover"}}/>
            </div>

            <div className="w-full h-fit relative">
                <div className='w-1/2 h-auto m-auto mb-10 max-w-[1920px]'>
                    <div className="w-full mt-4 mb-10 animate-jump-in">
                        <Image
                            alt=""
                            loading="lazy"
                            width={100}
                            height={100}
                            decoding="async"
                            data-nimg={1}
                            className="w-full"
                            src="/assets/images/home/chia_khoa_copy.svg"
                            style={{color: "transparent", width: "100%", height: "auto"}}
                        />
                    </div>


                    <div className='w-full relative py-5'>
                        <p className='desc text-nowrap'>Chìa khoá Copywriting </p>
                    </div>

                </div>

                <div
                    className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 w-11/12 lg:w-8/12 m-auto max-w-[1920px]">

                    <div className="flex flex-col justify-start gap-5 bg-white px-12 rounded-xl max-w-[450px] min-w-[380px] min-h-[660px] max-h-[700px]">
                        <div className="w-full bg-transparent h-10"></div>
                        <div className="car_item_title">
                            <p className="font-bold text-4xl text-pink-600 hover:scale-105 cursor-pointer">Conversion
                                Copywriting</p>
                        </div>
                        <div className="car_item_des lg:min-h-[100px] lg:element mt-10">
                            <p className="hover:text-pink-500 cursor-pointer">Nó bao gồm các kỹ thuật “viết quảng cáo
                                chuyển đổi” dành cho những ai muốn bắt đầu tạo ra
                                tiền mặt từ văn bản.</p>
                        </div>
                        <div className="car_item_image hover:scale-105 transition-all duration-300">
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

                    <div className="flex flex-col justify-start gap-5 bg-white px-12 rounded-xl max-w-[450px] relative">
                        <div className="w-full bg-transparent h-10"></div>
                        <div className="car_item_title">
                            <p className="font-bold text-4xl text-pink-600  hover:scale-105 cursor-pointer">Master
                                Copywriting</p>
                        </div>
                        <div className="car_item_des min-h-[100px] mt-10 element">
                            <p className="hover:text-pink-500 cursor-pointer">
                                Trong khóa học này bạn sẽ được khám phá các thủ thuật thao túng cực kỳ tàn nhẫn để tác
                                động vào “bản ngã” của con người, nhằm phục vụ cho mục đích bán hàng. <br/>
                                Mà đã là con người, thì chưa một ai chối bỏ được bản ngã! (Tôi vẫn luôn run rẩy mỗi khi
                                nhắc đến điều này).
                            </p>
                        </div>
                        <div className="car_item_image hover:scale-105 transition-all duration-300">
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