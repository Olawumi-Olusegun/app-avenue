import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { FileUp, LoaderCircle, Search } from "lucide-react"
import { useRef } from "react"

const NewReleasesAppBinaryCompleted = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
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
          <SheetTitle>App Binary</SheetTitle>
          <SheetDescription>
           Upload your app binary for your selected platform. Ensure it meets the platform-specific requirements.      
        </SheetDescription>
        </SheetHeader>

        <div className="grid flex-1 auto-rows-min gap-5 px-4">
          <div className="relative w-full">
              <Input className="pl-8 bg-primary-400 text-white/80 placeholder:text-white/70" placeholder="Search" />
              <Search size={18} className="absolute top-1/2 -translate-y-1/2 left-2 text-white/70" />
          </div>
          
        <Label id="file" className="grid gap-3 place-content-center h-[150px] bg-primary-500 hover:bg-primary-500/50 transition-all duration-300 cursor-pointer rounded-md">
            <Input
                id="file"
                type="file"
                className="hidden"
                accept=".jpg,.jpeg,.png"
                ref={fileInputRef}
                onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) {
                    }
                }}
            />
            <div className="flex flex-col items-center justify-center gap-3">
            <div className="p-2 w-fit rounded-full bg-primary-400">
                <FileUp size={14} />
            </div>
            <span className="text-amber-500 font-medium">Click to upload</span>
            <span className="text-sm text-center">or drag and drop app binary to upload <br/> <span className="text-[10px]">(max file size 1000MB)</span> </span>

            </div>
            </Label>

        <div className="flex items-center p-3 gap-3 h-[72px] rounded-md border bg-primary-500 border-primary-400">
           
              <div className="p-2 w-fit rounded-full bg-primary-400">
                <FileUp size={14} className="text-amber-500" />
            </div>
            <div className="flex-1 flex flex-col items-start gap-1 truncate">
              <span className="font-medium">bifrost_app_v1.0.0.apk</span>
              <span className="text-xs">200 MB - 70% uploaded</span>
            </div>
            <div className="">
              <LoaderCircle size={25} className="text-amber-500" />
            </div>
        </div>
        </div>
             <SheetFooter>
            <Button className="bg-transparent border-1 mb-4 border-amber-500 text-amber-500">Back</Button>
          <SheetClose asChild>
            <Button form="otp" className="bg-amber-500 text-black hover:bg-amber-600">Next</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </>
  )
}

export default NewReleasesAppBinaryCompleted