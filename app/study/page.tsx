// 'use client'
// import Loading from '../_components/Loading'
// import {useEffect, useState} from 'react'
//
// import axiosCustomerConfig from "@/app/_libs/configs/axiosCustomerConfig";
//
// export default function StudyPage() {
//     const [loading, setLoading] = useState(true)
//
//     const ChangePageToFirstLearn = async () => {
//         const respone:any = await axiosCustomerConfig.get("/course/get-last-lesson")
//         if (respone.code === 200) {
//             window.location.href = `/study/${respone.data}`
//         } else {
//             window.location.href = '/'
//         }
//     }
//     useEffect(() => {
//         setLoading(false)
//     }, [])
//
//     useEffect(() => {
//         if (!loading) {
//             ChangePageToFirstLearn()
//
//         }
//     }, [loading])
//
//     return (
//         <div>
//             <Loading/>
//         </div>
//     )
// }
//

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
        <div className="container m-auto flex flex-col lg:flex-row justify-center items-center gap-20 mt-10 lg:mt-20">
            <div className="">
                <FormAuth/>
            </div>
            <div className="video_list lg:w-1/3 w-full">
                <LessonList
                />
            </div>
        </div>
    );


}