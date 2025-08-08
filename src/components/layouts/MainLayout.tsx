import { Outlet } from "react-router-dom"
import DashboardHeader from "../shared/DashboardHeader"
import DashboardSidebar from "../shared/DashboardSidebar"

const MainLayout = () => {
    return (
        <div className="w-full relative min-h-dvh bg-primary-950">
            <DashboardSidebar />
            <main className="relative min-h-dvh grid grid-cols-1 grid-rows-[auto_1fr] place-items-start w-full lg:w-[calc(100%_-_240px)] lg:ml-[240px] p-4 lg:p-6">
                <DashboardHeader />
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout