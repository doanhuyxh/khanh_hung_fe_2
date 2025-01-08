import dynamic from "next/dynamic";

import Header from '../components/Header/CustomerBorntowrite'

import "../styles/study.scss";


export default async function LearnLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Header pathname={"khoa-hoc"} />
      <div className="w-full h-4 hidden lg:block bg-black-2"></div>
      <div className="w-full min-h-[70vh] h-screen overflow-x-auto bg-[#fbac3d] bg-opacity-20">
        {children}
      </div>
    </>
  );
}
