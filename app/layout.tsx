import { Metadata } from 'next';
import fetchData from '@/app/_libs/configs/fetchDataServer'
import { Toaster } from 'react-hot-toast';
import { Seo } from './_libs/types';
import "./_styles/global.css";

export async function generateMetadata(): Promise<Metadata> {
  const metadata: Metadata = {}
  const response = await fetchData(`/public/seo`, '')
  if (response.code !== 200) {
    return metadata;
  }
  const res_data = response.data
  const data:Seo = JSON.parse(res_data)
 
  return {
    viewport: 'initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width',
    icons: {
      icon: data.favicon || ''
    },
    title: data.title || '',
    description: data.description || '',
    keywords: data.keywords || '',
    robots: data.robots || '',
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
