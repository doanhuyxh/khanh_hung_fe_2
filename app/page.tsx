import './_styles/home_khanh_hung.css'
import Header from './_components/Header/CustomerKhanhHung';
import Footer from './_components/Footer/Borntowrite';
import BannerReceive from './_components/HomePageSection/KhanhHung/BannerReceive';
import HallOfFrame from './_components/HomePageSection/KhanhHung/hall_of_frame';
import BannerThird from "@/app/_components/HomePageSection/KhanhHung/BannerThird";
import BannerFourth from "@/app/_components/HomePageSection/Borntowrite/BannerFourth";
import CourseList from './_components/HomePageSection/KhanhHung/CourseList';


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

