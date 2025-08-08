import { Bell, ChartCandlestick, Code, CreditCard, LayoutDashboard, Library, MessageSquare, Percent, Search, UserRound, Vote } from "lucide-react"
import { Input } from "../ui/input"
import SidebarLogo from "./SidebarLogo"
import { NavLink } from "react-router-dom"

const DashboardSidebar = () => {
    return (
        <aside className="border-r border-r-gray-700 text-white px-3 fixed top-0 left-0 hidden lg:block h-full w-[240px] bg-primary-700 z-10">
            <div className="flex flex-col gap-y-2">
                <SidebarLogo />
                <div className="relative mb-2">
                    <Input className="pl-8 text-white/80 bg-primary-500 placeholder:text-white/70" placeholder="Search" />
                    <Search size={18} className="absolute top-1/2 -translate-y-1/2 left-2 text-white/70" />
                </div>
                <div className="flex flex-col gap-1 mt-1">
                    <span className="text-sm font-medium">Dashboard</span>
                    <NavLink to={"/overview"} className={({ isActive }) => `flex items-center gap-1 py-1.5 px-3 rounded-sm ${isActive ? 'bg-primary-400' : 'hover:bg-primary-600'} duration-300`}>
                        <LayoutDashboard size={18} />
                        <span className="text-[12px]">Overview</span>
                    </NavLink>
                    <NavLink to={"/app-management"} className={({ isActive }) => `flex items-center gap-1 py-1.5 px-3 rounded-sm ${isActive ? 'bg-primary-400' : 'hover:bg-primary-600'} duration-300`}>
                        <Library size={18} />
                        <span className="text-[12px]">App Management</span>
                    </NavLink>
                </div>
                <div className="flex flex-col gap-1 mt-1">
                    <span className="text-sm font-medium">Developer Tools</span>
                    <NavLink to={"/developer-tools/environment"} className={({ isActive }) => `flex items-center gap-1 py-1.5 px-3 rounded-sm ${isActive ? 'bg-primary-400' : 'hover:bg-primary-600'} duration-300`}>
                        <Code size={18} />
                        <span className="text-[12px]">Development Environment</span>
                    </NavLink>
                </div>
                <div className="flex flex-col gap-1 mt-1">
                    <span className="text-sm font-medium">Community</span>
                    <NavLink to={"/community/developer-forum"} className={({ isActive }) => `flex items-center gap-1 py-1.5 px-3 rounded-sm ${isActive ? 'bg-primary-400' : 'hover:bg-primary-600'} duration-300`}>
                        <MessageSquare size={18} />
                        <span className="text-[12px]">Developer Forums</span>
                    </NavLink>
                    <NavLink to={"/community/feature-suggestions"} className={({ isActive }) => `flex items-center gap-1 py-1.5 px-3 rounded-sm ${isActive ? 'bg-primary-400' : 'hover:bg-primary-600'} duration-300`}>
                        <Vote size={18} />
                        <span className="text-[12px]">Feature Suggestions</span>
                    </NavLink>
                </div>
                <div className="flex flex-col gap-1 mt-1">
                    <span className="text-sm font-medium">Monetization</span>
                    <NavLink to={"/monetization/revenue-overview"} className={({ isActive }) => `flex items-center gap-1 py-1.5 px-3 rounded-sm ${isActive ? 'bg-primary-400' : 'hover:bg-primary-600'} duration-300`}>
                        <ChartCandlestick size={18} />
                        <span className="text-[12px]">Revenue Overview</span>
                    </NavLink>
                    <NavLink to={"/monetization/sales-and-purchases"} className={({ isActive }) => `flex items-center gap-1 py-1.5 px-3 rounded-sm ${isActive ? 'bg-primary-400' : 'hover:bg-primary-600'} duration-300`}>
                        <Percent size={18} />
                        <span className="text-[12px]">Sales & Purchases</span>
                    </NavLink>
                    <NavLink to={"/monetization/payouts"} className={({ isActive }) => `flex items-center gap-1 py-1.5 px-3 rounded-sm ${isActive ? 'bg-primary-400' : 'hover:bg-primary-600'} duration-300`}>
                        <CreditCard size={18} />
                        <span className="text-[12px]">Payouts</span>
                    </NavLink>
                </div>
                <div className="flex flex-col gap-1 mt-1">
                    <span className="text-sm font-medium">Account Settings</span>
                    <NavLink to={"/account-settings/developer-information"} className={({ isActive }) => `flex items-center gap-1 py-1.5 px-3 rounded-sm ${isActive ? 'bg-primary-400' : 'hover:bg-primary-600'} duration-300`}>
                        <UserRound size={18} />
                        <span className="text-[12px]">Developer Information</span>
                    </NavLink>
                    <NavLink to={"/account-settings/notification"} className={({ isActive }) => `flex items-center gap-1 py-1.5 px-3 rounded-sm ${isActive ? 'bg-primary-400' : 'hover:bg-primary-600'} duration-300`}>
                        <Bell size={18} />
                        <span className="text-[12px]">Notification</span>
                    </NavLink>
                </div>
            </div>
        </aside>
    )
}

export default DashboardSidebar