import { Outlet } from "react-router-dom"
import DashboardSidebar from "../shared/DashboardSidebar"

const MainLayout = () => {
    return (
        <div className="w-full relative min-h-dvh bg-primary-950">
            <DashboardSidebar />
            <main className="relative w-full min-h-dvh lg:ml-[240px] lg:w-[calc(100%_-_240px)] p-4 lg:p-6">
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout