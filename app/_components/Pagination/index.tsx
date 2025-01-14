'use client'


export default function Pagination({ page, totalPage, onPageChange, totalResult, pageSize, length }: { page: number, totalPage: number, onPageChange: (page: number) => void, totalResult: number, pageSize: number, length: number }) {
    return (
        <div className="flex justify-between items-center">
            {length > 0 && (
                <div className="hidden lg:flex items-center gap-2 mt-4">
                    <span className='text-gray-500 text-md'>Hiển thị {length} - {Math.min(page * pageSize, totalResult)} trên tổng số {totalResult} kết quả</span>
                </div>
            )}

            {length > 0 && (
                <div className="flex justify-center items-center gap-4 mt-4">
                    <button
                        className={`bg-blue-200 text-white px-3 py-1 rounded-md ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-300'}`}
                        disabled={page === 1}
                        onClick={() => onPageChange(page - 1)}
                    >
                        <i className="fa-solid fa-less-than"></i>
                    </button>

                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPage }, (_, i) => i + 1)
                            .filter(pageNum => {
                                const start = Math.max(1, page - 2);
                                const end = Math.min(totalPage, page + 2);
                                return pageNum >= start && pageNum <= end;
                            })
                            .map((pageNum) => (
                                <button
                                    key={pageNum}
                                    className={`px-3 py-1 rounded-md ${page === pageNum ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                                    onClick={() => onPageChange(pageNum)}
                                >
                                    {pageNum}
                                </button>
                            ))
                        }
                    </div>

                    <button
                        className={`bg-blue-200 text-white px-3 py-1 rounded-md ${page === totalPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-300'}`}
                        disabled={page === totalPage}
                        onClick={() => onPageChange(page + 1)}
                    >
                        <i className="fa-solid fa-greater-than"></i>
                    </button>
                </div>
            )}
        </div>
    )
}
