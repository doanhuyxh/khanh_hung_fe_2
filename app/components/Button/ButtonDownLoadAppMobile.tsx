import Image from "next/image"
import './index.css'
export default function ButtonDownLoadAppMobile() {

    return (
        <a className='lg:hidden bg-pink-500 flex flex-row justify-center items-center px-2 py-0 rounded-lg' href="https://play.google.com/store/apps/details?id=com.englishgo.app">
            <span className="star"></span>
            <span className='w-[18px]'>
                <Image src="/assets/images/header/icon-down-app.svg" alt="star" width={12} height={12} />
            </span>
            <span className="text-nowrap uppercase text-white font-bold text-xl text_mobile">Tải App</span>
        </a>
    )
}