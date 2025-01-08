import fetchData from "@/app/libs/configs/fetchDataServer";


type Props = {
    params: { newsSlug: string }
}

export default async function PageNews({ params }: Props) {
    const { newsSlug } = await params;

    const resData = await fetchData(`/public/news?slug=${newsSlug}`, '');

    if (resData.code === 200) {
        return (
            <div className="h-screen overflow-scroll flex flex-row justify-center bg-black-2 bg-opacity-90">
                <div className="max-w-[800px] px-10 py-20">
                    <div dangerouslySetInnerHTML={{ __html: resData.data }} />
                </div>
            </div>
        )
    }else{
        return (
            <div className="h-screen flex flex-row justify-center items-center bg-[#515151]">
                <div className="max-w-[800px] px-10 py-20">
                    <h1 className="text-white text-2xl">Không tìm thấy nội dung</h1>
                </div>
            </div>
        )
    }

}