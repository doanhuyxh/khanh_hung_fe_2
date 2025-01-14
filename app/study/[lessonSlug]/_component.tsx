"use client";

import {useEffect, useState} from "react";
import VideoPlayer from "@/app/_components/LessonViewControl/VideoLessonPlayer"
import {LessonList} from "@/app/_components/Lesson";
import {LessonItem} from "@/app/_libs/types";

import axiosCustomerConfig from "@/app/_libs/configs/axiosCustomerConfig";
import Loading from "@/app/_components/Loading";
import PdfLessonView from "@/app/_components/LessonViewControl/PdfLessonView";


export default function StudyPageComponent({lesson_sv, isLogin}: { lesson_sv: LessonItem, isLogin: boolean }) {

    const [loading, setLoading] = useState(true);
    const [lesson, setLesson] = useState<LessonItem | null>(null);
    const [showBannerUpgrade, setShowBannerUpgrade] = useState(false)
    const [lessonUserId, setLessonUserId] = useState<string | null>(null)


    useEffect(() => {
        const interval = setInterval(() => {

            if (!isLogin) {
                return
            }

            if (!lesson?.video) {
                return
            }

            const currentTime = sessionStorage.getItem("currentTime")
            const duration = sessionStorage.getItem("totalDuration")

            if (!currentTime || !duration) {
                return
            }

            let progress = Math.floor((parseInt(currentTime) / parseInt(duration)) * 100)

            if (progress > 95) {
                progress = 100
            }

            axiosCustomerConfig.get(`/course/update-lesson?id=${lessonUserId}&progress=${progress}`)
                .catch((err) => {
                    console.log(err)
                })


        }, 3000)

        return () => clearInterval(interval)
    }, [isLogin, lesson?.video])


    useEffect(() => {
        setLesson({...lesson_sv})
        if (isLogin && lesson_sv?.id) {
            axiosCustomerConfig.get(`/course/get-video-lesson-by-id-lesson?id=${lesson_sv.id}`)
                .then((res: any) => {
                    if (res.code == 209) {
                        setShowBannerUpgrade(true)
                        return
                    }
                    console.log(res.data)
                    setLesson({ ...lesson_sv, video: res.data.video })
                    sessionStorage.setItem("noi_dung_bai_hoc", lesson_sv.description)
                    setLessonUserId(res.data.lessonUserId)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        setLoading(false)
    }, [isLogin, lesson_sv])

    if (loading) {
        return <Loading/>
    }

    return (
        <div className="study_container flex flex-col lg:flex-row lg:gap-10 lg:px-10">
            <div className="lg:w-2/3 w-ful">
                {lesson?.type == "video" &&
                    <VideoPlayer
                        title={lesson?.name || ""}
                        videoUrl={lesson?.video || ""}
                        timeDuration={lesson?.duration || ""}
                        views={lesson?.totalView || 0}
                        isUpgrade={showBannerUpgrade}
                        imageThumbnail={lesson?.imageThumbnail || ""}
                        isLogin={isLogin}
                        isFree={lesson?.isFree || false}
                    />}
                {lesson?.type == "pdf" &&
                    <PdfLessonView
                        title={lesson?.name || ""}
                        videoUrl={lesson?.video || ""}
                        timeDuration={lesson?.duration || ""}
                        views={lesson?.totalView || 0}
                        isUpgrade={showBannerUpgrade}
                        imageThumbnail={lesson?.imageThumbnail || ""}
                        isLogin={isLogin}
                        isFree={lesson?.isFree || false}
                    />}

            </div>

            <div className="video_list lg:w-1/3 w-full mt-10 lg:mt-0 flex flex-col bg-white p-4 rounded-md">
                <LessonList/>
            </div>
        </div>
    );
}
