'use client'

import Image from "next/image"

export default function HallOfFrame() {

    return (
        <div id="hall_of_wall" className='w-full pb-50 relative'>
            <div className="w-full h-auto absolute top-100">
                <Image src={"/template/assets/images/home/colleague-success-decor.png"} width={1000} height={100} alt="" style={{width:"100%", height:"auto"}}/>
            </div>

            <svg
                className="waves"
                xmlns="#www.w3.org/2000/svg"
                xmlnsXlink="#www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
            >
                <defs>
                    <path
                        id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                </defs>
                <g className="parallax">
                    <use
                        xlinkHref="#gentle-wave"
                        x={48}
                        y={0}
                        fill="rgba(255,255,255,0.2)"
                    />
                    <use
                        xlinkHref="#gentle-wave"
                        x={48}
                        y={3}
                        fill="rgba(255,255,255,0.4)"
                    />
                    <use
                        xlinkHref="#gentle-wave"
                        x={48}
                        y={7}
                        fill="rgba(124, 15, 209, 1)"
                    />
                </g>
            </svg>
            <div className='w-1/2 h-auto m-auto mb-10 max-w-[1920px]'>

                <div className='w-full mt-4 mb-10 animate-jump-in'>
                    <Image src={"/assets/images/home/hall-of-fame-tt-up.png"} width={100} height={100} alt='' layout='responsive' className='w-full' />
                </div>

                <div className='w-full relative py-5'>
                    <p className='desc'>Tổng hợp khoá học hàng đầu thị trường</p>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-2/3 xl:w-7/12 m-auto max-w-[1920px]">

                {Array.from({ length: 12 }, (_, index) => (
                    <div className="flex flex-col gap-10 p-5 rounded-2xl bg-white" key={index}>
                        <div className="flex flex-row justify-start gap-2 items-center">
                            <span className="w-12 h-12">
                                <Image
                                    src={"/assets/images/home/hall-of-fame-logo-quyet-tran.png"}
                                    alt="100"
                                    width={100}
                                    height={100}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </span>
                            <p className="font-[500]">Quyết Trần Academy</p>
                        </div>
                        <div className="h-auto w-full rounded-xl overflow-hidden">
                            <Image
                                src={"/assets/images/home/hall-of-fame-item-quyet-tran.jpg"}
                                alt=""
                                width={100}
                                height={100}
                                style={{ width: '100%', height: 'auto' }}
                                className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}