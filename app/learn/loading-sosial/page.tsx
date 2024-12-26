import { redirect } from 'next/navigation';

async function handleGoogleCallback(code: string | null) {
  if (!code) {
    redirect('/login');
  }

  try {
    // Gọi API xử lý authentication
    const response = await fetch(`${process.env.API_URL}/Auth/google-callback?code=${code}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Authentication failed');
    }

    const data = await response.json();

    if (data.success) {
      // Có thể set cookie hoặc xử lý session ở đây nếu cần
      redirect('/dashboard');
    } else {
      redirect('/login');
    }
  } catch (error) {
    console.error('Authentication error:', error);
    redirect('/login');
  }
}

export default async function LoadingSocial({
  searchParams,
}: {
  searchParams: { code?: string };
}) {
  await handleGoogleCallback(searchParams.code || null);
  return null;
}
