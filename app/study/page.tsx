
import dynamic from "next/dynamic";
import {cookies} from "next/headers";
import '../_styles/home_khanh_hung.css'
import fetchDataServer from "@/app/_libs/configs/fetchDataServer";
import { redirect } from 'next/navigation';

const LessonList = dynamic(() => import('@/app/_components/Lesson/LessonList/LessonList'))
const FormAuth = dynamic(() => import('@/app/_components/HomePageSection/KhanhHung/BannerReceive/FormAuth'))



export default async function StudyPage() {

    const cookie = await cookies()
    const accToken = cookie.get('AccessToken')
    const isLogin = accToken ? true : false

    if (isLogin) {
        const res = await fetchDataServer('/course/get-last-lesson',(await cookies()).toString())
        if (res.code === 200) {
            redirect(`/study/${res.data}`);

        } else {
            redirect('/');
        }
    }

    return (
        <div className=" max-w-[2100px] m-auto flex flex-col lg:flex-row justify-center items-center gap-20 mt-10 lg:mt-20">
            <div className="">
                <FormAuth/>
            </div>
            <div className="video_list lg:w-1/3 w-full max-w-[600px]">
                <LessonList
                />
            </div>
        </div>
    );


}