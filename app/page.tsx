import './styles/home_khanh_hung.css'
import Header from './components/Header/CustomerKhanhHung';
import Footer from './components/Footer/Borntowrite';
import BannerReceive from './components/HomePageSection/KhanhHung/BannerReceive';
import HallOfFrame from './components/HomePageSection/KhanhHung/hall_of_frame';
import BannerThird from "@/app/components/HomePageSection/KhanhHung/BannerThird";
import BannerFourth from "@/app/components/HomePageSection/Borntowrite/BannerFourth";
import CourseList from './components/HomePageSection/KhanhHung/CourseList';


export default async function Home() {

    return (
        <>
            <Header/>
            <main className="min-h-screen">
                <BannerReceive/>
                <HallOfFrame/>
                <BannerThird/>
                <CourseList/>
                <BannerFourth/>
            </main>

            <Footer/>
        </>
    );
}

