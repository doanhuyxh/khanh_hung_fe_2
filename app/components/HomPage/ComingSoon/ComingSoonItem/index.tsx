"use client";

import Image from "next/image";

const EXPERIENCE_ITEMS = [
    "8 năm kinh nghiệm làm Data Science Expert, 2 năm làm Data Science Manager trong lĩnh vực Ngân hàng Tài chính, Fintech và Retail",
    "8 năm kinh nghiệm làm Data Science Expert, 2 năm làm Data Science Manager trong lĩnh vực Ngân hàng Tài chính, Fintech và Retail",
    "8 năm kinh nghiệm làm Data Science Expert, 2 năm làm Data Science Manager trong lĩnh vực Ngân hàng Tài chính, Fintech và Retail",
    "8 năm kinh nghiệm làm Data Science Expert, 2 năm làm Data Science Manager trong lĩnh vực Ngân hàng Tài chính, Fintech và Retail",
    "8 năm kinh nghiệm làm Data Science Expert, 2 năm làm Data Science Manager trong lĩnh vực Ngân hàng Tài chính, Fintech và Retail",
];

export default function ComingSoonItem() {
    return (
        <div className="max-w-[500px] min-w-[300px] min-h-[600px] bg-[url('/assets/images/home/coming-soon-bg-01.jpg')] bg-cover bg-center p-8 rounded-3xl border-2 border-[#2686ec] overflow-hidden scrollbar-hide">
            
            <div className="flex flex-col items-center justify-center h-full text-white bg-transparent">
                <div className="w-full h-auto max-h-[300px] mb-4 rounded-2xl overflow-hidden">
                    <Image
                        src={"/assets/images/home/fb_huynh_thanh_quan.jpg"}
                        alt=""
                        width={300}
                        height={400}
                        style={{ width: "100%", height: "auto", objectFit: "cover", objectPosition: "center" }}
                    />
                </div>
                <div className="content flex flex-col gap-4 items-center">
                    <p className="font-[600] text-white text-wrap">
                        Thanh Quan - Khóa học đào tạo Expert Data Scientist Consultant tài
                        chính ngân hàng
                    </p>

                    <div className="w-full flex flex-row gap-2 items-center justify-start">
                        <div className="flex gap-1 justify-center align-middle items-center text-[#f5d31e] bg-[radial-gradient(50%_50%_at_50%_50%,_#2072c9_0%,_#103863_100%)] rounded-xl py-0 px-1">
                            <span className="w-6 h-6 flex items-center justify-center">
                                <Image
                                    src={"/assets/images/tag/tag-pro.svg"}
                                    alt=""
                                    width={20}
                                    height={20}
                                    style={{ width: "100%", height: "auto" }}
                                    className="m-auto"
                                />
                            </span>
                            <span className="text-[12px]">Pro</span>
                        </div>

                        <div className="flex gap-1 items-center bg-[linear-gradient(270deg,_#f41e92_-10.64%,_#710ebe_100%)] rounded-xl px-3">
                            <span className="w-5 h-5">
                                <Image
                                    src={"/assets/images/tag/tag-cm-gift.svg"}
                                    alt=""
                                    width={20}
                                    height={20}
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </span>
                            <span className="text-[12px]">Đã đăng ký E-learning Bundle</span>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-5 bg-[rgba(255,255,255,0.2)] backdrop-blur-md my-2 px-6 py-5 rounded-2xl font-[Bebas Neue Pro]">
                        <p>Ngày ra mắt khoá học:</p>
                        <p className="font-[700] text-5xl">11/2024</p>
                    </div>

                    <div className="w-full min-h-[20rem] max-h-[22rem] overflow-y-auto scrollbar-hide">
                        <ul className="flex flex-col gap-3">
                            {EXPERIENCE_ITEMS.map((item, index) => (
                                <li key={index}>
                                    <div className="flex flex-row gap-2 items-start justify-start">
                                        <span className="w-12 h-auto mt-2 flex items-center justify-center">
                                            <Image
                                                src={"/assets/images/home/coming-attr-item.svg"}
                                                alt=""
                                                width={20}
                                                height={20}
                                                style={{ width: "100%", height: "auto" }}
                                            />
                                        </span>
                                        <span className="text-[12px] text-wrap underline px-2">{item}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
