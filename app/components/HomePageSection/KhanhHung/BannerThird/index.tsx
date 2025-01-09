
import Image from 'next/image'


export default function BannerThird() {
    return (
        <div className="mx-auto px-4 pt-20 lg:pb-[15rem] bg-[#440873] relative">
            <div className="container flex justify-center m-auto">
                <div className="lg:min-w-[600px] max-w-[1200px] md:overflow-y-auto pb-20">
                    <div className="w-full flex flex-col gap-20 lg:gap-0 lg:flex-row lg:justify-between">

                        <div className="w-fit flex flex-col lg:ml-20 justify-center gap-4 text-wrap max-w-[600px] animate-fade-left animate-once animate-duration-1000 animate-delay-100 animate-ease-in-out">
                            <h6 className='text-white'>— Features</h6>
                            <p className="text-white text-[33px]">Tại sao bạn nên sử dụng</p>
                            <p className="text-white text-[33px]">Copywriting ngay khi có thể?</p>

                            <div className='ml-[50px] flex flex-col'>
                                <div className='flex gap-6 justify-start items-center'>
                                    <i aria-hidden="true" style={{ color: "white" }} className="fas fa-check-circle"></i>
                                    <p className='text-white font-[17px]'>Bài quảng cáo là “chuyên gia bán hàng online” làm việc 24/7. Bạn có thể bán được hàng ngay cả khi ngủ (tự động hóa)</p>
                                </div>
                                
                                <div className='flex gap-6 justify-start items-center'>
                                    <i aria-hidden="true" style={{ color: "white" }} className="fas fa-check-circle"></i>
                                    <p className='text-white font-[17px]'>Copywriting tương tự việc bạn có đội quân bán hàng ảo 10.000 người cùng lúc</p>
                                </div>

                                <div className='flex gap-6 justify-start items-center'>
                                    <i aria-hidden="true" style={{ color: "white" }} className="fas fa-check-circle"></i>
                                    <p className='text-white font-[17px]'>Bạn có thể viết bài quảng cáo một lần và kiếm tiền từ nó nhiều lần.</p>
                                </div>

                            </div>
                        </div>

                        <div className="h-auto w-10/12 lg:w-[45%] md:w-[50%] animate-fade-right animate-once animate-duration-1000 animate-delay-100 animate-ease-in-out">
                            <Image
                                src="/wp-content/uploads/2024/08/6cfeeb91-930e-4021-888e-ab5d2a150183.png"
                                alt=""
                                width={1000}
                                height={631}
                                sizes="(max-width: 1000px) 100vw, 1000px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}