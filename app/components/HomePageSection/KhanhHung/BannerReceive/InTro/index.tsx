import Ceo from "./ceo";


export default function InTro() {

    return (
        <div className="md:banner-left max-w-[800px] md:overflow-y-auto">
            <div className="w-full md:w-9/12 mb-5 flex flex-col justify-center items-center lg:justify-start lg:items-start gap-3 text-white text-center lg:text-left">
                <p className="font-bold text-white uppercase bg-[#f41e92] w-fit px-4 py-3 rounded-xl">200+ videos</p>
                <p className="text-5xl font-bold my-1">High Conversion Copywriting </p>
                <p className="">“Một trongnhững cách kiếm tiền nhiều nhất, nhanh nhất với ít nỗ lực nhất trên Internet…</p>
                <p>  <strong className="text-yellow-200">Đó là khi những người kinh doanh tự viết quảng cáo (copywriting)</strong> để bán sản phẩm của chính mình!”</p>
            </div>
            <div className="hidden md:block w-11/12">
                <Ceo />
            </div>
        </div>
    )
}