export default function Header() {
    return (

        <div className="header">
            <div className="header-desk">
                <div className="header-top">
                    <div className="container-second">
                        <div className="header-top-inner">
                            <div className="haeder-top-news">
                                <div className="swiper swiper-news swiper-news-js">
                                    <div className="swiper-wrapper"></div>
                                </div>
                            </div>
                            <div className="header-top-contact">
                                <div className="header-top-contact-wrap append-hotline-js loading-ani show-loading-js">
                                    <div className="btn-hotline btn-hotline-js btn-hotline-default-js">
                                        <span className="icon">
                                            <img
                                                src="template/assets/images/header/icon-hostline.png"
                                                alt=""
                                            />
                                        </span>
                                        <span className="text-wrap fw-600">
                                            <span className="txt">Hotline kỹ thuật</span>
                                            <span className="info">
                                                <img
                                                    src="template/assets/images/header/icon-info.png"
                                                    alt=""
                                                />
                                            </span>
                                        </span>
                                        <div className="btn-hotline-info">
                                            <div className="wrap">
                                                Hotline sẽ được cung cấp riêng cho các đồng nghiệp và{" "}
                                                <span className="txt-hl"> miễn phí, hỗ trợ 24/7</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hotline-render hotline-render-js header-loading-ani" />
                                    <div className="header-top-item">
                                        <div className="btn-app btn-app-js">
                                            <span className="icon">
                                                <img
                                                    src="template/assets/images/header/icon-down.png"
                                                    alt=""
                                                />
                                            </span>
                                            <span className="txt fw-600">Tải App mobile</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bot-flex">
                    <div className="header-bot">
                        <div className="container-second">
                            <div className="header-bot-wrap">
                                <div className="header-bot-left append-burger-js"></div>
                                <div className="header-bot-center header-menu append-menu-js">
                                    <ul className="menu-list">
                                        <li className="menu-item">
                                            <a
                                                className="menu-link btn-scroll"
                                                href="https://khanhhung.academy#quyen_loi"
                                            >
                                                <span className="menu-icon">
                                                    <img
                                                        src="https://khanhhung.academy/template/assets/images/header/menu-icon-03.svg"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="menu-txt">Quyền lợi</span>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                className="menu-link btn-scroll"
                                                href="https://khanhhung.academy#chuong_trinh_hoc"
                                            >
                                                <span className="menu-icon">
                                                    <img
                                                        src="https://khanhhung.academy/template/assets/images/header/menu-icon-02.svg"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="menu-txt">Chương trình học</span>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                className="menu-link btn-scroll"
                                                href="https://khanhhung.academy#about-kh"
                                            >
                                                {" "}
                                                <span className="menu-icon">
                                                    <img
                                                        src="https://khanhhung.academy/template/assets/images/header/menu-icon-01.svg"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="menu-txt">Khánh Hùng là ai ?</span>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                className="menu-link"
                                                target="_blank"
                                                rel="noreferrer"
                                                href="https://www.facebook.com/groups/337354765813432"
                                            >
                                                <span className="menu-icon">
                                                    <img
                                                        src="https://khanhhung.academy/template/assets/images/header/hung-colleague-up.svg"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="menu-txt">Hùng's Colleague Club</span>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a className="menu-link" href="blog/index.html">
                                                <span className="menu-icon">
                                                    <img
                                                        src="https://khanhhung.academy/template/assets/images/header/icon-blog.svg"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="menu-txt">Blog</span>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a className="menu-link" href="ban-tin/index.html">
                                                {" "}
                                                <span className="menu-icon">
                                                    <img src="template/assets/images/header/menu-icon-07.svg" alt="" />
                                                </span>
                                                <span className="menu-txt">Hoạt động</span>
                                            </a>
                                        </li>
                                        <li className="menu-item dropdown">
                                            <p className="menu-link">
                                                <span className="menu-icon">
                                                    <img
                                                        src="https://khanhhung.academy/template/assets/images/header/icon-fb.svg"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="menu-txt">Kết nối với Hùng</span>
                                            </p>
                                            <ul className="sub-menu">
                                                <li className="sub-menu-item">
                                                    <a
                                                        className="sub-menu-link"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://www.facebook.com/vy.nguyenkhanhhung/"
                                                    >
                                                        <span className="sub-menu-icon">
                                                            <img
                                                                src="https://khanhhung.academy/template/assets/images/footer/card-follow-icon-fb.svg"
                                                                alt=""
                                                            />
                                                        </span>
                                                        <span className="sub-menu-txt">Kết bạn với Hùng</span>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a
                                                        className="sub-menu-link"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://www.facebook.com/khanhhung.academy"
                                                    >
                                                        <span className="sub-menu-icon">
                                                            <img
                                                                src="https://khanhhung.academy/template/assets/images/footer/card-follow-icon-fb.svg"
                                                                alt=""
                                                            />
                                                        </span>
                                                        <span className="sub-menu-txt">Fanpage</span>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a
                                                        className="sub-menu-link"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://www.youtube.com/@khanhhungacademy"
                                                    >
                                                        <span className="sub-menu-icon">
                                                            <img src="template/assets/images/header/icon-ytb.svg" alt="" />
                                                        </span>
                                                        <span className="sub-menu-txt">Youtube</span>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a
                                                        className="sub-menu-link"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://www.tiktok.com/@khanhhung.academy"
                                                    >
                                                        <span className="sub-menu-icon">
                                                            <img src="template/assets/images/header/icon-tiktok.png" alt="" />
                                                        </span>
                                                        <span className="sub-menu-txt">Tiktok</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                </div>
                                <div className="header-bot-right loading-ani append-btn-learning-js show-loading-js">
                                    <div className="header-top-item download-app">
                                        <a
                                            className="btn-app btn-app-device"
                                            href="https://apps.apple.com/vn/app/khánh-hùng-academy/id6523428725"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <span className="icon">
                                                <img
                                                    src="template/assets/images/header/icon-down-app.svg"
                                                    alt=""
                                                />
                                            </span>
                                            <span className="txt fw-600">Tải App</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-mb menu-mb-js">
                <div className="header-mb-inner append-header-sp-js">
                    <div className="header-mb-logo" style={{ display: "none" }}>
                        {" "}
                        <a className="logo" href="index.html">
                            {" "}
                            <img src="template/assets/images/header/logo.png" alt="" />
                        </a>
                    </div>
                    <div className="header-mb-btn">
                        {" "}
                        <a className="btn-second style-pri" href="study/1/index.html">
                            {" "}
                            <span className="txt-wrap">
                                {" "}
                                <span className="icon">
                                    {" "}
                                    <img src="template/assets/images/header/flash.svg" alt="" />
                                </span>
                                <span className="txt fw-600">Học ngay </span>
                            </span>
                        </a>
                    </div>
                    <div className="header-mb-wrap">
                        <div className="menu-mb-list">
                            <div className="menu-mb-item">
                                <div className="menu-mb-tt">Quyền lợi cho riêng bạn</div>
                                <ul className="menu-list">
                                    <li className="menu-item disabled-for-free-js">
                                        <a
                                            className="menu-link"
                                            href="learn/mona-elearning-bundle/index.html"
                                        >
                                            <span className="icon">
                                                <img
                                                    src="template/assets/images/header/bundle-menu.svg"
                                                    alt=""
                                                />
                                            </span>
                                            <span className="txt fw-600">
                                                Giá siêu ưu đãi Website elearning bundle{" "}
                                            </span>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link" href="learn/free-mentor/index.html">
                                            <span className="icon">
                                                <img
                                                    src="template/assets/images/header/ic-chanel-calendar.svg"
                                                    alt=""
                                                />
                                            </span>
                                            <span className="txt fw-600">Đặt hẹn Free mentor </span>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link" href="learn/free-setup/index.html">
                                            <span className="icon">
                                                <img
                                                    src="template/assets/images/header/ic-chanel-setup.svg"
                                                    alt=""
                                                />
                                            </span>
                                            <span className="txt fw-600">Đăng ký Free setup </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-mb-item">
                                <div className="menu-mb-tt">Profile</div>
                                <ul className="menu-list">
                                    <li className="menu-item">
                                        <a className="menu-link" href="learn/dashboard/index.html">
                                            <span className="icon">
                                                {" "}
                                                <img
                                                    src="template/assets/images/header/icon-mb-01.svg"
                                                    alt=""
                                                />
                                            </span>
                                            <span className="txt fw-600">Dashboard</span>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a
                                            className="menu-link"
                                            href="learn/change-password/index.html"
                                        >
                                            <span className="icon">
                                                {" "}
                                                <img
                                                    src="template/assets/images/header/icon-mb-02.svg"
                                                    alt=""
                                                />
                                            </span>
                                            <span className="txt fw-600">Đổi mật khẩu</span>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link" href="learn/profile/index.html">
                                            <span className="icon">
                                                {" "}
                                                <img
                                                    src="template/assets/images/header/icon-mb-03.svg"
                                                    alt=""
                                                />
                                            </span>
                                            <span className="txt fw-600">Profile C1</span>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link" href="learn/your-ticket/index.html">
                                            <span className="icon">
                                                {" "}
                                                <img
                                                    src="template/assets/images/header/icon-mb-04.svg"
                                                    alt=""
                                                />
                                            </span>
                                            <span className="txt fw-600">Ticket của bạn</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-mb-item">
                                <div className="menu-mb-tt">Làm ăn cùng Hùng</div>
                                <ul className="menu-list">
                                    <li className="menu-item">
                                        <a
                                            className="menu-link"
                                            href="learn/affiliate/dashboard/index.html"
                                        >
                                            <span className="icon">
                                                {" "}
                                                <img
                                                    src="template/assets/images/header/icon-mb-07.svg"
                                                    alt=""
                                                />
                                            </span>
                                            <span className="txt fw-600">Dashboard Affiliate</span>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a
                                            className="menu-link"
                                            href="learn/affiliate/policy/index.html"
                                        >
                                            <span className="icon">
                                                {" "}
                                                <img
                                                    src="template/assets/images/header/icon-mb-08.svg"
                                                    alt=""
                                                />
                                            </span>
                                            <span className="txt fw-600">Chính sách Affiliate</span>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a
                                            className="menu-link"
                                            href="learn/ambassador-offer/index.html"
                                        >
                                            <span className="icon">
                                                {" "}
                                                <img
                                                    src="template/assets/images/header/coupon-code.svg"
                                                    alt=""
                                                />
                                            </span>
                                            <span className="txt fw-600">Ambassador's offer</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-mb-item">
                                <div className="menu-mb-tt">Về khóa học</div>
                                <ul className="menu-list">
                                    <li className="menu-item">
                                        <a className="menu-link btn-scroll" href="index.html#quyen_loi">
                                            <span className="icon">
                                                {" "}
                                                <img
                                                    src="template/assets/images/header/quyen-loi.svg"
                                                    alt=""
                                                />
                                            </span>
                                            <span className="txt fw-600">Quyền lợi</span>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a
                                            className="menu-link btn-scroll"
                                            href="index.html#chuong_trinh_hoc"
                                        >
                                            <span className="icon">
                                                {" "}
                                                <img
                                                    src="template/assets/images/header/chuong-trinh-hoc.svg"
                                                    alt=""
                                                />
                                            </span>
                                            <span className="txt fw-600">Chương trình học</span>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link btn-scroll" href="index.html#about-kh">
                                            <span className="icon">
                                                {" "}
                                                <img
                                                    src="template/assets/images/header/kh-la-ai.svg"
                                                    alt=""
                                                />
                                            </span>
                                            <span className="txt fw-600">Khánh Hùng là ai</span>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link" href="index.html#faqs">
                                            <span className="icon">
                                                <img src="template/assets/images/header/faq.svg" alt="" />
                                            </span>
                                            <span className="txt fw-600">FAQs</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header-mb-logout">
                        <div className="header-mb-level-item">
                            <a href="index.html" className="header-mb-level-tt">
                                <span className="icon">
                                    <img src="template/assets/images/header/window.svg" alt="" />
                                </span>
                                <span className="txt"> Đăng xuất</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="haeder-bgOver bg-over-js" />
        </div>
    )
}