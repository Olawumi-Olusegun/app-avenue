import BetaTestingTable from "./_components/beta-testing-table"
import AppSubLinks from "./app-sublinks"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import CreateNewReleases from "@/components/modals/app-management/create-new-releases"
import DashboardHeader from "@/components/shared/DashboardHeader"

const AppManagementReleases = () => {
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
                
                <CreateNewReleases />
                {/* <NewReleasesAppBinary /> */}
                {/* <NewReleasesAppBinaryCompleted /> */}
            </section>
            <section className="w-full bg-primary-500 rounded-md border border-gray-800">
                <div className="flex flex-col gap-1 py-4 text-white p-6">
                    <span className="font-bold">Latest Releases</span>
                    <span className="text-xs text-white/70">These companies have purchased in the last 12 months.</span>
                </div>
                <BetaTestingTable />
            </section>
        </div>
        </>
    )
}

export default AppManagementReleases