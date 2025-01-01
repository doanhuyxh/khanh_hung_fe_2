"use client";

import { useEffect, useState } from "react";
import VideoPlayer from "@/app/components/Video/VideoLessonPlayer"
import { LessonList } from "@/app/components/Lesson";
import { LessonData, CourseData, LessonItem } from "@/app/libs/types";

import axiosCustomerConfig from "@/app/libs/configs/axiosCustomerConfig";
import Loading from "@/app/components/Loading";



export default function StudyPageComponent({ lesson_sv, isLogin }: { lesson_sv: LessonItem, isLogin: boolean }) {

  const [loading, setLoading] = useState(true);
  const [lesson, setLesson] = useState<LessonItem | null>(null);
  const [data, setData] = useState<CourseData[]>([]);
  const [totalLesson, setTotalLesson] = useState<number>(0)
  const [isShowAllLesson, setIsShowAllLesson] = useState(false);
  const [showBannerUpgrade, setShowBannerUpgrade] = useState(false)

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
          isFree: item.courseType == "free",
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
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 1024) {
        window.scrollTo(0, 0);
      }
      getAllCourse();
      axiosCustomerConfig.get("/course/get-total-lesson")
        .then(res => {
          setTotalLesson(res.data)
        })
    }

  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (lesson?.video && isLogin) {
        axiosCustomerConfig.get(`/course/update-lesson?id=${lesson.id}&progress=100&lessonOrder=${lesson.order}`)
          .catch((err) => {
            console.log(err)
          })
      }
    }, 30000)
    return () => clearInterval(interval)
  }, [lesson, isLogin])

  useEffect(() => {
    setLesson({ ...lesson_sv })
    if (isLogin) {
      axiosCustomerConfig.get(`/course/get-video-lesson-by-id-lesson?id=${lesson_sv.id}`)
        .then((res: any) => {
          if (res.code == 209) {
            setShowBannerUpgrade(true)
            return
          }
          setLesson({ ...lesson_sv, video: res.data })
        })
        .catch((err) => {
          console.log(err)
        })
    }
    setLoading(false)
  }, [isLogin, lesson_sv])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="study_container flex flex-col lg:flex-row lg:gap-10 lg:px-10">
      <div className="lg:w-2/3 w-ful">
        <VideoPlayer
          title={lesson?.name || ""}
          videoUrl={lesson?.video || ""}
          timeDuration={lesson?.duration || ""}
          views={lesson?.totalView || 0}
          isUpgrade={showBannerUpgrade}
          imageThumbnail={lesson?.imageThumbnail || ""}
          isLogin={isLogin}
          isFree={lesson?.isFree || false}
        />
      </div>

      <div className="video_list lg:w-1/3 w-full rounded-md mt-10 lg:mt-0 flex flex-col">
        <LessonList
          data={data}
          totalLesson={totalLesson}
          isShowAllLesson={isShowAllLesson}
          setIsShowAllLesson={setIsShowAllLesson}
        />
      </div>
    </div>
  );
}
