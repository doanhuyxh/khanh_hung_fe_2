'use client'

import { useEffect, useState } from "react";
import { PlushIcon } from "../../Icon"

export default function Faqs() {
    const [client, setClient] = useState(false)
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const questions = [
        {
            question: "Khóa học free thiệt không, bài free có thiệt chất lượng không?",
            answer: "Khoá học miễn phí thật, chất lượng thật. Hùng không nói xạo với bạn. Đăng ký là xem ngay 30 bài học miễn phí giúp bạn BÁN ĐƯỢC KHOÁ HỌC của mình.",
        },
        {
            question: "Có cần nhập thẻ tín dụng hay điền form hay để lại email nhận kiến thức gì đó không?",
            answer: "Không điền form, không nhập thẻ, chỉ cần đăng ký là học luôn.",
        },
        {
            question: "Khóa học là dạy cái gì?",
            answer: "Toàn bộ kiến thức để tạo ra, marketing và bán, và đặc biệt là kinh doanh mảng elearning này sao cho bền vững, mang lại nguồn thu nhập cho bạn và sẵn tiện tạo thêm những lợi ích khác cho bạn như xây dựng thương hiệu cá nhân hoặc gián tiếp kiếm thêm khách hàng cho dịch vụ mà bạn đang kinh doanh",
        },
        {
            question: "DATA mà Hùng cung cấp để làm gì?",
            answer: `Với DATA và đặc biệt là số liệu kinh doanh của chính khanhhung.academy`
        }
    ];

    useEffect(()=>{
        setClient(true)
    },[])

    if(!client){
        return null
    }

    return (
        <div id='faqs' className="py-10">
            <div className="w-11/12 px-4 lg:px-0 lg:w-8/12 mx-auto mt-10">
                <h3 className="text-3xl  font-bold text-center mb-6 mt-10 lg:mt-20 text-white">
                    Chúng tôi có thể giúp gì <br className="hidden md:block" /> cho bạn
                </h3>

                <div className="space-y-2 md:space-y-4">
                    {questions.map((item, index) => (
                        <div key={index} className="bg-opacity-10 bg-white backdrop-blur-sm rounded-lg">
                            <div
                                onClick={() => toggleAnswer(index)}
                                className="flex items-center justify-between cursor-pointer p-4 md:p-6 text-white rounded-lg hover:text-[#f41e92] transition-colors"
                            >
                                <p className="text-3xl font-[700] pr-4">{item.question}</p>
                                <PlushIcon isOpen={openIndex === index} />
                            </div>
                            {openIndex === index && (
                                <div className="px-4 pb-4 md:px-6 md:pb-6 text-white text-2xl">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
