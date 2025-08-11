import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const DeveloperForum = () => {
    return (
        <div className="w-full">
            <section className="w-full relative px-6 rounded-md overflow-hidden mt-6 bg-[url('/assets/images/featured-suggestion-hero-bg.png')] bg-cover bg-center bg-no-repeat h-[237px] flex items-center">
                <div className="flex flex-col gap-4 w-full mt-20 z-10 lg:max-w-[500px]">
                    <h1 className="text-white font-semibold text-[18px] leading-2">Welcome to AppAvenue Developer Forum</h1>
                    <p className="text-white/80 text-[12px] text-sm"> web browsing by seamlessly integrating location intelligence, context-aware tools, and privacy-first principles to enhance productivity, personalization, and security. </p>
                    <div className="relative">
                        <Input className="pl-8 bg-primary-500 " />
                        <Search size={18} className="absolute left-2 top-1/2 -translate-y-1/2" />
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black from-40% to-transparent"></div>
            </section>
            <section className="w-full mt-6 flex flex-col gap-4">
                <div className="w-full flex flex-wrap items-center justify-between">
                    <h2 className="font-semibold">Popular Discussions</h2>
                    <Button className="bg-amber-500 hover:bg-amber-600 text-black">Start New Discussion</Button>
                </div>
                <div className="flex items-center gap-2">
                    <div className="size-10 rounded-full overflow-hidden self-start">
                        <img src="/assets/images/user-image.png" alt="user-image" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <p className="">What's an app you wish existed but doesn't? Describe its key features!</p>
                        <div className="flex items-center justify-between gap-3 flex-wrap text-sm">
                            <span>by <span className="text-amber-500">Marvin McKinney</span> • 24 mins ago </span>
                            <span>454 Replies • 2430 Views</span>
                        </div>
                        <p className="">I'd love an app that intelligently curates local events based on my interests and my friends' availability, then helps us coordinate plans and e...</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="size-10 rounded-full overflow-hidden self-start">
                        <img src="/assets/images/user-image.png" alt="user-image" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <p className="">What's an app you wish existed but doesn't? Describe its key features!</p>
                        <div className="flex items-center justify-between gap-3 flex-wrap text-sm">
                            <span>by <span className="text-amber-500">Marvin McKinney</span> • 24 mins ago </span>
                            <span>454 Replies • 2430 Views</span>
                        </div>
                        <p className="">I'd love an app that intelligently curates local events based on my interests and my friends' availability, then helps us coordinate plans and e...</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="size-10 rounded-full overflow-hidden self-start">
                        <img src="/assets/images/user-image.png" alt="user-image" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <p className="">What's an app you wish existed but doesn't? Describe its key features!</p>
                        <div className="flex items-center justify-between gap-3 flex-wrap text-sm">
                            <span>by <span className="text-amber-500">Marvin McKinney</span> • 24 mins ago </span>
                            <span>454 Replies • 2430 Views</span>
                        </div>
                        <p className="">I'd love an app that intelligently curates local events based on my interests and my friends' availability, then helps us coordinate plans and e...</p>
                    </div>
                </div>
            </section>
            <div className="h-px w-full bg-primary-500 my-6" />
            <section className="w-full mt-12 flex flex-col gap-4">
                <div className="w-full flex flex-wrap items-center justify-between">
                    <h2 className="font-semibold">Recent Discussions</h2>
                    <Button className="bg-amber-500 hover:bg-amber-600 text-black">Start New Discussion</Button>
                </div>
                <div className="flex items-center gap-2">
                    <div className="size-10 rounded-full overflow-hidden self-start">
                        <img src="/assets/images/user-image.png" alt="user-image" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <p className="">What's an app you wish existed but doesn't? Describe its key features!</p>
                        <div className="flex items-center justify-between gap-3 flex-wrap text-sm">
                            <span>by <span className="text-amber-500">Marvin McKinney</span> • 24 mins ago </span>
                            <span>454 Replies • 2430 Views</span>
                        </div>
                        <p className="">I'd love an app that intelligently curates local events based on my interests and my friends' availability, then helps us coordinate plans and e...</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="size-10 rounded-full overflow-hidden self-start">
                        <img src="/assets/images/user-image.png" alt="user-image" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <p className="">What's an app you wish existed but doesn't? Describe its key features!</p>
                        <div className="flex items-center justify-between gap-3 flex-wrap text-sm">
                            <span>by <span className="text-amber-500">Marvin McKinney</span> • 24 mins ago </span>
                            <span>454 Replies • 2430 Views</span>
                        </div>
                        <p className="">I'd love an app that intelligently curates local events based on my interests and my friends' availability, then helps us coordinate plans and e...</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="size-10 rounded-full overflow-hidden self-start">
                        <img src="/assets/images/user-image.png" alt="user-image" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <p className="">What's an app you wish existed but doesn't? Describe its key features!</p>
                        <div className="flex items-center justify-between gap-3 flex-wrap text-sm">
                            <span>by <span className="text-amber-500">Marvin McKinney</span> • 24 mins ago </span>
                            <span>454 Replies • 2430 Views</span>
                        </div>
                        <p className="">I'd love an app that intelligently curates local events based on my interests and my friends' availability, then helps us coordinate plans and e...</p>
                    </div>
                </div>
            </section>
            <div className="h-px w-full bg-primary-500 my-6" />
            <div className="flex items-center justify-end h-5 w-full">
                <span className="font-bold">Pagination</span>
            </div>
        </div>
    )
}

export default DeveloperForum