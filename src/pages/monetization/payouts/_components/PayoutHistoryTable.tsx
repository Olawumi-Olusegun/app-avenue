
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
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
        ref: "#101112",
        date: "September 24, 2017",
        price: "$9,450",
        status: "Processing",
    },
    {
        ref: "#223344",
        date: "October 24, 2018",
        price: "$2,700",
        status: "Processing",
    },
    {
        ref: "#101112",
        date: "October 30, 2017",
        price: "$3,250",
        status: "Processing",
    },
    {
        ref: "#445566",
        date: "May 31, 2015",
        price: "$7,000",
        status: "Completed",
    },
    {
        ref: "#456789",
        date: "August 7, 2017",
        currency: "IDR",
        price: "$2,100",
        status: "Completed",
    },
]

const PayoutHistoryTable = () => {
    return (
        <>
        <ScrollArea>
            <Table>
                <TableHeader className="bg-primary-700">
                    <TableRow className="border-b-gray-600 hover:bg-primary-700 divide-x divide-gray-600">
                        <TableHead className="w-[150px] text-white">Ref</TableHead>
                        <TableHead className="w-[150px] text-white">Date</TableHead>
                        <TableHead className="w-[150px] text-white">Price</TableHead>
                        <TableHead className="w-[150px] text-white">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.ref} className="border-b-gray-600 hover:bg-primary-600/50 divide-x divide-gray-600 ">
                            <TableCell className="text-white">{invoice.ref}</TableCell>
                            <TableCell className="text-white">{invoice.date}</TableCell>
                            <TableCell className="text-white">{invoice.price}</TableCell>
                            <TableCell className="text-white">{invoice.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
       
        </>
    )
}

export default PayoutHistoryTable;