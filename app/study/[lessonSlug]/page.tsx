import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { cookies } from 'next/headers'
import fetchData from '@/app/_libs/configs/fetchDataServer'
import { LessonItem } from '@/app/_libs/types'
const LessonList = dynamic(() => import('@/app/_components/Lesson/LessonList/LessonList'))
const FormAuth = dynamic(() => import('@/app/_components/HomePageSection/KhanhHung/BannerReceive/FormAuth'))

const StudyPageComponent = dynamic(() => import('./_component'), { ssr: true })

type Props = {
  params: { lessonSlug: string }
}

export async function getLessonData(lessonSlug: string): Promise<LessonItem> {
  const response = await fetchData(`/public/get-lesson-share?slug=${lessonSlug}`, '')
  return response.data
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lessonSlug } = await params;
  const lessonData: LessonItem = await getLessonData(lessonSlug)

  return {
    title: lessonData.name,
    description: lessonData.lessonContent,
    openGraph: {
      images: [lessonData.imageThumbnail],
    },
  }
}

export default async function StudyPage({ params }: Props) {
  const { lessonSlug } = await params;
  const lessonData: LessonItem = await getLessonData(lessonSlug)

  const cookie = await cookies()
  const accToken = cookie.get('AccessToken')
  const isLogin = accToken ? true : false

  if (isLogin) {
    return <StudyPageComponent lesson_sv={lessonData} isLogin={isLogin} />
  } else {

    return (<div className=" max-w-[2100px] m-auto flex flex-col lg:flex-row justify-center items-center gap-20 mt-10 lg:mt-20">
      <div className="">
        <FormAuth />
      </div>
      <div className="video_list lg:w-1/3 w-full max-w-[600px]">
        <LessonList
        />
      </div>
    </div>)
  }
}
