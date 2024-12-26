'use client';

import { useState } from "react";
import CollapseHeader from "./CollapseHeader";
import CourseLessonItemComponent from "./CourseLessonItemComponent";
import "./index.css";
import { CollapseCourseProps } from "@/app/libs/types";


export default function CollapseCourse({
  title,
  numberOfLessons,
  totalTimeDuration,
  data
}: CollapseCourseProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`w-full lg:w-11/12 lg:m-auto collapseContainer`}>
      <CollapseHeader
        title={title}
        numberVideo={numberOfLessons}
        timeDuration={totalTimeDuration}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden bg-gray-100 rounded-2xl ${isOpen ? "h-auto mt-2" : "mb-4 max-h-0"}`}
        style={{ transitionProperty: "max-height" }}
      >
        <div className="p-4">
          {data.map((item, index) => (
            <CourseLessonItemComponent key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
