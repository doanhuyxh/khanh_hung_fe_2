"use client";

import dynamic from "next/dynamic"
import { useEffect, useState } from "react";
const VideoPlayer = dynamic(() => import("@/app/components/Video/VideoLessonPlayer"), { ssr: false });
import { LessonList } from "@/app/components/Lesson";
import { LessonData, CourseData, LessonDataItem } from "@/app/libs/types";

import axiosCustomerConfig from "@/app/libs/configs/axiosCustomerConfig";
import Loading from "@/app/components/Loading";
import { useRouter, useSearchParams } from "next/navigation";


export default function StudyPage() {

  const [loading, setLoading] = useState(true);
  const router = useRouter()
  const query = useSearchParams()
  const lessonId = query.get('lesson')

  const [lesson, setLesson] = useState<LessonDataItem | null>(null);
  const [data, setData] = useState<CourseData[]>([]);
  const [totalLesson, setTotalLesson] = useState<number>(0)
  const [isShowAllLesson, setIsShowAllLesson] = useState(false);

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
          isOutstanding: lesson?.isOutstanding
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

    if (lessonId) {
      axiosCustomerConfig.get(`/course/get-lesson?id=${lessonId}`)
        .then((res: any) => {

          if (res.code == 209) {
            return
          }

          setLesson(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    else {
      axiosCustomerConfig.get("/course/get-last-lesson")
        .then((res) => {
          setLesson(res.data)
          const params = new URLSearchParams(query?.toString() || '');
          params.set("lesson", res.data.id);
          const newUrl = `?${params.toString()}`;
          router.replace(newUrl);
        })
        .catch((err) => {
          console.log(err)
        })
    }

    setLoading(false)

  }, [lessonId])


  useEffect(() => {
    const interval = setInterval(() => {
      if (lesson?.id) {
        axiosCustomerConfig.post(`/course/update-lesson?id=${lesson.id}&progress=100&lessonOrder=${lesson.order}`)
          .catch((err) => {
            console.log(err)
          })
      }
    }, 30000)
    return () => clearInterval(interval)
  }, [lesson])

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
