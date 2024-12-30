'use client'

import { useEffect } from "react"
import Loading from "../loading"
import axiosCustomerConfig from "../libs/configs/axiosCustomerConfig"

export default function StudyPage() {

  useEffect(() => {
    axiosCustomerConfig.get("/course/get-last-lesson")
      .then((res) => {
        window.location.href="/study/"+res.data.slug
      })
  }, [])

  return (
    <div>
      <Loading />
    </div>
  )

}