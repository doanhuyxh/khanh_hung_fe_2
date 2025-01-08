import dynamic from "next/dynamic";
import Header from "@/app/components/Header/CustomerBorntowrite";
import "../styles/study.scss";

import Sidebar from "@/app/components/Sidebar/Customer";

export default async function LearnLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Header pathname={""}/>
      <div className="w-full flex flex-row">
        <div className="hidden lg:block h-[100vh]">
          <Sidebar />
        </div>
        <div className="w-full min-h-[70vh] max-h-[100vh]  bg-[#fbac3d] bg-opacity-10">
          {children}
        </div>
      </div>
    </>
  );
}
