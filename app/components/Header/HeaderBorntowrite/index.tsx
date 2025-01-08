import './index.css'
import Image from "next/image";

import Auth from './Auth'

export default function HeaderBorntowrite() {

    return (
        <div className="header_container_borntowrite">
            <div className="max-w-[1600px] m-auto flex justify-between items-center">
                <div className="logo">
                    <Image
                        src={"http://res.cloudinary.com/dayhlwa4g/image/upload/v1736248070/img_khanh_hung/BNNkY.svg"}
                        alt={"logo"}
                        style={{width: "auto", height: '100%'}}
                        width={100} height={100}/>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <a href="#!" className="flex gap-1">
                                <Image src={"/assets/images/add-friend.svg"} alt={"kết bạn"} width={20} height={20}/>
                                <span>Kết bạn</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="flex gap-1">
                                <Image src={"/assets/images/ic-chanel-group.svg"} alt={"kết bạn"} width={20} height={20}/>
                                <span>Colleague Club</span>
                            </a>
                        </li>
                        <li>
                            <a href="/faq" className="flex gap-1">
                                <Image src={"/assets/images/question-1.svg"} alt={"kết bạn"} width={20} height={20}/>
                                <span>Hỏi đáp</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <Auth/>
                </div>
            </div>
        </div>
    )
}