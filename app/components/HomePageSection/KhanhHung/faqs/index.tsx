'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { PlushIcon } from "../../../Icon"

export default function Faqs() {
    const [client, setClient] = useState(false)
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const questions = [
        {
            order: ["answer", "sub_anser"],
            question: "Khóa học free thiệt không, bài free có thiệt chất lượng không?",
            answer: "Khoá học miễn phí thật, chất lượng thật. Hùng không nói xạo với bạn. Đăng ký là xem ngay 30 bài học miễn phí giúp bạn BÁN ĐƯỢC KHOÁ HỌC của mình.",
            sub_anser: []
        },
        {
            order: ["answer", "sub_anser"],
            question: "Có cần nhập thẻ tín dụng hay điền form hay để lại email nhận kiến thức gì đó không?",
            answer: "Không điền form, không nhập thẻ, chỉ cần đăng ký là học luôn.",
            sub_anser: []
        },
        {
            order: ["answer", "sub_anser"],
            question: "Khóa học là dạy cái gì?",
            answer: "Toàn bộ kiến thức để tạo ra, marketing và bán, và đặc biệt là kinh doanh mảng elearning này sao cho bền vững, mang lại nguồn thu nhập cho bạn và sẵn tiện tạo thêm những lợi ích khác cho bạn như xây dựng thương hiệu cá nhân hoặc gián tiếp kiếm thêm khách hàng cho dịch vụ mà bạn đang kinh doanh",
            sub_anser: [
                "Dạy tạo ra bán elearning theo cách khoa học nhất",
                "Dạy tạo ra bán elearning theo cách khoa học nhất",
                "Bán khóa học bằng bộ video",
                "Phương thức marketing nào hiệu quả, thu hút bao nhiêu học viên",
                "Và đặc biệt là số liệu Affiliate"
            ]
        },
        {
            order: ["sub_anser", "answer"],
            question: "DATA mà Hùng cung cấp để làm gì?",
            answer: `Data, số liệu, bằng chứng,.. những điều đó chính là những selling point của Hùng, bởi vì khi Hùng hướng dẫn cho các bạn bán khoá học, thì chính Hùng phải bán được cái khoá học của chính Hùng /n Hùng sẽ cung cấp chi tiết số liệu để các đồng nghiệp có thể thấy rằng một người thực sự đang kinh doanh một khoá học thì người ta sẽ trai qua những con số như thế nào để các bạn có thể hình dung được chính tương lai của bạn`,
            sub_anser: [
                "Ngày đầu tiên có bao nhiêu đơn",
                "Tuần đầu tiên như thế nào",
                "Phương thức marketing nào hiệu quả, thu hút bao nhiêu học viên",
                "Và đặc biệt là số liệu Affiliate"
            ]
        }
    ];

    useEffect(() => {
        setClient(true)
    }, [])

    if (!client) {
        return null
    }

    return (
        <div id='faqs' className="pt-10">
            <style jsx>{`
               .anser-des-item {
                    position: relative;
                    padding-left: 2.4rem;
                }
                .anser-des-item::before {
                    content: "";
                    position: absolute;
                    width: 1rem;
                    height: 1rem;
                    border-radius: 50%;
                    border: .3rem solid #f41e92;
                    left: 0;
                    top: .5rem;
                }
            `}</style>
            <div className="w-11/12 px-4 lg:px-0 lg:w-8/12 mx-auto mt-10">
                <h3 className="text-[4rem] font-[700] text-center mb-6 mt-10 lg:mt-20 text-white">
                    Chúng tôi có thể giúp gì <br className="hidden md:block" /> cho bạn ?
                </h3>
                <div className="space-y-2 md:space-y-4">
                    {questions.map((item, index) => (
                        <div key={index} className="border-b-2 border-[red]">
                            <div
                                onClick={() => toggleAnswer(index)}
                                className={`flex items-center justify-between cursor-pointer p-4 md:p-6 rounded-lg hover:text-[#f41e92] transition-colors ${openIndex === index ? `text-[#f41e92]` : "text-white"}`}
                            >
                                <p className="text-3xl font-[700] pr-4">{item.question}</p>
                                <PlushIcon isOpen={openIndex === index} />
                            </div>
                            {openIndex === index && (
                                <div className="px-4 pb-4 md:px-6 md:pb-6 text-white text-2xl mb-3 animate-fade-down">
                                    {[...(item.order || [])].map((orderType, orderIndex) => {
                                        if (orderType === "answer") {
                                            return (
                                                <p key={`answer-${orderIndex}`} className="pr-1 cursor-pointer mb-1">
                                                    {item.answer}
                                                </p>
                                            );
                                        }
                                        if (orderType === "sub_anser") {
                                            return (
                                                <ul key={`sub_anser-${orderIndex}`} className="ps-[2.4rem] mb-1">
                                                    {item.sub_anser?.map((sub_item, subIndex) => (
                                                        <li className="anser-des-item" key={subIndex}>
                                                            {sub_item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full h-fit">
                <Image src={"/assets/images/home/lmsfaq-gdcor.png"} width={1000} height={200} alt="" style={{ width: "100%", height: "auto" }} />
            </div>
        </div>
    );
}
