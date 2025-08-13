import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import AppPurchaseHistoryTable from "./_components/app-purchase-history-table"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import CustomPagination from "@/components/shared/CustomPagination"
import DashboardHeader from "@/components/shared/DashboardHeader"

const SalesAndPurchases = () => {
    return (
        <>
          <DashboardHeader>
             <h1 className="font-bold">Sales & Purchases</h1>
           </DashboardHeader>
        <div className="w-full flex flex-col gap-6 mt-6">
            <section className="w-full flex items-center flex-wrap gap-3">
                <Button className="bg-primary-600 text-primary-300 hover:bg-primary-300 hover:text-white">App Purchases</Button>
                <Button className="bg-primary-600 text-primary-300 hover:bg-primary-300 hover:text-white">In-App Purchases</Button>
                <Button className="bg-primary-600 text-primary-300 hover:bg-primary-300 hover:text-white">Subscription Transactions</Button>
            </section>
            <section className="w-full bg-primary-500 rounded-md border border-gray-800">
                <div className="flex flex-col gap-1 py-4 text-white p-6">
                    <span className="font-bold">App Purchases History</span>
                    <span className="text-xs text-white/70">A detailed record of all purchases made for your paid application</span>
                </div>
                <div className="w-full flex flex-col gap-3 lg:flex-row items-center flex-wrap justify-between p-6">
                    <div className="relative w-full lg:w-fit">
                        <Input className="pl-8 text-white/80 placeholder:text-white/70" placeholder="Search" />
                        <Search size={18} className="absolute top-1/2 -translate-y-1/2 left-2 text-white/70" />
                    </div>
                    <div className="w-full lg:w-fit flex items-center flex-wrap gap-3 py-6 ml-auto">
                        <Select>
                            <SelectTrigger className="w-full lg:w-[150px]">
                                <SelectValue placeholder="Platform" className="text-white" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Platform</SelectLabel>
                                    <SelectItem value="android">Android</SelectItem>
                                    <SelectItem value="harmony_os">Harmony OS</SelectItem>
                                    <SelectItem value="windows">Windows</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-full lg:w-[150px] text-white">
                                <SelectValue placeholder="Status" className="text-white" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Status</SelectLabel>
                                    <SelectItem value="processing">Processing</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Button className="bg-amber-500 hover:bg-amber-600 text-black w-full lg:w-fit">
                            <span className="text-sm">Export</span>
                        </Button>
                    </div>
                </div>
                <AppPurchaseHistoryTable />
                <CustomPagination />
            </section>
        </div>
        </>
    )
}

export default SalesAndPurchases