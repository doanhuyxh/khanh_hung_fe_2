'use client';

import { useState } from 'react';
import Image from 'next/image';
import UserDropdown from './UserDropdown';
import { Customer } from '@/app/_libs/types';
import { usePathname } from 'next/navigation';
import ButtonUpgrade from '@/app/_components/Button/ButtonUpgrade';
import ButtonLearnNow from '@/app/_components/Button/ButtonLearnNow';

export default function UserActions({ user }: { user: Customer }) {
    const [isDropdown, setIsDropdown] = useState(false);
    const pathname = usePathname();

    const isLearnPage = pathname.includes('/study');
    const isProfile = pathname.includes('/learn/profile');
    const isFreeUser = user.type === "free";

    return (
        <div className="flex gap-4">
            {isLearnPage ?
                (isFreeUser ? <ButtonUpgrade /> : null)
                : <ButtonLearnNow />
            }
            <div className="btn_profile">
                <div className="btn_profile_content cursor-pointer"
                    onMouseEnter={() => setIsDropdown(true)}
                    onClick={() => setIsDropdown(!isDropdown)}>
                    <a href={isProfile ? "#!" : "/learn/profile"} className="btn_profile_avatar cursor-pointer">
                        <Image src={user.avatar || '/assets/images/avatar_defaut.jpg'} alt="profile" width={150} height={150} />
                    </a>
                    <div className="flex flex-col gap-1">
                        {user.type == 'free' &&
                            <div className="flex gap-2 text-nowrap text-black font-bold text-xl">
                                <p className='cursor-pointer'>{user?.firstName + " " + user?.lastName}</p>
                                <span className='flex items-center justify-center gap-1 px-2 text-nowrap bg-green-600 text-white rounded'>
                                    <Image src={'/assets/images/ic-tag-free.svg'} width={10} height={10} alt='' />
                                    Free
                                </span>
                            </div>}
                            
                        <div className="text-nowrap flex items-center gap-1 cursor-pointer">
                            <Image src="/assets/images/price-icon.svg" alt="star" width={15} height={15} />
                            <span className="text-nowrap text-color-primary font-bold text-xl m-y-auto">{user.totalMoney}đ</span>
                        </div>
                    </div>
                    <div className={`icon_dropdown transition-all duration-300 cursor-pointer w-[15px] `}>
                        <Image src="/assets/images/arrow-02.png" alt="dropdown" width={15} height={15} className={`${isDropdown ? 'rotate-180' : ''}`} />
                    </div>
                </div>
                <UserDropdown isDropdown={isDropdown} setIsDropdown={setIsDropdown} user={user} />
            </div>
        </div>
    );
}
