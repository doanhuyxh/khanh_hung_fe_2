'use client';

import { useEffect } from "react";
import Loading from "../loading";

export default function PageNews() {

    useEffect(() => {
        window.location.href = "";
    },[]);

    return (
        <Loading />
    );    
}