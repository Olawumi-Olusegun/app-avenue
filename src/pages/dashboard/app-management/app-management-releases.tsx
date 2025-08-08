import { Button } from "@/components/ui/button"
import BetaTestingTable from "./_components/beta-testing-table"
import AppSubLinks from "./app-sublinks"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

const AppManagementReleases = () => {
    return (
        <div className="w-full flex flex-col gap-5 my-5">
            <AppSubLinks />
            <section className="w-full flex flex-col gap-3 lg:flex-row items-center justify-between">
                <Select>
                    <SelectTrigger className="w-full lg:w-[180px]">
                        <SelectValue placeholder="Select Platform" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Platform</SelectLabel>
                            <SelectItem value="android">Android</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Button className="bg-amber-500 hover:bg-amber-600 text-black w-full lg:w-fit">
                    <span className="text-sm">Create New Beta Test</span>
                </Button>
            </section>
            <section className="w-full bg-primary-500 rounded-md border border-gray-800">
                <div className="flex flex-col gap-1 py-4 text-white p-6">
                    <span className="font-bold">Latest Releases</span>
                    <span className="text-xs text-white/70">These companies have purchased in the last 12 months.</span>
                </div>
                <BetaTestingTable />
            </section>
        </div>
    )
}

export default AppManagementReleases