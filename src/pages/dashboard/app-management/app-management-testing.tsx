import { ArrowUp, Search } from "lucide-react"
import AppSubLinks from "./app-sublinks"
import BetaTestingTable from "./_components/beta-testing-table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const AppManagementTesting = () => {
    return (
        <div className="w-full flex flex-col gap-5 my-5">
            <AppSubLinks />
            <section className="w-full my-2">
                <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-3 divide-x divide-gray-600 text-white">
                    <div className="flex flex-col gap-3">
                        <span className="text-white/70">Active Beta Tests</span>
                        <span className="font-semibold text-xl">4</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-white/70">Total Testers</span>
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-xl">$5,869,123</span>
                            <span className="text-xs text-green-600 flex items-center">
                                <ArrowUp size={15} />
                                100%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-white/70">Feedbacks</span>
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-xl">867k</span>
                            <span className="text-xs text-green-600 flex items-center">
                                <ArrowUp size={15} />
                                100%
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-primary-500 rounded-md border border-gray-800">
                <div className="flex flex-col gap-1 py-4 text-white p-6">
                    <span className="font-bold">Beta Test</span>
                    <span className="text-xs text-white/70">Offer permanent upgrades or additional features within your app to enhance user experience and generate revenue through one-time purchases.</span>
                </div>
                <div className="w-full flex flex-col gap-3 lg:flex-row items-center justify-between p-6">
                    <div className="relative w-full lg:w-fit">
                        <Input className="pl-8 text-white/80 placeholder:text-white/70" placeholder="Search" />
                        <Search size={18} className="absolute top-1/2 -translate-y-1/2 left-2 text-white/70" />
                    </div>
                    <Button className="bg-amber-500 hover:bg-amber-600 text-black w-full lg:w-fit">
                        <span className="text-sm">Create New Beta Test</span>
                    </Button>
                </div>
                <BetaTestingTable />
            </section>
        </div>
    )
}

export default AppManagementTesting