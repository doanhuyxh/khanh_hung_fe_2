
interface CourseItemProps {
    title: string;
    duration: string;
    isHot?: boolean;
    time: string;
}


const CourseItem = ({ title, isHot = false, time }: CourseItemProps) => {
    return (
        <div className="flex items-center flex-col lg:flex-row  rounded-lg overflow-hidden cursor-pointer hover:bg-[#4a1c7d] transition-all">
            <div
                className="relative w-[180px] h-[96px] min-w-[96px] bg-[#69398F]"
                style={{
                    backgroundImage: `url('/assets/images/co-hoi-cua-chuyen-gia.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {isHot && (
                    <span className="absolute top-[8px] left-[8px] bg-[#ef4444] text-white text-[12px] px-[8px] py-[4px] rounded">
                        Nổi bật
                    </span>
                )}
                <span className="absolute bottom-[8px] right-[8px] bg-black/50 text-white text-[20px] px-[8px] py-[4px] rounded">
                    {time}
                </span>
            </div>

            <div className="p-[16px] flex-1">
                <h3 className="text-white text-[20px] line-clamp-2 leading-relaxed">
                    {title}
                </h3>
            </div>
        </div>
    );
};

export default CourseItem