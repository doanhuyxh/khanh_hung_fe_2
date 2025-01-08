import './index.css'
import Intro from "./Intro";



export default function BannerReceive(){
    return (
        <div className="mx-auto px-4 pt-20 lg:pb-[15rem] layer-digital relative">
            <div className="container flex flex-col md:flex-row justify-between m-auto">
                <Intro/>
            </div>
        </div>
    )
}