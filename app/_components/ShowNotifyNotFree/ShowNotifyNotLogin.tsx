import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function ShowNotifyNotLogin({ imageThumbnail }: { imageThumbnail: string }) {
    const [imageSrc, setImageSrc] = useState<string>(imageThumbnail)
    const router = useRouter();
    const handleLogin = () => {
        router.push("/");
    }

    useEffect(()=>{
        setImageSrc(imageThumbnail)
    },[imageThumbnail])

    return (
        <div className="w-full h-full relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50">
                {imageSrc && <Image
                    src={imageSrc} alt="Thumbnail" className="object-cover"
                    width={800} height={400}
                    style={{ objectFit: 'cover', width: "100%", height: "auto" }} />}
            </div>
            <div className="text-white text-center uppercase text-2xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5">
                <h3>Vui lòng đăng nhập để xem video</h3>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={handleLogin}>Đăng nhập</button>
            </div>
        </div>
    )
}   