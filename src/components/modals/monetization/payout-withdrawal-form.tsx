import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const PayoutWithdrawalForm = () => {
  return (
    <>
       <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-amber-500 text-black hover:bg-amber-600">Withdraw</Button>
      </SheetTrigger>
      <SheetContent className="bg-primary-600 text-white">
        <SheetHeader className="border-b border-b-primary-500">
          <SheetTitle>Withdraw Funds</SheetTitle>
          <SheetDescription>Initiate Payout Request</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-center gap-3 w-full">
            <span className="text-xs">Available Balance</span>
            <h1 className="font-bold text-3xl">$5,869,123</h1>
        </div>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
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

        </div>
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

export default PayoutWithdrawalForm