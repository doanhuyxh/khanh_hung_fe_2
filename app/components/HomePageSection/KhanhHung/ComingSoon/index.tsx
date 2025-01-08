'use client'

import ComingSoonItem from "./ComingSoonItem"
import SwiperContainer from "../../../SwiperContainer"
import Image from "next/image";

export default function ComingSoon() {
    
    const arr = [1,2,3,4,5,6,7,8,9,10];

    return (
        <div id="coming_soon" className='w-full relative pt-0 pb-10'>
        <div className='w-full h-32 bg-[#580B94] absolute transform translate-y-[-100%] rounded-t-[50%] overflow-hidden'></div>

        <div className='w-10/12 lg:w-8/12 max-w-[1920px] flex flex-col m-auto items-center gap-30'>

          <div className='flex flex-col justify-center items-center  gap-20 text-white'>
            <p className='w-fit flex justify-center items-center gap-3 px-4 py-2 uppercase bg-[#f5851e] rounded-lg text-[1.8rem] text-nowrap text-center font-[700]'>
              <span className='w-7 h-auto'>
                <Image src={"/assets/images/home/icon-time.svg"} width={50} height={50} style={{ width: '100%', height: 'auto' }} alt='' />
              </span>
              Coming soon
            </p>
            <h2 className='text-3xl text-center font-[700] scale-125 uppercase'>
              CÁC KHÓA HỌC SẮP RA MẮT <br />
              CỦA CÁC ĐỒNG NGHIỆP CỦA HÙNG</h2>
          </div>
          <div className="flex flex-row gap-10 overflow-x-scroll w-full min-h-[800px]">
            <SwiperContainer slides={arr.map((item, index) => <ComingSoonItem key={index} />)} />
        </div>
        </div>
      </div>
        
    )
}