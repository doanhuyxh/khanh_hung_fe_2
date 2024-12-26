import Ceo from "./ceo";


export default function InTro() {

    return (
        <div className="md:banner-left md:overflow-y-auto">
            <div className="w-full md:w-9/12 mb-5 flex flex-col justify-center items-center lg:justify-start lg:items-start gap-3 text-white text-center lg:text-left">
                <p className="font-bold text-white uppercase bg-[#f41e92] w-fit px-4 py-3 rounded-xl">200+ videos</p>
                <p className="text-xl font-bold">Kinh doanh Elearning</p>
                <p className="font-bold">BÁN TỰ ĐỘNG, DẠY TỰ ĐỘNG</p>
                <p className="">Biến kiến thức của bạn thành một Business: Quy mô tinh gọn, doanh số hấp dẫn, phát triển lâu dài</p>
            </div>
            <div className="hidden md:block w-11/12">
                <Ceo />
            </div>
        </div>
    )
}