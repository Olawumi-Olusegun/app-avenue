import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

const FormSchema = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 6 characters.",
  }),
})


const PayoutInputTransactionPin = () => {

    const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  })

    function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <>
       <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-amber-500 text-black hover:bg-amber-600">Manage Payment Information</Button>
      </SheetTrigger>
      <SheetContent className="bg-primary-600 text-white">
        <SheetHeader className="border-b border-b-primary-500">
          <SheetTitle>Input Transaction Pin</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
         <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} id="otp" className="grid flex-1 auto-rows-min gap-6 px-4 mt-6">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem className="grid gap-3 place-content-center">
              <FormControl>
                 <InputOTP maxLength={4}  {...field}>
                <InputOTPGroup className="flex items-center gap-2">
                    <InputOTPSlot index={0} className="border rounded-md" />
                    <InputOTPSlot index={1} className="border rounded-md"  />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup className="flex items-center gap-2">
                    <InputOTPSlot index={2} className="border rounded-md"  />
                    <InputOTPSlot index={3}  className="border rounded-md" />
                </InputOTPGroup>
                </InputOTP>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
        <SheetFooter>
            <Button className="bg-transparent border-1 mb-4 border-amber-500 text-amber-500">Back</Button>
          <SheetClose asChild>
            <Button form="otp" className="bg-amber-500 text-black hover:bg-amber-600"> Add New Payment</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </>
  )
}

export default PayoutInputTransactionPin