import dynamic from 'next/dynamic'
import fetchData from '@/app/libs/configs/fetchDataServer'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
const StudyPageComponent = dynamic(() => import('./_component'), { ssr: true })

let lessonId = ''
type Props = {
  params: Promise<{ lessonSlug: string }>
}
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const lessonSlug = (await params).lessonSlug
  const response = await fetchData(`/public/get-lesson-share?slug=${lessonSlug}`, (await cookies()).toString())
  if (response.code !== 200) {
    return {
      title: 'Not Found',
    }
  }
  const data = response.data
  lessonId = data.id
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
      <StudyPageComponent lessonId={lessonId} />
  )
}