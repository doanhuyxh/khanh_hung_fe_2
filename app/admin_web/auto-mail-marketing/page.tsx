'use client';

import {useState} from "react";

import Script from "./_script";
import Template from "./_template";

export default function AutoMailMarketing() {
    const [tab, setTab] = useState("script");

    return (
        <div className="w-full m-10">
            <div className="flex flex-row flex-wrap justify-between bg-white px-3 py-2 rounded w-11/12">
                <div className="flex flex-row flex-wrap gap-4">
                    <button
                        onClick={() => setTab("script")}
                        className={`px-3 py-1 ${tab === "script" ? "bg-blue-500 text-white rounded" : ""}`}
                    >
                        Kịch bản
                    </button>
                    <button
                        onClick={() => setTab("email")}
                        className={`px-3 py-1 ${tab === "email" ? "bg-blue-500 text-white rounded" : ""}`}
                    >
                        Email
                    </button>
                    <button
                        onClick={() => setTab("template")}
                        className={`px-3 py-1 ${tab === "template" ? "bg-blue-500 text-white rounded" : ""}`}
                    >
                        Mẫu
                    </button>
                    <button
                        onClick={() => setTab("report")}
                        className={`px-3 py-1 ${tab === "report" ? "bg-blue-500 text-white rounded" : ""}`}
                    >
                        Báo cáo
                    </button>
                </div>

                <div className="flex flex-row gap-4">
                    {
                        tab === "script" && (
                            <button className="px-3 py-2 bg-green-500 text-white rounded">
                                <i className="fas fa-plus mx-1"/>
                                Thêm kịch bản
                            </button>
                        )
                    }
                </div>

            </div>

            <div className="my-10 w-11/12 p-5 rounded">
                {tab === "script" && <Script/>}
                {tab === "email" && <div>Email</div>}
                {tab === "template" && <Template/>}
                {tab === "report" && <div>Báo cáo</div>}
            </div>

        </div>
    );
}
