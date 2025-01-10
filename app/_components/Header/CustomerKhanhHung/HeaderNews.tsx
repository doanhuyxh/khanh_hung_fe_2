'use client';

import axiosCustomerConfig from "@/app/_libs/configs/axiosCustomerConfig";
import React, { useEffect, useState } from "react";

const HeaderNews = () => {

    const [news, setNew] = useState("")

    useEffect(()=>{
        axiosCustomerConfig.get("/public/get-banner-header")
        .then(res=>{
            setNew(res.data)
        })
    },[])
    
    return (
        <div className="header_top_news scrolling-text max-w-[1920px] m-auto">
            <p className="">
                {news}
            </p>

        </div>
    )
}

export default HeaderNews;
