import { Metadata } from 'next';
import fetchData from '@/app/libs/configs/fetchDataServer'
import "./styles/global.css";
import { Toaster } from 'react-hot-toast';
import { Seo } from './libs/types';


export async function generateMetadata(): Promise<Metadata> {
  const metadata: Metadata = {}
  const response = await fetchData(`/public/seo`, '')
  if (response.code !== 200) {
    return metadata;
  }
  const res_data = response.data
  const data:Seo = JSON.parse(res_data)
  console.log("data seo:: ", data.favicon)
 
  return {
    viewport: 'initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width',
    icons: {
      icon: data.favicon || ''
    },
    title: data.title || '',
    description: data.description || '',
    keywords: data.keywords || '',
    openGraph: {
      url: data.domain || 'http://vuacontent.vn',
      title: data.title || '',
      description: data.description || '',
      siteName: data.domain || '',
      images: [
        {
          url: data.OgImage || '',
          width: 1200,
          height: 630,
        },
      ],
      locale: data.locale || '',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: {
      card: 'summary_large_image',
      site: data.twitterSite || '',
      title: data.title || '',
      description: data.description || '',
      images: [data.twitterImage || ''],
    },
    alternates: {
      canonical: data.domain || '',
      languages: {
        vi: data.domain || '',
        en: data.domain || '',
      },
    },
  };
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="vi">
      <body className='sidebar-expanded'>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
