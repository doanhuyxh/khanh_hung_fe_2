import { ResponseData } from '@/app/libs/types';
import { redirect } from 'next/navigation';

async function handleGoogleCallback(code: string | null) {
  if (!code) {
    redirect('/login');
  }

  try {
    const response = await fetch(`${process.env.API_URL}/api/v1/Auth/google-callback?code=${code}`, {
      method: 'GET',
      credentials: "include"
    });
    const data:ResponseData = await response.json()
    if (data.code == 200) {
      redirect("/learn/study")
    }
    else {
      redirect("/")
    }
  } catch (error) {
    redirect("/")
  }
}

interface Props {
  searchParams: Promise<{ code?: string }>;
}

export default async function LoadingSocial({ searchParams }: Props) {
  // Await searchParams trước khi sử dụng
  const params = await searchParams;
  await handleGoogleCallback(params.code || null);
  return null;
}
