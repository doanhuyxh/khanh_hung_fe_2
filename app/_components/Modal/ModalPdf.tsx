import React from 'react';

interface ModalScrollProps {
    isOpen: boolean,
    onClose: () => void,
    title: string,
    pdfLink: string,
}

export default function ModalViewPDF({isOpen, onClose, title, pdfLink}: ModalScrollProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed w-screen h-screen inset-0 overflow-y-auto" style={{zIndex: 1000}}>
            <div className="flex items-start justify-center min-h-screen">
                <div className="fixed inset-0 bg-black opacity-50" onClick={() => {
                    onClose()
                }}></div>
                <div
                    className="relative bg-white rounded-lg shadow-xl w-10/12 lg:w-[60%]  mt-[5vh] lg:mt-[5vh] overflow-hidden"
                >
                    <div
                        className="sticky top-0 bg-white shadow p-4 z-10"
                        style={{borderBottom: "1px solid #ddd"}}
                    >
                        <h2 className="text-left lg:text-2xl font-bold w-10/12" style={{color: "#1f1f1f"}}>
                            {title} <br/>
                            <span className="text-lg text-gray-500"></span>
                        </h2>
                        <button
                            className="animate-spin animate-infinite animate-ease-linear absolute top-0 right-0 mx-2 my-0 px-3 py-2 rounded-xl hover:text-red-500 text-3xl font-thin scale-150 opacity-55"
                            onClick={onClose}>
                            x
                        </button>
                    </div>
                    <iframe src={pdfLink} width="100%" height="100%" style={{minHeight: "80vh"}}></iframe>
                </div>
            </div>
        </div>
    );
}
