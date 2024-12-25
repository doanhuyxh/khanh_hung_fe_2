"use client";

import Image from "next/image";
import BlockItem from "./BlockItem";
import "./index.scss";


function Sidebar() {

  const menu = [
    // {
    //   title: "Quyền lợi riêng cho bạn",
    //   menuItems: [
    //     {
    //       name: "Đặt lich hẹn Free mentor",
    //       imageSrc:"/assets/images/ic-chanel-calendar.svg",
    //       link: ""
    //     },
    //     {
    //       name: "Đăng ký Free Setup",
    //       imageSrc:"/assets/images/ic-chanel-setup.svg",
    //       link: ""
    //     },

    //   ]
    // },
    {
      title: "Profile",
      menuItems: [
        {
          name: "Dashboard",
          imageSrc: "/assets/images/mb-ic-1.svg",
          link: "/learn/dashboard"
        },
        {
          name: "Đổi mật khẩu",
          imageSrc: "/assets/images/mb-ic-2.svg",
          link: "/learn/change-password"
        },
        {
          name: "Profile C1",
          imageSrc: "/assets/images/mb-ic-3.svg",
          link: "/learn/profile"
        },
        {
          name: "Ticket của bạn",
          imageSrc: "/assets/images/mb-ic-4.svg",
          link: "/learn/ticket"
        },
        {
          name: "Thông báo của bạn",
          imageSrc: "/assets/images/ic-history-email.svg",
          link: "/learn/notification"
        },

      ]
    },
    {
      title: "Kinh doanh cùng tôi",
      menuItems: [
        {
          name: "Dashboard Affiliate",
          imageSrc: "/assets/images/ic-chanel-calendar.svg",
          link: ""
        },
        {
          name: "Chính sách Affiliate",
          imageSrc: "/assets/images/mb-ic-11.svg",
          link: "/learn/affiliate/policy"
        },
      ]
    },
    {
      title: "Về khoá học",
      menuItems: [
        {
          name: "Chương trình học",
          imageSrc: "/assets/images/ic-chanel-4-side-menu.svg",
          link: "#chuong-trinh-hoc"
        },
        {
          name: "Quyền lợi",
          imageSrc: "/assets/images/ic-chanel-5.svg",
          link: "/#quyen-loi"
        },
        {
          name: "Thông tin về chúng tôi",
          imageSrc: "/assets/images/ic-chanel-3-side-menu.svg",
          link: "#thong-tin-ve-chung-toi"
        },
        {
          name: "Q&A",
          imageSrc: "/assets/images/ic-chanel-6-side-menu.svg",
          link: "/#faqs"
        }
      ]
    }
  ]

  return (
    <>
      <div className="sidebar_container animate-fade-right animate-once animate-duration-300 animate-ease-linear">
        <div className="sidebar_content">
          <div className="sidebar_top">
            <a href="/learn/study" className="sidebar_top_wrap">
              <span className="icon_thunder">
                <Image
                  width={20}
                  height={31}
                  alt=""
                  src={"/assets/images/ic-thunder.svg"}
                />
              </span>
              <span>Học ngay</span>
            </a>
          </div>

          <div className="sidebar_body">
            <div className="sidebar_body_wrap">
              <div
                style={{
                  height: "43.9941px",
                  width: "228.008px",
                  opacity: 0,
                  transform: "translateY(80.1855px)",
                }}
              />
              {menu.map((item, index) => {
                return <BlockItem title={item.title} menuItems={item.menuItems} key={index} />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
