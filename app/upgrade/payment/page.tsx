'use client';

import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import Image from 'next/image';
import { toast } from 'react-hot-toast';

import axiosCustomerConfig from '@/app/libs/configs/axiosCustomerConfig';
import { Customer } from '@/app/libs/types';
import '../../styles/home_khanh_hung.css'
import Image_7_day_return from '@/app/components/HomePageSection/KhanhHung/Image_7_day_return';


export default function PaymentPage() {


    const [user, setUser] = useState<Customer>({} as Customer);
    // const confettiCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const GetUserInfo = async () => {
        const res = await axiosCustomerConfig.get('/customer/get-info');
        setUser(res.data);
    }

    const [countDown, setCountDown] = useState<number>(300);
    const [minute, setMinute] = useState(6)
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
            window.location.href = '/upgrade';
        }
        else {
            if (countDown % 10 === 0) {
                axiosCustomerConfig.get('/customer/get-member-type')
                    .then((res) => {
                        if (res.data == "vip") {
                            toast.success("Bạn đã được nâng cấp thành viên VIP", {
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


    return (
        <div className="w-screen h-screen overflow-y-auto">
            {/* <canvas ref={confettiCanvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" /> */}
            <div className='w-full prmk pb-80'>

                <div className="w-2/3 max-w-[1920px] m-auto flex flex-col items-center justify-center min-h-[30vh] gap-10 info-container px-4">

                    <div data-aos="" className='w-3/4 m-auto bg-transparent flex flex-col items-center justify-center mb-10'>
                        <div className="w-[143px] h-[120px] relative mt-40 hidden lg:block">

                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-0 items-center'>
                        <div className='flex justify-center items-center gap-4 bg-[#7c0fd1] p-10 rounded-lg shadow-2xl'>
                            <div className='w-32 h-32 rounded-ful flex items-center justify-center animate-shake animate-infinite animate-duration-1000 animate-ease-linear'>
                                <Image src={"/assets/images/logo-seven.png"} alt="Logo" width={100} height={100} />
                            </div>
                            <h2 className='text-2xl md:text-5xl font-[600] text-white mb-4 text-left leading-[31px] tracking-wide text-nowrap'>Chúc mừng bạn <br /> {user?.lastName}!</h2>
                        </div>

                        <div className='max-w-[72rem] bg-[#42006a] px-22 py-12 rounded-lg shadow-2xl text-center border-10 border-[#7c0fd1]'>
                            <p className='w-full text-3xl text-white font-[700] mb-4 text-center leading-tight tracking-wide'>
                                Giao dịch của bạn đã được khoá lại với mức giá ưu đãi chỉ từ
                            </p>
                            <p className="text-yellow-300 font-bold text-[5rem]">199.000đ</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-7 items-center'>
                        <p className='font-[600] text-white text-[2.7rem] uppercase font-[Inter] text-center'>Chỉ còn <strong className='text-orange-600'>1</strong> bước cuối cùng</p>
                        <p className='text-white font-medium leading-[25px] text-[16px] text-center'>Bạn sẽ trở thành một đồng nghiệp của Hùng - một giảng viên e-learning <br />
                            sở hữu một nguồn thu nhập thụ động đúng nghĩa như những <strong>CHUYÊN GIA</strong></p>
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
                                            <span className="bg-blue-600 px-2 py-2 rounded-lg">Cake</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="px-0 py-2 text-2xl text-gray-600 font-bold tracking-wide">
                                            Số tài khoản
                                        </th>
                                        <td className="px-4 py-2 text-2xl font-bold tracking-wide">648</td>
                                    </tr>
                                    <tr>
                                        <th className="px-0 py-2 text-2xl text-gray-600 font-bold tracking-wide">
                                            Tên tài khoản
                                        </th>
                                        <td className="px-4 py-2 text-2xl font-bold tracking-wide">
                                            NGUYEN KHANH HUNG
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="px-0 py-2 text-2xl text-gray-600 font-bold tracking-wide">
                                            Số tiền
                                        </th>
                                        <td className="px-4 py-2 text-2xl font-bold tracking-wide">
                                            199.000 VND
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
                                    <p className=' text-[3rem]'>0{minute}</p>
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
                                    src="/assets/images/download.png"
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
