import Intro from "./Intro";
import AuthTabs from "./FormAuth";

export default function BannerFirst(){
    return (
        <div className="mx-auto px-4 pt-20 lg:pb-[15rem] layer-digital relative pb-10">
            <div className="container flex lg:flex-row flex-col justify-center m-auto">
                <Intro/>
                <AuthTabs/>
            </div>
        </div>
    )
}