import { Button } from "@/components/ui/button"
import { Bug, GitFork, TabletSmartphone } from "lucide-react"

const DeveloperEnvironment = () => {
    return (
        <div className="grid grid-cols-[auto_1fr_auto] w-full min-h-full">
            <div className="h-full w-[290px] bg-[#1B1F22]">
                <div className="h-10 w-full col-span-12 border-b border-b-primary-500">
                    <span className="text-sm p-2">Project Explorer</span>
                </div>
            </div>
            <div className="h-full bg-[#141719] grid grid-cols-1 grid-rows-[auto_1fr_auto]">
                <div className="h-10 p-2 w-full bg-[#1B1F22]">
                    <span className="text-sm">Project Explorer</span>
                </div>
                <div className="p-5">CODE SECTION</div>
                <div className="h-[200px] bg-[#141719] border-t border-t-primary-500 flex flex-col">
                    <div className="flex items-center gap-2">
                        <Button className="bg-transparent h-7 px-1 text-xs rounded-none border-b border-b-amber-600 text-primary-300">
                            OUTPUT
                        </Button>
                        <Button className="bg-transparent h-7 px-1 text-xs rounded-none text-primary-300">
                            TERMINAL
                        </Button>
                        <Button className="bg-transparent h-7 px-1 text-xs rounded-none text-primary-300">
                            DEBUG
                        </Button>
                    </div>
                    <div className="flex-1 bg-[#141719] p-2">
                        TERMINAL
                    </div>
                </div>

            </div>
            <div className="h-full w-[48px] flex flex-col items-center border-l border-l-primary-500 bg-[#1B1F22] text-primary-500">
                <Button className="bg-transparent size-10 rounded-sm text-primary-300 mt-10 p-0 hover:bg-primary-600">
                    <Bug size={30} />
                </Button>
                <Button className="bg-transparent size-10 rounded-sm text-primary-300 p-0 hover:bg-primary-600">
                    <GitFork size={30} />
                </Button>
                <Button className="bg-transparent size-10 rounded-sm text-primary-300 p-0 hover:bg-primary-600">
                    <TabletSmartphone size={30} />
                </Button>
            </div>
        </div>
    )
}

export default DeveloperEnvironment