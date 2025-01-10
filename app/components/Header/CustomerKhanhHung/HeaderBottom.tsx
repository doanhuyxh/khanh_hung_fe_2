'use client';

import React, { useEffect } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderMenuItem from "./HeaderMenuItem";
import Auth from "./Auth";

import { Customer } from "@/app/libs/types";
import axiosCustomerConfig from "@/app/libs/configs/axiosCustomerConfig";
import { useSearchParams, usePathname } from "next/navigation";

// Định nghĩa kiểu dữ liệu cho item trong menu
interface MenuItem {
  href: string;
  icon: string;
  text: string;
}

const HeaderBottom = () => {
  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<Customer>({} as Customer);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const pathname = useSearchParams();
  const path = usePathname();
  const isStudy = path.includes('/study');

  const [menuItems, setMenuItems] = React.useState<MenuItem[]>([
    { href: "/faq", icon: "/assets/images/question-1.svg", text: "Hỏi tôi" },
    { href: "/study", icon: "/assets/images/ic-chanel-2.svg", text: "Khoá học" },
    { href: "", icon: "/assets/images/icon_fb.svg", text: "Fanpage" },
    { href: "", icon: "/assets/images/add-friend.svg", text: "Liên hệ" },
  ]);


  useEffect(() => {
    axiosCustomerConfig.get("/customer/get-info")
      .then((res: any) => {
        const code = res.code;
        if (code === 200) {
          setIsLogin(true);
          setUser(res.data);
          sessionStorage.setItem("user", JSON.stringify(res.data));
        } else {
          sessionStorage.clear();
        }
      });
  }, [pathname])


  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="header_bottom">
      <div className={`container container_header`}>
        <div className="header_bottom_wrapper">
          <HeaderLogo isLogin={isLogin} />
          <div className="header_bottom_wrapper_middle">
            <div className="header_bottom_wrapper_middle_list">
              {menuItems.map((item, index) => (
                <HeaderMenuItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="header_bottom_wrapper_right">
            <Auth isLogin={isLogin} user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
