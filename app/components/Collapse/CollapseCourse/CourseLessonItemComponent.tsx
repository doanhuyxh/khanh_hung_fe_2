'use client';

import Image from "next/image";
import {LessonData} from "@/app/libs/types";

import {useRouter, useSearchParams} from "next/navigation";


interface CourseItemComponentProps {
    item: LessonData;
}

const CourseLessonItemComponent = ({item}: CourseItemComponentProps) => {
    const router = useRouter();
    const query = useSearchParams();

    const handleClick = () => {
        router.push(`/learn/study?lesson=${item.id}`);
    };
    const isActive = query.get("lesson") == item.id;

    return (
        <div
            className={`group flex items-center cursor-pointer rounded-md lg:hover:bg-hover-primary p-3 mb-4 ${isActive ? "bg-hover-primary" : ""}`}
            onClick={handleClick}>
            <div className="w-auto border border-none rounded-md overflow-hidden">
                {item.imageThumbnail && <Image
                    src={item.imageThumbnail}
                    alt={item.name}
                    width={152}
                    height={90}
                />}
                {!item.imageThumbnail && <div className="w-[152px] h-[92px]"></div>}
            </div>
            <div className="w-3/4 flex flex-col gap-3 px-2 text-[1.2rem]  lg:text-xl">
                <h3 className={`font-bold mb-2 text-black lg:group-hover:text-white group-hover:opacity-100 ${isActive ? "text-white" : ""}`}>
                    {item.name}
                </h3>
                <div
                    className={`flex justify-between text-[0.8rem] lg:text-xs text-gray-500 lg:group-hover:text-white ${isActive ? "text-white" : ""}`}>
                    <p className="flex gap-2">
                        {item.isFree && (
                            <span
                                className="font-bold text-white bg-color-secondary p-2 lg:p-3 rounded-lg flex lg:gap-2 text-nowrap">
                <span className="m-auto hidden lg:block">
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
                                className="font-bold text-white bg-orange-500 p-2 lg:p-3 rounded-lg flex lg:gap-2 text-nowrap">
                <span className="m-auto hidden lg:block">
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
                            <span className="font-bold text-white bg-green-800 p-2 lg:p-3 rounded-lg flex lg:gap-2">
              <span className="m-auto hidden lg:block">
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
                    <p className="flex justify-items-center align-middle gap-1 lg:gap-0">
            <span className="m-auto">
              <Image
                  src="/assets/images/ic-clock.svg"
                  width={20}
                  height={20}
                  alt=""
                  className="hover:text-white"
              />
            </span>
                        <span className="font-bold m-auto text-[1rem] lg:text-xl">{item.duration}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CourseLessonItemComponent;
