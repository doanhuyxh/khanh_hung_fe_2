'use client';

import React, { useEffect } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderMenuItem from "./HeaderMenuItem";
import Auth from "./Auth";

import { Customer } from "@/app/libs/types";
import axiosCustomerConfig from "@/app/libs/configs/axiosCustomerConfig";
import { useSearchParams } from "next/navigation";

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
  const [isLoadSocial, setIsLoadSocial] = React.useState<boolean>(false);

  const pathname = useSearchParams();

  const [menuItems, setMenuItems] = React.useState<MenuItem[]>([
    { href: "", icon: "/assets/images/add-friend.svg", text: "Kết bạn" },
    { href: "", icon: "/assets/images/ic-chanel-group.svg", text: "Colleague Club" },
    { href: "", icon: "/assets/images/question-1.svg", text: "Hỏi tôi" },
    { href: "", icon: "/assets/images/ic-chanel-7.svg", text: "Hoạt động" },
    { href: "", icon: "/assets/images/ic-chanel-2.svg", text: "Blog" },
    { href: "", icon: "/assets/images/icon_fb.svg", text: "Fanpage" },
    { href: "", icon: "/assets/images/MTczMjAwNjc1MQ.png", text: "Tiktok" },
  ]);

  useEffect(() => {
    axiosCustomerConfig.get("/public/social")
      .then((res: any) => {
        const data = res.data;
        setMenuItems((prevItems) => {
          return prevItems.map(item => {
            if (item.text === "Kết bạn") item.href = data.find((i: any) => i.key == 'facebook')?.value || '';
            if (item.text === "Colleague Club") item.href = data.find((i: any) => i.key == 'facebookGroup')?.value || '';
            if (item.text === "Hỏi tôi") item.href = data.find((i: any) => i.key == "question")?.value || '';
            if (item.text === "Hoạt động") item.href = data.find((i: any) => i.key == "activity")?.value || '';
            if (item.text === "Blog") item.href = data.find((i: any) => i.key == "blog")?.value || '';
            if (item.text === "Fanpage") item.href = data.find((i: any) => i.key == "facebookPage")?.value || '';
            if (item.text === "Tiktok") item.href = data.find((i: any) => i.key == "tiktok")?.value || '';
            return item;
          });
        });
        setIsLoadSocial(true);
      });

    
    axiosCustomerConfig.get("/customer/get-info")
      .then((res: any) => {
        const code = res.code;
        if (code === 200) {
          setIsLogin(true);
          setUser(res.data);
          sessionStorage.setItem("user", JSON.stringify(res.data));
        }else{
          sessionStorage.clear();
          localStorage.clear();
        }
      });

    setIsLoading(false);

  }, [isLoadSocial, isLoading, pathname]);

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="header_bottom">
      <div className="container">
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
