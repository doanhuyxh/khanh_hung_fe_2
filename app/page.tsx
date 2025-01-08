import './styles/borntowrite.css'

import Header from './components/Header/CustomerBorntowrite';
import BannerReceive from '@/app/components/HomePageSection/Borntowrite/BannerFirst';
import BannerSecond from "@/app/components/HomePageSection/Borntowrite/BannerSecond";
import BannerThird from "@/app/components/HomePageSection/Borntowrite/BannerThird";
import Footer from './components/Footer/Borntowrite';


export default async function Home() {

    return (
        <>
            <Header/>
            <main className="min-h-screen">
                <BannerReceive/>
                <BannerSecond/>
                <BannerThird/>
            </main>
            <Footer/>
        </>
    );
}
