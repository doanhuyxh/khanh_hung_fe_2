'use client';

import { ReactSortable } from "react-sortablejs";
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import axiosInstance, { postFormData } from '@/app/libs/configs/axiosAdminConfig';
import Loading from '@/app/components/Loading';
import ModalScroll from '@/app/components/Modal/ModalScroll';
import { FormLesson } from '@/app/components/Form';
import { LessonItemAdmin } from '@/app/components/Lesson';
import ModalViewHtml from '@/app/components/Modal/ModalViewHtml';
import { LessonItem } from '@/app/libs/types';
import VideoPlayerType from '@/app/components/Video/VideoPlayerType';
import toast from "react-hot-toast";
import ModalViewVideo from "@/app/components/Modal/ModelVideo";

export default function CourseLesson() {
    const [loading, setLoading] = useState(true)
    const param = useSearchParams()
    const courseId = param.get('id')

    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false)
    const [isOpenDescription, setIsOpenDescription] = useState(false)
    const [isOpenVideo, setIsOpenVideo] = useState(false)

    const [lessonContent, setLessonContent] = useState('')
    const [lessonVideo, setLessonVideo] = useState('')
    const [lessonTitle, setLessonTitle] = useState('')

    const [course, setCourse] = useState<any>(null)
    const [courseLesson, setCourseLesson] = useState<LessonItem[]>([])
    const [courseLessonBackUp, setCourseLessonBackUp] = useState<LessonItem[]>([])

    const [lesson, setLesson] = useState<LessonItem>({
        id: "",
        name: "",
        slug: "",
        description: "",
        lessonContent: "",
        imageThumbnail: '',
        video: '',
        duration: '12:01',
        isFree: false,
        isImportant: false,
        isOutstanding: false,
        courseId: courseId,
        totalView: 0,
    })

    const HandleCreateOrUpdateLesson = (id: string) => {
        if (id == "") {
            setLesson({
                id: "",
                name: "",
                slug: "",
                description: "",
                lessonContent: "",
                imageThumbnail: '',
                video: '',
                duration: '12:01',
                isFree: false,
                isImportant: false,
                isOutstanding: false,
                courseId: courseId,
                totalView: 0,
            })
        } else {
            const lesson = courseLesson.find((item: LessonItem) => item.id == id)
            if (!lesson) {
                setLesson({
                    id: "",
                    name: "",
                    slug: "",
                    description: "",
                    lessonContent: "",
                    imageThumbnail: '',
                    video: '',
                    duration: '12:01',
                    isFree: false,
                    isImportant: false,
                    isOutstanding: false,
                    courseId: courseId,
                    totalView: 0,
                })
            } else {
                setLesson(lesson)
            }
        }
        setIsOpen(true)
    }

    const GetDataCourse = useCallback(async () => {
        const res = await axiosInstance.get(`/course/GetCourseById?id=${courseId}`)
        setCourse(res.data)
    }, [courseId])

    const GetDataLesson = useCallback(async () => {
        const res = await axiosInstance.get(`/course/lesson/GetByCourseId?courseId=${courseId}&page=1&pageSize=30`)
        setCourseLesson(res.data)
        setCourseLessonBackUp(res.data)
    }, [courseId])

    const HandleDeleteLesson = async (id: string) => {
        await axiosInstance.get(`/course/lesson/delete?id=${id}`);
        await GetDataLesson()
    }

    const saveLesson = useCallback(async (new_lesson: LessonItem) => {
        await postFormData('course/lesson/CreateOrUpdate', { ...new_lesson });
        GetDataLesson()
        setIsOpen(false)
    }, [GetDataLesson]);

    const HandleSearchLesson = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        console.log(value)
        console.log(courseLesson)
        const newLesson = courseLesson.filter((item: LessonItem) => item.name.toLowerCase().includes(value.toLowerCase()))
        setCourseLessonBackUp(newLesson)
    }

    const HandleSaveOrderLesson = async () => {
        for (let i = 0; i < courseLessonBackUp.length; i++) {
            await axiosInstance.get(`/course/lesson/UpdateOrder?lessonId=${courseLessonBackUp[i].id}&order=${i + 1}`)
        }
        toast.success("Lưu thành công", {
            duration: 3000,
            position: "top-right",
        })
    }

    useEffect(() => {
        GetDataCourse()
        GetDataLesson()
        setLoading(false)
    }, [courseId, GetDataCourse, GetDataLesson])


    if (loading) {
        return <Loading />
    }

    return (
        <>

            <div className='w-full'>
                <div className='w-full p-4 rounded-lg mb-10 border-b-2 border-gray-300'>
                    <button className='float-left hover:bg-blue-400 px-4 py-2 rounded-md' onClick={() => router.push('/admin_web/course')}>
                        <i className="fa-solid fa-arrow-left" style={{ color: "#1c6bf2" }}></i>
                    </button>
                    <h1 className='text-2xl font-bold text-center'>Khoá học: {course?.name || ""}</h1>
                </div>

                <div className="w-full flex justify-between items-center gap-4">
                    <h2 className='text-center text-lg font-bold'>Danh sách bài học</h2>
                    <div className="flex gap-2">
                        <div className="flex gap-2">
                            <input className="outline-none border-2 border-gray-300 rounded-md p-2" placeholder="Tìm kiếm bài học" onChange={HandleSearchLesson} />
                        </div>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => HandleCreateOrUpdateLesson("")}>
                            <i className="fa-solid fa-plus"></i> Thêm bài học
                        </button>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-md" onClick={HandleSaveOrderLesson}>
                            <i className="fa-solid fa-save"></i> Lưu
                        </button>
                    </div>
                </div>

                <div className='w-8/12 m-auto p-4 rounded-lg flex flex-col gap-4'>
                    {courseLessonBackUp && courseLessonBackUp.length == 0 && <p className='text-center text-lg font-bold'>Không có bài học nào</p>}
                    <ReactSortable list={courseLessonBackUp}
                        setList={setCourseLessonBackUp}
                        animation={200}
                        delay={2} className="flex flex-col gap-4">
                        {courseLessonBackUp && courseLessonBackUp.length > 0 && courseLessonBackUp.map((item: any, index: number) => (
                            <LessonItemAdmin
                                key={index}
                                item={item}
                                toggleLessonContent={() => {
                                    setLessonContent(item.lessonContent)
                                    setIsOpenDescription(true)
                                }}
                                toggleLessonVideo={() => {
                                    setLessonVideo(item.video)
                                    setLessonTitle(item.name)
                                    setIsOpenVideo(true)
                                }}
                                HandleCreateOrUpdateLesson={HandleCreateOrUpdateLesson}
                                HandleDeleteLesson={HandleDeleteLesson}
                            />
                        ))}
                    </ReactSortable>
                </div>
            </div>

            <ModalScroll isOpen={isOpen} onClose={() => setIsOpen(false)} title={`${lesson.id == "" ? "Tạo bài học mới" : "Cập nhật bài học: " + lesson?.name} -- Khoá học: ${course?.name || ""}`}>
                <FormLesson lesson={lesson} setLesson={setLesson} saveLesson={saveLesson} />
            </ModalScroll>

            <ModalViewHtml isOpen={isOpenDescription} onClose={() => setIsOpenDescription(false)} title={'Nội dung bài học'}>
                <div dangerouslySetInnerHTML={{ __html: lessonContent }} />
            </ModalViewHtml>

            <ModalViewVideo isOpen={isOpenVideo} onClose={() => setIsOpenVideo(false)} title={lessonTitle}>
                <VideoPlayerType videoSrc={lessonVideo} />
            </ModalViewVideo>
        </>
    )
}
