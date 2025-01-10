'use client'

import axiosCustomerConfig from "@/app/_libs/configs/axiosCustomerConfig";
import { useEffect, useState } from "react";


export default function Page() {

    const [courseName, setCourseName] = useState<any>([]);
    const [lessonName, setLessonName] = useState<any>([]);
    const [courseProgress, setCourseProgress] = useState<any>([]);
    const [data, setData] = useState<any>([]);
    const [showLessonIndex, setShowLessonIndex] = useState<number>(0);

    useEffect(() => {
        axiosCustomerConfig.get("/course/get-course-name")
            .then((res) => {
                res.data.forEach((item: any) => {
                    item.id = item.id.toLowerCase()
                })
                setCourseName(res.data)
            })

        axiosCustomerConfig.get("/course/get-lesson-name")
            .then((res) => {
                res.data.forEach((item: any) => {
                    item.id = item.id.toLowerCase()
                })

                setLessonName(res.data)
            })

        axiosCustomerConfig.get("/course/get-course-progress")
            .then((res) => {
                setCourseProgress(res.data)
            })

    }, []);

    useEffect(() => {

        if (courseName.length > 0 && courseProgress.length > 0) {

            const temp = courseProgress.map((item: any) => {
                const course = courseName.find((course: any) => course.id == item.courseUser.courseId)
                return {
                    ...item,
                    courseName: course?.name,
                    image: course?.image,
                    description: course?.description
                }
            })

            setData(temp)
        }

    }, [courseName, lessonName, courseProgress]);

    return (
        <div className="container m-auto mt-10 lg:mt-20">
            <div className="w-full flex justify-center items-center mb-10">
                <h1 className="text-3xl lg:text-6xl font-bold transform scale-150 text-color-secondary animate-jump-in   animate-once animate-ease-out" >Dashboard</h1>
            </div>

            <div className="w-full min-h-[40vh] px-10 flex flex-col gap-10 bg-gray-100 rounded-2xl p-10">
                <h2 className="text-3xl">Tiến độ học tập</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {
                        data.map((item: any, index: number) => (
                            <div className="bg-white shadow-md rounded-md p-4" key={index}>
                                <div className="flex flex-row justify-start gap-10 items-start">
                                    <div className="w-[200px] h-fit">
                                        {item.image &&<img src={item.image} alt="" className="w-full h-auto object-cover rounded-md" loading="lazy" />}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mt-4">{item.courseName}</h4>
                                        <p className="text-lg mt-2">Tiến độ: {item.courseUser.progress}%</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <button onClick={() => setShowLessonIndex(index)} className="text-lg bg-color-primary text-white px-4 py-2 rounded-md cursor-pointer">Xem chi tiết</button>
                                </div>
                                {showLessonIndex === index && <div className="flex flex-col">
                                    {
                                        item.lessonUser.length == 0 && (
                                            <div className="mb-4">
                                                <p className="text-lg">Chưa có bài học nào</p>
                                            </div>
                                        )
                                    }

                                    {
                                        item.lessonUser.map((lesson: any, index: number) => (
                                            <div className="flex flex-row justify-between items-center p-2 bg-gray-100 rounded-md mt-2" key={index}>
                                                <p className="text-lg">{lessonName.find((i:any)=>i.id == lesson.lessonId)?.name}</p>
                                                <p className="text-lg">{lesson.progress}%</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                }

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
