import Sidebar from "@/app/components/Sidebar/Customer";


export default function Page() {
    return (
        <div className="flex">
            <div className="hidden lg:block">
                <Sidebar />
            </div>
            <div className="container mt-20">
                <div className="w-full flex justify-center items-center mb-10">
                    <h1 className="text-3xl lg:text-6xl font-bold transform scale-150 text-color-secondary animate-jump-in animate-once animate-ease-out" >Dashboard</h1>
                </div>
                
            </div>
        </div>
    )
}