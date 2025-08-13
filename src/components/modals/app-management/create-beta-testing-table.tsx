import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const CreateBetaTestingTable = () => {
  return (
    <>
       <Sheet>
      <SheetTrigger asChild>
         <Button className="bg-amber-500 hover:bg-amber-600 text-black w-full lg:w-fit">
            <span className="text-sm">Create New Beta Test</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-primary-600 text-white">
        <SheetHeader className="border-b border-b-primary-500">
          <SheetTitle>Subscriptions</SheetTitle>
          <SheetDescription>
            Choose the specific version of your app that you want your beta testers to receive          
        </SheetDescription>
        </SheetHeader>
       
        <SheetFooter>
          <SheetClose asChild>
            <Button className="bg-amber-500 text-black hover:bg-amber-600">Next</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </>
  )
}

export default CreateBetaTestingTable