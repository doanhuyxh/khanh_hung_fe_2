import React from "react";

export default function ScriptItem({name, time, isActive}: { name: string, time: string, isActive: boolean }) {


    return (
        <div className=" bg-white rounded px-4 py-1 flex flex-col gap-1">
            <span className="mb-3 font-bold">{name}</span>
            <div className="mb-2 flex flex-wrap gap-2">
                <span className={`mx-1 flex justify-center items-center align-middle px-2 gap-1 rounded text-white ${isActive ? "bg-green-700" :"bg-red-600"}`}>
                    <i className="fa-solid fa-clock"></i>
                    <span>{time}</span>
                </span>
                <span className="mx-1 text-blue-600">
                    <i className="fa-solid fa-pen-to-square"></i>
                </span>
                <span className="mx-1 text-danger">
                    ⏰<i className="fa-solid fa-trash"></i>
                </span>
            </div>
        </div>
    )
}