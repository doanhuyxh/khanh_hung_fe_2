import { gsap } from "gsap";
import { useEffect } from "react";

import './index.css';
import ButtonUpgrade from "../Button/ButtonUpgrade";

export default function ShowNotifyNotFree() {
    useEffect(() => {
        gsap.fromTo(
            ".text_fill_color",
            {
                opacity: 0,
                y: -50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power1.inOut",
            }
        );
    }, []);

    return (
        <div className="w-full h-full bg-[#380b42] flex flex-col gap-4 justify-center items-center font-inter">
            <p className="text_fill_color uppercase text-center">
                Video này chỉ dành cho <br /> thành viên trả phí
            </p>
            <p className="text-white text-center">
                Hùng có nhiều video Free khác rất chất lượng,<br />
                bạn hãy xem các video FREE khác nhé!
            </p>
            <div>
                <ButtonUpgrade/>
            </div>
        </div>
    );
}
