'use client'
import { useEffect, useState, useCallback } from 'react';
import Loading from '@/app/components/Loading';
import Pagination from '@/app/components/Pagination';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { DataPage, ResponseData } from '@/app/libs/types';
import Dropdown from '@/app/components/DropDown';

import axiosInstance from '@/app/libs/configs/axiosConfig';
import toast from 'react-hot-toast';

export default function Course() {

    const router = useRouter();

    const pageSize = 30
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [status, setStatus] = useState('published');
    const [checkbox, setCheckbox] = useState<string[]>([])

    const [totalResult, setTotalResult] = useState(0);
    const [courses, setCourses] = useState([]);
    const [totalPage, setTotalPage] = useState(0);

    const GetData = useCallback(async () => {
        const res: ResponseData = await axiosInstance.get(`/course/GetAllCourse?page=${page}&pageSize=${pageSize}&status=${status}&search_keyword=${searchKeyword}`)
        if (res.code == 200) {
            const data: DataPage = res.data;
            if (data) {
                setCourses(data.data);
                setTotalResult(data.totalResult);
                setTotalPage(data.totalPage);
            }
        }
        setIsLoading(false);
    }, [page, pageSize, status, searchKeyword]);

    const handleAddOrUpdateCourse = (id: string) => {
        router.push(`/admin_web/course/form?id=${id}`);
    }

    const handleDetailCourse = (id: string) => {
        router.push(`/admin_web/course/lesson?id=${id}`)
    }

    const handleDeleteCourse = (id: string) => {
        axiosInstance.get(`/course/delete?id=${id}`)
            .then(res => {
                const response = res.data as ResponseData;
                if (response.code == 200) {
                    toast.success('Xóa khoá học thành công', {
                        duration: 3000,
                        position: "top-right",
                        style: {
                            background: "#4CAF50",
                            color: "#fff",
                            padding: "16px",
                            borderRadius: "4px",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        },
                    });
                    GetData();
                }
                else {
                    toast.error('Xóa khoá học thất bại', {
                        duration: 3000,
                        position: "top-right",
                        style: {
                            background: "#f44336",
                            color: "#fff",
                            padding: "16px",
                            borderRadius: "4px",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        },
                    });
                }
            })
    }

    const handleChangeCheckbox = (id: string) => {
        if (id == 'all') {
            setCheckbox(courses.map((i: any) => i.id))
        } else {
            setCheckbox(prev => {
                if (prev.includes(id)) {
                    return prev.filter(i => i !== id)
                }
                return [...prev, id]
            })
        }
    }

    const handleUpdateStatus = async (status: string) => {
        try {
            for (const id of checkbox) {
                await axiosInstance.get(`/course/updateStatus?id=${id}&status=${status}`);
            }
            toast.success('Cập nhật trạng thái thành công', {
                duration: 3000,
                position: "top-right",
            });
            GetData();
        } catch (error) {
            console.error('Có lỗi xảy ra khi cập nhật trạng thái:', error);
            toast.error('Cập nhật thất bại', {
                duration: 3000,
                position: "top-right",
            });
        }
    };


    useEffect(() => {
        GetData();
    }, [status, searchKeyword, page, GetData]);

    useEffect(() => {
        setIsLoading(false)
    }, [])

    if (isLoading) return <Loading />

    return (
        <>
            <div className="w-full flex justify-between items-center">
                <div className="flex gap-2">
                    <h1 className="text-2xl font-bold">Khoá học</h1>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => handleAddOrUpdateCourse('')}>+</button>
                </div>
                <div className="flex gap-2">
                    <button className={`${status == 'published' ? 'bg-green-500' : 'bg-gray-500'} text-white px-4 py-2 rounded-md`} onClick={() => setStatus('published')} >Công khai</button>
                    <button className={`${status == 'hidden' ? 'bg-blue-500' : 'bg-gray-500'} text-white px-4 py-2 rounded-md`} onClick={() => setStatus('hidden')}>Ẩn</button>
                    <button className={`${status == 'stop' ? 'bg-orange-500' : 'bg-gray-500'} text-white px-4 py-2 rounded-md`} onClick={() => setStatus('stop')}>Tạm dừng </button>
                    <button className={`${status == 'draft' ? 'bg-yellow-500' : 'bg-gray-500'} text-white px-4 py-2 rounded-md`} onClick={() => setStatus('draft')}>Nháp/Chờ duyệt</button>
                    <button className={`${status == 'delete' ? 'bg-red-500' : 'bg-gray-500'} text-white px-4 py-2 rounded-md`} onClick={() => setStatus('delete')}>Thùng rác</button>
                </div>
            </div>

            <hr className="border-gray-200 mt-2 mb-10" />

            <div className="flex justify-between gap-4 mb-3">
                <div className='flex gap-3'>

                    <button
                        className='bg-blue-100 text-black hover:bg-green-100 hover:text-green-500 px-4 py-2 rounded-md'
                        onClick={() => handleChangeCheckbox('all')}
                    >
                        <i className="fa-solid fa-check"></i>
                    </button>
                    <Dropdown icon={<span className='text-sm'>Thao tác <i className='fa-solid fa-caret-down'></i></span>} className='border rounded-md' items={[
                        {
                            icon: '',
                            label: "Chuyển sang công khai",
                            className: "text-green-500 hover:text-green-600",
                            onClick: () => handleUpdateStatus('published')
                        },
                        {
                            icon: '',
                            label: "Chuyển sang ẩn",
                            className: "text-blue-500 hover:text-blue-600",
                            onClick: () => handleUpdateStatus('hidden')
                        },
                        {
                            icon: '',
                            label: "Chuyển sang tạm dừng",
                            className: "text-orange-500 hover:text-orange-600",
                            onClick: () => handleUpdateStatus('stop')
                        },
                        {
                            icon: '',
                            label: "Chuyển sang nháp",
                            className: "text-yellow-500 hover:text-yellow-600",
                            onClick: () => handleUpdateStatus('draft')
                        },
                        {
                            icon: '',
                            label: "Chuyển sang thùng rác",
                            className: "text-red-500 hover:text-red-600",
                            onClick: () => handleUpdateStatus('delete')
                        },
                    ]} />

                </div>

                <div className='mr-0'>
                    <input className='px-4 py-2 text-md outline-1 border rounded min-w-100' value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} placeholder='tìm kiếm' />
                </div>
            </div>

            <hr className='border-gray-2' />

            <div className="overflow-x-auto p-5 shadow-lg rounded-lg">
                <table className="w-full table-auto table">
                    <thead>
                        <tr className="bg-gray-200 text-left dark:bg-meta-4">
                            <th className='py-4 px-4 font-medium text-black dark:text-white'>STT</th>
                            <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">Tên khoá học</th>
                            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">Ảnh thumbnail</th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Loại khoá học</th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Giá</th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Số bài học</th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Tổng thời lượng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {courses && courses.length > 0 && courses.map((course: any, index: number) => (
                            <tr
                                key={index}
                                className="hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
                                <td className='p-4 flex items-center gap-1' onClick={() => handleChangeCheckbox(course.id)}>
                                    <input type='checkbox' value={course.id} checked={checkbox.includes(course.id)} onChange={() => { }} />
                                    {index + 1}
                                </td>
                                <td className="py-4 px-4">{course.name}</td>
                                <td className="text-center py-4 px-4">
                                    <Image src={course.image} alt="thumbnail" width={100} height={100} />
                                </td>
                                <td className="py-4 px-4">{course.courseType === 'free' ? 'Miễn phí' : 'Trả phí'}</td>
                                <td className="py-4 px-4">{course.costPrice}</td>
                                <td className="py-4 px-4">{course.numberOfLessons}</td>
                                <td className="py-4 px-4">{course.totalTimeDuration}</td>

                                <td className="">
                                    <div style={{ display: "flex", gap: "10px" }}>
                                        <button
                                            className='p-3 hover:bg-red-300 rounded-lg'
                                            onClick={() => handleAddOrUpdateCourse(course.id)}
                                            style={{ border: "none", cursor: "pointer" }}
                                        >
                                            <i className="fa-solid fa-pen-to-square" style={{ color: "#000000" }}></i>
                                        </button>
                                        <button
                                            className='p-3 hover:bg-red-300 rounded-lg'
                                            onClick={() => handleDetailCourse(course.id)}
                                            style={{ border: "none", cursor: "pointer" }}
                                        >
                                            <i className="fa-solid fa-person-chalkboard" style={{ color: "#e67519" }}></i>
                                        </button>
                                        {status == 'delete' && <button
                                            className='p-3 hover:bg-red-300 rounded-lg'
                                            onClick={() => handleDetailCourse(course.id)}
                                            style={{ border: "none", cursor: "pointer" }}
                                        >
                                            <i className="fa-solid fa-person-chalkboard" style={{ color: "#e67519" }}></i>
                                        </button>
                                        }
                                        <button
                                            className='p-3 hover:bg-red-300 rounded-lg'
                                            onClick={() => handleDeleteCourse(course.id)}
                                            style={{ border: "none", cursor: "pointer" }}
                                        >
                                            <i className="fa-solid fa-trash" style={{ color: "red" }}></i>
                                        </button>
                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                <hr />
                <Pagination length={courses.length} page={page} pageSize={pageSize} totalPage={totalPage} totalResult={totalResult} onPageChange={setPage} />
            </div>
        </>
    )

}
