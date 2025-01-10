import Image from "next/image";

export default function Ceo() {
    return (
        <div className="w-full lg:banner-left rounded-3xl overflow-hidden bg-white">
            <div className="w-full flex flex-col lg:flex-row justify-start">
                {/* Cột hình ảnh */}
                <div className="w-full lg:w-2/3 flex flex-col justify-start items-center p-4">
                    <Image
                        src={"/assets/images/home/bannerHomePage.png"}
                        width={200}
                        height={300}
                        alt="cel"
                        style={{
                            width: "100%",
                            height: "auto"
                        }}
                    />
                </div>
                {/* Cột nội dung */}
                <div className="w-full lg:w-2/3 bg-gray-50 flex flex-col gap-5 p-4">
                    <div>
                        <p className="text-4xl font-bold">
                            Quy trình ba bước giúp bạn bán bất cứ thứ gì...
                        </p>
                        <p>Ba bước đơn giản giúp bạn kiếm nhiều tiền với kinh doanh online trong thời gian kỷ lục, bất chấp suy thoái, khủng hoảng…</p>
                        <p className="text-pink-500 text-2xl font-bold">
                            TIỀN BẠC thích TỐC ĐỘ!
                        </p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">
                            Tối ưu bài quảng cáo
                        </p>
                        <p>Tối ưu được bài quảng cáo với Tỷ Lệ Chuyển Đổi Cao.</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">
                            Chạy quảng cáo
                        </p>
                        <p>Chạy quảng cáo để tiếp cận nguồn traffic lạnh dồi dào (Facebook Ads, Google Ads, Tiktok Ads...)</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">
                            Thuyết phục
                        </p>
                        <p>Chạy quảng cáo để tiếp cận nguồn traffic lạnh dồi dào (Facebook Ads, Google Ads, Tiktok Ads...)</p>
                    </div>

                </div>
            </div>
            {/* Thống kê doanh số */}
            <div className="w-full relative mt-8 bg-gray-100 p-6 rounded-b-3xl border-4 border-blue-500 overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={"/assets/images/home/web-statistics-bg.png"}
                        layout="fill"
                        alt="Background"
                    />
                </div>
                <div className="relative z-10 text-center text-gray-800">
                    <p className="text-4xl font-bold text-white">Quality course by world-class tutors</p>
                    <p className="my-2 text-xl text-left text-white">Lưu lượng truy cập (traffic) rất quan trọng, nhưng nó không có ý nghĩa gì nhiều nếu không có chuyển đổi</p>
                    <p className="text-xl text-left font-bold text-pink-500">Chìa khóa để tăng vọt tỷ lệ chuyển đổi là Copywriting.</p>
                </div>
            </div>
        </div>
    );
}
