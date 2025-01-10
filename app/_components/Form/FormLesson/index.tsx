import { ImageUpload, VideoUpload, FileUploadPDF } from "@/app/_components/FileHandle";
import EditorReactQuill from "../../Editor/ReactQuill";
import { LessonItem } from "@/app/_libs/types";
import { generateSlug } from "@/app/_libs/utils";
import { useState } from "react";
import FileUploadImage from "../../FileHandle/FileUploadImage";

export default function FormLesson({ lesson, setLesson, saveLesson }: { lesson: LessonItem, setLesson: any, saveLesson: any }) {

    const [lessonTemp, setLessonTemp] = useState<LessonItem>({ ...lesson })

    const SaveLesson = () => {
        if (JSON.stringify(lesson) !== JSON.stringify(lessonTemp)) {
            saveLesson({ ...lessonTemp });
        } else {
            console.log("Nothing change");
        }
    };


    const handleEditorChangeLessonContent = (content: string) => {
        setLessonTemp({ ...lessonTemp, lessonContent: content });
    };

    const handleCheckboxChange = (field: string, value: boolean) => {
        setLessonTemp({ ...lessonTemp, [field]: value });
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newName = e.target.value;
        setLessonTemp({ ...lessonTemp, name: newName, slug: generateSlug(newName) });
    };

    const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLessonTemp({ ...lessonTemp, slug: e.target.value });
    };

    return (
        <div className="flex flex-col gap-4">

            <div className="flex flex-col">
                <div className="font-bold opacity-65 flex gap-2">
                    Thumbnail (<strong className="text-red-900 font-[400]">1090 * 620</strong>)
                    <label className="bg-green-400 px-2 rounded-lg cursor-pointer" htmlFor="fileUpload_2">
                        <i className="fa fa-upload" />
                    </label>
                </div>
                <FileUploadImage index={2} onChange={(newValue: any) => {
                    setLessonTemp({ ...lessonTemp, imageThumbnail: newValue })
                }} value={lessonTemp.imageThumbnail} />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-semibold">Tên bài học</label>
                <input
                    type="text"
                    className="border border-gray-300 rounded-md p-2"
                    placeholder="Nhập tên bài học"
                    value={lessonTemp.name}
                    onChange={handleNameChange}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-semibold">Slug (phục vụ seo)</label>
                <input
                    type="text"
                    className="border border-gray-300 rounded-md p-2"
                    placeholder="tên bài học, tự động tạo khi nhập tên bài học"
                    value={lessonTemp.slug}
                    onChange={handleSlugChange}
                />
            </div>

            <div className="flex flex-row justify-evenly gap-5 items-center">

                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Loại bài học</label>
                    <div className="flex flex-row gap-3">
                        <label className="cursor-pointer">Video <input type="radio" value={"video"} checked={lessonTemp.type === "video"} onChange={(e) => setLessonTemp({ ...lessonTemp, type: e.target.value })} /></label>
                        <label className="cursor-pointer">PDF <input type="radio" value={"pdf"}  checked={lessonTemp.type === "pdf"} onChange={(e) => setLessonTemp({ ...lessonTemp, type: e.target.value })}/></label>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-semibold">Thời lượng</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-md p-2"
                        placeholder="Nhập thời lượng bài học"
                        value={lessonTemp.duration}
                        onChange={(e) => setLessonTemp({ ...lessonTemp, duration: e.target.value })}
                    />
                </div>

                <div className="flex flex-row justify-between gap-4 items-center">
                    <div className="flex gap-2 items-center  cursor-pointer">
                        <input
                            id="isFree"
                            type="checkbox"
                            checked={lessonTemp.isFree}
                            onChange={(e) => handleCheckboxChange('isFree', e.target.checked)}
                        />
                        <label htmlFor="isFree" className="cursor-pointer">Miễn phí</label>
                    </div>

                    <div className="flex gap-2 items-center  cursor-pointer">
                        <input
                            id="isOutstanding"
                            type="checkbox"
                            checked={lessonTemp.isOutstanding}
                            onChange={(e) => handleCheckboxChange('isOutstanding', e.target.checked)}
                        />
                        <label htmlFor="isOutstanding" className="cursor-pointer">Nổi bật</label>
                    </div>

                    <div className="flex gap-2 items-center cursor-pointer">
                        <input
                            id="isImportant"
                            type="checkbox"
                            checked={lessonTemp.isImportant}
                            onChange={(e) => handleCheckboxChange('isImportant', e.target.checked)}
                        />
                        <label htmlFor="isImportant" className="cursor-pointer">Quan trọng</label>
                    </div>
                </div>

            </div>

            {lessonTemp.type === "video" && (<div className="flex flex-col gap-2">
                <VideoUpload initialLink={lessonTemp.video} onChange={(value) => setLessonTemp({ ...lessonTemp, video: value })} setDuration={(value) => setLessonTemp({ ...lessonTemp, duration: value })} />
            </div>
            )}

            {lessonTemp.type === "pdf" && (
                <div className="flex flex-col gap-2">
                    <FileUploadPDF initialLink={lessonTemp.video} onChange={(value) => setLessonTemp({ ...lessonTemp, video: value })} />
                </div>
            )}

            <div className="flex flex-col gap-2">
                <label className="font-semibold">Nội dung bài học</label>
                <EditorReactQuill value={lessonTemp.lessonContent} onChange={handleEditorChangeLessonContent} />
            </div>

            <div className="flex justify-end mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={SaveLesson}>
                    Lưu bài học
                </button>
            </div>
        </div>
    )
}