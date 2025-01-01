import dynamic from 'next/dynamic'
import fetchData from '@/app/libs/configs/fetchDataServer'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { LessonItem } from '@/app/libs/types'
const StudyPageComponent = dynamic(() => import('./_component'), { ssr: true })

let lesson:LessonItem
let isLogin:boolean

type Props = {
  params: Promise<{ lessonSlug: string }>
}
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const cookieStore = cookies()
  const AccessToken = (await cookieStore).get('AccessToken')
  isLogin = AccessToken ? true : false
  const lessonSlug = (await params).lessonSlug
  const response = await fetchData(`/public/get-lesson-share?slug=${lessonSlug}`, '')
  const data = response.data
  lesson = data
  return {
    title: response.data.name,
    description: response.data?.lessonContent,
    openGraph: {
      images: [data.imageThumbnail],
    },
  }
}


export default async function StudyPage() {
  return (
      <StudyPageComponent lesson_sv={lesson} isLogin={isLogin} />
  )
}