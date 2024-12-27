import Image from "next/image";

const HeaderContact = () => (
  <div className="header_top_contact">
    <div className="header_top_contact_hotline">
      <span>
        <Image
          src="/assets/images/header/icon-hostline.png"
          alt="phone"
          width={17}
          height={17}
        />
      </span>
      <span>Hỗ trợ kỹ thuật</span>
      <span>
        <Image
          src="/assets/images/header/icon-info.png"
          alt="info"
          width={17}
          height={17}
        />
      </span>
    </div>

    <div className="header_top_contact_download_app">
      <a href="">
        <span>
          <Image
            src="/assets/images/header/icon-down.png"
            alt="download"
            width={16}
            height={16}
          />
        </span>
        <span>Tải App mobile</span>
      </a>
    </div>
  </div>
);

export default HeaderContact;
