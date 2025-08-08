import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Link } from "react-router-dom"

const AppManagement = () => {
    return (
        <>
            <div className="flex flex-col gap-5 w-full">
                <section className="w-full flex items-center justify-between -mb-6 py-6">
                    <div className="relative">
                        <Input className="pl-8 text-white/80 bg-primary-500 border-primary-700 placeholder:text-white/70" placeholder="Search" />
                        <Search size={18} className="absolute top-1/2 -translate-y-1/2 left-2 text-white/70" />
                    </div>
                    <Button className="bg-amber-500 hover:bg-amber-600 text-black">
                        <span className="text-sm">Submit New App</span>
                    </Button>
                </section>
                <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                    <Link to={"/app-management/overview"} className="flex flex-col items-center justify-between gap-2 h-[200px] p-4 rounded-2xl hover:bg-primary-900 transition-colors duration-300 bg-gradient-to-b from-[#212529] to-[#635AF34D] border border-gray-700 overflow-hidden">
                        <div className="relative size-[90.67px] bg-[url('/assets/images/app-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-3xl  border border-gray-600 overflow-hidden">
                            <img src="/assets/images/maimail.png" alt="maimail" className="size-11 object-cover pointer-events-none" />
                        </div>
                        <div className="self-start">
                            <h2 className="text-white font-semibold">Maimail</h2>
                            <p className="text-white/70 text-[12px]">Version 1.8.3</p>
                        </div>
                    </Link>
                    <Link to={"/app-management/overview"} className="flex flex-col items-center justify-between gap-2 h-[200px] p-4 rounded-2xl hover:bg-primary-900 transition-colors duration-300 bg-gradient-to-b from-[#212529] to-[#9BF6534D] border border-gray-700 overflow-hidden">
                        <div className="relative size-[90.67px] bg-[url('/assets/images/app-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-3xl  border border-gray-600 overflow-hidden">
                            <img src="/assets/images/hour-glass.png" alt="hour-glass" className="size-11 object-cover pointer-events-none" />
                        </div>
                        <div className="self-start">
                            <h2 className="text-white font-semibold">Hourglass</h2>
                            <p className="text-white/70 text-[12px]">Version 1.8.3</p>
                        </div>
                    </Link>
                    <Link to={"/app-management/overview"} className="flex flex-col items-center justify-between gap-2 h-[200px] p-4 rounded-2xl hover:bg-primary-900 transition-colors duration-300 bg-gradient-to-b from-[#212529] to-[#F7A4094D] border border-gray-700 overflow-hidden">
                        <div className="relative size-[90.67px] bg-[url('/assets/images/app-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-3xl  border border-gray-600 overflow-hidden">
                            <img src="/assets/images/maimail.png" alt="maimail" className="size-11 object-cover pointer-events-none" />
                        </div>
                        <div className="self-start">
                            <h2 className="text-white font-semibold">Maimail</h2>
                            <p className="text-white/70 text-[12px]">Version 1.8.3</p>
                        </div>
                    </Link>
                    <Link to={"/app-management/overview"} className="flex flex-col items-center justify-between gap-2 h-[200px] p-4 rounded-2xl hover:bg-primary-900 transition-colors duration-300 bg-gradient-to-b from-[#212529] to-[#BA4AEA4D] border border-gray-700 overflow-hidden">
                        <div className="relative size-[90.67px] bg-[url('/assets/images/app-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-3xl  border border-gray-600 overflow-hidden">
                            <img src="/assets/images/bifrost_logo.png" alt="bifrost_logo" className="size-11 object-cover pointer-events-none" />
                        </div>
                        <div className="self-start">
                            <h2 className="text-white font-semibold">Bifrost</h2>
                            <p className="text-white/70 text-[12px]">Version 1.8.3</p>
                        </div>
                    </Link>
                    <Link to={"/app-management/overview"} className="flex flex-col items-center justify-between gap-2 h-[200px] p-4 rounded-2xl hover:bg-primary-900 transition-colors duration-300 bg-gradient-to-b from-[#212529] to-[#442216] border border-gray-700 overflow-hidden">
                        <div className="relative size-[90.67px] bg-[url('/assets/images/app-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-3xl  border border-gray-600 overflow-hidden">
                            <img src="/assets/images/quotient.png" alt="quotient" className="size-11 object-cover pointer-events-none" />
                        </div>
                        <div className="self-start">
                            <h2 className="text-white font-semibold">Quotient</h2>
                            <p className="text-white/70 text-[12px]">Version 1.8.3</p>
                        </div>
                    </Link>
                    <Link to={"/app-management/overview"} className="flex flex-col items-center justify-between gap-2 h-[200px] p-4 rounded-2xl hover:bg-primary-900 transition-colors duration-300 bg-gradient-to-b from-[#212529] to-[#F7A4094D] border border-gray-700 overflow-hidden">
                        <div className="relative size-[90.67px] bg-[url('/assets/images/app-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-3xl  border border-gray-600 overflow-hidden">
                            <img src="/assets/images/layers.png" alt="layers" className="size-11 object-cover pointer-events-none" />
                        </div>
                        <div className="self-start">
                            <h2 className="text-white font-semibold">Layers</h2>
                            <p className="text-white/70 text-[12px]">Version 1.8.3</p>
                        </div>
                    </Link>
                </section>
            </div>
        </>
    )
}

export default AppManagement