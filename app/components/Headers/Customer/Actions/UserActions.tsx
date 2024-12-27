'use client';

import { useState } from 'react';
import Image from 'next/image';
import UserDropdown from './UserDropdown';
import { Customer } from '@/app/libs/types';
import { usePathname } from 'next/navigation';
import ButtonUpgrade from '@/app/components/Button/ButtonUpgrade';
import ButtonLearnNow from '@/app/components/Button/ButtonLearnNow';
import ButtonDownLoadAppMobile from '@/app/components/Button/ButtonDownLoadAppMobile';

export default function UserActions({ user }: { user: Customer }) {
    const [isDropdown, setIsDropdown] = useState(false);
    const pathname = usePathname();

    const isLearnPage = pathname.includes('/learn/study');


    return (
        <div className="flex gap-4">
            {isLearnPage ? <ButtonUpgrade />
                : <ButtonLearnNow />}
                <ButtonDownLoadAppMobile />
            <div className="btn_profile">
                <div className="btn_profile_content cursor-pointer" onClick={() => setIsDropdown(!isDropdown)}>
                    <a href="/learn/profile" className="btn_profile_avatar cursor-pointer">
                        <Image src={user.avatar || '/assets/images/avatar_defaut.jpg'} alt="profile" width={150} height={150} />
                    </a>
                    <div className="flex flex-col gap-1">
                        <p className="text-nowrap text-black font-bold text-xl">{user?.firstName + " " + user?.lastName}</p>
                        <div className="text-nowrap flex items-center gap-1">
                            <Image src="/assets/images/price-icon.svg" alt="star" width={15} height={15} />
                            <span className="text-nowrap text-color-primary font-bold text-xl m-y-auto">{user.totalMoney}đ</span>
                        </div>
                    </div>
                    <div className={`icon_dropdown transition-all duration-300 w-[20px] ${isDropdown ? 'rotate-180' : ''} `}>
                        <Image src="/assets/images/arrow-02.png" alt="dropdown" width={15} height={15} />
                    </div>
                </div>
                <UserDropdown isDropdown={isDropdown} user={user} />
            </div>
        </div>
    );
}
