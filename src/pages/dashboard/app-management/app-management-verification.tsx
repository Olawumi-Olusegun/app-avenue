import { Button } from "@/components/ui/button"
import AppSubLinks from "./app-sublinks"
import { CircleQuestionMark, SquareChevronDown } from "lucide-react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const invoices = [
    {
        status: "Verified",
        start_date: "Dec 4, 2019 21:42",
    },
    {
        status: "In Review",
        start_date: "Dec 4, 2019 21:42",
    },
    {
        status: "Pending Review",
        start_date: "Dec 4, 2019 21:42",
    },
    {
        status: "Pending Review",
        start_date: "Dec 4, 2019 21:42",
    },
    {
        status: "Verified",
        start_date: "Dec 4, 2019 21:42",
    },
]


const AppManagementVerification = () => {

    return (
        <div className="w-full flex flex-col gap-5 my-5">
            <AppSubLinks />
            <section className="w-full flex flex-col bg-primary-500 rounded-md border border-gray-800 overflow-hidden">
                <div className="w-full flex items-center justify-between px-6 py-3">
                    <div className="flex flex-col gap-1 text-white">
                        <span className="font-bold">Verification History</span>
                        <span className="text-xs text-white/70">These companies have purchased in the last 12 months.</span>
                    </div>
                    <Button size={"icon"} className="size-8 bg-transparent">
                        <CircleQuestionMark size={15} />
                    </Button>
                </div>
                <div className="flex flex-col w-full">
                    <h1 className="font-semibold text-white bg-primary-700 text-shadow-muted-foreground px-6 py-3">Platform</h1>
                </div>
                <div className="flex flex-col w-full">
                    <div className="w-full flex flex-col gap-3">
                        <div className="flex items-center gap-1 text-white bg-primary-500 px-6 py-3">
                            <SquareChevronDown size={15} />
                            <span>Android</span>
                        </div>
                        <div className="w-full flex-col px-12">
                            <span className="text-sm text-white">status</span>
                            <div className="flex flex-col gap-2 -mx-12">
                                <div className="flex items-center gap-2 border-b text-white/70 border-b-gray-600 px-12 py-2">
                                    <SquareChevronDown size={15} />
                                    <span className="text-sm">v2.1.5</span>
                                </div>
                                <div className="flex items-center gap-2 border-b text-white/70 border-b-gray-600 px-12 py-2">
                                    <SquareChevronDown size={15} />
                                    <span className="text-sm">v2.1.5</span>
                                </div>
                                <div className="flex items-center gap-2 border-b text-white/70 border-b-gray-600 px-12 py-2">
                                    <SquareChevronDown size={15} />
                                    <span className="text-sm">v2.1.5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full">
                    <div className="w-full flex flex-col gap-3">
                        <div className="flex items-center gap-1 text-white bg-primary-700 px-6 py-3">
                            <SquareChevronDown size={15} />
                            <span>Harmony OS</span>
                        </div>
                        <div className="w-full flex-col px-12">
                            <span className="text-sm text-white">status</span>
                            <div className="flex flex-col gap-2 -mx-12">
                                <div className="flex items-center gap-2 border-b text-white/70 border-b-gray-600 px-12 py-2">
                                    <SquareChevronDown size={15} />
                                    <span className="text-sm">v2.1.5</span>
                                </div>
                                <div className="w-full bg-primary-950">
                                    <ScrollArea className="w-full text-white/80">
                                        <Table>
                                            <TableHeader className="bg-primary-700">
                                                <TableRow className="border-b-gray-600 hover:bg-primary-900/100">
                                                    <TableHead className="w-[150px] text-white/80 lg:px-20">Status</TableHead>
                                                    <TableHead className="w-[150px] text-white/80 lg:px-20">Start Date</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {invoices.map((invoice, index) => (
                                                    <TableRow key={index} className="border-b-gray-600 hover:bg-primary-900/50">
                                                        <TableCell className="font-medium flex items-center gap-2 text-white/80 lg:px-20">
                                                            <div className="size-2 rounded-full bg-gray-500"></div>
                                                            <span>{invoice.status}</span>
                                                        </TableCell>
                                                        <TableCell className="text-white/80 lg:px-20 ">{invoice.start_date}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                        <ScrollBar orientation="horizontal" />
                                    </ScrollArea>
                                </div>
                                <div className="flex items-center gap-2 border-b text-white/70 border-b-gray-600 px-12 py-2">
                                    <SquareChevronDown size={15} />
                                    <span className="text-sm">v2.1.5</span>
                                </div>
                                <div className="flex items-center gap-2 border-b text-white/70 border-b-gray-600 px-12 py-2">
                                    <SquareChevronDown size={15} />
                                    <span className="text-sm">v2.1.5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default AppManagementVerification