'use client'

import './index.scss'   

import { useState, useEffect } from 'react';
export default function ModalNotify() {

    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleOutsideClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    useEffect(() => {
        setTimeout(() => {
            //setIsOpen(true)
        }, 2000)
    }, [])

    if (!isOpen) return null;
    return (

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" style={{ zIndex: 1000 }} onClick={handleOutsideClick}>
            <div className="bg-transparent p-6 max-w-md w-full min-h-[200px] min-w-[75rem] relative">
                <div className='mb-10'>
                    <button
                        onClick={handleClose}
                        className="absolute top-2 right-2 bg-white rounded-full p-1"
                        aria-label="Close"
                    >
                        <svg
                            className="h-9 w-9"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className='p-6 rounded-3xl flex flex-col justify-center items-center' style={{ background: 'var(--bg-color-modal-notify)' }}>
                    <div className='mb-10 text-center'>
                        <h2 className="text-8xl font-bold mb-2 title-notify space-y-5 uppercase">
                            Khuyến mãi <br/> đặc biệt
                        </h2>
                    </div>
                    <p className="text-white uppercase mb-4 sub-title-notify">
                        Khuyến mãi dành riêng cho bạn
                    </p>
                </div>
            </div>
        </div>


    )
}
