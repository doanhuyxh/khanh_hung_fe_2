import type { Metadata } from 'next'
import fetchData from '@/app/_libs/configs/fetchDataServer';
import dynamic from "next/dynamic";
import TrackingSeo from "../_components/TrackingSeo";
const Header = dynamic(() => import("../_components/Header/CustomerKhanhHung"));
import Sidebar from "@/app/_components/Sidebar/Customer";
import "../_styles/study.css";


const response = await fetchData('/public/seo', '');
const data = JSON.parse(response.data);
export const metadata: Metadata = {
    title:data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
        type: 'website',
        url: data.url,
        title: data.title,
        description: data.description,
        images: [
            {
                url: data.logo,
                width: 800,
                height: 600,
                alt: data.title,
            },
        ],
    },
    twitter: {
        title: data.title,
        description: data.description,
        card: 'summary_large_image',
        images:[
            {
                url: data.logo,
                alt: data.title,
            }
        ]
    },
}


export default async function LearnLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <TrackingSeo />
      <Header />
      <div className="w-full flex flex-row">
        <div className="hidden lg:block h-[100vh]">
          <Sidebar />
        </div>
        <div className="w-full min-h-[70vh] max-h-[100vh] ">
          {children}
        </div>
      </div>
    </>
  );
}
