import { ChangeEventHandler, useCallback, useEffect, useState } from "react";
import Image from "next/image";

export default function FileUploadImage({ onChange, value, index }: { onChange: ChangeEventHandler<HTMLInputElement>; value: string; index: number }) {

    const [file, setFile] = useState<File>();
    const [preview, setPreview] = useState<string>();

    const UploadFileToServer = useCallback(async () => {

        const formData = new FormData()
        formData.append("file", file)
        const res_fetch = await fetch(process.env.API_URL +"/api/v1/upload/image", {
            method:"POST",
            body:formData
        })
        const res_data = await res_fetch.json()
        onChange(res_data.data)
    }, [file])

    useEffect(() => {
        if (file) {
            const blobUrl = URL.createObjectURL(file);
            setPreview(blobUrl);
            UploadFileToServer()
            return () => URL.revokeObjectURL(blobUrl);
        }
    }, [file, UploadFileToServer])

    useEffect(() => {
        setPreview(value)
    }, [value])

    return <div className="w-full h-fit">
        <input
            onChange={(e) => {
                const uploadedFile = e.target.files?.[0];
                if (uploadedFile) {
                    setFile(uploadedFile);
                }
            }}
            type="file"
            id={`fileUpload_${index}`}
            className="hidden" />
        <div className="w-full h-auto rounded-md p-2">
            {preview && <Image src={preview || ""} alt="preview" width={200} height={200} className="h-auto" />}
        </div>
    </div>;
}
