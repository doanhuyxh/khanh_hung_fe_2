import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Khánh Hùng',
  description: 'Khánh Hùng',
}
import Image from 'next/image';
import './styles/home.css'
import Header from './components/Headers/Customer';
import BannerReceive from './components/HomPage/BannerReceive';
import Faqs from './components/HomPage/faqs'
import HallOfFrame from './components/HomPage/hall_of_frame';
import ComingSoon from './components/HomPage/ComingSoon';
import CourseList from './components/HomPage/CourseList';
import ScrollComponent from './components/Scroll/ScrollComponent'


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

    </>
  );
}
