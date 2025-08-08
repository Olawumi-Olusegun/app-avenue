import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

const SidebarLogo = ({ className }: { className?: string }) => {
    return (
        <Link to={"/"} className={cn(`flex items-center gap-3 my-3 rounded-md w-fit`, className)}>
            <div className="bg-white rounded-md size-8 ">
                <img src="/assets/images/app-avenue-logo.png" alt="app avenue logo" className="scale-75" />
            </div>
            <span className="text-white text-sm -ml-2">AppAvenue Developer</span>

        </Link>
    )
}

export default SidebarLogo