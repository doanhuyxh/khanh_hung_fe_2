import { useEffect, useState } from "react"
import LoadingVideo from "@/app/components/Loading/LoadingVideo"

export default function PdfView({ pdfSrc }: { pdfSrc: string }) {
    const [pdfLink, setPdfLink] = useState(pdfSrc)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setPdfLink(pdfSrc)
        }
    }, [pdfSrc])

    return (
        <>
            {pdfLink && (<iframe src={pdfLink} width="100%" height="100%" style={{ minHeight: "70vh" }}></iframe>)}
            {!pdfLink && (<div className="w-full min-h-[35vh] lg:min-h-[60vh] flex flex-1 bg-[#380b42]">
                <LoadingVideo />
            </div>)}
        </>
    )
}