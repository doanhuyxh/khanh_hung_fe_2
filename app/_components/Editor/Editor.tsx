'use client';

import React, { useRef, useEffect, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import ImageTool from '@editorjs/image';
import './editor.css'; // Import CSS tùy chỉnh

export default function Editor({ onChange, initialData }: { onChange: (data: any) => void; initialData?: any }) {
    const editorInstance = useRef<EditorJS | null>(null);
    const [activeTool, setActiveTool] = useState<string | null>(null);

    useEffect(() => {
        const initializeEditor = () => {
            editorInstance.current = new EditorJS({
                holder: 'editorjs',
                placeholder: 'Nhập nội dung của bạn...',
                tools: {
                    header: Header,
                    list: List,
                    paragraph: Paragraph,
                    image: {
                        class: ImageTool,
                        config: {
                            endpoints: {
                                byFile: '/api/uploadFile',
                                byUrl: '/api/fetchUrl',
                            },
                        },
                    },
                },
                data: initialData || {},
                onChange: async () => {
                    const content = await editorInstance.current?.save();
                    onChange(content);
                },
            });
        };

        initializeEditor();

        return () => {
            editorInstance.current?.destroy();
            editorInstance.current = null;
        };
    }, [onChange, initialData]);

    const handleToolClick = (tool: string) => {
        setActiveTool(tool);

        if (editorInstance.current) {
            switch (tool) {
                case 'header':
                    editorInstance.current.blocks.insert('header', { level: 1 });
                    break;
                case 'list':
                    editorInstance.current.blocks.insert('list', { style: 'unordered' });
                    break;
                case 'paragraph':
                    editorInstance.current.blocks.insert('paragraph', {});
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <div>
            {/* Thanh công cụ giả lập */}
            <div className="editor-toolbar">
                <button
                    className={activeTool === 'header' ? 'active' : ''}
                    onClick={() => handleToolClick('header')}
                >
                    H1
                </button>
                <button
                    className={activeTool === 'list' ? 'active' : ''}
                    onClick={() => handleToolClick('list')}
                >
                    Danh sách
                </button>
                <button
                    className={activeTool === 'paragraph' ? 'active' : ''}
                    onClick={() => handleToolClick('paragraph')}
                >
                    Đoạn văn
                </button>
            </div>

            {/* Khu vực Editor.js */}
            <div id="editorjs"></div>
        </div>
    );
}
