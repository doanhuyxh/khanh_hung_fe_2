import './styles/borntowrite.css'

import Header from './components/Header/HeaderBorntowrite';
import BannerReceive from '@/app/components/HomePageSection/Borntowrite/BannerReceive';
import Footer from './components/Footer/Borntowrite';
import BannerSecond from "@/app/components/HomePageSection/Borntowrite/BannerSecond";


export default async function Home() {

    return (
        <>
            <Header/>
            <main className="min-h-screen">
                <BannerReceive/>
                <BannerSecond/>
            </main>
            <Footer/>
        </>
    );
}
