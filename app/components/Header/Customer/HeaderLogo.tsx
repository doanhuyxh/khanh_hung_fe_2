'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Sidebar } from "../../Sidebar";
import { BurgerIcon } from "../../Icon";

const HeaderLogo = ({ isLogin }: { isLogin: boolean }) => {

  const [isClient, setIsClient] = useState(false)
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  const [logo, setLogo] = useState("/images/logo/logo.svg")

  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();  // Ngừng lan tỏa sự kiện
    setIsOpenSidebar(false);  // Đóng sidebar
  }

  const handleSidebarClick = (e: React.MouseEvent) => {
    e.stopPropagation();  // Ngừng lan tỏa sự kiện click
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      fetch(process.env.API_URL + "/api/v1" + "/public/social-key?key=logo")
        .then(res => res.json())
        .then(res => {
          setLogo(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [isClient])

  if (!isClient) return <></>

  return (
    <>
      <div className="header_bottom_wrapper_left">
        {isLogin && <BurgerIcon isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />}
        <a href="#!">
          <span>
            <Image
              src={logo}
              width={100}
              height={100}
              alt="logo"
              className="cursor-pointer"
            />
          </span>
        </a>
      </div>

      <div className={`fixed top-[102px] lg:top-[112px] left-0 w-[100vw] h-screen transition bg-black z-99999 bg-opacity-60 ${isOpenSidebar ? 'block' : 'hidden'}`}
        onClick={handleOverlayClick}>
        <div className={`w-fit h-full bg-white overflow-hidden`} onClick={handleSidebarClick}>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
export default HeaderLogo;