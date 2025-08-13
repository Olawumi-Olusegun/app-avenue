import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { LucideCircleCheckBig } from "lucide-react"

const PayoutSuccess = () => {
  return (
    <>
       <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-amber-500 text-black hover:bg-amber-600">Manage Payment Information</Button>
      </SheetTrigger>
      <SheetContent className="bg-primary-600 text-white h-dvh">
        <SheetHeader className="border-b border-b-primary-500 h-20">
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-center gap-3 h-dvh p-4">
          <LucideCircleCheckBig size={100} className="text-green-400 mt-20" />
          <h1 className="font-bold">New Payment Method Added</h1>
          <p className="text-sm text-center">Kuda Bank ********1234 has been added to your payment methods.</p>
        </div>
      </SheetContent>
    </Sheet>
    </>
  )
}

export default PayoutSuccess