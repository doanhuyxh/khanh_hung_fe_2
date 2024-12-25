import React from 'react';
import Image from 'next/image';

interface LessonItemProps {
    item: any; // Có thể thay đổi thành kiểu dữ liệu phù hợp với bạn
    toggleLessonContent: (id: string) => void;
    toggleLessonVideo: (id: string) => void;
    HandleCreateOrUpdateLesson: (id: string) => void;
    HandleDeleteLesson: (id: string) => void;
}

const LessonItemAdmin: React.FC<LessonItemProps> = ({
    item,
    toggleLessonContent,
    toggleLessonVideo,
    HandleCreateOrUpdateLesson,
    HandleDeleteLesson,
}) => {
    return (
        <div className='w-full flex justify-between items-center gap-4 shadow-lg px-4 py-5 mb-6 rounded-lg'>
            <div className='flex gap-5 justify-center items-center'>
                <div className='max-w-[200px] h-[100px]'>
                    {item.imageThumbnail && (
                        <Image
                            src={item.imageThumbnail || ""}
                        alt={item.name || ""}
                        width={200}
                        height={200}
                        loading='lazy'
                        style={{ width: '100%', height: 'auto' }}
                        />
                    )}
                </div>
                <div className='max-w-[200px] h-[100px] flex items-center justify-center cursor-pointer'>
                    {item.video && (
                        <span
                        onClick={() => toggleLessonVideo(item.id)}
                        className='text-sm text-blue-500 hover:text-red-500'>
                            <i className="fa-solid fa-video"></i>
                        </span>
                    )}
                </div>
                <div>
                    <p className='text-xl font-bold'>Bài học: {item.name || ""}</p>
                    <span className='text-sm'>Thời lượng: {item.duration || ""}</span>

                    <div className='flex gap-2'>
                        <span className="font-semibold text-lg">Nội dung:</span>
                        <button 
                            className="text-blue-500 underline"
                            onClick={() => toggleLessonContent(item.id)}>
                            Xem
                        </button>
                        
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => HandleCreateOrUpdateLesson(item.id)}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button className='bg-red-500 text-white px-4 py-2 rounded-md' onClick={() => HandleDeleteLesson(item.id)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default LessonItemAdmin;
