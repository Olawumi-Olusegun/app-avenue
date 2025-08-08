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
    version: "Bifrost",
    start_date: "Sep 24, 2017",
    end_start: "Sep 24, 2017",
    testers: "1374",
    status: "Active",
    platform: "Android",
  },
  {
    version: "Maimail",
    start_date: "Sep 24, 2017",
    end_start: "Sep 24, 2017",
    testers: "1374",
    status: "Active",
    platform: "Harmony OS",
  },
  {
    version: "Hourglass",
    start_date: "Sep 24, 2017",
    end_start: "Sep 24, 2017",
    testers: "1374",
    status: "Paused",
    platform: "Windows",
  },
  {
    version: "Quotient",
    start_date: "Sep 24, 2017",
    end_start: "Sep 24, 2017",
    testers: "1374",
    status: "Completed",
    platform: "Harmony OS",
  },
  {
    version: "Layers",
    start_date: "Sep 24, 2017",
    end_start: "Sep 24, 2017",
    testers: "1374",
    status: "Completed",
    platform: "Android",
  },
]

const BetaTestingTable = () => {
  return (
    <ScrollArea className="w-full text-white/80">
      <Table>
        <TableHeader className="bg-primary-700">
          <TableRow className="border-b-gray-600 hover:bg-primary-700">
            <TableHead className="w-[150px] text-white/80 px-6">Version</TableHead>
            <TableHead className="w-[150px] text-white/80 px-6">Start Date</TableHead>
            <TableHead className="w-[150px] text-white/80 px-6">End Date</TableHead>
            <TableHead className="w-[150px] text-white/80 px-6">Tester</TableHead>
            <TableHead className="w-[150px] text-white/80 px-6">Status</TableHead>
            <TableHead className="w-[150px] text-white/80 px-6">Platform</TableHead>
            <TableHead className="w-[150px] text-white/80 px-6"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.version} className="border-b-gray-600 hover:bg-primary-600/50">
              <TableCell className="px-6 font-medium  text-white/80">{invoice.version}</TableCell>
              <TableCell className="px-6 text-white/80">{invoice.start_date}</TableCell>
              <TableCell className="px-6 text-white/80">{invoice.end_start}</TableCell>
              <TableCell className="px-6 text-white/80">{invoice.testers}</TableCell>
              <TableCell className="px-6 text-white/80">
                <div className="flex items-center gap-1.5">
                  <span className={`inline-flex items-center justify-center w-2 h-2 rounded-full ${invoice.status === "Active" ? "bg-yellow-500" : invoice.status === "Paused" ? "bg-gray-500" : "bg-green-500"}`}></span>
                  <span>{invoice.status}</span>
                </div>
              </TableCell>
              <TableCell className="px-6 text-white/80">{invoice.platform}</TableCell>
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

export default BetaTestingTable;