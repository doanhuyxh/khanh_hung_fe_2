export default function LoadingVideo() {
    return (
        <div className="w-fit h-fit m-auto flex flex-col justify-center items-center">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
            <p className="text-lg mt-4">Đang tải video</p>
        </div>
    );
}