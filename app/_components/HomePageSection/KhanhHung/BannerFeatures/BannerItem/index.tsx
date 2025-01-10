import Image from "next/image";

export default function BannerItem({title, EXPERIENCE_ITEMS, imageSrc}) {

    return (
        <div
            className="max-w-[450px] min-w-[250px] min-h-[600px] bg-[url('/assets/images/home/coming-soon-bg-01.jpg')] bg-cover bg-center p-8 rounded-3xl border-2 border-[#2686ec] overflow-hidden scrollbar-hide">

            <div className="flex flex-col items-center justify-start h-full text-white bg-transparent">
                <div className="w-full h-auto max-h-[260px] mb-4 rounded-2xl overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt=""
                        width={300}
                        height={400}
                        style={{width: "100%", height: "auto", objectFit:"contain", objectPosition:"center"}}
                    />
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <p className="font-[600] text-[20px] text-white text-wrap">
                        {title}
                    </p>

                    <div className="w-full min-h-[22rem">
                        <ul className="flex flex-col gap-3">
                            {EXPERIENCE_ITEMS.map((item, index) => (
                                <li key={index}>
                                    <div className="flex flex-row gap-3 mx-1">
                                        <span className="w-12 overflow-hidden">
                                           <i aria-hidden="true" className="fas fa-check-circle"></i>
                                        </span>
                                        <span className="text-[16px] max-w-[300px] text-wrap">{item}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}