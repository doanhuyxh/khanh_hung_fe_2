import type { Metadata } from 'next'
import fetchData from '@/app/_libs/configs/fetchDataServer';
import './_styles/home_khanh_hung.css'
import Header from './_components/Header/CustomerKhanhHung';
import Footer from './_components/Footer/Borntowrite';
import BannerReceive from './_components/HomePageSection/KhanhHung/BannerReceive';
import CourseOutstanding from './_components/HomePageSection/KhanhHung/CourseOutstanding';
import BannerFourth from "@/app/_components/HomePageSection/Borntowrite/BannerFourth";
import CourseList from './_components/HomePageSection/KhanhHung/CourseList';
import BannerFeatures from "@/app/_components/HomePageSection/KhanhHung/BannerFeatures";
import TrackingSeo from './_components/TrackingSeo';

const response = await fetchData('/public/seo', '');
const data = JSON.parse(response.data);
export const metadata: Metadata = {
    title:data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
        type: 'website',
        url: data.url,
        title: data.title,
        description: data.description,
        images: [
            {
                url: data.logo,
                width: 800,
                height: 600,
                alt: data.title,
            },
        ],
    },
    twitter: {
        title: data.title,
        description: data.description,
        card: 'summary_large_image',
        images:[
            {
                url: data.logo,
                alt: data.title,
            }
        ]
    },
}

export default async function Home() {
    
    return (
        <>
            
            <TrackingSeo/>
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

