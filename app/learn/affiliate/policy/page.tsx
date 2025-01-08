'use client'

import Sidebar from "@/app/components/Sidebar/Customer";
import axiosCustomerConfig from "@/app/libs/configs/axiosCustomerConfig";
import { useEffect, useState } from "react";

export default function AffiliatePolicy() {
    const [value, setValue] = useState('');

    useEffect(() => {
        axiosCustomerConfig.get('/web_config/get-data?key=affiliate_policy')
            .then((res) => {
                setValue(res.data.value)
            })
    }, [])

    return (
        <div className="container mt-10 lg:mt-20 max-w-[1600px] overflow-hidden px-10 bg-white">
            <div dangerouslySetInnerHTML={{ __html: value }} />
        </div>

    )
}