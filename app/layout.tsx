import { Metadata, Viewport } from 'next';
import Head from 'next/head'
import { Toaster } from 'react-hot-toast';
import "./_styles/global.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Link from 'next/link';

const baseURL = process.env.API_URL;
const time = new Date().getSeconds();
export const metadata: Metadata = {
  icons: [
    {
      rel: 'icon',
      href: `${baseURL}/api/v1/public/get-web-config-key?key=favicon&time=${time}`,
      sizes: '32x32',
      url: `${baseURL}/api/v1/public/get-web-config-key?key=favicon&time=${time}`,
    },
    {
      rel: 'icon',
      href: `${baseURL}/api/v1/public/get-web-config-key?key=favicon&time=${time}`,
      sizes: '64x64',
      url: `${baseURL}/api/v1/public/get-web-config-key?key=favicon&time=${time}`,
    },
    {
      rel: 'icon',
      href: `${baseURL}/api/v1/public/get-web-config-key?key=favicon&time=${time}`,
      sizes: '128x128',
      url: `${baseURL}/api/v1/public/get-web-config-key?key=favicon&time=${time}`,
    },
  ]
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 1.0,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="vi">
      <Head>
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
        />
        <Link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"/>
      </Head>
      <body className='sidebar-expanded'>
        <AntdRegistry>{children}</AntdRegistry>
        <Toaster />
      </body>
    </html>
  );
}
