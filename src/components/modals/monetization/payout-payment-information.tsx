import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2 } from "lucide-react"

const invoices = [
  {
    invoice: "Kuda Bank ********1234",
  },
  {
    invoice: "UBA  ********1330",
  },
  {
    invoice: "FCMB  ********3928",
  },
  {
    invoice: "Moniepoint ********0934",
  },
]

const PayoutPaymentInformation = () => {
  return (
    <>
       <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-amber-500 text-black hover:bg-amber-600">Manage Payment Information</Button>
      </SheetTrigger>
      <SheetContent className="bg-primary-600 text-white">
        <SheetHeader className="border-b border-b-primary-500">
          <SheetTitle>Manage Payment Information</SheetTitle>
          <SheetDescription>Add and manage the bank accounts o where you want to receive your AppAvenue earnings. </SheetDescription>
        </SheetHeader>
        <div className="w-full p-4">
            <div className="w-full rounded-md overflow-hidden border border-primary-400">
            <Table>
            <TableHeader>
                <TableRow className="hover:bg-primary-600 border-primary-400">
                <TableHead className="text-white bg-primary-600">Payment Method</TableHead>
                <TableHead className="w-20 border-l border-primary-400"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="bg-primary-500">
                {invoices.map((invoice) => (
                <TableRow key={invoice.invoice} className="hover:bg-primary-500 border-primary-400">
                    <TableCell className="font-medium flex-1">{invoice.invoice}</TableCell>
                    <TableCell className="flex items-center justify-center border-l border-primary-400">
                        <Button size={"icon"} className="size-8 bg-transparent hover:bg-primary-600 text-amber-500">
                            <Trash2 />
                        </Button>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
                </Table>
            </div>
        </div>
        {/* <div className="grid flex-1 auto-rows-min gap-6 px-4">
        <div className="text-sm mt-6">Withdrawa Full Available Balance ($5,869,123)</div>
          <div className="grid gap-3">
            <Label htmlFor="amount">Amount to Withraw</Label>
            <Input id="amount" />
            <span className="text-xs">Must be between $100.00 to $1,250,75</span>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <h2 className="font-bold">Select Payout Method</h2>
            <div className="text-sm">Bank transfer (Kuda Bank ******1234)</div>
            <div className="text-sm">Bank transfer (UBA ******1330)</div>
            <div className="text-sm">Bank transfer (FCMB ******3928)</div>
            <div className="text-sm">Bank transfer (Moniepoint ******0934)</div>
        </div>
        </div> */}
        <SheetFooter>
          <SheetClose asChild>
            <Button className="bg-amber-500 text-black hover:bg-amber-600">Confirm Withdrawal</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </>
  )
}

export default PayoutPaymentInformation