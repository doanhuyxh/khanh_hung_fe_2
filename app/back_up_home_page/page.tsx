
import '../styles/clone_css/root.min47d5.css'
import '../styles/clone_css/select2.min47d5.css'
import '../styles/clone_css/swiper-bundle.min47d5.css'
import '../styles/clone_css/lightgallery.min47d5.css'
import '../styles/clone_css/home.min47d5.css'
import '../styles/clone_css/custom.css'


import Header from '../components/Header/CustomerKhanhHung'
import Intro from '@/app/components/HomePageSection/KhanhHungClone/Intro'
import AuthTabs from '@/app/components/HomePageSection/KhanhHung/BannerReceive/FormAuth'
import HallOfWall from '@/app/components/HomePageSection/KhanhHungClone/HallOfWall'
import ComingSoon from '@/app/components/HomePageSection/KhanhHung/ComingSoon'
import AboutMe from '@/app/components/HomePageSection/KhanhHungClone/AboutMe'
import Footer from '../components/Footer/KhanhHung'
import QuyenLoi from '@/app/components/HomePageSection/KhanhHungClone/QuyenLoi'
import AboutKhanhHung from '@/app/components/HomePageSection/KhanhHungClone/AboutKhanhHung'
import CoursePersonalized from '@/app/components/HomePageSection/KhanhHungClone/CoursePersonalized'
import Teaching from '@/app/components/HomePageSection/KhanhHungClone/Teaching'
import Staff from '@/app/components/HomePageSection/KhanhHungClone/Staff'
import QaA from '@/app/components/HomePageSection/KhanhHungClone/QaA'

export default async function HomePage() {
    return (
        <>
            {/* <Header />
            <main className="main">
                <div className="banner-receive txt-white layer-digital">
                    <div className="banner sec-com style-bottom">
                        <div className="banner-bgGrid">
                            <img src="template/assets/images/home/bg-grid.png" alt="" />
                        </div>
                        <div className="container">
                            <div className="banner-wrap flex d-flex f-ctn">
                                <Intro />
                                <div className='banner-right col lg:col-5'>
                                    <AuthTabs />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HallOfWall />
                <ComingSoon />
                <AboutMe />
                <Teaching />
                <QuyenLoi />
                <CoursePersonalized />
                <AboutKhanhHung />
                <Staff />
                <QaA />
            </main>
            <Footer /> */}
            <div className='w-full h-fit'>
                <QuyenLoi />
            </div>
        </>
    )
}