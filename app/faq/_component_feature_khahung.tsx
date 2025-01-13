'use client'

import {useEffect, useState} from "react";
import Image from "next/image";
import {PlushIcon} from "../_components/Icon";

export default function Faqs() {
    const [client, setClient] = useState(false)
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const questions = [
        {
            question: "Khóa học này có gì khác biệt với tất cả?",
            answers: [
                "Khóa học này không giúp bạn tạo ra những bài quảng cáo chỉ để lấp đầy thông tin, để đạt được nhiều tương tác, hay để mọi người biết bạn viết hay.",
                "Nó chỉ làm được một điều duy nhất, đó là chỉ cho bạn cách viết quảng cáo bán hàng ‘ra đơn’.",
                "Chỉ thế mà thôi!",
                "Như nhiều người đánh giá, khóa học này sẽ giúp bạn KIẾM TIỀN thay vì làm bạn TỐN TIỀN!",
                "Bạn sẽ được làm chủ kỹ năng “viết quảng cáo chuyển đổi cao” – High Conversion Copywriting.",
                "Nó khiến khách hàng thực hiện hành động NGAY sau khi xem bài quảng cáo.",
                "Những kiến thức này là tinh hoa của Copywriting, nó không được chia sẻ rộng rãi.",
            ]
        },
        {
            question: "Nhưng tôi là người MỚI??",
            answers: [
                "Tuyệt vời, nếu mới bắt đầu, tâm trí bạn đang có khoảng trống & bạn sẽ học cực nhanh!",
                "Mọi người nghĩ đây là một khả năng bẩm sinh.",
                "Sự thật thì… ",
                "Đây là một kỹ năng, và giống bất kỳ kỹ năng nào khác, bạn có thể học và làm chủ nó.",
                "Ngay cả khi bạn không có bằng cấp, kinh nghiệm, thậm chí chưa từng viết một bài quảng cáo nào bao giờ!",
                "Bởi khóa học này sinh ra để giải quyết những vấn đề như thế."
            ]
        },
        {
            question: "Nội dung KHÓA HỌC NÀY TỪ ĐÂU?",
            answers: [
                "Nó là sự tổng hòa kiến thức từ các bậc thầy quảng cáo kết hợp với kinh nghiệm thực tế của cá nhân tôi.",
                "Với kỹ năng này, số lần thất bại của tôi nhiều gấp đôi số lần tôi làm được. Nhưng nhờ đó, tôi nhận được các bài học đắt giá.",
                "Tôi đã đem lý thuyết áp dụng cực kỳ hiệu quả vào thế giới thực, giờ tôi chỉ đơn giản là đóng gói lại và chia sẻ nó cho bạn."
            ]
        },
        {
            question: "Tôi phải bỏ ra những gì để bắt đầu??",
            answers: [
                "Nó không tốn gì hơn là thời gian của bạn.",
                "Nhiều doanh nghiệp lớn mạnh ngày nay được xây dựng chỉ từ các bài quảng cáo bán hàng đơn giản trên FB.",
                "Bởi thế, mọi thứ bạn cần là một thiết bị có Internet – sự sẵn sàng học hỏi và khát khao kiếm tiền.",
                "14 ngày kể từ bây giờ, tất cả có thể thành hiện thực."
            ]
        },
        {
            question: "Lý do khóa học này được mọi người yêu thích",
            answers: [
                "Khóa học này không phải lý thuyết suông khô khốc như bãi cát, cũng không lê thê như series phim dài tập.",
                "Nó là về các kỹ thuật viết bài quảng cáo bán hàng sát thủ được truyền tải ngắn gọn.",
                "Tôi đã đóng gói nó vào một hệ thống đơn giản, mà bất cứ ai đều có thể thành công với nó.",
                "Nội dung đã được biên tập, cắt gọt đến hoàn hảo qua hàng ngàn giờ làm việc.",
                "Vì thế lớp học này sẽ tập trung vào phần quan trọng nhất và lược bỏ hết những gì lan man không cần thiết, những thứ không hỗ trợ cho việc bán hàng."
            ]
        },
        {
            question: "Liệu kỹ năng này có phù hợp với tôi hoặc ngành của tôi?",
            answers: [
                "Quảng cáo hiệu quả là điều cần thiết trong mọi ngành & thị trường ngách.",
                "Copywriting là “mũi tên bạc” trong mọi hoạt động tiếp thị.",
                "Ngành nào cũng tạo ra được sự khác biệt lớn.",
                "Nếu bạn đang kinh doanh, hãy áp dụng nó và làm ngập lụt doanh số của bạn với lượng người mua Như Mưa Trút Nước!!"
            ]
        },
        {
            question: 'Tại sao tôi nên áp dụng Copywriting vào kinh doanh?',
            answers: [
                "– Về cơ bản bài quảng cáo là “chuyên gia bán hàng online” làm việc 24/7 cho bạn. Bạn có thể bán được hàng ngay cả khi ngủ (tự động hóa).",
                "– Copywriting tương tự việc bạn có đội quân bán hàng ảo 10.000 người cùng lúc",
                "– Bạn có thể viết bài quảng cáo một lần và kiếm tiền từ nó NHIỀU lần.",
            ]
        },
        {
            question: 'Có thể dùng AI để viết bài quảng cáo không?',
            answers: [
                "Khóa học bao gồm các bài giảng video & tài liệu PDF được chuẩn bị tỉ mỉ từ trước.",
                "Tất cả đều là nội dung độc quyền.",
                "Bạn có thể học ở bất kỳ đâu, bất kỳ lúc nào, ngay trên điện thoại, máy tính hoặc mọi thiết bị có Internet…",
            ]
        },
        {
            question: 'Tôi có thể kiếm bao nhiêu với kỹ năng này?',
            answers: [
                "Nó tùy vào bạn, hãy nhớ bài quảng cáo thành công không đứng một mình.",
                "Nhưng khi nắm được quy trình. Càng tạo ra nhiều bài quảng tốt, bạn càng bán được nhiều.",
                "Dù ko thể đưa ra con số cụ thể. Tuy nhiên ví dụ hiện tôi đã làm tới 6 dự án phát triển mạnh đều nhờ nền tảng từ Copywriting.",
                "Vì vậy bạn có muốn bán bao nhiêu, thì nó cũng sẽ giúp bạn đạt được. Và gần như NGAY LẬP TỨC.",
                "Cho dù bạn tạo trang bán hàng (sale page), video bán hàng (VSL) hay bài ads Facebook… chỉ cần áp dụng những gì tôi chia sẻ, bạn có thể rất nhanh bùng nổ đơn hàng mới vài giờ sau đó!"
            ]
        },
        {
            question: 'Cho tôi thêm một lý do để tham gia?',
            answers: [
                "Kiến thức chỉ là một mặt của vấn đề.",
                "Ví dụ một người muốn giảm cân thừa biết họ nên ăn ít & tập thể dục. Nhưng việc biết điều đó có giúp họ giảm cân?",
                "Không, bởi kiến thức không phải tất cả. Nó chỉ tương đương với việc đọc sách. Điều thực sự thay đổi mọi người là trách nhiệm & sự hỗ trợ.",
                "Vì vậy tôi đã free dịch vụ tư vấn với bất kỳ ai đăng ký. Tôi sẽ đồng hành mỗi khi bạn gặp khó khăn."
            ]
        },
        {
            question: "Khóa học bao gồm những gì?",
            answers: [
                "Khóa học bao gồm các bài giảng video & tài liệu PDF được chuẩn bị tỉ mỉ từ trước.",
                "Tất cả đều là nội dung độc quyền.",
                "Bạn có thể học ở bất kỳ đâu, bất kỳ lúc nào, ngay trên điện thoại, máy tính hoặc mọi thiết bị có Internet…"
            ]
        },
        {
            question: "Thời lượng của khóa học là gì?",
            answers: [
                "Chương trình kéo dài khoảng 12h, được chia nhỏ thành các bài giảng 5-30p.",
                "Thời gian do bạn làm chủ, bạn có thể kết thúc tùy theo tốc độ mình muốn.",
                "Đề xuất của tôi là bạn nên hoàn thành khóa học trong tối đa 7 ngày để hệ thống hóa kiến thức.",
                "Sau đó bạn sẽ có thể quay lại học chi tiết sau."
            ]
        },
        {
            question: "Cách tương tác với Người hướng dẫn?",
            answers: [
                "Bạn có thể liên hệ với tôi bằng mọi cách, miễn là thuận tiện cho bạn.",
                "Ưu tiên hình thức nhắn tin qua tin nhắn Fanpage, Email…",
                "Sau đó, tôi sẽ trực tiếp phản hồi yêu cầu của bạn.",
            ]
        },
        {
            question: "Quyền truy cập trọn đời là gì?",
            answers: [
                "Khi bạn mua khóa học, bạn có quyền truy cập trọn đời kể cả khi đã hoàn thành.",
                "Tôi tin bạn sẽ được hưởng lợi vô hạn từ giáo dục mà tính năng này mang lại.",
            ]
        },
        {
            question: "Quyền lợi sau khi hoàn thành?",
            answers: [
                "1. Bạn có thể xem lại khóa học với nội dung update bất cứ lúc nào.",
                "2. Bạn có thể liên hệ với tôi khi bạn muốn.",
                "3. Bạn có thể giao lưu với cộng đồng các thành viên khác để trao đổi kiến thức.",
                "4. Đôi khi, tôi sẽ tổ chức event, thậm chí gửi tặng quà cá nhân hóa trực tiếp đến bạn."
            ]
        },
        {
            question: "Chính sách bảo đảm rủi ro?",
            answers: [
                "Tôi nhận thấy khi mua khóa học online bạn sẽ đặt ra câu hỏi “Làm sao để biết nó sẽ phù hợp với tôi?”",
                "Nhưng tôi chắc chắn bạn sẽ hài lòng với những gì đã mua, thậm chí cung cấp Đảm bảo hoàn tiền 100%, Không một thắc mắc, Không một câu hỏi!",
                "Bạn có thể hoàn tiền, miễn là yêu cầu đó phù hợp với chính sách của vuacontent.",
                "Khi được xác nhận, số tiền sẽ được hoàn lại trong tối đa 30 ngày."
            ]
        },
        {
            question:'Tại sao tôi nên tin tưởng?',
            answers: [
                "Tôi từng bị lừa nhiều khi mua bán online. Nhưng cũng vô số lần tôi nhận đc sản phẩm tốt. Tôi thấy hạnh phúc vì vẫn còn nhiều người bán hàng có tâm.",
                "Họ là nguồn cảm hứng cho triết lý của BorntoWrite – “Kinh doanh bằng sự tử tế”.",
                "Do đó dự án e-learning này đã được tạo ra như vậy.",
                "Tôi không chắc khóa học này có thể làm bạn hài lòng. Nhưng tôi chắc rằng, mỗi sản phẩm được tạo ra bởi BorntoWrite đều là thứ tốt nhất tôi có thể làm trong chính khả năng của mình.",
                "Với >2.200 học viên, xếp hạng 4,8*… bạn hãy yên tâm rằng mình sẽ có lựa chọn đúng đắn."
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
                    Chúng tôi có thể giúp gì <br className="hidden md:block"/> cho bạn ?
                </h3>
                <div className="space-y-2 md:space-y-4">
                    {questions.map((item, index) => (
                        <div key={index} className="border-b-2 border-[red]">
                            <div
                                onClick={() => toggleAnswer(index)}
                                className={`flex items-center justify-between cursor-pointer p-4 md:p-6 rounded-lg hover:text-[#f41e92] transition-colors ${openIndex === index ? `text-[#f41e92]` : "text-white"}`}
                            >
                                <p className="text-3xl font-[700] pr-4">{item.question}</p>
                                <PlushIcon isOpen={openIndex === index}/>
                            </div>
                            {openIndex === index && (
                                <div className="px-4 pb-4 md:px-6 md:pb-6 text-white text-2xl mb-3 ">
                                    {item.answers.map((answer, answerIndex) => (
                                        <p key={`answer-${answerIndex}`}
                                           className="pr-1 cursor-pointer mb-1 ml-10 mb-4 anser-des-item">
                                            {answer}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative w-full h-[200px] ">
                <div className="w-full h-fit">
                    <Image src={"/assets/images/home/lmsfaq-gdcor.png"} width={1000} height={200} alt=""
                           style={{width: "100%", height: "auto"}}/>
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
