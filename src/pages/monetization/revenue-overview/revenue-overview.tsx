import { ArrowUp } from "lucide-react"
import RevenueChart1 from "./_components/RevenueChart1"
import RevenueChart2 from "./_components/RevenueChart2"
import RevenueChart3 from "./_components/RevenueChart3"
import RevenueChart4 from "./_components/RevenueChart4"
import DashboardHeader from "@/components/shared/DashboardHeader"

const RevenueOverview = () => {
    return (
        <>
         <DashboardHeader>
             <h1 className="font-bold">Revenue Overview</h1>
           </DashboardHeader>
        <div className="w-full flex flex-col gap-5 my-5">
            <section className="w-full my-2">
                <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 divide-x divide-gray-600 text-white">
                    <div className="flex flex-col gap-3">
                        <span className="text-white/70">Net Revenue</span>
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-xl">$5,869,123</span>
                            <span className="text-xs text-green-600 flex items-center">
                                <ArrowUp size={15} />
                                100%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-white/70">Average Revenue Per User</span>
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-xl">$58</span>
                            <span className="text-xs text-green-600 flex items-center">
                                <ArrowUp size={15} />
                                100%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-white/70">Paying Users</span>
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-xl">789k</span>
                            <span className="text-xs text-green-600 flex items-center">
                                <ArrowUp size={15} />
                                100%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-white/70">New Paying Users</span>
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-xl">294</span>
                            <span className="text-xs text-green-600 flex items-center">
                                <ArrowUp size={15} />
                                100% <span className="text-xs">&nbsp; vs Last month</span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="h-[400px] bg-primary-500 rounded-md">
                    <RevenueChart1 />
                </div>
                <div className="h-[400px] bg-primary-500 rounded-md">
                    <RevenueChart2 />
                </div>
                <div className="h-[400px] bg-primary-500 rounded-md">
                    <RevenueChart3 />
                </div>
                <div className="h-[400px] bg-primary-500 rounded-md">
                    <RevenueChart4 />
                </div>
            </section>
        </div>
        </>
    )
}

export default RevenueOverview