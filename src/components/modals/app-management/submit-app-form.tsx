import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"

const SubmitAppForm = () => {
  return (
    <>
       <Sheet>
      <SheetTrigger asChild>
       <Button className="bg-amber-500 hover:bg-amber-600 text-black">
           <span className="text-sm">Submit New App</span>
         </Button>
      </SheetTrigger>
      <SheetContent className="bg-primary-600 text-white">
        <SheetHeader className="border-b border-b-primary-500">
          <SheetTitle>Submit New App</SheetTitle>
          <SheetDescription>
            Provide the fundamental details about your application that will be displayed on AppAvenue.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input id="name" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="short_description">Short Description</Label>
            <Textarea id="short_description" rows={10} className="h-[80px]"></Textarea>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-medium">Platform</h2>
            <div className="flex items-center gap-3">
                <Checkbox id="android" />
                <Label htmlFor="android">Android</Label>
            </div>
            <div className="flex items-center gap-3">
                <Checkbox id="windows" />
                <Label htmlFor="windows">Windows</Label>
            </div>
            <div className="flex items-center gap-3">
                <Checkbox id="harmony_os" />
                <Label htmlFor="harmony_os">HarmonyOS</Label>
            </div>   
          </div>

            <div className="flex flex-col gap-3">
            <h2 className="font-medium">Free/Paid</h2>
            <div className="flex items-center gap-3">
                <Checkbox id="free" />
                <Label htmlFor="free">Free</Label>
            </div>
            <div className="flex items-center gap-3">
                <Checkbox id="paid" />
                <Label htmlFor="paid">Paid</Label>
            </div>  
          </div>

          <div className="grid auto-rows-min gap-3">
             <h2 className="font-medium">Free/Paid</h2>
            <Select>
              <SelectTrigger id="billing_cycle" className="w-full">
                  <SelectValue placeholder="Default Language" />
              </SelectTrigger>
              <SelectContent>
                  <SelectGroup>
                      <SelectLabel>Default Language</SelectLabel>
                      <SelectItem value="monthly">English</SelectItem>
                  </SelectGroup>
              </SelectContent>
          </Select>
          </div>
        </div>
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

export default SubmitAppForm