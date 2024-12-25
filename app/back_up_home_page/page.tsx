
import '../styles/clone_css/root.min47d5.css'
import '../styles/clone_css/select2.min47d5.css'
import '../styles/clone_css/swiper-bundle.min47d5.css'
import '../styles/clone_css/lightgallery.min47d5.css'
import '../styles/clone_css/home.min47d5.css'
import '../styles/clone_css/custom.css'


import Header from '../components/Headers/Customer'
import Intro from '../components/HomPageClone/Intro'
import AuthTabs from '../components/HomPage/BannerReceive/FormAuth'
import HallOfWall from '../components/HomPageClone/HallOfWall'
import ComingSoon from '../components/HomPage/ComingSoon'
import AboutMe from '../components/HomPageClone/AboutMe'
import Footer from '../components/Footer'
import QuyenLoi from '../components/HomPageClone/QuyenLoi'
import AboutKhanhHung from '../components/HomPageClone/AboutKhanhHung'
import CoursePersonalized from '../components/HomPageClone/CoursePersonalized'
import Teaching from '../components/HomPageClone/Teaching'
import Staff from '../components/HomPageClone/Staff'
import QaA from '../components/HomPageClone/QaA'

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