import Header from "../components/Header/CustomerBorntowrite"
import dynamic from "next/dynamic";
import Footer from "@/app/components/Footer/Borntowrite";

const Component = dynamic(() => import('./_component_feature'));

export default function FaqBorntowrite() {

    const data1 = [
        {
            title: "Khóa học này có gì khác biệt với tất cả?",
            content: [
                "Khóa học này không giúp bạn tạo ra những bài quảng cáo chỉ để lấp đầy thông tin, để đạt được nhiều tương tác, hay để mọi người biết bạn viết hay",
                "Khóa học này giúp bạn tạo ra những bài quảng cáo chuyên nghiệp, giúp bạn bán hàng, giúp bạn kiếm tiền\",\n",
                "Chỉ thế mà thôi!",
                "Như nhiều người đánh giá, khóa học này sẽ giúp bạn KIẾM TIỀN thay vì làm bạn TỐN TIỀN!",
                "Bạn sẽ được làm chủ kỹ năng “viết quảng cáo chuyển đổi cao” – High Conversion Copywriting.",
                "Nó khiến khách hàng thực hiện hành động NGAY sau khi xem bài quảng cáo.",
                "Những kiến thức này là tinh hoa của Copywriting, nó không được chia sẻ rộng rãi."
            ]
        },
        {
            title:"Nhưng tôi là người MỚI??",
            content:[
                "Tuyệt vời, nếu mới bắt đầu, tâm trí bạn đang có khoảng trống & bạn sẽ học cực nhanh!",
                "Mọi người nghĩ đây là một khả năng bẩm sinh. ",
                "Sự thật thì… ",
                "Đây là một kỹ năng, và giống bất kỳ kỹ năng nào khác, bạn có thể học và làm chủ nó.",
                "Ngay cả khi bạn không có bằng cấp, kinh nghiệm, thậm chí chưa từng viết một bài quảng cáo nào bao giờ!",
                "Bởi khóa học này sinh ra để giải quyết những vấn đề như thế."
            ]
        },
        {
            title:"Nội dung KHÓA HỌC NÀY TỪ ĐÂU?",
            content:[
                "Nó là sự tổng hòa kiến thức từ các bậc thầy quảng cáo kết hợp với kinh nghiệm thực tế của cá nhân tôi.",
                "Với kỹ năng này, số lần thất bại của tôi nhiều gấp đôi số lần tôi làm được. Nhưng nhờ đó, tôi nhận được các bài học đắt giá, nó đã dẫn tôi đi đến một cái đích thành công trong ngành quảng cáo.",
                "Tôi đã đem lý thuyết áp dụng cực kỳ hiệu quả vào thế giới thực, giờ tôi chỉ đơn giản là đóng gói lại và chia sẻ nó cho bạn.",
            ]
        },
        {
            title:"Tôi phải bỏ ra những gì để bắt đầu??",
            content:[
                "Nó không tốn gì hơn là thời gian của bạn.",
                "Nhiều doanh nghiệp lớn mạnh ngày nay được xây dựng chỉ từ các bài quảng cáo bán hàng đơn giản trên FB.",
                "Bởi thế, mọi thứ bạn cần là một thiết bị có Internet – sự sẵn sàng học hỏi và khát khao kiếm tiền.",
                "14 ngày kể từ bây giờ, tất cả có thể thành hiện thực."
            ]
        },
        {
            title:"Lý do khóa học này được mọi người yêu thích",
            content:[
                "Khóa học này ko phải lý thuyết suông khô khốc như bãi cát, cũng không lê thê như series phim dài tập.",
                "Nó là về các kỹ thuật viết bài quảng cáo bán hàng sát thủ được truyền tải ngắn gọn. ",
                "Tôi đã đóng gói nó vào một hệ thống đơn giản, mà bất cứ ai đều có thể thành công với nó. Nội dung của nó đã được biên tập, cắt gọt đến hoàn hảo qua hàng ngàn giờ làm việc.",
                "Vì thế lớp học này sẽ tập trung vào phần quan trọng nhất và lược bỏ hết những gì lan man không cần thiết, những thứ không hỗ trợ cho việc bán hàng."
            ]
        },
        {
            title:"Liệu kỹ năng này có phù hợp với tôi hoặc ngành của tôi?",
            content:[
                "Quảng cáo hiệu quả là điều cần thiết trong mọi ngành & thị trường ngách. ",
                "Bởi Copywriting là “mũi tên bạc” trong mọi hoạt động tiếp thị, nên ngành nào nó cũng tạo ra được sự khác biệt lớn.",
                "Nếu bạn đang kinh doanh. Hãy áp dụng nó và làm ngập lụt doanh số của bạn với lượng người mua Như Mưa Trút Nước!!"
            ]
        }

    ]

    const data2 =[
        {
            title:"Khóa học bao gồm những gì?",
            content:[
                "Khóa học bao gồm các bài giảng video & tài liệu PDF được chuẩn bị tỉ mỉ từ trước.",
                "Tất cả đều là nội dung độc quyền.",
                "Bạn có thể học ở bất kỳ đâu, bất kỳ lúc nào, ngay trên điện thoại, máy tính hoặc mọi thiết bị có Internet…",
            ]
        },
        {
            title:'Bạn có thể học ở bất kỳ đâu, bất kỳ lúc nào, ngay trên điện thoại, máy tính hoặc mọi thiết bị có Internet…',
            content:[
                "Chương trình kéo dài khoảng 12h, được chia nhỏ thành các bài giảng 5-30p.",
                "Thời gian do bạn làm chủ, bạn có thể kết thúc tùy theo tốc độ mình muốn.",
                "Đề xuất của tôi là bạn nên hoàn thành khóa học trong tối đa 7 ngày để hệ thống hóa kiến thức.",
                "Sau đó bạn sẽ có thể quay lại học chi tiết sau."
            ]
        }
    ]

    return (
        <>
            <Header pathname={'faq'} />
            <div className="w-full h-full bg-[#1B2021] pb-10">
                <div className="w-full h-10"></div>
                <div className="container m-auto flex flex-col items-center justify-center">
                    <h2 className="text-center text-[#53E72C] text-[25px] font-[600] my-10">Về Copywriting</h2>
                    <Component data={data1} />

                    <h2 className="text-center text-[#53E72C] text-[25px] font-[600] my-10">Thông Tin Chung</h2>
                    <Component data={data2} />

                </div>
            </div>
            <Footer />
        </>
    )
}