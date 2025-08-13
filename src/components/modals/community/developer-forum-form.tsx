import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"

const DeveloperForumForm = () => {
  return (
    <>
       <Sheet>
      <SheetTrigger asChild>
       <Button className="bg-amber-500 hover:bg-amber-600 text-black">Start New Discussion</Button>
      </SheetTrigger>
      <SheetContent className="bg-primary-600 text-white">
        <SheetHeader className="border-b border-b-primary-500">
          <SheetTitle>Start New Discussion</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="title">Title</Label>
            <Input id="title" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={10} className="h-[150px]"></Textarea>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button className="bg-amber-500 text-black hover:bg-amber-600">Start Discussion</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </>
  )
}

export default DeveloperForumForm