import Header from "../components/Headers/Customer";
import "../styles/study.scss";


export default async function LearnLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Header />
      <>
        {children}
        </>
    </>
  );
}
