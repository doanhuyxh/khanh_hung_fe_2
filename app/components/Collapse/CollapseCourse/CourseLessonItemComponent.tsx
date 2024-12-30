'use client';

import Image from "next/image";
import { LessonData } from "@/app/libs/types";

interface CourseItemComponentProps {
    item: LessonData;
}

const CourseLessonItemComponent = ({ item }: CourseItemComponentProps) => {

    const handleClick = () => {
        window.location.href = `/study/${item.slug}`
    };

    const currentUrl = new URL(window.location.href);
    const lastSegment = currentUrl.pathname.split('/').filter(Boolean).pop();
    const isActive = lastSegment?.toLowerCase() == item.slug.toLowerCase();


    return (
        <div
            id={item.slug}
            className={`group flex items-start cursor-pointer rounded-md lg:hover:bg-hover-primary p-3 mb-4 ${isActive ? "bg-hover-primary" : ""}`}
            onClick={handleClick}>
            <div className="max-w-[152px] w-full border border-none rounded-lg overflow-hidden">
                {item.imageThumbnail && <Image
                    src={item.imageThumbnail}
                    alt={item.name}
                    width={152}
                    height={90}
                    className="img_preview_md"
                />}
                {!item.imageThumbnail && <div className="w-[152px] h-[92px]"></div>}
            </div>
            <div className="flex-grow flex flex-col gap-3 px-2 text-[1rem] md:text-[12px] lg:text-xl 2xl:text-2xl">
                <h3 className={`font-bold mb-2 text-black lg:group-hover:text-white group-hover:opacity-100 ${isActive ? "text-white" : ""}`}>
                    {item.name}
                </h3>
                <div
                    className={`flex justify-between text-[0.8rem] lg:text-xs text-gray-500 lg:group-hover:text-white ${isActive ? "text-white" : ""}`}>
                    <p className="flex gap-2">
                        {item.isOutstanding && (
                            <span
                                className="font-bold text-white bg-color-secondary px-2 py-1 lg:p-3 rounded-lg flex lg:gap-2 text-nowrap text_mobile">
                                <span className="m-auto hidden lg:block d-none">
                                    <Image
                                        src="/assets/images/ic-tag-important.svg"
                                        width={10}
                                        height={10}
                                        alt=""
                                    />
                                </span>
                                Nổi bật
                            </span>
                        )}
                        {!item.isImportant && (
                            <span
                                className="font-bold text-[1rem] lg:text-xl text-white bg-orange-500 px-2 py-1  rounded-lg flex lg:gap-2 text-nowrap">
                                <span className="m-auto hidden lg:block d-none">
                                    <Image
                                        src="/assets/images/ic-tag-important.svg"
                                        width={10}
                                        height={10}
                                        alt=""
                                    />
                                </span>
                                Quan trọng
                            </span>
                        )}

                        {item.isFree &&
                            <span className="font-bold text-white bg-green-800 px-2 py-1 lg:p-3 rounded-lg flex lg:gap-2 text_mobile">
                                <span className="m-auto hidden lg:block d-none">
                                    <Image
                                        src="/assets/images/ic-tag-free.svg"
                                        width={10}
                                        height={10}
                                        alt=""
                                    />
                                </span>
                                Free
                            </span>
                        }
                    </p>
                    <p className="flex justify-center flex-row items-center align-middle gap-1 text_mobile">
                        <span className="m-">
                            <Image
                                src="/assets/images/ic-clock.svg"
                                width={18}
                                height={18}
                                alt=""
                                className="hover:text-white"
                            />
                        </span>
                        <span className="font-bold m-auto text-nowrap text-[1.1rem] lg:text-xl">{item.duration}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CourseLessonItemComponent;
