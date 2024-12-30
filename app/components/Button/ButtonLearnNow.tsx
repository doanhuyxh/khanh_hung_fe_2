
import Image from "next/image"

import './index.css'
import Link from "next/link"

export default function ButtonLearnNow() {
    return (
        <div className="btn-upgrade">
            <Link href="/study" className="btn-upgrade-link">
                <span className="star"></span>
                <span className='w-[20px]'>
                    <Image src="/assets/images/flash.svg" alt="star" width={15} height={15} />
                </span>
                <span className="text-nowrap uppercase text-white font-bold text-xl">Học ngay</span>
            </Link>
        </div>
    )
}