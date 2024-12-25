import Image from "next/image";
import AuthTabs from "./FormAuth";  
import InTro from "./InTro";
import Ceo from "./InTro/ceo";


export default function BannerReceive(){
    return (
        <div className="mx-auto px-4 py-16 layer-digital relative">

          <div className='w-full h-auto absolute left-0 bottom-10 z-[-1]'>
            <Image src={"/assets/images/bg-grid.png"} alt='' width={100} height={100} style={{ width: "100%", height: "auto" }} />
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