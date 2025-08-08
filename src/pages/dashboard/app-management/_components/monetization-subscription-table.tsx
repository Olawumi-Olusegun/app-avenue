import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Link } from "react-router-dom";

const invoices = [
    {
        name: "Tier 1",
        description: "Set expiration, password protection, and track downloads for sent attachments.",
        price: "#7,000",
        billingPeriod: "Yearly",
        lastUpdated: "1 Feb, 2020",
    },
    {
        name: "Tier 2",
        description: "Set expiration, password protection, and track downloads for sent attachments.",
        price: "#7,000",
        billingPeriod: "Yearly",
        lastUpdated: "1 Feb, 2020",
    },
    {
        name: "Tier 3",
        description: "Set expiration, password protection, and track downloads for sent attachments.",
        price: "#7,000",
        billingPeriod: "Yearly",
        lastUpdated: "1 Feb, 2020",
    },
    {
        name: "Tier 4",
        description: "Set expiration, password protection, and track downloads for sent attachments.",
        price: "#7,000",
        billingPeriod: "Yearly",
        lastUpdated: "1 Feb, 2020",
    },
]

const MonetizationSubscriptionTable = () => {
    return (
        <ScrollArea className="w-full text-white/80">
            <Table>
                <TableHeader className="bg-primary-700">
                    <TableRow className="border-b-gray-600 hover:bg-primary-700 divide-x divide-gray-600">
                        <TableHead className="w-[150px] text-white/80 px-6">Name</TableHead>
                        <TableHead className="w-[150px] text-white/80 px-6">Description</TableHead>
                        <TableHead className="w-[150px] text-white/80 px-6">Price</TableHead>
                        <TableHead className="w-[150px] text-white/80 px-6">Billing Period</TableHead>
                        <TableHead className="w-[150px] text-white/80 px-6">Last Updated</TableHead>
                        <TableHead className="w-[150px] text-white/80 px-6"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.name} className="border-b-gray-600 hover:bg-primary-600/50 divide-x divide-gray-600">
                            <TableCell className="px-6 font-medium  text-white/80">{invoice.name}</TableCell>
                            <TableCell className="px-6 text-white/80 truncate max-w-[350px]">{invoice.description}</TableCell>
                            <TableCell className="px-6 text-white/80">{invoice.price}</TableCell>
                            <TableCell className="px-6 text-white/80">{invoice.billingPeriod}</TableCell>
                            <TableCell className="px-6 text-white/80">{invoice.lastUpdated}</TableCell>
                            <TableCell className="px-6 text-white/80">
                                <Link to={`/`} className="text-amber-400">Edit</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}

export default MonetizationSubscriptionTable;