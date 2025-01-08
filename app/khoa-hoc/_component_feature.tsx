"use client";

import 'flowbite';
import { useState } from "react";

export default function ComponentFeature() {
    const [activeIndex, setActiveIndex] = useState<string>('basic');
    const [activeIndexMaster, setActiveIndexMaster] = useState<number>(-1);
    const [activeIndexBasic, setActiveIndexBasic] = useState<number>(-1);

    const basicCourse = [
        {
            title: "A. Bùng Nổ Thu Nhập Với Copywriting",
            content: [
                {
                    name: "A1. Sự thật về Copywriting (05:16)",
                    content: ""
                },
                {
                    name: "A2. Sức mạnh Copywriting - (08:02)",
                    content: "Khám phá những case study triệu đô"
                },
            ]
        },
        {
            title: "B. Các Nguyên Tắc Kinh Điển",
            content: [
                {
                    name: "C1. Nghiên Cứu Sâu - (20:07)",
                    content: "Điều hầu hết mọi người sợ làm nhưng theo nghĩa đen sẽ tối thiểu x20 lần doanh số"
                },
                {
                    name: "B2. Quy luật Một - (20:38)",
                    content: "Quy tắc đơn giản này ngay lập tức bỏ vào túi bạn một triệu đô la trong suốt sự nghiệp kinh doanh của mình"
                },
                {
                    name: "B3. Tạo Mục Tiêu Như Tia Laser - (04:34)",
                    content: "Đã target là phải trúng, đã viết quảng cáo, là phải ra đơn hàng!"
                },
                {
                    name: "B4. Vòng Lặp Mở - (19:03)",
                    content: "Kỹ thuật này khiến khách hàng không thể rời mắt khỏi bài quảng cáo (Đây là bí mật lớn nhất & mạnh mẽ nhất của tôi)"
                },
                {
                    name: "B5. Bốn Cơ Chế Tâm Lý Sát Thủ - (13:42)",
                    content: "Nắm được bốn cơ chế này, bạn có thể bán sạch đơn hàng trong 'thời gian kỷ lục'"
                },
                {
                    name: "B6. Công Thức Copywriting Tốt Nhất? - (05:50)",
                    content: "Đừng tìm đâu xa, nó ở đây!"
                }
            ]
        },
        {
            title: "C. Kỹ Thuật Copywriting",
            content: [
                {
                    name: `C1. Chuyển "Tôi" thành "Bạn" - (12:34)`,
                    content: "Một cách đơn giản để khiến người xem quan tâm dữ dội đến sản phẩm (Đồng thời giúp bạn có được nhiều khách hàng hơn những gì bạn biết phải làm)"
                },
                {
                    name: `C2. Ngôn Từ Quyền Lực - (11:57)`,
                    content: "Cách ngay lập tức gây được sự chú ý (Điều mà không một nhà quảng cáo nào dám nói với bạn!)"
                },
            ]
        }
    ];

    const masterCourse = [
        {
            title: "A. Copywriting Ứng Dụng",
            content: [
                {
                    name: "A1. Lộ Trình Khóa Học Tổng Quan! (05:46)",
                    content: ""
                }
            ]
        }
    ];

    return (
        <div className="w-full pb-20">
            <div className="flex gap-2 py-10">
                <button
                    className={`w-1/2 py-2 font-[700] text-[18px] rounded-md text-white
                        ${activeIndex === 'basic' ? 'bg-red-500 border-b-4 border-white' : 'bg-[#453434]'} 
                        hover:bg-red-300 hover:text-slate-950`}
                    onClick={() => setActiveIndex('basic')}
                >
                    Basic
                </button>
                <button
                    className={`w-1/2 py-2 font-[700] text-[18px] rounded-md text-white
                        ${activeIndex === 'master' ? 'bg-red-500 border-b-4 border-white' : 'bg-[#453434]'} 
                        hover:bg-red-300 hover:text-slate-950`}
                    onClick={() => setActiveIndex('master')}
                >
                    Master
                </button>
            </div>

            <h3 className="text-[20px] font-[700] text-center text-white my-10">
                {activeIndex === 'basic' ? 'Mục lục Khóa học Conversion Copywriting (Basic):' : 'Mục lục Khóa học Master Copywriting:'}
            </h3>

            <div className="w-full">
                {activeIndex === 'basic' && basicCourse.map((item, index) => {
                    return (
                        <div key={index} className="text-white mb-3">
                            <p
                                onClick={() => setActiveIndexBasic(activeIndexBasic === index ? -1 : index)}
                                className={`block px-10 py-3 w-full text-left cursor-pointer text-[18px] ${activeIndexBasic === index ? "bg-[#C22020]" : "bg-[#453434]"}`}
                            >
                                {item.title}
                            </p>
                            <div
                                className={`transition-all duration-500 overflow-hidden ${activeIndexBasic === index ? "max-h-[1000px] py-4" : "max-h-0"}`}
                            >
                                {item.content.map((content, idx) => (
                                    <div className='px-4 flex flex-col gap-1 mb-3' key={idx}>
                                        <p className="text-white text-[18px] font-bold">{content.name}</p>
                                        <p className="text-white text-[16px]">{content.content}</p>
                                    </div>

                                ))}
                            </div>
                        </div>
                    );
                })}

                {activeIndex === 'master' && masterCourse.map((item, index) => {
                    return (
                        <div key={index} className="text-white mb-3">
                            <p
                                onClick={() => setActiveIndexMaster(activeIndexMaster === index ? -1 : index)}
                                className={`block px-10 py-3 w-full text-left cursor-pointer text-[18px] ${activeIndexMaster === index ? "bg-[#C22020]" : "bg-[#453434]"}`}
                            >
                                {item.title}
                            </p>
                            <div
                                className={`transition-all duration-500 overflow-hidden ${activeIndexMaster === index ? "max-h-[1000px] py-4" : "max-h-0"}`}
                            >
                                {item.content.map((content, idx) => (
                                    <div className='px-4 flex flex-col gap-1 mb-3' key={idx}>
                                        <p className="text-white text-[18px] font-bold">{content.name}</p>
                                        <p className="text-white text-[16px]">{content.content}</p>
                                    </div>

                                ))}
                            </div>
                        </div>
                    );
                })}

            </div>

        </div>
    );
}
