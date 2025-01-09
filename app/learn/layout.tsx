import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/Header/CustomerKhanhHung"));
import "../styles/study.scss";

import Sidebar from "@/app/components/Sidebar/Customer";

export default async function LearnLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Header/>
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
