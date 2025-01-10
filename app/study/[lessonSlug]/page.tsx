import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { cookies } from 'next/headers'
import fetchData from '@/app/_libs/configs/fetchDataServer'
import { LessonItem } from '@/app/_libs/types'
import { redirect } from 'next/navigation';


const StudyPageComponent = dynamic(() => import('./_component'),{ ssr: true })

type Props = {
  params: { lessonSlug: string }
}

export async function getLessonData(lessonSlug: string) : Promise<LessonItem> {
  const response = await fetchData(`/public/get-lesson-share?slug=${lessonSlug}`, '')
  return response.data
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lessonSlug } = await params;
  const lessonData:LessonItem = await getLessonData(lessonSlug)

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
  const lessonData:LessonItem = await getLessonData(lessonSlug)

  const cookie = await cookies()
  const accToken = cookie.get('AccessToken')
  const isLogin = accToken ? true : false

  if(isLogin) {
    return <StudyPageComponent lesson_sv={lessonData} isLogin={isLogin} />
  }else{
    redirect('/study')
  }
}
 