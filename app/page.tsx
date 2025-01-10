import './_styles/home_khanh_hung.css'
import Header from './_components/Header/CustomerKhanhHung';
import Footer from './_components/Footer/Borntowrite';
import BannerReceive from './_components/HomePageSection/KhanhHung/BannerReceive';
import CourseOutstanding from './_components/HomePageSection/KhanhHung/CourseOutstanding';
import BannerFourth from "@/app/_components/HomePageSection/Borntowrite/BannerFourth";
import CourseList from './_components/HomePageSection/KhanhHung/CourseList';
import BannerFeatures from "@/app/_components/HomePageSection/KhanhHung/BannerFeatures";



export default async function Home() {

    return (
        <>
            <Header/>
            <main className="min-h-screen bg-[#580B94]">
                <BannerReceive/>
                <CourseOutstanding/>
                <CourseList/>
                <BannerFeatures/>
                <BannerFourth/>
            </main>

            <Footer/>
        </>
    );
}

