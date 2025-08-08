import { LogOut, Menu, } from "lucide-react"
import { Button } from "../ui/button"
import type { ReactNode } from "react"

export const HeaderTagLine = ({ children }: { children: ReactNode }) => {
    return (
        <div className="hidden md:flex flex-col gap-2">
            {children}
        </div>
    )
}

const DashboardHeader = () => {
    return (
        <div className="text-white w-full">
            <div className="flex items-center justify-between border-b border-b-gray-700 pb-4">
                <HeaderTagLine>
                    <h1 className="font-bold">Overview</h1>
                    <p className="text-sm text-white/80">View your team's trades and transactions.</p>
                </HeaderTagLine>
                <Button variant={"ghost"} size={"icon"} className="lg:hidden size-8 hover:bg-primary-700">
                    <Menu className="text-white/80" />
                </Button>
                <div className="flex items-center gap-2 ml-auto">
                    <div className="rounded-full overflow-hidden">
                        <img src="/assets/images/app-avenue-logo.png" alt="profile image" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold">HeroCoder</span>
                        <span className="text-xs">annesantii@maimail.com</span>
                    </div>
                    <Button variant={"ghost"} size={"icon"} className="text-white size-8 hover:bg-gray-500">
                        <LogOut className="text-white/80" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader