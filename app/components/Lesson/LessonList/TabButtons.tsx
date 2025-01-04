import React from "react";
import Image from "next/image";

interface TabButtonsProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const TabButtons: React.FC<TabButtonsProps> = ({ activeTab, setActiveTab }) => {
    return (
        <div className="my-4">
            <div className="flex justify-around border-t pt-5">
                <button
                    className="px-5 py-3 rounded-lg flex gap-2 cursor-pointer"
                    onClick={() => setActiveTab("course")}
                >
                    <span>
                        <Image
                            src="/assets/images/study-nav-ic-3.svg"
                            width={20}
                            height={20}
                            alt="Danh mục"
                        />
                    </span>
                    <span
                        className={`$activeTab === "course" ? "text-color-primary" : "text-black-200"} cursor-pointer`}
                    >
                        Danh mục
                    </span>
                </button>
                <button
                    className="px-5 py-3 rounded-lg cursor-pointer"
                    onClick={() => setActiveTab("description")}
                >
                    <span
                        className={`${activeTab === "description" ? "text-color-primary" : "text-black-200"} cursor-pointer`}
                    >
                        Mô tả
                    </span>
                </button>
            </div>
        </div>
    );
};

export default TabButtons;
