
import Image from 'next/image'

export default function BannerSecond() {

    return (
        <div className="bg-[#1b2021] w-full h-fit">

            <div className="container m-auto py-[100px]">

                <div
                    className="w-11/12 lg:w-full px-4 flex lg:flex-row flex-col gap-10 lg:gap-0 lg:justify-evenly justify-center items-center lg:items-start mb-20">
                    <p className="text-white text-3xl lg:max-w-[300px]">Quy trình ba bước giúp bạn bán bất cứ thứ
                        gì...</p>
                    <p className="text-white text-[15px] lg:max-w-[500px]">
                        Ba bước đơn giản giúp bạn kiếm nhiều tiền với kinh doanh online
                        trong thời gian kỷ lục, bất chấp suy thoái, khủng hoảng…
                        <strong>TIỀN BẠC thích TỐC ĐỘ!</strong>
                    </p>
                </div>

                <div
                    className=" w-11/12 lg:w-full flex flex-col lg:flex-row gap-10 lg:gap-0 justify-center items-center lg:justify-evenly m-auto mb-54">

                    <div className="flex flex-col gap-5 max-w-[400px]">
                        <div className="flex items-center justify-between gap-2">
                            <div className="elementor-icon">
                                <i aria-hidden="true" style={{ fontSize: "50px" }} className="far fa-edit"></i>
                            </div>
                            <p className="text-white text-5xl">02</p>
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <p className='text-white text-4xl font-italic font-[600]'>Tối ưu quảng cáo</p>
                            <p className="text-white">Tối ưu được bài quảng cáo với Tỷ Lệ Chuyển Đổi Cao.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 max-w-[400px]">
                        <div className="flex items-center justify-between gap-2">
                            <div className="elementor-icon">
                                <i aria-hidden="true" style={{ fontSize: "50px" }} className="fab fa-adversal"></i>
                            </div>
                            <p className="text-white text-5xl">02</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className='text-white text-4xl font-italic font-[600]'>Chạy quảng cáo</p>
                            <p className="text-white">Chạy quảng cáo để tiếp cận nguồn traffic lạnh dồi dào (Facebook
                                Ads, Google Ads, Tiktok Ads...)</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 max-w-[400px]">
                        <div className="flex items-center justify-between gap-2">
                            <div className="elementor-icon">
                                <i aria-hidden="true" style={{ fontSize: "50px" }} className="far fa-chart-bar"></i>
                            </div>
                            <p className="text-white text-5xl">03</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className='text-white text-4xl font-italic font-[600]'>Thuyết phục</p>
                            <p className="text-white">Thuyết phục khách mua hàng & tự động hóa quy trình bán hàng với
                                trang bán hàng (sale page)</p>
                        </div>
                    </div>
                </div>

                <div className='w-11/12 lg:w-full flex lg:flex-row flex-col gap-10 lg:gap-0 justify-center items-center lg:justify-evenly m-auto mb-30'>
                    <p className="text-white text-5xl font-[700]">Quality course by world-<br />class tutors</p>
                    <p className="text-white text-lg">
                        Lưu lượng truy cập (traffic) rất quan trọng, nhưng nó không có ý nghĩa <br />
                        gì nhiều nếu không có chuyển đổi.<br />
                        Chìa khóa để tăng vọt tỷ lệ chuyển đổi là Copywriting.
                    </p>
                </div>

                <div className="w-11/12 lg:w-full flex lg:flex-row flex-col gap-10 lg:gap-0 justify-center lg:items-stretch lg:justify-evenly m-auto mb-30">

                    <div className="w-11/12 lg:w-[40%] relative m-auto">
                        <div className="absolute bg-white top-2 right-2 text-4xl px-3 bg-opacity-80">Bacsic</div>
                        <div className='w-full flex flex-col gap-6 elementor-element-populated px-5 pb-10 rounded-md'>
                            <div className='w-full flex items-center justify-center gap-5'>
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
                            <div className='flex flex-col gap-2'>
                                <h5 className='text-white text-4xl font-[600]'>Conversion Copywriting</h5>
                                <p className="text-white text-[16px]">Nó bao gồm các kỹ thuật “viết quảng cáo chuyển đổi” dành cho những ai muốn bắt đầu tạo ra tiền mặt từ văn bản.</p>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex gap-1 items-center '>
                                    <div style={{ width: "10%", borderRadius: "50%", overflow: "hidden" }}>
                                        <Image
                                            src="https://borntowrite.vn/wp-content/uploads/2024/08/300x300.jpg"
                                            alt="300x300"
                                            width={1080}
                                            height={1080}
                                            sizes="(max-width: 1080px) 100vw, 1080px"
                                        />
                                    </div>
                                    <p className='text-white'>Sơn nguyên</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <i aria-hidden="true" className="text-white fas fa-book-open"></i>
                                    <p className='text-nowrap text-white'>23 Bài Học</p>
                                </div>
                            </div>
                        </div>
                    </div>                    

                    <div className="w-11/12 lg:w-[40%]  relative m-auto">
                        <div className="absolute bg-white top-2 right-2 text-4xl px-3 bg-opacity-80">Master</div>
                        <div className='w-full flex flex-col gap-6 elementor-element-populated px-5 pb-10 rounded-md'>
                            <div className='w-full flex items-center justify-center gap-5'>
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
                            <div className='flex flex-col gap-2'>
                                <h5 className='text-white text-4xl font-[600]'>Master Copywriting</h5>
                                <p className="text-white text-[16px]">Trong khóa học này bạn sẽ được khám phá các thủ thuật thao túng cực kỳ tàn nhẫn để tác động vào “bản ngã” của con người, nhằm phục vụ cho mục đích bán hàng.</p>
                                <p className="text-white text-[16px]">Mà đã là con người, thì chưa một ai chối bỏ được bản ngã! (Tôi vẫn luôn run rẩy mỗi khi nhắc đến điều này).</p>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex gap-1 items-center '>
                                    <div style={{ width: "10%", borderRadius: "50%", overflow: "hidden" }}>
                                        <Image
                                            src="https://borntowrite.vn/wp-content/uploads/2024/08/300x300.jpg"
                                            alt="300x300"
                                            width={1080}
                                            height={1080}
                                            sizes="(max-width: 1080px) 100vw, 1080px"
                                        />
                                    </div>
                                    <p className='text-white'>Sơn nguyên</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <i aria-hidden="true" className="text-white fas fa-book-open"></i>
                                    <p className='text-nowrap text-white'>32 Bài Học</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}