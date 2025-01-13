'use client'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import './editor.css';
import { debounce } from 'lodash';
import {useEffect, useState} from "react";

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export default function EditorReactQuill({ value, onChange }: { value: string; onChange: (data: string) => void }) {

    const fonts = ['arial', 'georgia', 'impact', 'tahoma', 'times-new-roman', 'verdana'];
    const sizes = ['small', 'normal', 'large', 'huge'];

    const formats = [
        'font', 'size', // Thêm font và size
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video',
        'align', 'color', 'background',
    ];

    const modules = {
        toolbar: [
            [{ font: fonts }, { size: sizes }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image', 'video'],
            ['clean'],
            ['align', 'color', 'background'],
        ],
    };





    const debouncedOnChange = debounce((newValue) => {
        onChange(newValue);
    }, 1);


    useEffect(() => {
        return () => {
            debouncedOnChange.cancel();
        };
    }, []);

    return (
        <ReactQuill
            theme="snow"
            preserveWhitespace={true}
            value={value}
            onChange={debouncedOnChange}
            modules={modules}
            formats={formats}
            placeholder="Nhập nội dung"
            style={{ height: 'auto', minHeight: '300px',boxSizing: 'border-box' }}
            className='w-full h-full'
        />
    );
}
