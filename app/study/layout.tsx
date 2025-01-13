import dynamic from "next/dynamic";
const Header = dynamic(() => import("../_components/Header/CustomerKhanhHung"));
import "../_styles/study.css";

export default async function LearnLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Header/>
      <div className="w-full min-h-[70vh] h-screen overflow-x-auto">
        {children}
      </div>
    </>
  );
}
