import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/Headers/Customer"), {
  ssr: true
});
import "../styles/study.scss";


export default async function LearnLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Header />
      <div className="w-full min-h-[70vh] overflow-auto">
        {children}
      </div>
    </>
  );
}
