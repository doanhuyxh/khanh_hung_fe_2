'use client';

import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import {formatNumber} from '@/app/_libs/utils';

import axiosCustomerConfig from '@/app/_libs/configs/axiosCustomerConfig';
import { Customer } from '@/app/_libs/types';
import '../../_styles/home_khanh_hung.css'
import Image_7_day_return from '@/app/_components/HomePageSection/KhanhHung/Image_7_day_return';


export default function PaymentPage() {

    const [bankConfig, setBankConfig] = useState<any>({
        bankName: '',
        accountNumber: '',
        accountHolder: '',
        balance: '',
        old_balance: '',
    });

    const [logo, setLogo] = useState<string>('');
    
    const [user, setUser] = useState<Customer>({} as Customer);

    const GetUserInfo = async () => {
        const res = await axiosCustomerConfig.get('/customer/get-info');
        setUser(res.data);
    }

    const [countDown, setCountDown] = useState<number>(600);
    const [minute, setMinute] = useState(10)
    const [second, setSecond] = useState(60)

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(prev => {
                if (prev <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);

    }, []);

    useEffect(() => {
        setMinute(Math.floor(countDown / 60))
        setSecond(countDown % 60)

        if (countDown === 0) {
            window.location.href = '/';
        }
        else {
            if (countDown % 10 === 0) {
                axiosCustomerConfig.get('/customer/get-member-type')
                    .then((res) => {
                        if (res.data == "pro") {
                            toast.success("Bạn đã được nâng cấp thành viên PRO", {
                                duration: 10000,
                                position: "top-right",
                                style: {
                                    background: "#4CAF50",
                                    color: "#fff",
                                },
                            });
                            window.location.href = '/learn/dashboard';
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        }
    }, [countDown]);

    useEffect(() => {
        const paymentElement = document.getElementById("qr");
        if (paymentElement) {
            paymentElement.scrollIntoView({ behavior: "smooth" });
        }
        GetUserInfo();
    }, []);

    useEffect(() => {
        const colorfulSnowFall = () => {
            confetti({
                particleCount: 50,
                startVelocity: 25,
                spread: 100,
                origin: {
                    x: Math.random() > 0.5 ? 0 : 1,
                    y: 0,
                },
                colors: [
                    '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ff69b4',
                    '#ffd700', '#ff8c00', '#00ced1', '#9932cc', '#00ff7f',
                    '#1e90ff', '#8a2be2', '#ff6347', '#32cd32', '#ff1493'
                ],
                gravity: 0.3,
                scalar: 0.8,
                ticks: 600,
            });
        };

        const interval = setInterval(colorfulSnowFall, 50);
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        axiosCustomerConfig.get("/public/get-bank-config")
            .then(response => {
                const temp_bank = {} as any
                response.data.forEach((bank: any) => {
                    if (bank.key === "accountHolder") {
                        temp_bank.accountHolder = bank.value;   
                    }
                    if (bank.key === "accountNumber") {
                        temp_bank.accountNumber = bank.value;
                    }
                    if (bank.key === "bankName") {
                        temp_bank.bankName = bank.value;
                    }
                    if (bank.key === "balance") {
                        temp_bank.balance = formatNumber(bank.value);
                    }
                    
                    if (bank.key === "old_balance") {
                        temp_bank.old_balance = formatNumber(bank.value);
                    }

                });
                setBankConfig(temp_bank);
            })
            .catch(error => {
                console.log('Lỗi:', error);
            });
        
        axiosCustomerConfig.get("/public/social-key?key=logo")
            .then(response => {
                setLogo(response.data);
            })
            .catch(error => {
                console.log('Lỗi:', error);
            });

    }, []);



    return (
        <div className="w-screen h-screen overflow-y-auto">
            {/* <canvas ref={confettiCanvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" /> */}
            <div className='w-full prmk pb-80'>

                <div className="w-2/3 max-w-[1920px] m-auto flex flex-col items-center justify-center min-h-[30vh] gap-10 info-container px-4">

                    <div data-aos="" className='w-3/4 m-auto bg-transparent flex flex-col items-center justify-center mb-10'>
                        <div className="w-[143px] h-[120px] relative mt-40 hidden lg:block">

                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-2 items-center'>
                        <div className='flex justify-center items-center gap-4 bg-[#7c0fd1] p-10 rounded-lg shadow-2xl'>
                            <div className='w-32 h-32 rounded-ful flex items-center justify-center animate-shake animate-infinite animate-duration-1000 animate-ease-linear'>
                                {logo && <Image src={logo} alt="Logo" width={100} height={100} style={{ width: "100%", height: "auto" }} />}
                            </div>
                            <h2 className='text-2xl md:text-5xl font-[600] text-white mb-4 text-left leading-[31px] tracking-wide text-nowrap'>Chúc mừng bạn <br /> {user?.lastName}!</h2>
                        </div>

                        <div className='max-w-[72rem] bg-[#42006a] px-22 py-12 rounded-lg shadow-2xl text-center border-10 border-[#7c0fd1] item_spin_radius'>
                            <p className='w-full text-3xl text-white font-[700] mb-4 text-center leading-tight tracking-wide'>
                                Giao dịch của bạn đã được ưu đãi chỉ từ <span className="text-yellow-300 font-bold text-[5rem]"> {bankConfig.balance}đ</span>
                            </p>
                            <p className="text-yellow-300 font-bold text-[5rem]" style={{textDecoration:"line-through"}}>{bankConfig.old_balance}đ</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-7 items-center'>
                        <p className='font-[600] text-white text-[2.7rem] uppercase font-[Inter] text-center'>Chỉ còn <strong className='text-orange-600'>1</strong> bước cuối cùng</p>
                        <p className='text-white font-medium leading-[25px] text-[16px] text-center'>
                            Bạn sẽ trở thành một bậc thầy bán hàng trên internet
                        </p>
                    </div>

                    <div className='w-10/12 xl:w-[71rem] h-[3.6rem] relative'>
                        <div className='w-full h-[3.6rem] bg-white rounded-full overflow-hidden'>
                            <div className='prmk-progress-line'>
                                <div className='pros h-[3.6rem] animate-fade-right animate-infinite animate-duration-1000 animate-ease-linear'></div>
                            </div>
                        </div>
                        <div className='absolute bottom-[-10%] right-[-5%] translate-x-1/2 translate-y-1/2 flex items-center justify-center w-20 h-20 lg:w-[64px] lg:h-[64px] rounded-full z-20 animate-wiggle-more animate-infinite animate-duration-1000 animate-ease-out'>
                            <Image src="/assets/images/box-gif.png" alt="Arrow" width={100} height={100} style={{ width: "100%", height: "auto" }} />
                        </div>
                    </div>

                    <div className="flex flex-col w-full lg:w-[71rem] h-[5rem] items-center gap-2 overflow-auto">
                        <Image src="/assets/images/ar-yl.svg" alt="" width={100} height={100} style={{ width: "42rem", height: "auto" }} className='animate-fade-down animate-infinite animate-duration-300 animate-ease-linear' />
                        <Image src="/assets/images/ar-yl.svg" alt="" width={100} height={100} style={{ width: "42rem", height: "auto" }} className='animate-fade-down animate-infinite animate-duration-300 animate-ease-linear' />
                        <Image src="/assets/images/ar-yl.svg" alt="" width={100} height={100} style={{ width: "42rem", height: "auto" }} className='animate-fade-down animate-infinite animate-duration-300 animate-ease-linear' />
                    </div>

                </div>
            </div>

            <div className='w-11/12 md:w-10/12 max-w-[1920px] m-auto bg-white p-6 lg:py-30 lg:px-30 md:p-8 rounded-3xl shadow-2xl transform translate-y-[-20%]'>
                <div className='w-full grid gird-cols-1 lg:grid-cols-2 gap-3'>
                    <div className='w-full'>
                        <h2 className='text-4xl font-bold text-gray-800 mb-3 tracking-wide'>Hệ thống chuyển khoản tự báo có</h2>
                        <p className='text-xl text-gray-600 tracking-wide'>
                            Mở app ngân hàng bất kỳ để
                            <span className='text-pink-500 px-1 font-[500]'>quét mã QR</span>
                            hoặc
                            <span className='text-pink-500 px-1 font-[500]'>chuyển khoản</span>
                            theo chính xác nội dung bên dưới
                        </p>
                        <div className='flex-1 space-y-3 w-full'>
                            <table className="w-full text-left space-y-2 mx-auto pl-0">
                                <tbody>
                                    <tr>
                                        <th className="px-0 py-2 text-2xl text-gray-600 font-bold tracking-wide">
                                            Ngân hàng
                                        </th>
                                        <td className="px-4 py-2 text-2xl font-bold text-white tracking-wide">
                                            <span className="bg-blue-600 px-2 py-2 rounded-lg">{bankConfig.bankName}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="px-0 py-2 text-2xl text-gray-600 font-bold tracking-wide">
                                            Số tài khoản
                                        </th>
                                        <td className="px-4 py-2 text-2xl font-bold tracking-wide">
                                            {bankConfig.accountNumber}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="px-0 py-2 text-2xl text-gray-600 font-bold tracking-wide">
                                            Tên tài khoản
                                        </th>
                                        <td className="px-4 py-2 text-2xl font-bold tracking-wide uppercase">
                                            {bankConfig.accountHolder}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="px-0 py-2 text-2xl text-gray-600 font-bold tracking-wide">
                                            Số tiền
                                        </th>
                                        <td className="px-4 py-2 text-2xl font-bold tracking-wide">
                                            {bankConfig.balance} VNĐ
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="px-0 py-2 text-2xl text-gray-600 font-bold tracking-wide">
                                            Nội dung chuyển khoản
                                        </th>
                                        <td className="px-4 py-2 text-2xl font-bold tracking-wide">{user?.code}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className='flex flex-row justify-start gap-3 items-center p-3'>
                                <p className='text-base md:text-xl text-red-600 font-[400] leading-tight tracking-wide italic'>
                                    Đây là tính năng chuyển khoản tự động báo có của website <strong className='underline'>HOÀN TOÀN TỰ ĐỘNG</strong>. <br /><br />
                                    Bạn hãy chuyển <strong className='underline'>ĐÚNG SỐ TIỀN</strong> và <strong className='underline'>ĐÚNG NỘI DUNG CHUYỂN KHOẢN</strong>.
                                    Sau khi chuyển tiền xong hệ thống sẽ tự động chuyển hướng.
                                </p>
                            </div>

                            <div className='flex flex-row gap-3 p-3 mb-10'>
                                <Image_7_day_return />
                                <div className='flex flex-col justify-center align-middle'>
                                    <p className='text-black '>Đừng quên rằng, bạn có quyền yêu cầu</p>
                                    <p className='text-xl md:text-3xl font-bold text-[#f5851e] py-2 rounded-lg tracking-wide'>7 Ngày hoàn tiền, KHÔNG CẦN LÝ DO</p>
                                </div>
                            </div>

                            <div className='hidden lg:flex'>
                                <div className='bg-[#f41e92] flex gap-3 px-4 py-2 rounded-xl'>
                                    <span className='w-8 h-auto'>
                                        <Image src={"/assets/images/ic-search-white.svg"} alt='' width={100} height={100} style={{ width: "100%", height: "auto" }} />
                                    </span>
                                    <p className='text-white font-[700]'>Kiểm tra giao dịch</p>
                                </div>
                            </div>
                            <p className='hidden lg:flex opacity-80'>(nếu hệ thống không tự động chuyển hướng)</p>

                        </div>
                    </div>

                    <div className='flex flex-wrap gap-10 justify-center items-center p-4 bg-gray-50 rounded-xl'>
                        <div className='flex flex-col gap-5'>
                            <p className='text-orange-600 font-[700] text-wrap text-center text-[16px]'>
                                HOẶC Scan Mã QR này <br />
                                để chuyển khoản chính xác
                            </p>
                            <p className='text-wrap text-center'>Trong 5 phút, bạn sẽ là <br /> <strong>học viên thứ 419</strong></p>

                            <div className='hidden lg:flex flex-row gap-4 items-center justify-center font-[700] text-[7rem]'>
                                <div className='bg-[#d92121] text-white px-3 py-2 rounded-2xl text-center'>
                                    <p className=' text-[3rem]'>{minute}</p>
                                    <p className=' text-[2rem]'>Phút</p>
                                </div>
                                <div className='bg-[#d92121] bg-opacity-25 text-[#d92121] px-3 py-2 rounded-2xl text-center'>
                                    <p className='text-[3rem]' >{second > 10 ? second : "0" + second}</p>
                                    <p className='text-[2rem]'>Giây</p>
                                </div>
                            </div>

                        </div>
                        <div className="flex justify-center flex-col gap-10 lg:gap-20 items-center" id='qr'>
                            <div className="relative group">
                                <Image
                                    src={`https://img.vietqr.io/image/ICB-101873915294-qr_only.png?amount=${bankConfig.balance?.replace(",", "")}&addInfo=${user?.code}`}
                                    alt="QR Payment"
                                    className="w-full max-w-md object-contain rounded-lg shadow-lg border "
                                    width={100}
                                    height={100}
                                />
                                <div className="absolute top-[-20px] left-[-20px] w-10 h-10 border-t-2 border-l-2 border-[#f41e92]"></div>
                                <div className="absolute top-[-20px] right-[-20px] w-10 h-10 border-t-2 border-r-2 border-[#f41e92]"></div>
                                <div className="absolute bottom-[-20px] left-[-20px] w-10 h-10 border-b-2 border-l-2 border-[#f41e92]"></div>
                                <div className="absolute bottom-[-20px] right-[-20px] w-10 h-10 border-b-2 border-r-2 border-[#f41e92]"></div>
                            </div>

                            <div className='w-full flex justify-center items-center gap-4 cursor-pointer'>
                                <span>
                                    <Image src={"/assets/images/dl-pri.svg"} alt='' width={100} height={100} style={{ width: "100%", height: "auto" }} />
                                </span>
                                <p className='underline font-[700] text-[#f41e92]'>Tải xuống mã QR</p>
                            </div>

                            <div className='lg:hidden flex flex-row gap-4 items-center justify-center font-[700] text-[7rem]'>
                                <div className='bg-[#d92121] text-white px-3 py-2 rounded-2xl text-center'>
                                    <p className=' text-[2rem]'>0{minute}</p>
                                    <p className=' text-[1rem]'>Phút</p>
                                </div>
                                <div className='bg-[#d92121] bg-opacity-25 text-[#d92121] px-3 py-2 rounded-2xl text-center'>
                                    <p className='text-[2rem]' >{second > 10 ? second : "0" + second}</p>
                                    <p className='text-[1rem]'>Giây</p>
                                </div>

                            </div>

                            <div className='flex lg:hidden'>
                                <div className='bg-[#f41e92] flex gap-3 px-4 py-2 rounded-xl'>
                                    <span className='w-8 h-auto'>
                                        <Image src={"/assets/images/ic-search-white.svg"} alt='' width={100} height={100} style={{ width: "100%", height: "auto" }} />
                                    </span>
                                    <p className='text-white font-[700]'>Kiểm tra giao dịch</p>
                                </div>
                            </div>
                            <p className='flex lg:hidden opacity-80 text-xl'>(nếu hệ thống không tự động chuyển hướng)</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
