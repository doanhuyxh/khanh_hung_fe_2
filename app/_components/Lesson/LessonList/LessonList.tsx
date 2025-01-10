'use client';
import React, { useState, useEffect } from "react";
import ActiveSpin from "@/app/_components/ActiveSpin";
import { CollapseCourse } from "@/app/_components/Collapse";
import TabButtons from "./TabButtons";
import Description from "./Description";
import {CourseData, LessonData} from "@/app/_libs/types";
import axiosCustomerConfig from "@/app/_libs/configs/axiosCustomerConfig";


const LessonList = () => {

    const [isClient, setIsClient] = useState(false);
    const [activeTab, setActiveTab] = useState("course");
    const [isShowAllLesson, setIsShowAllLesson] = useState(false);
    const [data, setData] = useState<CourseData[]>([]);
    const [totalLesson, setTotalLesson] = useState<number>(0)

    const getAllCourse = async () => {
        const response = await axiosCustomerConfig.get("/course/GetAllCourse");
        const data = response.data;
        const temp_arr: CourseData[] = [];
        data.forEach((item: CourseData) => {
            const course: CourseData = {
                id: item.id,
                name: item.name,
                image: item.image,
                costPrice: item.costPrice,
                courseType: item.courseType,
                totalTimeDuration: item.totalTimeDuration,
                numberOfLessons: item.numberOfLessons,
                slug: item.slug,
                lesson: []
            };
            item.lesson.forEach((lesson: LessonData) => {
                course.lesson.push({
                    id: lesson.id,
                    name: lesson.name,
                    lessonContent: lesson.lessonContent,
                    imageThumbnail: lesson.imageThumbnail,
                    video: lesson.video,
                    duration: lesson.duration,
                    isFree: lesson.isFree,
                    isImportant: lesson?.isImportant,
                    isOutstanding: lesson?.isOutstanding,
                    slug: lesson.slug
                });
            });
            temp_arr.push(course);
        });

        setData(temp_arr);

    }


    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if(!isClient) return;
        getAllCourse();
        axiosCustomerConfig.get("/course/get-total-lesson")
            .then(res => {
                setTotalLesson(res.data)
            })
    }, [isClient])

    if (!isClient) return null;

    return (
        <>
            {activeTab === "course" && (
                <h2 className="font-semibold ml-0 mb-4 text-black gap-2 hidden lg:flex">
                    <ActiveSpin isActive={isShowAllLesson} onToggle={setIsShowAllLesson} />
                    <span>Trải nghiệm toàn bộ {totalLesson} videos</span>
                </h2>
            )}
            {activeTab === "course" && (
                <div className="flex flex-col pb-4 overflow-y-auto container_list mt-3 md:mt-0">
                    {data && data.length > 0 && data.map((item, index) => (
                    <CollapseCourse
                        key={index}
                        title={item.name}
                        numberOfLessons={item.numberOfLessons}
                        totalTimeDuration={item.totalTimeDuration}
                        data={item.lesson}
    
                    />
                    ))}
                </div>
            )}

            {activeTab === "description" && <Description />}

            <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
        </>
    );
};

export default LessonList;
