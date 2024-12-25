import dynamic from "next/dynamic";

const CollapseCourse = dynamic(() => import("./CollapseCourse"), { ssr: false });

export {
    CollapseCourse
};
