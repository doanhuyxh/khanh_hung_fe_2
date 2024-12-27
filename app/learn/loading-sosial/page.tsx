'use client'

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import axiosCustomerConfig from '@/app/libs/configs/axiosCustomerConfig';

export default function LoadingSocial() {
  const query = useSearchParams();
  const code = query.get("code");
  const router = useRouter();

  useEffect(() => {
    if (code) {
      axiosCustomerConfig.get(`/Auth/google-callback?code=${code}`)
        .then((response: any) => {
          if (response.code === 200) {
            router.push('/learn/study');
          } else {
            router.push('/');
          }
        })
        .catch(() => {
          router.push('/');
        });
    } else {
      router.push('/');
    }
  }, [code, router]);

  return null;
}
