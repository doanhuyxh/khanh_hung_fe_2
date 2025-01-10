import React, { useEffect, useState } from "react";

const Description: React.FC = () => {
    const [htmlContent, setHtmlContent] = useState<string>("");
    
    useEffect(() => {

    }, [])

    return (
        <div className="p-4 flex-1 overflow-y-auto">
            <div
                className="text-black text-3xl"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
            ></div>
        </div>
    );
};

export default Description;
