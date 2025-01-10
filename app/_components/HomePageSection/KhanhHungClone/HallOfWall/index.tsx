export default function HallOfWall() {
    const academyItems = [
        {
            href: "",
            logo: "hall-of-fame-logo-quyet-tran.png",
            title: "Quyết Trần Academy",
            thumb: "hall-of-fame-item-quyet-tran.jpg"
        },
        {
            href: "",
            logo: "hall-of-fame-logo-huan.png",
            title: "Huân Academy",
            thumb: "hall-of-fame-item-huan-up.jpg"
        },
        {
            href: "",
            logo: "hall-of-fame-logo-huan.png",
            title: "Huân Academy",
            thumb: "hall-of-fame-item-huan-up.jpg"
        },
        {
            href: "",
            logo: "hall-of-fame-logo-huan.png",
            title: "Huân Academy",
            thumb: "hall-of-fame-item-huan-up.jpg"
        },
        {
            href: "",
            logo: "hall-of-fame-logo-huan.png",
            title: "Huân Academy",
            thumb: "hall-of-fame-item-huan-up.jpg"
        },
        {
            href: "",
            logo: "hall-of-fame-logo-huan.png",
            title: "Huân Academy",
            thumb: "hall-of-fame-item-huan-up.jpg"
        },
        {
            href: "",
            logo: "hall-of-fame-logo-huan.png",
            title: "Huân Academy",
            thumb: "hall-of-fame-item-huan-up.jpg"
        },
        {
            href: "",
            logo: "hall-of-fame-logo-huan.png",
            title: "Huân Academy",
            thumb: "hall-of-fame-item-huan-up.jpg"
        },
        {
            href: "",
            logo: "hall-of-fame-logo-huan.png",
            title: "Huân Academy",
            thumb: "hall-of-fame-item-huan-up.jpg"
        },
        {
            href: "",
            logo: "hall-of-fame-logo-huan.png",
            title: "Huân Academy",
            thumb: "hall-of-fame-item-huan-up.jpg"
        },
        {
            href: "",
            logo: "hall-of-fame-logo-huan.png",
            title: "Huân Academy",
            thumb: "hall-of-fame-item-huan-up.jpg"
        },
        {
            href: "",
            logo: "hall-of-fame-logo-huan.png",
            title: "Huân Academy",
            thumb: "hall-of-fame-item-huan-up.jpg"
        },
        {
            href: "",
            logo: "hall-of-fame-logo-huan.png",
            title: "Huân Academy",
            thumb: "hall-of-fame-item-huan-up.jpg"
        },
        
    ];

    return (
        <div className="sec-com colleague-success">
            <svg
                className="waves"
                xmlns="#www.w3.org/2000/svg"
                xmlnsXlink="#www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
            >
                <defs>
                    <path
                        id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                </defs>
                <g className="parallax">
                    <use
                        xlinkHref="#gentle-wave"
                        x={48}
                        y={0}
                        fill="rgba(255,255,255,0.2)"
                    />
                    <use
                        xlinkHref="#gentle-wave"
                        x={48}
                        y={3}
                        fill="rgba(255,255,255,0.4)"
                    />
                    <use
                        xlinkHref="#gentle-wave"
                        x={48}
                        y={7}
                        fill="rgba(124, 15, 209, 1)"
                    />
                </g>
            </svg>
            <div className="colleague-success-wrap">
                <div className="decor">
                    {" "}
                    <img
                        src="template/assets/images/home/colleague-success-decor.png"
                        alt=""
                        loading="lazy"
                    />
                </div>

                <div className="hall-of-fame">

                    <div className="container">
                        <div className="hall-of-fame-header">
                            <div className="img-tt">
                                <img
                                    src="template/assets/images/home/hall-of-fame-tt-up.png"
                                    alt=""
                                    className="bounce-effect add-active-js"
                                />
                                <div className="desc-f">
                                    <span className="desc-f-shape" />
                                    <p className="desc">TỔNG HỢP KHÓA HỌC HÀNG ĐẦU THỊ TRƯỜNG</p>
                                </div>
                            </div>
                        </div>
                        <div className="hall-of-fame-content">
                            <div className="list d-flex f-ctn">
                                {academyItems.map((item, index) => (
                                    <div className="item col col-4" key={index}>
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="nofollow external noopener noreferrer"
                                            data-wpel-link="external"
                                            className="wrap"
                                        >
                                            <span className="title">
                                                <span className="img">
                                                    <img
                                                        src={`template/assets/images/home/${item.logo}`}
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="txt">{item.title}</span>
                                            </span>
                                            <div className="img-thumb">
                                                <img
                                                    src={`template/assets/images/home/${item.thumb}`}
                                                    alt=""
                                                />
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="colleague-success-confetti" id="tsparticles" />
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
        </div>
    )
}