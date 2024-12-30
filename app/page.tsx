import './styles/home.css'
import Header from './components/Header/Customer';
import BannerReceive from './components/HomPage/BannerReceive';
import Faqs from './components/HomPage/faqs'
import HallOfFrame from './components/HomPage/hall_of_frame';
import ComingSoon from './components/HomPage/ComingSoon';
import CourseList from './components/HomPage/CourseList';
import Footer from './components/Footer';


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
