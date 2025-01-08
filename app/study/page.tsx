'use client'
import Loading from '../components/Loading'
import { useEffect, useState } from 'react'
import { getLastStudyLesion } from '../libs/services/ApiCustomerServices'

export default function StudyPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  useEffect(() => {
    if (!loading) {
      getLastStudyLesion().then((res: any) => {

        if (res.code !== 200) {
          window.location.href = '/'
        }

        setTimeout(() => {
          window.location.href = `/study/${res.data.slug}`
        }, 1000)
      })
    }
  }, [loading])

  return (
    <div>
      <Loading />
    </div>
  )
}


