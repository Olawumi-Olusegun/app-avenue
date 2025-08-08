import { Button } from "@/components/ui/button"
import { ArrowUp, Phone } from "lucide-react"
import AppPerformanceTable from "./_components/app-performance-table"
import BetaTestingTable from "./_components/beta-testing-table"

const Overview = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] -mb-6">
            <article className="w-full flex flex-col gap-5 py-6 lg:pr-6">
                <Button className="p-5 rounded-md flex items-start h-20 w-full lg:w-[330px] bg-primary-500 hover:bg-primary-500/80">
                    <Phone className="self-start" />
                    <div className="flex flex-col items-start gap-1">
                        <span className="font-semibold">Submit New App</span>
                        <span className="text-white/70 text-xs">Ready to share your creations with the world?</span>
                    </div>
                </Button>
                <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 divide-x divide-gray-600 text-white">
                    <div className="flex flex-col gap-3">
                        <span className="text-white/70">Apps Published</span>
                        <span className="font-semibold text-xl">5</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-white/70">Total Revenue</span>
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-xl">$5,869,123</span>
                            <span className="text-xs text-green-600 flex items-center">
                                <ArrowUp size={15} />
                                100%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-white/70">Total Downloads</span>
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-xl">867k</span>
                            <span className="text-xs text-green-600 flex items-center">
                                <ArrowUp size={15} />
                                100%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-white/70">Total Users</span>
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-xl">789k</span>
                            <span className="text-xs text-green-600 flex items-center">
                                <ArrowUp size={15} />
                                100%
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-primary-500 rounded-md border border-gray-800">
                    <div className="flex flex-col gap-1 p-4 text-white">
                        <span className="font-bold">App Performance</span>
                        <span className="text-xs">These companies have purchased in the last 12 months.</span>
                    </div>
                    <AppPerformanceTable />
                </div>
                <div className="w-full bg-primary-500 rounded-md border border-gray-800">
                    <div className="flex flex-col gap-1 p-4 text-white">
                        <span className="font-bold">Beta Testing</span>
                        <span className="text-xs">These companies have purchased in the last 12 months.</span>
                    </div>
                    <BetaTestingTable />
                </div>
            </article>
            <aside className="lg:border-l border-l-gray-700 w-full lg:w-[280px] text-white">
                <div className="p-3 rounded-md">
                    <h2 className="font-medium">Activity Feed</h2>
                    <div className="w-full py-3 flex flex-col gap-3">
                        <div className="flex items-center gap-2 w-full">
                            <div className="size-8 shrink-0 self-start">
                                <img src="/assets/images/app-avenue-logo.png" alt="image" className="h-full w-full" />
                            </div>
                            <span className="text-xs">Bifrost received a 3-star rating with the comment "Could use more features."</span>
                            <span className="text-xs self-start">now</span>
                        </div>
                        <div className="flex items-center gap-2 w-full">
                            <div className="size-8 shrink-0 self-start">
                                <img src="/assets/images/app-avenue-logo.png" alt="image" className="h-full w-full" />
                            </div>
                            <span className="text-xs">A new version (2.1.0) of Bifrost has been successfully published to the HarmonyOS store.</span>
                            <span className="text-xs self-start">now</span>
                        </div>
                        <div className="flex items-center gap-2 w-full">
                            <div className="size-8 shrink-0 self-start">
                                <img src="/assets/images/app-avenue-logo.png" alt="image" className="h-full w-full" />
                            </div>
                            <span className="text-xs">A new comment was added to your feature suggestion: "Implement a real-time collaboration tool in the IDE".</span>
                            <span className="text-xs self-start">now</span>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default Overview