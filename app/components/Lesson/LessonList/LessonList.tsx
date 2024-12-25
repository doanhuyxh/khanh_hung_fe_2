'use client';
import React, { useState, useEffect } from "react";
import ActiveSpin from "@/app/components/ActiveSpin";
import { CollapseCourse } from "@/app/components/Collapse";
import TabButtons from "./TabButtons";
import Description from "./Description";
import { CourseData } from "@/app/libs/types";


interface LessonListProps {
    isShowAllLesson: boolean;
    setIsShowAllLesson: (state: boolean) => void;
    data: CourseData[];
}

const LessonList: React.FC<LessonListProps> = ({
    isShowAllLesson,
    setIsShowAllLesson,
    data
}) => {
    const [isClient, setIsClient] = useState(false);
    const [activeTab, setActiveTab] = useState("course");

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <>
            {activeTab === "course" && (
                <h2 className="font-semibold ml-0 mb-4 text-black gap-2 hidden lg:flex">
                    <ActiveSpin isActive={isShowAllLesson} onToggle={setIsShowAllLesson} />
                    <span>Trải nghiệm toàn bộ 202 videos- Hơn 35 giờ</span>
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
