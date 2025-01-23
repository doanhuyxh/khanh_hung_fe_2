import { Metadata, Viewport } from 'next';
import { Toaster } from 'react-hot-toast';
import "./_styles/global.css";

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
      <body className='sidebar-expanded'>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
