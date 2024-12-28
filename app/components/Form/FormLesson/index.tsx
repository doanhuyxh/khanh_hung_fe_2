
import { ImageUpload, VideoUpload } from "@/app/components/FileHandle";
import EditorReactQuill from "../../Editor/ReactQuill";
import { LessonItem } from "@/app/libs/types";

export default function FormLesson({ lesson, setLesson, saveLesson }: { lesson: LessonItem, setLesson: any, saveLesson: any }) {

    const handleEditorChangeLessonContent = (content: string) => {
        setLesson({ ...lesson, LessonContent: content });
    };

    const handleCheckboxChange = (field: string, value: boolean) => {
        setLesson({ ...lesson, [field]: value });
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <label className="font-semibold">Tên bài học</label>
                <input
                    type="text"
                    className="border border-gray-300 rounded-md p-2"
                    placeholder="Nhập tên bài học"
                    value={lesson.name}
                    onChange={(e) => setLesson({ ...lesson, name: e.target.value })}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-semibold">Thời lượng</label>
                <input
                    type="text"
                    className="border border-gray-300 rounded-md p-2"
                    placeholder="Nhập thời lượng bài học"
                    value={lesson.duration}
                    onChange={(e) => setLesson({ ...lesson, duration: e.target.value })}
                />
            </div>

            <div className="flex flex-row justify-evenly">
                <div className="flex gap-2 items-center  cursor-pointer">
                    <input
                        id="isFree"
                        type="checkbox"
                        checked={lesson.isFree}
                        onChange={(e) => handleCheckboxChange('isFree', e.target.checked)}
                    />
                    <label htmlFor="isFree" className="cursor-pointer">Miễn phí</label>
                </div>

                <div className="flex gap-2 items-center  cursor-pointer">
                    <input
                        id="isOutstanding"
                        type="checkbox"
                        checked={lesson.isOutstanding}
                        onChange={(e) => handleCheckboxChange('isOutstanding', e.target.checked)}
                    />
                    <label htmlFor="isOutstanding" className="cursor-pointer">Nổi bật</label>
                </div>

                <div className="flex gap-2 items-center cursor-pointer">
                    <input
                        id="isImportant"
                        type="checkbox"
                        checked={lesson.isImportant}
                        onChange={(e) => handleCheckboxChange('isImportant', e.target.checked)}
                    />
                    <label htmlFor="isImportant" className="cursor-pointer">Quan trọng</label>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <ImageUpload initialLink={lesson.imageThumbnail} onChange={(value) => setLesson({ ...lesson, ImageThumbnail: value })} />
            </div>

            <div className="flex flex-col gap-2">
                <VideoUpload initialLink={lesson.video} onChange={(value) => setLesson({ ...lesson, Video: value })} />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-semibold">Nội dung bài học</label>
                <EditorReactQuill value={lesson.lessonContent} onChange={handleEditorChangeLessonContent} />
            </div>

            <div className="flex justify-end mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={saveLesson}>
                    Lưu bài học
                </button>
            </div>
        </div>
    )
}
