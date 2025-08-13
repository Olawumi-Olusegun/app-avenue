import DashboardHeader from "@/components/shared/DashboardHeader"
import Chart from "./_components/chart"
import AppSubLinks from "./app-sublinks"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

const AppManagementAnalytics = () => {
    return (
        <>
         <DashboardHeader>
            <div className="flex items-center gap-1">
             <img src="/assets/images/bifrost_logo.png" alt="bifrost" />
             <h1 className="font-bold">Bifrost</h1>
            </div>
           </DashboardHeader> 
        <div className="w-full flex flex-col gap-5 my-5">
            <AppSubLinks />
            <div className="relative w-full lg:w-fit">
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Sort By</SelectLabel>
                            <SelectItem value="android">Android</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="h-[400px] bg-primary-500 rounded-md">
                    <Chart />
                </div>
                <div className="h-[400px] bg-primary-500 rounded-md">
                    <Chart />
                </div>
                <div className="h-[400px] bg-primary-500 rounded-md">
                    <Chart />
                </div>
                <div className="h-[400px] bg-primary-500 rounded-md">
                    <Chart />
                </div>
            </section>
        </div>
        </>
    )
}

export default AppManagementAnalytics