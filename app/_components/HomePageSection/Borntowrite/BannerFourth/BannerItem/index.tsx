import Image from "next/image";

export default function BannerItem({icon, name, job, content, img}) {
    return (
        <div className="flex flex-col gap-2 max-w-[340px] min-h-[550px] bg-white p-10 rounded-xl">

            <div className="w-full flex gap-4 flex-row justify-start">
                <div className="overflow-hidden min-w-[10px] max-w-[60px]">
                    <Image
                        src={icon}
                        alt={name}
                        width={30}
                        height={30}
                        loading="lazy"
                        sizes="(max-width: 199px) 100vw, 199px"
                        style={{width: "100%", height: "auto", borderRadius:50}}
                    />
                </div>
                <div className="flex flex-col">
                    <p className="font-[600] text-[1.6rem] text-[#3a3a3a]">
                        {name}
                    </p>
                    <p className="text-[#3a3a3a]">
                        {job}
                    </p>
                    <div
                        className="w-fit tag-pro text-[1.2rem] font-[600] px-2 text-nowrap flex flex-row  items-center  rounded-lg overflow-hidden">
                        <div className="w-8 h-8">
                            <Image
                                src={"/template/assets/images/tag/tag-pro.svg"}
                                width={100}
                                height={100}
                                alt=""
                                layout="responsive"
                                className="w-full"
                            />
                        </div>
                        <span className="text-[#f5d31e] text-[12px]">Đồng nghiệp của tôi</span>
                    </div>
                </div>
            </div>

            <div className="content">
                <p className="text-[#3a3a3a] text-[1.4rem] font-[400]" style={{fontStyle: "italic"}}>
                    {content}
                </p>
            </div>

            <div className="w-full">
                <Image
                    src={img}
                    alt=""
                    width={200}
                    height={200}
                    style={{width: "100%", height: "auto"}}
                />
            </div>

        </div>

    )
}