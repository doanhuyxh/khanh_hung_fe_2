
import Image from "next/image"

import './index.css'

export default function ButtonUpgrade() {
    return (
        <div className="btn-upgrade">
            <a href="/upgrade/payment" className="btn-upgrade-link flex gap-2">
                <span className="star"></span>
                <span>
                    <Image src="/assets/images/header/premium-1.svg" alt="star" width={18} height={18} />
                </span>
                <span className="text-nowrap uppercase text-white font-bold text-xl text_mobile">Nâng cấp Pro</span>
            </a>
        </div>
    )
}