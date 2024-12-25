'use client';

import React from "react";
import Image from "next/image";

const HeaderMenuItem = ({ href, icon, text }: { href: string, icon: string, text: string }) => (
  <a href={href}>
    <span className="w-[20px]">
      <Image src={icon} width={20} height={20} alt={text} />
    </span>
    <span className="text">{text}</span>
  </a>
);

export default HeaderMenuItem;
