import Image from 'next/image'
import BannerItem from './BannerItem'

export default function BannerFourth() {

    const data = [
        {
            icon: "https://borntowrite.vn/wp-content/uploads/2024/08/431487835_7272906562820406_1003714109076712423_n.jpg",
            name: "Đoàn Quang Huy",
            job: "Business Manager",
            img: "/images/photo_2025_1.jpg",
            content: `"Nếu bạn giống tôi, từng nghĩ mình chẳng bao giờ bán được bất cứ thứ gì đắt tiền trên mạng, khóa học này sẽ khiến bạn nghĩ lại. Có nhiều khóa học về chủ đề hướng dẫn viết quảng cáo nhưng tôi cam đoan đây là khóa học duy nhất giúp tôi viết quảng cáo 'ra đơn'..."`,
        },
        {
            icon: "https://borntowrite.vn/wp-content/uploads/2024/08/46491637_1664297420383634_1236891748785979392_n.jpg",
            name: "Bích Duyên",
            job: "Owner",
            img: "/images/photo_2025_1.jpg",
            content: `Mới set camp xong, sau vài ngày lượt inbox của page đã gấp 12 lần so với cùng một ngân sách bài ads gần nhất. Doanh số thực tế của tôi sau một tháng tăng 600%. Về căn bản lớp học này đáng giá từng xu vì nó giúp bạn kiếm tiền thay vì làm bạn tốn tiền"`,
        },
        {
            icon: "https://borntowrite.vn/wp-content/uploads/2024/08/333031820_897435331501750_6130442285133360897_n.jpg",
            name: "N. Anh Thắng",
            job: "Owner",
            img: "/images/photo_2025_2.jpg",
            content: `"Nếu bạn giống tôi, từng nghĩ mình chẳng bao giờ bán được bất cứ thứ gì đắt tiền trên mạng, khóa học này sẽ khiến bạn nghĩ lại. Có nhiều khóa học về chủ đề hướng dẫn viết quảng cáo nhưng tôi cam đoan đây là khóa học duy nhất giúp tôi viết quảng cáo 'ra đơn'..."`,
        },
    ]

    return (
        <div className="pt-30 pb-10 px-10 bg-[#440873] rounded-t-[20%]">

            <div className="max-w-[1200px] text-white m-auto">
                <div className="flex flex-col items-center gap-5 mb-20">
                    <h3 className='text-[#f5851e] text-[6rem] font-[600]'>Đồng nghiệp nói gì về tôi</h3>
                </div>
                <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
                    {data.map((item, index) => (
                        <BannerItem key={index} icon={item.icon} name={item.name} job={item.job} content={item.content}
                                    img={item.img}/>
                    ))}
                </div>
                <div>
                    <div
                        className="w-full flex flex-col justify-center items-center my-50 animate-fade-down animate-infinite animate-duration-[600ms]">
                        <div className="arrow-item">
                            <Image src={"/template/assets/images/home/arrow-item-02-pri.png"} width={1000} height={10}
                                   alt="" style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                        </div>
                        <div className="arrow-item">
                            <Image src={"/template/assets/images/home/arrow-item-02-pri.png"} width={1000} height={10}
                                   alt="" style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}