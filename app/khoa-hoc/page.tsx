import '../styles/borntowrite.css'
import dynamic from 'next/dynamic';
import HeaderBorntowrite from "../components/Header/CustomerBorntowrite";
import Footer from '../components/Footer/Borntowrite';
import Image from "next/image";
const Component = dynamic(() => import('./_component_feature'));

export default function ProductBorntowrite() {

    return (
        <>
            <HeaderBorntowrite pathname={"khoa-hoc"} />
            <div className="w-full bg-[#202020] h-full">
                <div className="max-w-[1200px] m-auto pt-20">

                    <div className="max-w-[600px] m-auto">
                        <Image
                            src="https://borntowrite.vn/wp-content/uploads/2024/09/master-xoa-nen-1.png"
                            alt=""
                            width={2582}
                            height={1728}
                            sizes="(max-width: 2582px) 100vw, 2582px"
                            decoding="async"
                            priority={false}
                        />
                    </div>

                    <div className="my-10 flex flex-col items-center justify-center gap-10">
                        <h1 className="text-center font-[700] text-[35px] text-[#EDEDED]">Tạo Bài Quảng Cáo “Nổ Đơn” Trong 14 Ngày</h1>
                        <hr className="border-[#EDEDED] border-1 w-full" />
                    </div>

                    <div className="wfull flex flex-col items-center justify-center gap-10">
                        <Image
                            src="https://borntowrite.vn/wp-content/uploads/2024/09/Post-4ds-2-300x300.png"
                            alt="Post Image"
                            width={200}
                            height={200}
                            style={{ height: "80px" }}
                        />
                    </div>

                    <Component />
                </div>
            </div>
            <Footer />
        </>
    )
}