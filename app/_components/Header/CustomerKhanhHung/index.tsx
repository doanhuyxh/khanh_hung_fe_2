'use client'

import { useState, useEffect } from 'react';
import './index.css';
import HeaderBottom from "./HeaderBottom"

export default function HeaderKhanHung() {

  const [headerHeight, setHeaderHeight] = useState(100);

  const updateHeaderHeight = () => {
    const header = document.querySelector('header');
    if (header) setHeaderHeight(header.offsetHeight);
  };

  useEffect(() => {
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, [headerHeight]);

  useEffect(() => {
    updateHeaderHeight();
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full z-[100] text-[10px] bg-white shadow-md transition-all duration-300">
        <HeaderBottom />
      </header>
      <div style={{ height: `${headerHeight}px` }} />
    </>
  );
};

