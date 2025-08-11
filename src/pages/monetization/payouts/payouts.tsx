import { Input } from "@/components/ui/input"
import { CircleQuestionMark, Search } from "lucide-react"
import PayoutChart from "./_components/PayoutChart"
import { Button } from "@/components/ui/button"
import PayoutHistoryTable from "./_components/PayoutHistoryTable"

const Payouts = () => {
    return (
        <div className="w-full flex flex-col gap-6 mt-6">
            <section className="w-full grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-5 flex flex-col gap-3">
                    <span className="">Available Balance</span>
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold tracking-wide text-2xl">$5,869,123</h1>
                        <CircleQuestionMark size={18} />
                    </div>
                    <div className="flex items-center gap-5 mt-auto mb-4">
                        <Button className="bg-amber-500 text-black hover:bg-amber-600">Withdraw</Button>
                        <Button className="bg-amber-500 text-black hover:bg-amber-600">Manage Payment Information</Button>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-7">
                    <PayoutChart />
                </div>
            </section>
            <section className="w-full bg-primary-500 rounded-md border border-gray-800">
                <div className="flex flex-col gap-1 py-4 text-white p-6">
                    <span className="font-bold">History</span>
                    <span className="text-xs text-white/70">These companies have purchased in the last 12 months.</span>
                </div>
                <div className="w-full flex flex-col gap-3 lg:flex-row items-center justify-between p-6">
                    <div className="relative w-full lg:w-fit">
                        <Input className="pl-8 text-white/80 placeholder:text-white/70" placeholder="Search" />
                        <Search size={18} className="absolute top-1/2 -translate-y-1/2 left-2 text-white/70" />
                    </div>
                </div>
                <PayoutHistoryTable />
                <div className="flex items-center justify-end w-full">
                    <span className="font-bold py-5 px-2">Pagination</span>
                </div>
            </section>
        </div>
    )
}

export default Payouts