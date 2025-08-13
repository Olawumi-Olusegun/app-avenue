import AppSubLinks from "./app-sublinks"
import { Button } from "@/components/ui/button"
import { Paperclip, Smile } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import DashboardHeader from "@/components/shared/DashboardHeader"

const AppManagementForum = () => {
    return (
        <>
          <DashboardHeader>
            <div className="flex items-center gap-1">
             <img src="/assets/images/bifrost_logo.png" alt="bifrost" />
             <h1 className="font-bold">Bifrost</h1>
            </div>
           </DashboardHeader>
        <div className="w-full flex flex-col gap-5 my-5 relative">
            <AppSubLinks />
            <div className="w-full flex flex-col gap-5">
                <div className="flex items-center">
                    <div className="h-px w-full bg-gray-600"></div>
                    <div className="text-xs text-white/70 px-2">Today</div>
                    <div className="h-px w-full bg-gray-600"></div>
                </div>
            </div>
            <div className="flex flex-col gap-5 w-full mb-[200px]">

                <div className="self-start flex items-center gap-3 lg:max-w-[60%]">
                    <div className="self-start">
                        <img src="/assets/images/bifrost_logo.png" alt="bifrost" className="size-full" />
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <div className="flex flex-col gap-2 w-full">
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-white/70">Marvin McKinney</span>
                                <span className="text-xs text-white/70">Thursday 11:44am</span>
                            </div>
                            <p className="text-sm bg-primary-800 text-white/70 p-3 rounded-md">
                                I'd love an app that intelligently curates local events based on my interests and my friends' availability, then helps us coordinate plans and even book tickets directly. Think a social event planner on steroids
                            </p>
                        </div>
                    </div>
                </div>
                <div className="self-start flex items-center gap-3 lg:max-w-[60%]">
                    <div className="self-start">
                        <img src="/assets/images/bifrost_logo.png" alt="bifrost" className="size-full" />
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <div className="flex flex-col gap-2 w-full">
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-white/70">Marvin McKinney</span>
                                <span className="text-xs text-white/70">Thursday 11:44am</span>
                            </div>
                            <p className="text-sm bg-primary-800 text-white/70 p-3 rounded-md">
                                I'd love an app that intelligently curates local events based on my interests and my friends' availability, then helps us coordinate plans and even book tickets directly. Think a social event planner on steroids
                            </p>
                        </div>
                    </div>
                </div>

                <div className="self-end flex items-center gap-3 lg:max-w-[60%]">
                    <div className="flex flex-col gap-3 w-full">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-white/70 self-end">You</span>
                            <span className="text-xs text-white/70 self-end">Thursday 11:44am</span>
                        </div>
                        <p className="text-sm text-white/70 p-3 rounded-md border border-primary-800">
                            Good timing — was just looking at this.
                        </p>
                    </div>
                </div>
                <div className="self-start flex items-center gap-3 lg:max-w-[60%]">
                    <div className="self-start">
                        <img src="/assets/images/bifrost_logo.png" alt="bifrost" className="size-full" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-white/70">Marvin McKinney</span>
                            <span className="text-xs text-white/70">Thursday 11:44am</span>
                        </div>
                        <div className="w-[353px] h-[200px] rounded-md overflow-hidden bg-[#343A40]">
                            <img src="/assets/images/cal.png" alt="cal" className="w-full h-full rounded-md object-cover p-5" />
                        </div>
                        <span className="text-xs text-white/70">2.6 MB</span>
                    </div>
                </div>
            </div>
            <div className="fixed flex flex-col gap-1 bottom-0 left-3 right-3 lg:left-6 lg:right-6 bg-primary-500 overflow-hidden rounded-md lg:ml-[240px]">
                <div className="relative overflow-hidden">
                    <Textarea className="h-[150px] resize-none text-white/80 pb-10 outline-none border-primary-600" placeholder="Type your message..."></Textarea>
                    <div className="absolute bottom-0 w-[95%] lg:w-[98%] left-0 right-0 m-1 bg-primary-500 flex items-center justify-end py-2">
                        <Button size={"icon"} className="size-8 bg-transparent text-white px-4 py-2 rounded-md">
                            <Paperclip size={15} />
                        </Button>
                        <Button size={"icon"} className="size-8 bg-transparent text-white px-4 py-2 rounded-md">
                            <Smile size={15} />
                        </Button>
                        <Button className="text-amber-500 px-4 py-2 rounded-md bg-transparent ">Send</Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AppManagementForum