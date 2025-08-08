import { NavLink } from "react-router-dom";

const buttonLists = [
    { title: "Overview", href: "/app-management/overview" },
    { title: "Testing", href: "/app-management/testing" },
    { title: "Releases", href: "/app-management/releases" },
    { title: "Analytics", href: "/app-management/analytics" },
    { title: "Reviews & Ratings", href: "/app-management/reviews-and-rating" },
    { title: "Monetization", href: "/app-management/monetization" },
    { title: "Verification", href: "/app-management/verification" },
    { title: "Forum", href: "/app-management/forum" },
];

const AppSubLinks = () => {

    return (
        <section className="w-full flex flex-wrap items-center gap-2">
            {buttonLists.map((item, index) => (
                <NavLink key={index} to={item.href} className={({ isActive }) =>
                    `text-sm flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-primary-500 hover:text-white transition-colors duration-300 ${isActive ? 'text-white bg-primary-400' : 'bg-primary-600 text-primary-300'}`
                }>
                    {item.title}
                </NavLink>
            ))}
        </section>
    )
}

export default AppSubLinks