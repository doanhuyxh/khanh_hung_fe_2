import { Metadata } from 'next'
import { cookies } from 'next/headers'
import fetchData from '@/app/libs/configs/fetchDataServer'
import { redirect } from 'next/navigation'

export const metadata:Metadata ={
  title:"Đang chuyển hướng sang bài học"
}

export default async function StudyPage() {

  const cookieStore = cookies()
  const AccessToken = (await cookieStore).get('AccessToken')

  if (!AccessToken) {
    return redirect("/")
  }
  
  const response = await fetchData("/course/get-last-lesson", (await cookies()).toString())
  if (response.code !== 200) {
    console.log("response false:: ", response)
    return redirect("/")
  }
  const data = response.data
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return redirect(`/study/${data.slug}`)
}