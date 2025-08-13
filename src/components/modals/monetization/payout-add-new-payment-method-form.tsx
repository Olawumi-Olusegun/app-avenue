import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const PayoutAddNewPaymentMethodForm = () => {
  return (
    <>
       <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-amber-500 text-black hover:bg-amber-600">Manage Payment Information</Button>
      </SheetTrigger>
      <SheetContent className="bg-primary-600 text-white">
        <SheetHeader className="border-b border-b-primary-500">
          <SheetTitle>Add New Payment Method</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="bank_name">Bank Name</Label>
            <Input id="bank_name" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="account_number">Account Number</Label>
            <Input id="account_number" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="account_holder_name">Account Holder Name</Label>
            <Input id="account_holder_name" />
          </div>
        </div>
        <SheetFooter>
            <Button className="bg-transparent border-1 mb-4 border-amber-500 text-amber-500">Back</Button>
          <SheetClose asChild>
            <Button className="bg-amber-500 text-black hover:bg-amber-600"> Add New Payment</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </>
  )
}

export default PayoutAddNewPaymentMethodForm