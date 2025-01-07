import { useState, useEffect } from "react";
import toast from "react-hot-toast";

interface FileUploadPDFProps {
    initialLink: string;
    onChange: (value: string) => void;
}

export default function FileUploadPDF({ initialLink, onChange }: FileUploadPDFProps) {
    const [file, setFile] = useState<File | null>(null);
    const [previewLink, setPreviewLink] = useState<string>(initialLink);
    const [isUploading, setIsUploading] = useState(false);


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = event.target.files?.[0];
        if (uploadedFile && uploadedFile.type === "application/pdf") {
            setFile(uploadedFile);
            const fileURL = URL.createObjectURL(uploadedFile);
            setPreviewLink(fileURL);
            onChange(fileURL);
        } else {
            alert("Please upload a valid PDF file.");
        }
    };

    const handleUpLoad = () => {
        const formData = new FormData();
        formData.append("file", file!);
        setIsUploading(true)
        fetch(`${process.env.API_URL}/api/v1/upload/pdf`, {
            method: "POST",
            body: formData
        }).then(res => res.json()).then(res => {
            onChange(res.data)
            setIsUploading(false)
            toast.success('Upload thành công thành công', {
                duration: 1000,
                position: "top-right",
                style: {
                    background: "#4ade80",
                },
            })
        })

    };

    useEffect(() => {
        if (initialLink) {
            setPreviewLink(initialLink);
        }
    }, [initialLink]);

    return (
        <div>
            <div>
                <div
                    className="w-full flex justify-between items-center">
                    <label htmlFor="file_input" className="text-red-500 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-300">Chọn file PDF <i className="fa-regular fa-file-pdf"></i></label>
                    <span
                        onClick={handleUpLoad}
                        className="bg-green-500 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-300 text-white">
                        {isUploading ? <i className="fa-solid fa-spinner"></i> : <i className="fa-solid fa-floppy-disk"></i>}
                        {" "} Tải PDF
                    </span>
                </div>
                <input
                    style={{ display: "none" }}
                    accept="application/pdf"
                    onChange={handleFileChange}
                    id="file_input" type="file" />

            </div>
            {previewLink && (
                <div>
                    <p>Preview:</p>
                    <iframe
                        src={previewLink}
                        title="PDF Preview"
                        style={{ width: "100%", height: "500px" }}
                    />
                </div>
            )}
        </div>
    );
}
