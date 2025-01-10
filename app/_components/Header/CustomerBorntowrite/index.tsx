/* eslint-disable @next/next/no-html-link-for-pages */
import './index.css'
import Image from "next/image";
import Auth from './Auth'


export default function HeaderBorntowrite({ pathname }) {
    return (
        <div className="header_container_borntowrite">
            <div className="max-w-[1600px] m-auto flex justify-between items-center">
                <a href={"/"} className="logo">
                    <Image
                        src={"http://res.cloudinary.com/dayhlwa4g/image/upload/v1736248070/img_khanh_hung/BNNkY.svg"}
                        alt={"logo"}
                        style={{ width: "auto", height: '100%' }}
                        width={100} height={100} />
                </a>
                <div className="menu  lg:w-1/2 flex justify-start">
                    <ul>
                        <li>
                            <a href="/news/my-story" className={`flex gap-1  ${pathname === 'my-story' ? 'text-green-500' : ''}`}>
                                <span className={`flex gap-1 cursor-pointer text-3xl ${pathname === 'my-story' ? 'text-green-500 font-[700]' : ''}`}>Câu chuyện của tôi</span>
                            </a>
                        </li>

                        <li>
                            <a href="/study" className={`flex gap-1  ${pathname === 'khoa-hoc' ? 'text-green-500' : ''}`}>
                                <span className={`flex gap-1 cursor-pointer text-3xl ${pathname === 'khoa-hoc' ? 'text-green-500 font-[700]' : ''}`}>Khoá học</span>
                            </a>
                        </li>

                        <li>
                            <a href="/faq" className={`flex gap-1 ${pathname === 'faq' ? 'text-green-500' : ''}`}>
                                <span className={`flex gap-1 cursor-pointer text-3xl ${pathname === 'faq' ? 'text-green-500 font-[700]' : ''}`}>Hỏi đáp</span>
                            </a>
                        </li>

                        <li>
                            <a href="/lien-he" className={`flex gap-1 ${pathname === 'lien-he' ? 'text-green-500' : ''}`}>
                                <span className={`flex gap-1 cursor-pointer text-3xl ${pathname === 'lien-he' ? 'text-green-500 font-[700]' : ''}`}>Liên hệ</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='float-right'>
                    <Auth />
                </div>
            </div>
        </div>
    )
}