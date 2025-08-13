import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"

const FeatureSuggestionForm = () => {
  return (
    <>
       <Sheet>
      <SheetTrigger asChild>
        <Button className="w-fit mt-4 p-5 rounded-md bg-amber-500 hover:bg-amber-600 text-black">Suggest a New Feature</Button>
      </SheetTrigger>
      <SheetContent className="bg-primary-600 text-white">
        <SheetHeader className="border-b border-b-primary-500">
          <SheetTitle>Suggest a New Feature</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sugggest_title">Suggest Title</Label>
            <Input id="sugggest_title" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" rows={10} className="h-[150px]"></Textarea>
            <div className="text-xs">
                Keep me anonymous
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button className="bg-amber-500 text-black hover:bg-amber-600">Suggest Feature</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </>
  )
}

export default FeatureSuggestionForm