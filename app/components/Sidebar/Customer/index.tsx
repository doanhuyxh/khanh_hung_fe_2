"use client";

import Image from "next/image";
import BlockItem from "./BlockItem";
import "./index.css";
import { useEffect, useState } from "react";
import { Customer } from "@/app/libs/types";
import axiosCustomerConfig from "@/app/libs/configs/axiosCustomerConfig";
import { title } from "process";
import Link from "next/link";


function Sidebar() {

  const [menu, setMenu] = useState([
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
        // {
        //   name: "Ticket của bạn",
        //   imageSrc: "/assets/images/mb-ic-4.svg",
        //   link: "/learn/ticket"
        // },
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
        // {
        //   name: "Dashboard Affiliate",
        //   imageSrc: "/assets/images/ic-chanel-calendar.svg",
        //   link: ""
        // },
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
          link: "/#chuong-trinh-hoc"
        },
        {
          name: "Quyền lợi",
          imageSrc: "/assets/images/ic-chanel-5.svg",
          link: "/#quyen-loi"
        },
        {
          name: "Thông tin về chúng tôi",
          imageSrc: "/assets/images/ic-chanel-3-side-menu.svg",
          link: "/#thong-tin-ve-chung-toi"
        },
        {
          name: "Q&A",
          imageSrc: "/assets/images/ic-chanel-6-side-menu.svg",
          link: "/#faqs"
        }
      ]
    }
  ])

  const [user, setUser] = useState<Customer>()

  const handleLogout = () => {
    localStorage.clear()
    sessionStorage.clear()

    axiosCustomerConfig.get(`Auth/LogOut?id=${user?.id}`).then(() => {
      window.location.href = "/"
    })
  }

  useEffect(() => {
    const width = window.innerWidth
    if (width < 800) {
      const userData = sessionStorage.getItem("user") ?? "{}"
      setUser(JSON.parse(userData))

    }
  }, [])

  return (
    <>
      <div className="sidebar_container animate-fade-right animate-once animate-duration-300 animate-ease-linear">
        <div className="sidebar_content">

          {user && <div className="w-full mx-8 mb-10 overflow-hidden">

            <div className="my-2 mx-2 flex gap-4 mb-4">
              <a href="/learn/profile" className="w-[40px rounded-full overflow-hidden">
                <Image src="/assets/images/avatar_defaut.jpg" alt="profile" width={40} height={40} style={{ height: "auto" }} />
              </a>
              <div className="flex flex-col gap-1">
                <p className="text-nowrap text-black font-bold text-2xl">{user?.firstName + " " + user?.lastName}</p>
                <div className="text-nowrap flex items-center gap-1">
                  <Image src="/assets/images/price-icon.svg" alt="star" width={15} height={15} />
                  <span className="text-nowrap text-color-primary font-bold text-xl m-y-auto">{user?.totalMoney}đ</span>
                </div>
              </div>

            </div>

            <hr className="h-4 w-full" />

            <div className="flex flex-col gap-8">
              <div className="flex gap-3">
                <Image src={"/assets/images/hd-logged-1.svg"} width={20} height={20} alt="" />
                <div className="flex flex-col gap-2">
                  <p className="text-3xl text-gray-600">Mã khách hàng</p>
                  <p className="text-3xl text-[#2686ec] flex items-center gap-2">
                    {user.code}
                    <span>
                      <Image src={"/assets/images/ic-cp-blue.svg"} width={10} height={10} alt="" />
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Image src={"/assets/images/hd-logged-4.svg"} width={20} height={20} alt="" />
                <div className="flex flex-col gap-2">
                  <p className="text-3xl text-gray-600">Affiliate Level: {user.level_affiliate}</p>
                  <p className="text-3xl text-[#2686ec] flex items-center gap-2">Link Affiliate
                    <span>
                      <Image src={"/assets/images/ic-cp-blue.svg"} width={10} height={10} alt="" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>}

          <div className="sidebar_top">
            <Link href="/study" className="sidebar_top_wrap">
              <span className="icon_thunder">
                <Image
                  width={20}
                  height={31}
                  alt=""
                  src={"/assets/images/ic-thunder.svg"}
                />
              </span>
              <span>Học ngay</span>
            </Link>
          </div>
          <div className="sidebar_body">
            <div className="sidebar_body_wrap">
              <div
                style={{
                  height: "16px",
                  width: "228.008px",
                  opacity: 0,
                  transform: "translateY(80.1855px)",
                }}
              />
              {menu.map((item, index) => {
                return <BlockItem title={item.title} menuItems={item.menuItems} key={index} />
              })}
              {
                user && <div className="block_item cursor-pointer">
                  <div onClick={handleLogout} className="flex items-center gap-2 px-5 py-3 cursor-pointer">
                    <div className="flex justify-center text-gray-500">
                      <Image src="/assets/images/header/window.svg" alt="profile" width={15} height={15} />
                    </div>
                    <div className="text-nowra text-xl flex flex-col gap-2">
                      <p className="text-gray-500 font-semibold">Đăng xuất</p>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
