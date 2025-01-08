
import ScrollComponent from '../../../Scroll/ScrollComponent'


interface ColleagueData {
    avatar: string;
    name: string;
    title: string;
    videoUrl?: string;
    imageUrl?: string;
}

const colleagueData: ColleagueData[] = [
    {
        avatar: "template/assets/images/home/avt-colleague-1.jpg",
        name: "Trí Quốc Võ (Bảo hiểm Manulife)",
        title: "Trưởng nhóm kinh doanh cao cấp Manulife, Chuyên gia đào tạo Zalo Marketing",
        videoUrl: "https://video.mona-cloud.com/api/video/?user=67021606&video=1735028194-mr-quoc-tri-chuyen-gia-zalo-marketing-feedback&protected=False&version=v2&token=gAAAAABnani5Ayp2mGs1ryBDGgwJkvXGeeMdP7XSJS6d4fjoB0WYckQEDknunqHevAkY6RQ9-bLUHeXFbJdF0uZE1Gt2UxHKkNTDvlVbbI2ozOnq7qADYa0%3D"
    },
    {
        avatar: "template/assets/images/home/avt-colleague-a-thanh-mkt.jpg",
        name: "Anh Thanh",
        title: "Founder Học viện Fulfill, Nguyên Giảng viên thỉnh giảng Digital Marketing Đại học Hoa Sen (2020-2023), cựu trưởng phòng marketing Hyundai An Phú, Vua Bia",
        videoUrl: "https://video.mona-cloud.com/api/video/?user=67021606&video=1735028284-mentor-9-feedback-anh-thanh-mkt&protected=False&version=v2&token=gAAAAABnani5e7ar682IhRsHnN0usCSwgniv5lfR8m9rHhJpy0r7lV6hIUAzZkE18HDj6HY1yM_CaWgSVHnDsXW0btkmuUDYVYAbEREluKO0XmXJFiErV6E%3D"
    },
    
    {
        avatar: "template/assets/images/home/avt-colleague-a-thanh-mkt.jpg",
        name: "Anh Thanh",
        title: "Founder Học viện Fulfill, Nguyên Giảng viên thỉnh giảng Digital Marketing Đại học Hoa Sen (2020-2023), cựu trưởng phòng marketing Hyundai An Phú, Vua Bia",
        videoUrl: "https://video.mona-cloud.com/api/video/?user=67021606&video=1735028284-mentor-9-feedback-anh-thanh-mkt&protected=False&version=v2&token=gAAAAABnani5e7ar682IhRsHnN0usCSwgniv5lfR8m9rHhJpy0r7lV6hIUAzZkE18HDj6HY1yM_CaWgSVHnDsXW0btkmuUDYVYAbEREluKO0XmXJFiErV6E%3D"
    },
    
    {
        avatar: "template/assets/images/home/avt-colleague-a-thanh-mkt.jpg",
        name: "Anh Thanh",
        title: "Founder Học viện Fulfill, Nguyên Giảng viên thỉnh giảng Digital Marketing Đại học Hoa Sen (2020-2023), cựu trưởng phòng marketing Hyundai An Phú, Vua Bia",
        videoUrl: "https://video.mona-cloud.com/api/video/?user=67021606&video=1735028284-mentor-9-feedback-anh-thanh-mkt&protected=False&version=v2&token=gAAAAABnani5e7ar682IhRsHnN0usCSwgniv5lfR8m9rHhJpy0r7lV6hIUAzZkE18HDj6HY1yM_CaWgSVHnDsXW0btkmuUDYVYAbEREluKO0XmXJFiErV6E%3D"
    },
    
    {
        avatar: "template/assets/images/home/avt-colleague-a-thanh-mkt.jpg",
        name: "Anh Thanh",
        title: "Founder Học viện Fulfill, Nguyên Giảng viên thỉnh giảng Digital Marketing Đại học Hoa Sen (2020-2023), cựu trưởng phòng marketing Hyundai An Phú, Vua Bia",
        videoUrl: "https://video.mona-cloud.com/api/video/?user=67021606&video=1735028284-mentor-9-feedback-anh-thanh-mkt&protected=False&version=v2&token=gAAAAABnani5e7ar682IhRsHnN0usCSwgniv5lfR8m9rHhJpy0r7lV6hIUAzZkE18HDj6HY1yM_CaWgSVHnDsXW0btkmuUDYVYAbEREluKO0XmXJFiErV6E%3D"
    },
    
];

export default function AboutMe() {
    return (
        <div className="sec-com colleague-club">
            <div className="colleague-club-mask"> </div>
            <div className="container">
                <div className="title">Đồng Nghiệp nói gì về khoá học của Hùng</div>
                <div className="colleague-club-content swiper-common-js">
                    <div className="swiper slideGroup">
                        <ScrollComponent className="swiper-wrapper list" direction="horizontal">
                            {colleagueData.map((colleague, index) => (
                                <div key={index} className="swiper-slide item col col-4">
                                    <div className="wrap">
                                        <div className="info">
                                            <div className="info-avt">
                                                <img src={colleague.avatar} alt="" />
                                            </div>
                                            <div className="info-txt">
                                                <div className="info-name">{colleague.name}</div>
                                                <div className="info-title">{colleague.title}</div>
                                                <div className="tag-list">
                                                    <span className="tag-list">
                                                        <span className="tag-item tag-pro">
                                                            <img
                                                                className="icon"
                                                                src="template/assets/images/tag/tag-pro.svg"
                                                                alt=""
                                                            />
                                                            ĐỒNG NGHIỆP PRO
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            {colleague.videoUrl ? (
                                                <iframe
                                                    className="inner"
                                                    width="100%"
                                                    height="100%"
                                                    src={colleague.videoUrl}
                                                    frameBorder={0}
                                                />
                                            ) : (
                                                <img
                                                    className="inner opti-image"
                                                    src={colleague.imageUrl}
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </ScrollComponent>
                    </div>
                    <div className="slider-navi">
                        <div className="slider-navi-common-prev slider-navi-btn slider-navi-prev">
                            <img src="template/assets/images/home/icon_angle-left.png" alt="" />
                        </div>
                        <div className="slider-navi-common-next slider-navi-btn slider-navi-next">
                            <img src="template/assets/images/home/icon_angle-left.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="personalized-arrow">
                <div className="arrow-wrap add-active-js">
                    <div className="arrow-item">
                        <img src="template/assets/images/home/arrow-item-01-pri.png" alt="" />
                    </div>
                    <div className="arrow-item">
                        <img src="template/assets/images/home/arrow-item-02-pri.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}