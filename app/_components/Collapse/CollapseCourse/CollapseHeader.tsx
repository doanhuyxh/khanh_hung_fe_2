'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PlushIcon } from "../../Icon";


interface CollapseHeaderProps {
  title: string;
  numberVideo: number;
  timeDuration: string;
  isOpen: boolean;
  onClick: () => void;
}

const CollapseHeader = ({
  title,
  numberVideo,
  timeDuration,
  isOpen,
  onClick
}: CollapseHeaderProps) => {


  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-t-md flex justify-center items-center overflow-hidden ${isOpen ? "sticky top-0 z-20 bg-white px-3 pt-3 pb-3 md:h-33" : "mt-3 mb-1 px-3 md:h-28"}`}
    >
      <div className="w-full h-fit relative">
        <h2 className="title_course w-11/12 text-color-primary text-wrap xl:pr-2 mx-1 cursor-pointer">
          {title}
        </h2>
        <div className="flex justify-between bg-white mx-2 text_mobile cursor-pointer">
          <p className="flex gap-2 text-nowrap">
            <span className="w-[18px]">
              <Image
                src="/assets/images/pro-box-note-1.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <span className="text-black opacity-50">Số lượng:</span>
            <span className="text-black">{numberVideo} video</span>
          </p>
          <p className="flex gap-2 text-nowrap">
            <span className="w-[18px]">
              <Image
                src="/assets/images/pro-box-note-2.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
            <span className="text-black opacity-50">Thời lượng:</span>
            <span className="text-black">{timeDuration}</span>
          </p>
        </div>

        <div className="absolute right-4 top-[15%]">
          <PlushIcon isOpen={isOpen} />
        </div>

      </div>

    </button>
  );
};

export default CollapseHeader;
