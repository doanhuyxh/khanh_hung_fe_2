'use client';

import { useState } from "react";
import dynamic from "next/dynamic";
import { useSearchParams, useRouter } from "next/navigation";


const Script = dynamic(() => import("./_script"), { ssr: false });
const Template = dynamic(() => import("./_template"), { ssr: false });
const Emails = dynamic(() => import("./_email"), { ssr: false });

const FormSchedulingEmails = dynamic(() => import("./_components/form-scheduling-emails"), { ssr: false });
const FormScript = dynamic(() => import("./_components/form-script"), { ssr: false });

export default function AutoMailMarketing() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query_tab = searchParams.get("tab");

    const [isShowAddEmail, setIsShowAddEmail] = useState(false);
    const [isShowAddScript, setIsShowAddScript] = useState(false);

    const updateQuery = (newTabValue: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("tab", newTabValue);
        router.push(`?${params.toString()}`);
        setTab(newTabValue);
    };

    const [tab, setTab] = useState(query_tab || "script");

    return (
        <div className="w-full">
            <div className="flex flex-row flex-wrap justify-between bg-white px-3 py-2 rounded w-11/12">
                <div className="flex flex-row flex-wrap gap-4">
                    <button
                        onClick={() => updateQuery("script")}
                        className={`px-3 py-1 ${tab === "script" ? "bg-blue-500 text-white rounded" : ""}`}
                    >
                        Kịch bản
                    </button>
                    <button
                        onClick={() => updateQuery("email")}
                        className={`px-3 py-1 ${tab === "email" ? "bg-blue-500 text-white rounded" : ""}`}
                    >
                        Email
                    </button>
                    <button
                        onClick={() => updateQuery("template")}
                        className={`px-3 py-1 ${tab === "template" ? "bg-blue-500 text-white rounded" : ""}`}
                    >
                        Mẫu
                    </button>
                    <button
                        onClick={() => updateQuery("report")}
                        className={`px-3 py-1 ${tab === "report" ? "bg-blue-500 text-white rounded" : ""}`}
                    >
                        Báo cáo
                    </button>
                </div>
                <div>
                    {tab === "email" && <button
                        onClick={() => setIsShowAddEmail(true)}
                        className="px-3 py-1 bg-green-500 text-white rounded"
                    >
                        Thêm email
                    </button>}

                    {tab === "script" && <button
                        onClick={() => setIsShowAddScript(true)}
                        className="px-3 py-1 bg-green-500 text-white rounded"
                    >
                        Thêm kịch bản
                    </button>}
                </div>
            </div>

            <div className="my-10 w-11/12 p-5 rounded">
                {tab === "script" && <Script />}
                {tab === "email" && <Emails />}
                {tab === "template" && <Template />}
                {tab === "report" && <div>Báo cáo</div>}
            </div>

            <FormSchedulingEmails
                visible={isShowAddEmail}
                onClose={() => setIsShowAddEmail(false)}
            />
            
            <FormScript
                open={isShowAddScript}
                onClose={() => setIsShowAddScript(false)}
            />

        </div>
    );
}
