
import Image from "next/image";
import ScrollComponent from "../../Scroll/ScrollComponent";
import CourseItem from "./CourseListItem";

const CourseList = () => {
  const courses = [
    {
      title: "Cơ hội thật sự của chuyên gia trong thời đại sáo rỗng!",
      duration: "01:08:53",
      isHot: true,
      time: "06:04"
    },
    {
      title: `Không hề có khóa học "đáng tin cậy" nào trong lãnh vực của đồng nghiệp`,
      duration: "07:14",
      isHot: true,
      time: "07:14"
    },
    {
      title: "Hãy stick với mô hình Elearning và 4 bước chúng ta sẽ triển khai để nhận về tối đa lợi ích",
      duration: "08:31",
      time: "08:31"
    },
    {
      title: "Case Study siêu đỉnh của Đồng Nghiệp Tuấn Lê 3 tỷ sau 3 tháng",
      duration: "09:36",
      time: "09:36"
    },
    {
      title: "Case Study siêu đỉnh của Đồng Nghiệp Tuấn Lê 3 tỷ sau 3 tháng",
      duration: "09:36",
      time: "09:36"
    },
    {
      title: "Case Study siêu đỉnh của Đồng Nghiệp Tuấn Lê 3 tỷ sau 3 tháng",
      duration: "09:36",
      time: "09:36"
    }
  ];

  return (
    <div id='chuong-trinh-hoc' className="bg-[#440873] py-30 hidden lg:block">
      <div className='w-full max-w-[1920px] m-auto px-4 flex flex-col items-center justify-center gap-20'>
        <div className='w-full text-center'>
          <h2 className='text-4xl md:text-5xl font-bold text-white inline-flex justify-center items-center gap-4 flex-wrap'>
            KHÓA HỌC NÀY
            <div className='flex gap-2 items-end'>
              <span className='text-pink-500'>đã bao gồm</span>
              <span className='text-pink-500 text-6xl md:text-7xl font-bold'>213</span>
              <span className='text-pink-500'>bài học</span>
              <span className='inline-block ml-2'>
                <Image
                  src="/assets/images/ic-gal-vid.png"
                  width={40}
                  height={40}
                  alt="play icon"
                />
              </span>
            </div>
          </h2>
        </div>

        <div className='w-full lg:w-10/12 m-auto'>
          <ScrollComponent direction='horizontal' className='flex'>
            {Array.from({ length: 6 }, (_, index) => (
              <div className="lg:max-w-[600px] min-h-[800px] lg:min-w-[600px] bg-[#69398F] p-[20px] rounded-[25.6px] mx-[20px]" key={index}>
                <div className="mb-[24px]">
                  <h2 className="text-4xl font-bold text-white mb-[12px] line-clamp-2 leading-relaxed">
                    TIỀM NĂNG CỰC KÌ LỚN CỦA MÔ HÌNH DẠY BẰNG BỘ VIDEO
                  </h2>
                  <p className="inline-block text-[#d1d5db] text-[20px] px-[12px] py-[8px] bg-black/20 rounded-lg">
                    Số lượng bài: 7 bài | Thời lượng: 01:08:53
                  </p>
                </div>
                <div className="space-y-[16px] overflow-y-auto pr-[8px] max-h-[calc(800px-250px)] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 hover:scrollbar-thumb-white/40">
                  {courses.map((course, index) => (
                    <CourseItem key={index} {...course} />
                  ))}
                </div>
              </div>
            ))}
          </ScrollComponent>

        </div>
      </div>
    </div>

  );
};

export default CourseList; 