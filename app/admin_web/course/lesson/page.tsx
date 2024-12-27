'use client';

import axiosInstance, { postFormData } from '@/app/libs/configs/axiosConfig';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Loading from '@/app/components/Loading';
import ModalScroll from '@/app/components/Modal/ModalScroll';
import { FormLesson } from '@/app/components/Form';
import { LessonItemAdmin } from '@/app/components/Lesson';
import ModalViewHtml from '@/app/components/Modal/ModalViewHtml';
import { LessonItem } from '@/app/libs/types';
import VideoPlayerType from '@/app/components/Video/VideoPlayerType';

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

    const [course, setCourse] = useState<any>(null)
    const [courseLesson, setCourseLesson] = useState<LessonItem[]>([])

    const [lesson, setLesson] = useState<LessonItem>({
        id: "",
        name: "",
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
            }else{
                setLesson(lesson)
            }
        }
        setIsOpen(true)
    }

    const HandleDeleteLesson = async (id: string) => {
        await axiosInstance.get(`/lesson/delete?id=${id}`);
        await GetDataLesson()
    }

    const saveLesson = async () => {
        await postFormData('/lesson/CreateOrUpdate', lesson);
        GetDataLesson()
        setIsOpen(false)

    }

    const GetDataCourse = useCallback(async () => {
        const res = await axiosInstance.get(`/course/GetCourseById?id=${courseId}`)
        setCourse(res.data)
    }, [courseId])

    const GetDataLesson = useCallback(async () => {
        const res = await axiosInstance.get(`/lesson/GetByCourseId?courseId=${courseId}&page=1&pageSize=30`)
        setCourseLesson(res.data)
    }, [courseId])


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
                <div className='w-full bg-white shadow-lg p-4 rounded-lg flex justify-between items-center mb-5'>
                    <button className='float-left hover:bg-blue-400 px-4 py-3 rounded-md' onClick={() => router.push('/admin_web/course')}>
                        <i className="fa-solid fa-arrow-left" style={{ color: "#1c6bf2" }}></i>
                    </button>

                    <h1 className='text-2xl font-bold'>Khoá học: {course?.name || ""}</h1>

                    <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => HandleCreateOrUpdateLesson('')}>Bài học mới</button>
                </div>

                <div className='w-full p-4 rounded-lg flex flex-col gap-4'>
                    <h2 className='text-center text-lg font-bold'>Danh sách bài học</h2>
                    {courseLesson && courseLesson.length == 0 && <p className='text-center text-lg font-bold'>Không có bài học nào</p>}

                    {courseLesson && courseLesson.length > 0 && courseLesson.map((item: any, index: number) => (
                        <LessonItemAdmin
                            key={index}
                            item={item}
                            toggleLessonContent={() => {
                                setLessonContent(item.lessonContent)
                                setIsOpenDescription(true)
                            }}
                            toggleLessonVideo={() => {
                                setLessonVideo(item.video)
                                setIsOpenVideo(true)
                            }}
                            HandleCreateOrUpdateLesson={HandleCreateOrUpdateLesson}
                            HandleDeleteLesson={HandleDeleteLesson}
                        />
                    ))}

                </div>
            </div>

            <ModalScroll isOpen={isOpen} onClose={() => setIsOpen(false)} title={`${lesson.id == "" ? "Tạo bài học mới" : "Chỉnh sửa bài học"} cho khoá học: ${course?.name || ""}`}>
                <FormLesson lesson={lesson} setLesson={setLesson} saveLesson={saveLesson} />
            </ModalScroll>

            <ModalViewHtml isOpen={isOpenDescription} onClose={() => setIsOpenDescription(false)} title={'Nội dung bài học'}>
                <div dangerouslySetInnerHTML={{ __html: lessonContent }} />
            </ModalViewHtml>

            <ModalViewHtml isOpen={isOpenVideo} onClose={() => setIsOpenVideo(false)} title={""}>
                <VideoPlayerType videoSrc={lessonVideo} />
            </ModalViewHtml>
        </>
    )
}
