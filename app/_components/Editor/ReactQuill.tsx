import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { debounce } from 'lodash';
import { useState, useEffect } from 'react';
import { Modal, Input } from 'antd';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export default function EditorReactQuill({ value, onChange }: { value: string; onChange: (data: string) => void }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [htmlInput, setHtmlInput] = useState('');
    const [loading, setLoading] = useState(true);

    const formats = [
        'header', // Thêm header
        'font', 'size', // Font và kích thước
        'bold', 'italic', 'underline', 'strike', // Định dạng văn bản
        'blockquote', // Trích dẫn
        'list', 'indent', // Danh sách và thụt lề
        'link', 'image', 'video', // Chèn liên kết, hình ảnh, video
        'align', 'color', 'background', // Canh lề và màu sắc
    ];

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],
      
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
      
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
      
        ['clean']                                         // remove formatting button
      ];

    const modules = {
        toolbar: {
            container: [
                [{ font: [] }, { size: [] }], // Font và kích thước
                [{ header: [1, 2, 3, 4, 5, 6, false] }], // Header
                ['bold', 'italic', 'underline', 'strike'], // Định dạng
                [{ list: 'ordered' }, { list: 'bullet' }], // Danh sách
                [{ indent: '-1' }, { indent: '+1' }], // Thụt lề
                ['link', 'image', 'video'], // Liên kết, hình ảnh, video
                [{ align: [] }], // Canh lề
                [{ color: [] }, { background: [] }], // Màu sắc
                ['clean'], // Làm sạch định dạng
            ],
        },
    };

    const debouncedOnChange = debounce((newValue) => {
        onChange(newValue);
    }, 300);

   
    const handleInsertHtml = () => {
        setIsModalOpen(false);
        const quill = document.querySelector('.ql-editor');
        if (quill && htmlInput) {
            quill.innerHTML += htmlInput; // Chèn HTML vào nội dung hiện tại
            onChange(quill.innerHTML); // Cập nhật dữ liệu
        }
        setHtmlInput('');
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <ReactQuill
                theme="snow"
                preserveWhitespace={true}
                value={value}
                onChange={debouncedOnChange}
                modules={{ toolbar: toolbarOptions }}
                formats={formats}
                placeholder="Nhập nội dung"
                style={{ height: 'auto', minHeight: '300px', boxSizing: 'border-box' }}
                className="w-full h-full"
            />
            {/* Modal nhập HTML */}
            <Modal
                title="Chèn HTML"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                onOk={handleInsertHtml}
            >
                <Input.TextArea
                    rows={6}
                    value={htmlInput}
                    onChange={(e) => setHtmlInput(e.target.value)}
                    placeholder="Nhập mã HTML tại đây..."
                />
            </Modal>
        </div>
    );
}
