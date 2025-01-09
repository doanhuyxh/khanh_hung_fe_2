import './styles/home_khanh_hung.css'
import Header from './components/Header/CustomerKhanhHung';
import BannerReceive from './components/HomePageSection/KhanhHung/BannerReceive';
import HallOfFrame from './components/HomePageSection/KhanhHung/hall_of_frame';
import Footer from './components/Footer/KhanhHung';
import BannerThird from "@/app/components/HomePageSection/KhanhHung/BannerThird";


export default async function Home() {

    return (
        <>
            <Header/>
            <main className="min-h-screen">

                <BannerReceive/>
                <HallOfFrame/>
                <BannerThird/>
            </main>

            <Footer/>
        </>
    );
}

