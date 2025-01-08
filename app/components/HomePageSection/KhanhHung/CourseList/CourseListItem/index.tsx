import { LessonData } from "@/app/libs/types";


const CourseItem = ({ lesson }: { lesson: LessonData }) => {
    return (
        <div className="flex items-center flex-col lg:flex-row  rounded-lg overflow-hidden cursor-pointer transition-all">
            <div
                className="relative w-[180px] h-[96px] min-w-[96px] bg-[#69398F]"
                style={{
                    backgroundImage: `url(${lesson.imageThumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {lesson.isOutstanding && (
                    <span className="absolute top-[8px] left-[8px] bg-[#ef4444] text-white text-[12px] px-[8px] py-[4px] rounded">
                        Nổi bật
                    </span>
                )}
                <span className="absolute bottom-[8px] right-[8px] bg-black/50 text-white text-[20px] px-[8px] py-[4px] rounded">
                    {lesson.duration}
                </span>
            </div>

            <div className="p-[16px] flex-1">
                <h3 className="text-white text-[1.8rem] line-clamp-2 leading-relaxed hover:text-[#f41e92] font-[600]">
                    {lesson.name}
                </h3>
            </div>
        </div>
    );
};

export default CourseItem