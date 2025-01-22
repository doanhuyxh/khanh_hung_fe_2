import BannerItem from "./BannerItem";

export default function BannerFeatures(){

    const BANNER_ITEMS = [
        {
            title:"Tại sao bạn nên sử dụng Copywriting ngay khi có thể?",
            image:"/wp-content/uploads/2024/08/6cfeeb91-930e-4021-888e-ab5d2a150183.png",
            EXPERIENCE_ITEMS : [
                "Bài quảng cáo là “chuyên gia bán hàng online” làm việc 24/7. Bạn có thể bán được hàng ngay cả khi ngủ (tự động hóa)",
                "Copywriting tương tự việc bạn có đội quân bán hàng ảo 10.000 người cùng lúc",
                "Bạn có thể viết bài quảng cáo một lần và kiếm tiền từ nó nhiều lần.",
            ]
        },
        {
            title:"Grow your Copywriting skills, easy learning",
            image:"/wp-content/uploads/2024/08/fd021088-88fc-4ce1-a21a-eed8b8d5b2d6.png",
            EXPERIENCE_ITEMS : [
                "Bất kể bạn đang bán gì, có thể là sản phẩm, dịch vụ, chương trình học tại nhà, sách, hội thảo… — bất cứ thứ gì — thì thứ mà mọi người mua không phải là ‘sản phẩm’, mà là sự chuyển đổi",
                "Đó chính là thứ duy nhất bạn đang bán, bất kể bạn đang kinh doanh gì và bạn cung cấp sản phẩm gì: bạn đang bán cho khách hàng một phiên bản tốt hơn của chính họ (sự chuyển đổi)”.",
                "Bạn có thể viết bài quảng cáo một lần và kiếm tiền từ nó nhiều lần.",
            ]
        },

    ]

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-20 bg-[#580B94] py-20 pb-30">
            {BANNER_ITEMS.map((item, index) => (
                <BannerItem key={index} title={item.title} imageSrc={item.image} EXPERIENCE_ITEMS={item.EXPERIENCE_ITEMS}/>
            ))}
        </div>
    )
}