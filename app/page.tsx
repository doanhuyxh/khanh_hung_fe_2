import './styles/home_khanh_hung.css'
import Header from './components/Header/CustomerKhanhHung';
import BannerReceive from './components/HomePageSection/KhanhHung/BannerReceive';
import Faqs from './components/HomePageSection/KhanhHung/faqs'
import HallOfFrame from './components/HomePageSection/KhanhHung/hall_of_frame';
import ComingSoon from './components/HomePageSection/KhanhHung/ComingSoon';
import CourseList from './components/HomePageSection/KhanhHung/CourseList';
import Footer from './components/Footer/KhanhHung';


export default async function Home() {

    return (
        <>
            <Header />
            <main className="min-h-screen">

                <BannerReceive />
                <HallOfFrame />
                <ComingSoon />
                <CourseList />
                <Faqs />
            </main>

            <Footer />
        </>
    );
}

