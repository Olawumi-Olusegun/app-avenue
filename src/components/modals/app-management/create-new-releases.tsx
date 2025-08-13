import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Search } from "lucide-react"

const CreateNewReleases = () => {
  return (
    <>
       <Sheet>
      <SheetTrigger asChild>
         <Button className="bg-amber-500 hover:bg-amber-600 text-black w-full lg:w-fit">
            <span className="text-sm">Create New Release</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-primary-600 text-white">
        <SheetHeader className="border-b border-b-primary-500">
          <SheetTitle>Select Country</SheetTitle>
          <SheetDescription>
            Select which countries you would like your app to be published.        
        </SheetDescription>
        </SheetHeader>

        <div className="grid flex-1 auto-rows-min gap-5 px-4">
          <div className="relative w-full">
              <Input className="pl-8 bg-primary-400 text-white/80 placeholder:text-white/70" placeholder="Search" />
              <Search size={18} className="absolute top-1/2 -translate-y-1/2 left-2 text-white/70" />
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="Afghanistan" />
            <Label htmlFor="Afghanistan">Afghanistan</Label>
        </div>
          <div className="flex items-center gap-3">
            <Checkbox id="Albania" />
            <Label htmlFor="Albania">Albania</Label>
        </div>
         <div className="flex items-center gap-3">
            <Checkbox id="Andorra" />
            <Label htmlFor="Andorra">Andorra</Label>
        </div>
         <div className="flex items-center gap-3">
            <Checkbox id="Angola" />
            <Label htmlFor="Angola">Angola</Label>
        </div>
         <div className="flex items-center gap-3">
            <Checkbox id="Antigua_and_Barbuda" />
            <Label htmlFor="Antigua_and_Barbuda">Antigua and Barbuda</Label>
        </div>
         <div className="flex items-center gap-3">
            <Checkbox id="Argentina" />
            <Label htmlFor="Argentina">Argentina</Label>
        </div>
         <div className="flex items-center gap-3">
            <Checkbox id="Armenia" />
            <Label htmlFor="Armenia">Armenia</Label>
        </div>
         <div className="flex items-center gap-3">
            <Checkbox id="Australia" />
            <Label htmlFor="Australia">Australia</Label>
        </div>
         <div className="flex items-center gap-3">
            <Checkbox id="Austria" />
            <Label htmlFor="Austria">Austria</Label>
        </div>
         <div className="flex items-center gap-3">
            <Checkbox id="Azerbaijan" />
            <Label htmlFor="Azerbaijan">Azerbaijan</Label>
        </div>
         <div className="flex items-center gap-3">
            <Checkbox id="Bahamas" />
            <Label htmlFor="Bahamas">Bahamas</Label>
        </div>
         <div className="flex items-center gap-3">
            <Checkbox id="Bahrain" />
            <Label htmlFor="Bahrain">Bahrain</Label>
        </div>
         <div className="flex items-center gap-3">
            <Checkbox id="Bangladesh" />
            <Label htmlFor="Bangladesh">Bangladesh</Label>
        </div>
          <div className="flex items-center gap-3">
              <Checkbox id="Barbados" />
              <Label htmlFor="Barbados">Barbados</Label>
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

export default CreateNewReleases