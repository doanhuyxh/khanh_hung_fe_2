
import Image from 'next/image'

export default function BannerFourth() {

    return (
        <div className="py-30 px-10 bg-[#7c0fd1]">
            <div className="max-w-[1200px] text-white m-auto">
                <div className="flex flex-col items-center gap-5 mb-20">
                    <h3 className='text-white text-[4rem] font-[600]'>Mọi người nói gì.</h3>
                </div>
                <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">

                    <div className="flex flex-col gap-2 max-w-[380px]">
                        <p>"Nếu bạn giống tôi, từng nghĩ mình chẳng bao giờ bán được bất cứ thứ gì đắt tiền trên mạng, khóa học này sẽ khiến bạn nghĩ lại.
                            Có nhiều khóa học về chủ đề hướng dẫn viết quảng cáo nhưng tôi cam đoan đây là khóa học duy nhất giúp tôi viết quảng cáo 'ra đơn'..."
                        </p>
                        <div className="flex flex-row justify-start items-center gap-2">
                            <span className='w-24 rounded-full overflow-hidden'>
                                <Image
                                    src="https://borntowrite.vn/wp-content/uploads/2024/08/431487835_7272906562820406_1003714109076712423_n.jpg"
                                    alt="Mô tả hình ảnh"
                                    width={199}
                                    height={200}
                                    loading="lazy"
                                    sizes="(max-width: 199px) 100vw, 199px"
                                />
                            </span>
                            <div className="flex flex-col">
                                <p className="font-bold">Đoàn Quang Huy</p>
                                <p className="">Business Manager</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col gap-2 max-w-[380px]">
                        <p>"Mới set camp xong, sau vài ngày lượt inbox của page đã gấp 12 lần so với cùng một ngân sách bài ads gần nhất. Doanh số thực tế của tôi sau một tháng tăng 600%.
                            Về căn bản lớp học này đáng giá từng xu vì nó giúp bạn kiếm tiền thay vì làm bạn tốn tiền"
                        </p>
                        <div className="flex flex-row justify-start items-center gap-2">
                            <span className='w-24 rounded-full overflow-hidden'>
                                <Image
                                    src="https://borntowrite.vn/wp-content/uploads/2024/08/46491637_1664297420383634_1236891748785979392_n.jpg"
                                    alt="Mô tả hình ảnh"
                                    width={199}
                                    height={200}
                                    loading="lazy"
                                    sizes="(max-width: 199px) 100vw, 199px"
                                />
                            </span>
                            <div className="flex flex-col">
                                <p className="font-bold">Bích Duyên</p>
                                <p className="">Owner</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 max-w-[380px]">
                        <p>"Khóa học này giúp tôi hai điều.
                            Một là nó giúp tôi thật sự kiếm được tiền từ kỹ năng Copywriting, hai là nó giúp tôi viết giỏi hơn... nhưng tôi ko chắc lắm về điều thứ hai.
                            Nhìn chung tôi nhận thấy là chỉ có một cách duy nhất khiến tôi thất bại sau khi hoàn thành lớp học này đó là <strong>"Không Làm Bất Cứ Điều Gì Cả"</strong>
                        </p>
                        <div className="flex flex-row justify-start items-center gap-2">
                            <span className='w-24 h-24 rounded-full overflow-hidden'>
                                <Image
                                    src="https://borntowrite.vn/wp-content/uploads/2024/08/333031820_897435331501750_6130442285133360897_n.jpg"
                                    alt="Mô tả hình ảnh"
                                    width={199}
                                    height={200}
                                    loading="lazy"
                                    sizes="(max-width: 199px) 100vw, 199px"
                                />
                            </span>
                            <div className="flex flex-col">
                                <p className="font-bold">N. Anh Thắng</p>
                                <p className="">Owner</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}