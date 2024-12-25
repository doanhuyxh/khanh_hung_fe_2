
import { ImageUpload, VideoUpload } from "@/app/components/FileHandle";
import EditorReactQuill from "../../Editor/ReactQuill";

export default function FormLesson({ lesson, setLesson, saveLesson }: { lesson: any, setLesson: any, saveLesson: any }) {

    const handleEditorChangeLessonContent = (content: string) => {
        setLesson({ ...lesson, LessonContent: content });
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <label className="font-semibold">Tên bài học</label>
                <input
                    type="text"
                    className="border border-gray-300 rounded-md p-2"
                    placeholder="Nhập tên bài học"
                    value={lesson.Name}
                    onChange={(e) => setLesson({ ...lesson, Name: e.target.value })}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-semibold">Thời lượng</label>
                <input
                    type="text"
                    className="border border-gray-300 rounded-md p-2"
                    placeholder="Nhập thời lượng bài học"
                    value={lesson.Duration}
                    onChange={(e) => setLesson({ ...lesson, Duration: e.target.value })}
                />
            </div>
            
            <div className="flex flex-col gap-2">
                <ImageUpload initialLink={lesson.ImageThumbnail} onChange={(value) => setLesson({ ...lesson, ImageThumbnail: value })} />
            </div>

            <div className="flex flex-col gap-2">
                <VideoUpload initialLink={lesson.Video} onChange={(value) => setLesson({ ...lesson, Video: value })} />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-semibold">Nội dung bài học</label>
                <EditorReactQuill value={lesson.LessonContent} onChange={handleEditorChangeLessonContent} />
            </div>

            <div className="flex justify-end mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={saveLesson}>
                    Lưu bài học
                </button>
            </div>
        </div>
    )
}
