import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

const AppLogo = ({ className }: { className?: string }) => {
    return (
        <Link to={"/"} className={cn(`bg-white p-2 rounded-md`, className)}>
            <img src="./assets/images/app-avenue-logo.png" alt="app avenue logo" />
        </Link>
    )
}

export default AppLogo