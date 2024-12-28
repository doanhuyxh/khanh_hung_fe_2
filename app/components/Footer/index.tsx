'use client'
import { useState } from 'react'
import Image from 'next/image'
import './index.css'

export default function Footer() {
    const [isShowMore, setIShowMore] = useState(false)

    return (
        <footer
            className="footer"
            style={{
                backgroundImage: "url(template/assets/images/footer/footer-bg.jpg)",
                backgroundRepeat: "no-repeat", backgroundSize: "cover",
                backgroundPosition: "center", backgroundAttachment: "fixed"
            }}>
            <div className="container m-auto lg:p-[6rem]">
                <div className="footer-row">
                    <div className="footer-card">
                        <div className="card-info">
                            <div className="card-info-header">
                                <div className="cover">
                                    <img
                                        src="/template/assets/images/footer/card-info-cover.jpg"
                                        alt=""
                                        loading="lazy"
                                    />
                                </div>
                                <div className="avt">
                                    <img
                                        src="/template/assets/images/footer/ft-hl-ava.png"
                                        alt=""
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="card-info-body">
                                <div className="name">Vy Nguyễn Khánh Hùng</div>
                                <div className="title">
                                    CEO, Founder
                                    <img
                                        src="/template/assets/images/footer/card-info-logo.svg"
                                        alt=""
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content">
                        <div className="footer-content-block">
                            <p>
                                Hùng đã thành lập{" "}
                                <span className="footer-logo-small">
                                    <img
                                        src="/template/assets/images/footer/footer-logo-small-the-mona.svg"
                                        alt=""
                                        loading="lazy"
                                    />
                                </span>
                            </p>
                            <p>
                                với tiền thân là nhóm Freelancer gồm Hùng và 3 anh em khác từ năm
                                2016 và cho đến hiện nay
                                <span className="footer-logo-small">
                                    <img
                                        src="/template/assets/images/footer/footer-logo-small-the-mona.svg"
                                        alt=""
                                        loading="lazy"
                                    />
                                </span>
                                <span className="fw-600">đã có hơn 200 nhân sự.</span>
                            </p>
                        </div>
                        <div className="footer-content-block">
                            <p>
                                Trong suốt quá trình đó thì Hùng đã làm việc với rất nhiều khách
                                hàng khác nhau, đặc biệt trong mảng giáo dục Hùng{" "}
                                <span className="fw-600">
                                    đã và đang đồng hành không gián đoạn với hơn 300 tổ chức giáo dục,
                                    hơn 80 giảng viên giúp{" "}
                                </span>
                                họ tạo ra hệ thống giảng dạy tự động và hoạt động hiệu quả với nó.
                            </p>
                        </div>
                        <div className="footer-content-block">
                            <div className="desc-viewmore">
                                <p>
                                    Bên cạnh đó,{" "}
                                    <span className="fw-600">
                                        Hùng cũng làm việc với hơn 2000+ đối tác E-commerce ở các thị
                                        trường khác nhau.
                                        {!isShowMore && <span
                                            onClick={() => setIShowMore(true)}
                                            className="footer-view-more text-[#f41e92]"
                                        >
                                            Xem thêm
                                        </span>}
                                    </span>
                                </p>
                            </div>
                            {isShowMore && <div className="animate-fade-down">
                                <div className="footer-content-block">
                                    <p>
                                        Hùng đã tìm ra cách bán khoá học tốt nhất là bán theo mô hình
                                        e-commerce, nghĩa là bạn tạo ra và bán khoá học như một sản phẩm
                                        điện tử, bán tự động, dạy tự động, tạo thu nhập thụ động đúng
                                        nghĩa cho bạn.
                                    </p>
                                </div>
                                <div className="footer-content-block">
                                    <p className="fw-600">
                                        Toàn bộ kiến thức, kinh nghiệm, số liệu Hùng đều chia sẻ miễn
                                        phí tại:{" "}
                                    </p>
                                    <p className="fw-600">
                                        <a
                                            className="desc-link txt-upper"
                                            href=""
                                        >
                                            KHOÁ HỌC BÁN KHOÁ HỌC
                                        </a>
                                    </p>
                                </div>
                                <div className="footer-content-block">
                                    <p className="desc-viewless">
                                        <span className="fw-600">
                                            Bạn không cần tốn bất kỳ chi phí nào, chỉ cần đăng ký và học
                                            miễn phí ngay.
                                            {isShowMore && <span className="footer-view-less text-[#e18308]" onClick={() => setIShowMore(false)}>
                                                Thu gọn
                                            </span>}
                                        </span>
                                    </p>
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className="footer-follow">
                        <div className="card-follow">
                            <div className="card-follow-label fw-600">Theo dõi Hùng tại:</div>
                            <div className="card-follow-list">
                                <a
                                    className="card-follow-item"
                                    href="https://www.facebook.com/khanhhung.academy"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Theo dõi Hùng trên Facebook"
                                >
                                    <span className="icon">
                                        <img
                                            src="/template/assets/images/footer/card-follow-icon-fb.svg"
                                            alt="Facebook"
                                            loading="lazy"
                                        />
                                    </span>
                                    <span className="txt">@vy.nguyenkhanhhung</span>
                                </a>

                                <a
                                    className="card-follow-item"
                                    href="https://www.linkedin.com/in/vy-nguyen-khanh-hung-0287722a6/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Theo dõi Hùng trên LinkedIn"
                                >
                                    <span className="icon">
                                        <img
                                            src="/template/assets/images/footer/card-follow-icon-linkedin.svg"
                                            alt="LinkedIn"
                                            loading="lazy"
                                        />
                                    </span>
                                    <span className="txt">@KHA.Team</span>
                                </a>
                                <a
                                    className="card-follow-item"
                                    href=""
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Theo dõi Hùng trên YouTube"
                                >
                                    <span className="icon">
                                        <img
                                            src="/template/assets/images/footer/card-follow-icon-ytb.svg"
                                            alt="YouTube"
                                            loading="lazy"
                                        />
                                    </span>
                                    <span className="txt">@KhanhHungAcademy</span>
                                </a>
                            </div>
                        </div>
                        <div className="footer-dmca">
                            <a
                                href=""
                                title="DMCA.com Protection Status"
                                className="dmca-badge"
                            >
                                <img
                                    src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=75cdf341-9b39-4dd1-8203-879110316ee9"
                                    alt="DMCA.com Protection Status"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ft-bottom'>
                <div className='container m-auto'>
                    <div className='flex flex-col lg:flex-row gap-10 justify-center'>
                        <div className='flex-1 ft-if-text'>
                            <ul>
                                <li className='text-black'>Liên hệ</li>
                                <li>
                                    <a href='#!' className='fw-600  flex flow-row justify-start items-start w-fit gap-2'>
                                        <span className='w-[24px] h-[24px] inline-block mr-2'>
                                            <Image width={24} height={24} src='/template/assets/images/footer-icon-mail.svg' alt='Phone' loading='lazy' />
                                        </span>
                                        <p className='w-fit '>
                                            Email <br />
                                            <span className='hl-purple'>
                                                info@khanhhung.academy
                                            </span>
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='fw-600  flex flow-row justify-start items-start w-fit gap-2'>

                                        <span className='w-[24px] h-[24px] inline-block mr-2'>
                                            <Image width={24} height={24} src='/template/assets/images/footer-icon-marker.svg' alt='Phone' loading='lazy' />
                                        </span>
                                        <p className='w-fit '>
                                            Địa chỉ <br />
                                            <span className='hl-purple'>
                                                1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM
                                            </span>
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='flex-1'>
                            <ul>
                                <li>
                                    <span className='text-black-2'>Mã số thuế</span>
                                </li>
                                <li>
                                    <a href='#!' className='fw-600 hl-purple'>
                                        Công ty TNHH MONA MEDIA <br />

                                    </a>
                                </li>
                                <li className=''>
                                    <span className='tphone'> 0313728397</span>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col'>
                            <div>
                                <ul>
                                    <li>
                                        <a href='#!' className='text-black'>Chính sách bảo mật</a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-black'>Điều khoản sử dụng</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=''>
                                <div className='text-center mt-10'>
                                    <p>&copy; 2023 Your Company. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
