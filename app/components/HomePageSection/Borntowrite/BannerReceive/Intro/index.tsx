import Image from "next/image";

export default function Intro() {
    return (
        <div className="lg:min-w-[600px] md:overflow-y-auto pb-20">
            <div className="w-full flex flex-col gap-20 lg:gap-0 lg:flex-row lg:justify-start px-10">
                <div className="w-fit animate-fade-right animate-once animate-duration-1000 animate-delay-100 animate-ease-in-out">
                    <Image
                        src={"/assets/images/home/bannerHomePage.png"}
                        width={400}
                        height={500}
                        alt="cel"
                        style={{
                            width: "400px",
                            height: "auto",
                            borderRadius: "10px 10px 10px 10px",
                            boxShadow: "20px 20px 0px 0px #FFD36E",
                            objectFit:"cover"
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
                    <hr className="w-full h-1 bg-[#ffff99]"/>

                    <div className='w-full flex lg:flex-row flex-col gap-5 justify-evenly items-center'>
                        <button className="px-4 py-3 rounded-2xl bg-green-600 w-full lg:w-fit text-white">Bắt đầu</button>
                        <p className='text-[#ffff99]'>Khám phá khoá học</p>
                    </div>
                </div>

            </div>
        </div>
    )
}