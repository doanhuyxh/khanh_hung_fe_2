import React from 'react';

interface ModalScrollProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}

export default function ModalScroll({ isOpen, onClose, children, title }: ModalScrollProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed w-screen h-screen inset-0 overflow-y-auto" style={{ zIndex: 1000 }}>
            <div className="flex items-start justify-center min-h-screen px-4">
                <div className="fixed inset-0 bg-black opacity-50" onClick={() => {
                    //onClose()
                }}></div>
                <div
                    className="relative bg-white rounded-lg shadow-xl w-full overflow-hidden"
                    style={{
                        width: "52%", // 2/3 màn hình
                        maxHeight: "90vh",
                        marginTop: "1vh",
                    }}
                >
                    <div
                        className="sticky top-0 bg-white shadow p-4 z-10"
                        style={{ borderBottom: "1px solid #ddd" }}
                    >
                        <h2 className="text-center text-lg font-bold w-10/12">{title}</h2>
                        <button className="absolute top-0 right-0 mx-2 my-0 px-3 py-2 rounded-xl hover:text-red-500" onClick={onClose}>
                            x
                        </button>
                    </div>

                    <div className="p-6 overflow-y-auto" style={{ maxHeight: "calc(90vh - 100px)" }}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
