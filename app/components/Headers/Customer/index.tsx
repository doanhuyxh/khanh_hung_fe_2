'use client'

import { useState, useEffect } from 'react';

import HeaderNews from "./HeaderNews";
import HeaderContact from "./HeaderContact";
import './index.css';
import HeaderBottom from "./HeaderBottom"

export default function Header() {

  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector('header');
      if (header) setHeaderHeight(header.offsetHeight);
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, [headerHeight]);

  return (
    <>
      <header className="fixed top-0 w-full z-[100] text-[10px] bg-white shadow-md transition-all duration-300">
        <div className="header_top ">
          <HeaderNews />
          <HeaderContact />
        </div>
        <HeaderBottom />
      </header>
      <div style={{ height: `${headerHeight}px` }} />
    </>
  );
};

