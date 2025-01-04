'use client'

import { useEffect, useState } from 'react';
interface FormNotificationProps {
    formNotify: {
        Id: string;
        PrivateName: string;
        Title: string;
        Content: string;
        Type: string;
    };
    setFormNotify: (value: React.SetStateAction<{
        Id: string;
        PrivateName: string;
        Title: string;
        Content: string;
        Type: string;
    }>) => void;
    save: () => void;
}

export default function FormNotification({formNotify, setFormNotify, save}: FormNotificationProps) {

    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        setIsShow(true)
        return () => {
            setIsShow(false)
        }
    }, [])

    if (!isShow) {
        return null
    }

    return (

        <div className="w-full">
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tên thông báo (nội bộ)
                </label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formNotify.PrivateName}
                    onChange={(e) => setFormNotify({ ...formNotify, PrivateName: e.target.value })}
                />
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tiêu đề
                </label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formNotify.Title || ''}
                    onChange={(e) => setFormNotify({ ...formNotify, Title: e.target.value })}
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loại thông báo
                </label>
                <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formNotify.Type || ''}
                    onChange={(e) => setFormNotify({ ...formNotify, Type: e.target.value })}
                >
                    <option value="all">Tất cả</option>
                    <option value="email">Thông qua email</option>
                    <option value="web">Thông báo trên wed</option>
                    <option value="app">Thông báo app</option>
                </select>
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nội dung
                </label>
                <textarea className='w-full h-full border-2 p-2' rows={20}
                value={formNotify.Content}
                onChange={(e)=>setFormNotify({...formNotify, Content:e.target.value})}>
                </textarea>
            </div>

            <div className="flex justify-end">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={save}
                >
                    Lưu thông báo
                </button>
            </div>
        </div>

    )
}