'use client'

import { useEffect } from "react";
import axiosInstance from "@/app/libs/configs/axiosAdminConfig";

export default function Dashboard() {


    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        Dashboard
                    </h4>
                </div>
            </div>
        </div>
    )
}