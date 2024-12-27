"use client";

import { useEffect, useState } from "react";

export default function BurgerIcon({
  setIsOpenSidebar,
  isOpenSidebar,
}: {
  setIsOpenSidebar: (value: boolean) => void;
  isOpenSidebar: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isOpenSidebar)
  }, [isOpenSidebar])

  return (
    <div
      className="burger-icon relative flex flex-col justify-between  w-8 h-6 cursor-pointer"
      onClick={() => {
        setIsOpen(!isOpen)
        setIsOpenSidebar(!isOpenSidebar)
      }}
    >
      <div
        className={`h-1 bg-color-primary w-full transition-all duration-300 ${isOpen
          ? "rotate-45 absolute"
          : ""}`}
      />
      <div
        className={`h-1 bg-color-primary w-3/4 transition-all duration-300 ${isOpen
          ? "opacity-0"
          : ""}`}
      />
      <div
        className={`h-1 bg-color-primary w-full transition-all duration-300 ${isOpen
          ? "-rotate-45 absolute"
          : ""}`}
      />
    </div>
  );
}
