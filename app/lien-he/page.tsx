import '../styles/borntowrite.css'

import Header from '../components/Header/CustomerBorntowrite'
import Footer from '../components/Footer/Borntowrite'
import Image from 'next/image'

export default function PageContact() {

    return (
        <>
            <Header pathname={"lien-he"} />
            <div className='w-full h-fill bg-black-2 bg-opacity-90 p-5'>
                <div className='w-11/12 m-auto py-20 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10'>
                    <div className='flex flex-col gap-10'>
                        <p className='text-[35px] text-white'>Bạn cần hỗ trợ?</p>
                        <div className='w-20 h-1 bg-white'></div>
                        <p className='text-[20px] text-white'>Truy cập FAQ bên dưới và có mọi câu trả lời bạn cần</p>
                        <p className='text-[20px] text-white'>tôi sẽ trả lời lại ngay (không quá 30 phút)</p>
                    </div>
                    <div className='max-w-[500px] lg:max-w-[900px]'>
                        <Image alt="" src={'/images/onlinesupport_1-cutout.png'} width={500} height={300} style={{ width: "100%" }} />
                    </div>
                </div>
            </div>
            <div className='w-full h-fill bg-[#20222e]'>
                <div className='max-w-[800px] m-auto py-20 flex flex-row justify-center lg:justify-between items-center gap-10'>
                    <div className='flex flex-col'>
                        <p className='text-[35px] text-white uppercase'>hỗ trợ</p>
                        <p className='text-[35px] text-white uppercase'>nhanh chóng</p>
                        <div className='w-20 h-1 bg-white'></div>
                        <div className='flex flex-col gap-5 text-[20px] mt-20'>
                            <p className='text-white text-[20px] font-[300]'>-Fanpage:</p>
                            <a href='' className='text-white  text-[16px]  font-[300]'> <i aria-hidden="true" className="fab fa-facebook"></i> Vuacontent</a>
                        </div>

                        <div className='flex flex-col gap-5 text-[20px] mt-10'>
                            <p className='text-white text-[20px]  font-[300]'>-Facebook cá nhân:</p>
                            <a href='' className='text-white text-[16px]  font-[300]'><i aria-hidden="true" className="fab fa-facebook"></i> Vuacontent</a>
                        </div>

                        <div className='flex flex-col gap-5 text-[20px] mt-10'>
                            <p className='text-white text-[20px]'>Liên Hệ:</p>
                            <a href='' className='text-white  font-[300]'><i aria-hidden="true" className="fas fa-envelope"></i> admin@borntowrite.vn</a>
                            <a href='' className='text-white text-[16px]  font-[300]'><i aria-hidden="true" className="fas fa-phone"></i> 088.606.8008</a>
                        </div>

                        <div className='flex flex-col gap-5 text-[20px] mt-10'>
                            <p className='text-white text-[20px]'>Giờ làm việc:</p>
                            <p className='text-white text-[20px]'>T2 - CN: 9h - 22h</p>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='w-[400px] flex flex-col gap-8'>
                            <p className='text-[40px] font-bold text-white'>Contact</p>

                            <input className='w-full px-3 py-1 text-[15px] bg-white' placeholder='Tên' />
                            <input className='w-full px-3 py-1 text-[15px] bg-white' placeholder='Email' />

                            <textarea className='w-full px-3 py-1 text-[15px] bg-white' rows={8} placeholder='Nội dung' />

                            <button className='"w-full bg-green-600 text-white text-[20px] py-2'>Gửi</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}