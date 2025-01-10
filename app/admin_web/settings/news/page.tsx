'use client'

import { useState, useEffect } from 'react';
import axiosInstance from '@/app/_libs/configs/axiosAdminConfig';
import toast from 'react-hot-toast';
import { Page } from '@/app/_libs/types';
import EditorReactQuill from '@/app/_components/Editor/ReactQuill';
import { unixToDatetime } from '@/app/_libs/utils';
import { generateSlug } from '@/app/_libs/utils';


export default function News() {
    const [news, setNews] = useState<Page[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [page, setPage] = useState<Page>({
        id: '',
        title: '',
        slug: '',
        content: '',
        type: 'news',
        createdAt: 0
    });


    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await axiosInstance.get('/settings/get-page-by-type?type=news');
            setNews(response.data);
        } catch (error) {
            console.log(error);
            toast.error('Có lỗi khi tải dữ liệu', {
                position: "top-right"
            });
        }
    }

    const handleDelete = async (id: string) => {
        try {
            await axiosInstance.get(`/settings/delete-page?id=${id}`);
            toast.success('Xóa thành công', {
                position: "top-right"
            });
            fetchNews();
        } catch (error) {
            console.log(error);
            toast.error('Có lỗi xảy ra', {
                position: "top-right"
            });
        }
    }

    const handleEdit = (news: Page) => {

        setPage({
            id: news.id,
            title: news.title,
            slug: news.slug,
            content: news.content,
            type: news.type,
            createdAt: news.createdAt
        });

        setIsModalOpen(true);
    }

    const handleAdd = () => {
        setPage({
            id: '',
            title: '',
            slug: '',
            content: '',
            type: 'news',
            createdAt: 0
        });
        setIsModalOpen(true);
    }

    const handleSave = async () => {

        const formData = new FormData();
        formData.append('title', page.title);
        formData.append('slug', page.slug);
        formData.append('content', page.content);
        formData.append('id', page.id);

        axiosInstance.post('/settings/create-or-update-page?type=news', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(() => {
            toast.success('Lưu thành công', {
                position: "top-right"
            });
            fetchNews();
            setIsModalOpen(false);
        }).catch((error) => {
            console.log(error);
            toast.error('Có lỗi xảy ra', {
                position: "top-right"
            });
        })
    }

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Quản lý tin tức</h1>
                <button
                    onClick={handleAdd}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Thêm mới
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 text-left">STT</th>
                            <th className="px-4 py-2 text-left">Tiêu đề</th>
                            <th className="px-4 py-2 text-left">Slug</th>
                            <th className="px-4 py-2 text-left">Ngày tạo</th>
                            <th className="px-4 py-2 text-left">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {news && news.map((item, index) => (
                            <tr key={item.id}>
                                <td className="px-4 py-2 border-b">{index + 1}</td>
                                <td className="px-4 py-2 border-b">{item.title}</td>
                                <td className="px-4 py-2 border-b">{item.slug}</td>
                                <td className="px-4 py-2 border-b">
                                    {unixToDatetime(item.createdAt)}
                                </td>
                                <td className="px-4 py-2 border-b">
                                <button
                                        onClick={() => handleEdit(item)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                                    >
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {
                            news.length == 0  && <tr>
                                <td colSpan={5}>
                                    <p className='text-center my-10'>Không có trang nào</p>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-1000">
                    <div className="bg-white p-6 rounded-lg w-3/4 mt-30">
                        <h2 className="text-xl font-bold mb-4 text-center">
                            {page.id ? 'Cập nhật tin tức' : 'Thêm tin tức mới'}
                        </h2>
                        <div className="flex flex-col gap-6">
                            {/* Input for Title */}
                            <div className="relative">
                                <label
                                    htmlFor="title"
                                    className={`absolute left-2 top-0 text-gray-500 text-sm transition-all ${page?.title ? "top-0 text-xs text-gray-700" : ""
                                        }`}
                                >
                                    Tiêu đề
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    placeholder="Nhập tiêu đề"
                                    value={page?.title}
                                    onChange={(e) =>
                                        setPage((prev) => ({ ...prev, title: e.target.value }))
                                    }
                                    className="w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:outline-none"
                                />
                            </div>

                            {/* Input for Slug */}
                            <div className="relative">
                                <label
                                    htmlFor="slug"
                                    className={`absolute left-2 top-0 text-gray-500 text-sm transition-all ${page?.slug ? "top-0 text-xs text-gray-700" : ""
                                        }`}
                                >
                                    Slug
                                </label>
                                <input
                                    id="slug"
                                    type="text"
                                    placeholder="Nhập slug"
                                    value={page?.slug}
                                    onChange={(e) =>
                                        setPage((prev) => ({ ...prev, slug: e.target.value }))
                                    }
                                    className="w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:outline-none"
                                />
                            </div>

                            {/* Editor for Content */}
                            <div className="relative">
                                <label
                                    htmlFor="content"
                                    className="block mb-2 text-gray-700 text-sm"
                                >
                                    Nội dung
                                </label>
                                <EditorReactQuill
                                    value={page?.content}
                                    onChange={(data) =>
                                        setPage((prev) => ({ ...prev, content: data }))
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex justify-end mt-4">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800 mr-2"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            >
                                {page.id ? 'Cập nhật' : 'Lưu'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}