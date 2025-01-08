'use client';
import '../styles/borntowrite.css'

import {useState} from "react";
import 'flowbite';

export default function ComponentFeature({data}) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className="border-2 border-white max-w-[870px]">
            {data.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                    <div key={index} className="border-b-2 border-white">
                        <button
                            onClick={() => handleToggle(index)}
                            className={`block px-10 py-3 w-full border-b-2 text-left text-3xl cursor-pointer font-bold ${activeIndex == index ? "text-[#53E72C]" : "text-white"}`}>
                            {activeIndex != index &&<i className="fas fa-plus"></i>}
                            {activeIndex == index &&<i className="fas fa-minus text-[#53E72C]"></i>}
                            {" "} {item.title}
                        </button>
                        <div
                            className={`transition-all overflow-hidden border-white ${
                                isActive ? "min-h-[200px]" : "max-h-0"
                            }`}
                            style={{maxHeight: isActive ? "1000px" : "0"}}
                        >
                            {item.content.map((content, idx) => (
                                <p key={idx} className="p-4 text-white text-3xl">{content}</p>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
