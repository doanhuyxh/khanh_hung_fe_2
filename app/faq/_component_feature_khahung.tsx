'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { PlushIcon } from "../components/Icon";

export default function Faqs() {
    const [client, setClient] = useState(false)
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const questions = [
        {
            order: ["answer", "sub_anser"],
            question: "Khóa học này có gì khác biệt với tất cả?",
            answer: "Khóa học này giúp bạn tạo ra những bài quảng cáo chuyên nghiệp, giúp bạn bán hàng, giúp bạn kiếm tiền. Chỉ thế mà thôi!",
            sub_anser: [
                "Như nhiều người đánh giá, khóa học này sẽ giúp bạn KIẾM TIỀN thay vì làm bạn TỐN TIỀN!",
                "Bạn sẽ được làm chủ kỹ năng “viết quảng cáo chuyển đổi cao” – High Conversion Copywriting.",
                "Nó khiến khách hàng thực hiện hành động NGAY sau khi xem bài quảng cáo.",
                "Những kiến thức này là tinh hoa của Copywriting, nó không được chia sẻ rộng rãi."
            ]
        },
        {
            order: ["answer", "sub_anser"],
            question: "Nhưng tôi là người MỚI??",
            answer: "Tuyệt vời, nếu mới bắt đầu, tâm trí bạn đang có khoảng trống & bạn sẽ học cực nhanh!",
            sub_anser: [
                "Mọi người nghĩ đây là một khả năng bẩm sinh.",
                "Sự thật thì… Đây là một kỹ năng, và giống bất kỳ kỹ năng nào khác, bạn có thể học và làm chủ nó.",
                "Ngay cả khi bạn không có bằng cấp, kinh nghiệm, thậm chí chưa từng viết một bài quảng cáo nào bao giờ!",
                "Bởi khóa học này sinh ra để giải quyết những vấn đề như thế."
            ]
        },
        {
            order: ["answer", "sub_anser"],
            question: "Nội dung KHÓA HỌC NÀY TỪ ĐÂU?",
            answer: "Nó là sự tổng hòa kiến thức từ các bậc thầy quảng cáo kết hợp với kinh nghiệm thực tế của cá nhân tôi.",
            sub_anser: [
                "Với kỹ năng này, số lần thất bại của tôi nhiều gấp đôi số lần tôi làm được. Nhưng nhờ đó, tôi nhận được các bài học đắt giá.",
                "Tôi đã đem lý thuyết áp dụng cực kỳ hiệu quả vào thế giới thực, giờ tôi chỉ đơn giản là đóng gói lại và chia sẻ nó cho bạn."
            ]
        },
        {
            order: ["answer", "sub_anser"],
            question: "Tôi phải bỏ ra những gì để bắt đầu??",
            answer: "Nó không tốn gì hơn là thời gian của bạn.",
            sub_anser: [
                "Nhiều doanh nghiệp lớn mạnh ngày nay được xây dựng chỉ từ các bài quảng cáo bán hàng đơn giản trên FB.",
                "Bởi thế, mọi thứ bạn cần là một thiết bị có Internet – sự sẵn sàng học hỏi và khát khao kiếm tiền.",
                "14 ngày kể từ bây giờ, tất cả có thể thành hiện thực."
            ]
        },
        {
            order: ["answer", "sub_anser"],
            question: "Lý do khóa học này được mọi người yêu thích",
            answer: "Khóa học này không phải lý thuyết suông khô khốc như bãi cát, cũng không lê thê như series phim dài tập.",
            sub_anser: [
                "Nó là về các kỹ thuật viết bài quảng cáo bán hàng sát thủ được truyền tải ngắn gọn.",
                "Tôi đã đóng gói nó vào một hệ thống đơn giản, mà bất cứ ai đều có thể thành công với nó.",
                "Nội dung đã được biên tập, cắt gọt đến hoàn hảo qua hàng ngàn giờ làm việc.",
                "Lớp học này sẽ tập trung vào phần quan trọng nhất và lược bỏ hết những gì lan man không cần thiết."
            ]
        },
        {
            order: ["answer", "sub_anser"],
            question: "Liệu kỹ năng này có phù hợp với tôi hoặc ngành của tôi?",
            answer: "Quảng cáo hiệu quả là điều cần thiết trong mọi ngành & thị trường ngách.",
            sub_anser: [
                "Copywriting là “mũi tên bạc” trong mọi hoạt động tiếp thị.",
                "Ngành nào cũng tạo ra được sự khác biệt lớn.",
                "Nếu bạn đang kinh doanh, hãy áp dụng nó và làm ngập lụt doanh số của bạn với lượng người mua Như Mưa Trút Nước!!"
            ]
        },
        {
            order: ["answer", "sub_anser"],
            question: "Khóa học bao gồm những gì?",
            answer: "Khóa học bao gồm các bài giảng video & tài liệu PDF được chuẩn bị tỉ mỉ từ trước.",
            sub_anser: [
                "Tất cả đều là nội dung độc quyền.",
                "Bạn có thể học ở bất kỳ đâu, bất kỳ lúc nào, ngay trên điện thoại, máy tính hoặc mọi thiết bị có Internet…"
            ]
        },
        {
            order: ["answer", "sub_anser"],
            question: "Bạn có thể học ở bất kỳ đâu, bất kỳ lúc nào?",
            answer: "Chương trình kéo dài khoảng 12h, được chia nhỏ thành các bài giảng 5-30p.",
            sub_anser: [
                "Thời gian do bạn làm chủ, bạn có thể kết thúc tùy theo tốc độ mình muốn.",
                "Đề xuất của tôi là bạn nên hoàn thành khóa học trong tối đa 7 ngày để hệ thống hóa kiến thức.",
                "Sau đó bạn sẽ có thể quay lại học chi tiết sau."
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
                .text-ani {
                    display: inline-block;
                    position: relative;
                    text-align: center;
                }
                .seofaq-top {
                    z-index: 2;
                    display: flex;
                    width: fit-content;
                    transform: rotate(-15deg);
                    position: absolute;
                    transform: translateY(-50%);
                }
                .seofaq-top .title {
                    font-size: 5.6rem;
                    font-weight: 700;
                    color: #fff;
                    line-height: 1.2;
                    margin-left: 4rem;
                    margin-top: 2rem;
                }
                .text-ani.bg-blue::after {
                    background: linear-gradient(to top, #f41e92 50%, transparent 50%);
                }
                .text-ani::after {
                    content: "";
                    display: inline-block;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                    top: 0;
                    left: 0;
                    animation: 5s highlight 1.5s infinite alternate;
                    border-radius: .2rem;
                }
                .seofaq-top .seofaq-line {
                    position: absolute;
                    width: 180%;
                    height: 180%;
                    top: 59%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            `}</style>

            <div className="w-11/12 px-4 lg:px-0 lg:w-8/12 mx-auto mt-10">
                <div className="seofaq-top">
                    <div className="title text-ani bg-blue">FAQ</div>
                    <div className="seofaq-line">
                        <svg
                            className="ani add-active-js active"
                            width={317}
                            height={165}
                            viewBox="0 0 317 165"
                            fill="none"
                            xmlns="#www.w3.org/2000/svg"
                        >
                            <path
                                className="svg-elem-1"
                                d="M239.914 54.4646C97.9425 -6.18229 6.55242 27.0745 2.17067 68.9596C-2.21107 110.845 64.1018 152.108 150.285 161.124C236.467 170.14 309.884 143.494 314.266 101.609C318.518 60.9678 222.966 13.0692 140.531 2.48972"
                                stroke="#F41E92"
                                strokeWidth="3.2557"
                            />
                        </svg>
                    </div>
                </div>
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
                                <div className="px-4 pb-4 md:px-6 md:pb-6 text-white text-2xl mb-3 ">
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
            <div className="relative w-full h-[200px] ">
                <div className="w-full h-fit">
                    <Image src={"/assets/images/home/lmsfaq-gdcor.png"} width={1000} height={200} alt="" style={{ width: "100%", height: "auto" }} />
                </div>
                <div className="w-[16%] absolute bottom-[-1%] right-0 z-[0] bg-inherit">
                    <Image
                        src="/template/assets/hq-images/home/panda-dcor-pc.png"
                        alt="Panda Decoration"
                        sizes="(max-width: 576px) 576px, (max-width: 991px) 991px, 1000px"
                        layout="responsive"
                        width={992}
                        height={600}
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
