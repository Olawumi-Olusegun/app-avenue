import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const invoices = [
    {
        invoice: "Bifrost",
        paymentStatus: "16415",
        totalAmount: "$569,123",
        paymentMethod: "877",
        averageRating: "4.0",
        appLogo: "/assets/images/bifrost_logo.png",
    },
    {
        invoice: "Maimail",
        paymentStatus: "28200",
        totalAmount: "$123,456",
        paymentMethod: "703",
        averageRating: "3.0",
        appLogo: "/assets/images/bifrost_logo.png",
    },
    {
        invoice: "Hourglass",
        paymentStatus: "45904",
        totalAmount: "$566,776",
        paymentMethod: "177",
        averageRating: "3.5",
        appLogo: "/assets/images/bifrost_logo.png",
    },
    {
        invoice: "Quotient",
        paymentStatus: "16627",
        totalAmount: "$567,098",
        paymentMethod: "994",
        averageRating: "4.5",
        appLogo: "/assets/images/bifrost_logo.png",
    },
    {
        invoice: "Layers",
        paymentStatus: "50364",
        totalAmount: "$123,098",
        paymentMethod: "561",
        averageRating: "5.0",
        appLogo: "/assets/images/bifrost_logo.png",
    },
]

const AppPerformanceTable = () => {
    return (
        <ScrollArea>
            <Table>
                <TableHeader className="bg-primary-700">
                    <TableRow className="border-b-gray-600 hover:bg-primary-700">
                        <TableHead className="w-[150px] text-white">App</TableHead>
                        <TableHead className="w-[150px] text-white">Downloads</TableHead>
                        <TableHead className="w-[150px] text-white">Revenue</TableHead>
                        <TableHead className="w-[150px] text-white">Active Users</TableHead>
                        <TableHead className="w-[150px] text-white">Average Rating</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice} className="border-b-gray-600 hover:bg-primary-600/50">
                            <TableCell className="font-medium flex items-center gap-2 text-white">
                                <div className="size-8">
                                    <img src={invoice.appLogo} alt="bifrost_logo" className="pointer-events-none h-full w-full object-center" />
                                </div>
                                <div className="">{invoice.invoice}</div>
                            </TableCell>
                            <TableCell className="text-white">{invoice.paymentStatus}</TableCell>
                            <TableCell className="text-white">{invoice.paymentMethod}</TableCell>
                            <TableCell className="text-white">{invoice.totalAmount}</TableCell>
                            <TableCell className="text-white">{invoice.averageRating}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}

export default AppPerformanceTable;