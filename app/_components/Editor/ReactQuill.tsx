'use client'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { debounce } from 'lodash';
import {useEffect, useState} from "react";

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export default function EditorReactQuill({ value, onChange }: { value: string; onChange: (data: string) => void }) {

    // const imageHandler = () => {
    //     const input = document.createElement('input');
    //     input.setAttribute('type', 'file');
    //     input.setAttribute('accept', 'image/*');
    //     input.click();

    //     input.addEventListener('change', async (e) => {
    //         const target = e.target as HTMLInputElement;
    //         const file = target.files ? target.files[0] : null;
    //         if (file) {               
    //             try {
    //                 const response = await postFormData('/upload/image', {file: file});
    //                 const result = response.data;
                    
    //                 if (result) {
    //                     const imageUrl = result;
    //                     const newValue = `${value}<img src="${imageUrl}" alt="Image" />`;
    //                     console.log(newValue);
    //                     onChange(newValue);
    //                 }
    //             } catch (error) {
    //                 console.error('Image upload failed:', error);
    //             }
    //         }
    //     });
    // };

    const modules = {
        toolbar: {
            container: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image', 'video'],
                ['clean'],
            ],
            // handlers: {
            //     image: imageHandler, // Custom handler
            // },
        },
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
            placeholder="Nhập nội dung"
            style={{ height: 'auto', minHeight: '300px',boxSizing: 'border-box' }}
            className='w-full h-full'
        />
    );
}
