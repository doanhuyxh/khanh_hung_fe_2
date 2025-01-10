import Image from "next/image";

export default function Intro() {
    return (
        <div className="lg:min-w-[600px] max-w-[1200px] md:overflow-y-auto pb-20">
            <div className="w-full flex flex-col gap-20 lg:gap-0 lg:flex-row lg:justify-start px-10">
                <div className="w-[390px] h-[447px] hidden lg:block animate-fade-right animate-once animate-duration-1000 animate-delay-100 animate-ease-in-out">
                    <Image
                        src={"/assets/images/home/bannerHomePage.png"}
                        width={400}
                        height={300}
                        alt="cel"
                        style={{
                            height: "100%",
                            objectFit: "fill",
                            borderRadius: "10px",
                            boxShadow: "20px 20px 0px 0px #FFD36E",
                            maxWidth:"unset"
                        }}
                        className=""
                    />
                </div>
                <div className="w-fit flex flex-col lg:ml-20 justify-center gap-4 text-wrap">
                    <h6 className='text-blue-600'>--LEARN</h6>
                    <p className="text-white text-3xl"> High Conversion Copywriting -</p>
                    <p className="text-white">“Một trong những cách kiếm tiền nhiều nhất, nhanh nhất với ít nỗ lực nhất
                        trên Internet…</p>
                    <p className="text-white">Đó là khi <strong className="text-[#ffff99]">những người kinh doanh tự
                        viết quảng cáo (copywriting)</strong> để bán sản phẩm của chính mình!”</p>
                    <hr className="w-full h-1 bg-[#ffff99]" />

                    <div className='w-full flex lg:flex-row flex-col gap-5 items-center'>
                        <button className="px-12 py-4 rounded-2xl bg-[#00A81A] w-full lg:w-fit text-white hover:bg-[#9FB4FF] hover:text-black">Bắt đầu</button>
                        <div className="flex gap-3 items-center">
                            <i aria-hidden="true" style={{color:"#ffff99"}} className="fas fa-book-open"></i>
                            <p className='text-[#ffff99] text-[16px] font-[500] space-[0.25px]'>Khám phá khoá học</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}