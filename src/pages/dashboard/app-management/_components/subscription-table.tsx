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
    description: "Includes up to 6 users, 24GB storage space and access to all fea...",
    price: "₦100,000",
    billing_period: "Yearly",
    last_updated: "1 Feb, 2020",
  },
  {
    name: "Tier 2",
    description: "Includes up to 6 users, 24GB storage space and access to all fea...",
    price: "₦100,000",
    billing_period: "Yearly",
    last_updated: "1 Feb, 2020",
  },
  {
    name: "Tier 3",
    description: "Includes up to 6 users, 24GB storage space and access to all fea...",
    price: "₦100,000",
    billing_period: "Yearly",
    last_updated: "1 Feb, 2020",
  },
  {
    name: "Tier 4",
    description: "Includes up to 6 users, 24GB storage space and access to all fea...",
    price: "₦100,000",
    billing_period: "Yearly",
    last_updated: "1 Feb, 2020",
  },
  {
    name: "Tier 5",
    description: "Includes up to 6 users, 24GB storage space and access to all fea...",
    price: "₦100,000",
    billing_period: "Yearly",
    last_updated: "1 Feb, 2020",
  },
]

const SubscriptionTable = () => {
  return (
    <ScrollArea className="w-full text-white/80">
      <Table>
        <TableHeader className="bg-primary-900">
          <TableRow className="border-b-gray-600 hover:bg-primary-900/100">
            <TableHead className="w-[150px] text-white/80 px-6">Version</TableHead>
            <TableHead className="w-[150px] text-white/80 px-6">Start Date</TableHead>
            <TableHead className="w-[150px] text-white/80 px-6">End Date</TableHead>
            <TableHead className="w-[150px] text-white/80 px-6">Tester</TableHead>
            <TableHead className="w-[150px] text-white/80 px-6">last_updated</TableHead>
            <TableHead className="w-[150px] text-white/80 px-6">Platform</TableHead>
            <TableHead className="w-[150px] text-white/80 px-6"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.name} className="border-b-gray-600 hover:bg-primary-900/50">
              <TableCell className="px-6 font-medium  text-white/80">{invoice.name}</TableCell>
              <TableCell className="px-6 text-white/80">{invoice.description}</TableCell>
              <TableCell className="px-6 text-white/80">{invoice.price}</TableCell>
              <TableCell className="px-6 text-white/80">{invoice.billing_period}</TableCell>
              <TableCell className="px-6 text-white/80">{invoice.last_updated}</TableCell>
              <TableCell className="px-6 text-white/80">
                <Link to={`/`} className="text-amber-400">View</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export default SubscriptionTable;