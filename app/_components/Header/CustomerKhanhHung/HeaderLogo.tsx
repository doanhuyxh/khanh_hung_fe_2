'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Sidebar } from "../../Sidebar";
import { BurgerIcon } from "../../Icon";
import Link from "next/link";

const HeaderLogo = ({ isLogin }: { isLogin: boolean }) => {

  const [isClient, setIsClient] = useState(false)
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)
  const [logo, setLogo] = useState('')

  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpenSidebar(false);
  }

  const handleSidebarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  useEffect(() => {

    const header = document.querySelector('header')
    const headerHeight = header?.clientHeight




    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      fetch(process.env.API_URL + "/api/v1" + "/public/social-key?key=logo")
        .then(res => res.json())
        .then(res => {
          setLogo(res.data)
          localStorage.setItem("logo", res.data)
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
        <Link href="/">
          <span>
            {logo && <Image src={logo} alt="logo" width={100} height={100} />}
          </span>
        </Link>
      </div>

      <div className={`fixed top-[80px] height_header left-0 w-[100vw] h-screen transition bg-black z-99999 bg-opacity-60 ${isOpenSidebar ? 'block' : 'hidden'}`}
        onClick={handleOverlayClick}>
        <div className={`w-fit h-full bg-white overflow-hidden`} onClick={handleSidebarClick}>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
export default HeaderLogo;