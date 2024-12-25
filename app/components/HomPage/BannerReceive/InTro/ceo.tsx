import Image from "next/image";

export default function Ceo() {
    return (
        <div className="w-full lg:banner-left rounded-3xl overflow-hidden bg-white">
            <div className="w-full flex flex-col lg:flex-row justify-start">
                {/* Cột hình ảnh */}
                <div className="w-full lg:w-2/3 flex justify-center items-center p-4">
                    <Image
                        src={"/assets/images/home/member.png"}
                        width={200}
                        height={300}
                        alt="cel"
                        style={{
                            width:"100%",
                            height:"auto"
                        }}
                    />
                </div>
                {/* Cột nội dung */}
                <div className="w-full lg:w-2/3 bg-gray-50 flex flex-col gap-5 p-4">
                    <p>
                        Hùng không phải là giảng viên, Hùng sẽ không bao giờ là giảng viên.
                    </p>
                    <p className="text-pink-500 font-bold">
                        Hùng là người đứng sau sự thành công của những giảng viên.
                    </p>
                    <p>
                        <strong className="underline">
                            Hùng sẽ hướng dẫn cho bạn bán khóa học của bạn{" "}
                        </strong>
                        như bán một sản phẩm điện tử, với tư duy sản phẩm, tư duy bán hàng,
                        marketing logic và các công cụ thông minh để các bạn thực hiện được
                        điều đó.
                    </p>
                    <p>
                        Những gì Hùng làm với Khánh Hùng{" "}
                        <strong className="underline">
                            để có được những con số bên dưới, Hùng toàn bộ đều truyền cho các
                            bạn hết trong khoá học.
                        </strong>
                    </p>
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
                    <h3 className="lg:text-4xl font-bold">Thống kê doanh số</h3>
                    <p className="mt-2 text-xl italic">
                        Hùng phải bán được khóa học bán khóa học thì mới hướng dẫn bạn bán
                        khóa học được chứ ^_^
                    </p>
                    <div className="flex flex-row justify-evenly flex-wrap gap-4 my-5">
                        <div className="flex flex-col items-center justify-center p-5  bg-gray-500 bg-opacity-20 rounded-lg">
                            <p className="text-white">Tổng doanh thu</p>
                            <p className="font-[1000] text-white">4,895,170,000</p>
                        </div>
                        <div className="flex flex-col items-center justify-center  p-5 bg-gray-500 bg-opacity-20 rounded-lg">
                            <p className="text-white">Tổng doanh thu</p>
                            <p className="font-[1000] text-white">4,895,170,000</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-5 bg-gray-500 bg-opacity-20 rounded-lg">
                            <p className="text-white">Tổng doanh thu</p>
                            <p className="font-[1000] text-white">4,895,170,000</p>
                        </div>
                    </div>
                    <p className="mt-4 text-xl italic">
                        Hùng không phải giảng viên hay người nổi tiếng nhưng vẫn bán được nhờ
                        phương pháp đúng. Hùng sẽ chỉ cho bạn những phương pháp đó trong chính
                        khoá học này.
                    </p>
                </div>
            </div>
        </div>
    );
}
