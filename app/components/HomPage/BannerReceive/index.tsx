import Image from "next/image";
import AuthTabs from "./FormAuth";  
import InTro from "./InTro";
import Ceo from "./InTro/ceo";


export default function BannerReceive(){
    return (
        <div className="mx-auto px-4 py-20 lg:pb-[15rem] layer-digital relative">

          <div className='w-full h-auto absolute left-0 bottom-[-30%] z-[0]'>
            <Image src={"/template/assets/images/home/bg-grid.png"} alt='' width={1000} height={300} style={{ width: "100%", height: "auto", minHeight:300 }} />
          </div>

          <div className="container flex flex-col md:flex-row justify-between items-center m-auto z-100">
            <InTro />
            <AuthTabs />
            <div className='block w-full mt-5 md:hidden'>
              <Ceo />
            </div>
          </div>
        </div>
    )
}