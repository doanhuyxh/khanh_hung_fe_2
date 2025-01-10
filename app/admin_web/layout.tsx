'use client';

import { useRouter, usePathname  } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AdminSideBar } from '../_components/Sidebar';
import AdminHeader from '../_components/Header/AdminWeb';
import '../_styles/admin_web.css';
import Loading from '@/app/_components/Loading';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const userJson = localStorage.getItem("user") ?? "{}";
    const userExists = userJson !== "{}";

    if (!userExists) {
      router.push('/admin_web/auth/login');
    }
  }, [pathname, router]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loading />
  }

  if (pathname.includes("admin_web/auth")) {
    return (
      <>
        {children}
      </>
    )
  }

  return (
    <div className="bg-gray-200">
      <div className='flex h-screen overflow-hidden'>
        <AdminSideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <AdminHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="">
            <div className="mx-auto p-4 md:p-6 2xl:p-10 ">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
