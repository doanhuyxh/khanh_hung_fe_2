import dynamic from "next/dynamic";
import HeaderNews from "./HeaderNews";
import HeaderContact from "./HeaderContact";
import './index.scss';

const HeaderBottom = dynamic(() => import("./HeaderBottom"), {
  ssr: true,
  loading: () => <></>,
});

const Header = async () => {
  try {
    return (
      <header className="header">
        <div className="header_top ">
          <HeaderNews />
          <HeaderContact />
        </div>
        <HeaderBottom />
      </header>
    );
  } catch (error) {
    console.error("Error fetching user data:", error);
    return <></>;
  }
};

export default Header;
