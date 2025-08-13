import { ArrowUp, Search } from "lucide-react"
import AppSubLinks from "./app-sublinks"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import MonetizationInAppProductTable from "./_components/monetization-in-app-product-table"
import MonetizationSubscriptionTable from "./_components/monetization-subscription-table"
import CreateSubscriptionForm from "@/components/modals/app-management/create-subscription-form"
import DashboardHeader from "@/components/shared/DashboardHeader"

const FormSchema = z.object({
    app_name: z.string().min(2, { message: "Firstname is required" }),
    plaform: z.string().min(2, { message: "Lastname is required" }),
    short_description: z.string(),
    full_description: z.string().min(2, { message: "Language is required" }),
    logo: z
        .array(
            z.instanceof(File).refine((file) => file.size < 1 * 1024 * 1024, {
                message: "File size must be less than 1MB",
            }),
        )
        .max(1, { message: "Only 1 file are allowed", })
        .nullable(),
});

const AppManagementMonetization = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            app_name: "",
            plaform: "",
            short_description: "",
            full_description: "",
            logo: [],
        }
    })
    const submit = (formValues: z.infer<typeof FormSchema>) => console.log(formValues);


    return (
        <>
          <DashboardHeader>
            <div className="flex items-center gap-1">
             <img src="/assets/images/bifrost_logo.png" alt="bifrost" />
             <h1 className="font-bold">Bifrost</h1>
            </div>
           </DashboardHeader>
        <div className="w-full flex flex-col gap-5 my-5">
            <AppSubLinks />
            <section className="w-full my-2">
                <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-3 divide-x divide-gray-600 text-white">
                    <div className="flex flex-col gap-3">
                        <span className="text-white/70">Net Revenue</span>
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-xl">$5,869,123</span>
                            <span className="text-xs text-green-600 flex items-center">
                                <ArrowUp size={15} />
                                100%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-white/70">Average Revenue Per User</span>
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-xl">$58</span>
                            <span className="text-xs text-green-600 flex items-center">
                                <ArrowUp size={15} />
                                100%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-white/70">Paying Users</span>
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-xl">789k</span>
                            <span className="text-xs text-green-600 flex items-center">
                                <ArrowUp size={15} />
                                100%
                            </span>
                        </div>
                    </div>

                </div>
            </section>

            <section className="w-full my-2">
                <h1 className="font-bold text-white">App Pricing</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submit)} className="w-full">
                        <div className="w-full grid grid-cols-12 gap-2 border-b border-b-gray-600 py-4">
                            <div className="col-span-12 lg:col-span-3">
                                <FormLabel htmlFor="app_name" className="text-white">Country or Region</FormLabel>
                                <span className="text-xs text-white/70">Write a short introduction.</span>
                            </div>
                            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 gap-3 w-full lg:max-w-[70%]">
                                <FormField
                                    control={form.control}
                                    name="app_name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Input id="app_name" {...field} />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            </div>
                        </div>
                        <div className="w-full grid grid-cols-12 gap-2 border-b border-b-gray-600 py-4 relative">
                            <div className="col-span-12 lg:col-span-3">
                                <FormLabel htmlFor="plaform" className="text-white">Prices</FormLabel>
                                <span className="text-xs text-white/70">Write a short introduction.</span>
                            </div>
                            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 gap-3 w-full lg:max-w-[100%]">
                                <FormField
                                    control={form.control}
                                    name="plaform"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <div className="flex flex-col lg:flex-row items-center gap-5 relative">
                                                    <Input id="plaform" {...field} className="w-full lg:w-[70%]" />
                                                    <Button type="button" variant={"link"} className=" text-amber-500 px-0">In other countries</Button>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                        </div>

                    </form>
                </Form>
            </section>

            <section className="w-full flex flex-col gap-5 bg-primary-500 rounded-md border border-gray-800">
                <div className="flex flex-col gap-1 text-white px-6 mt-3">
                    <span className="font-bold">Subscription</span>
                    <span className="text-xs text-white/70">Manage an anaylyze the recurring revenue generated by your app through subscription plan</span>
                </div>
                <div className="w-full flex flex-col gap-3 lg:flex-row items-center justify-between px-6">
                    <div className="relative w-full lg:w-fit">
                        <Input className="pl-8 text-white/80 placeholder:text-white/70" placeholder="Search" />
                        <Search size={18} className="absolute top-1/2 -translate-y-1/2 left-2 text-white/70" />
                    </div>
                    <CreateSubscriptionForm />
                </div>
                <MonetizationSubscriptionTable />
            </section>

            <section className="w-full flex flex-col gap-5 bg-primary-500 rounded-md border border-gray-800">
                <div className="flex flex-col gap-1 text-white px-6 mt-3">
                    <span className="font-bold">In-App Products</span>
                    <span className="text-xs text-white/70">Offer permanent upgrade or additional features within your app to enhance user experience and generate revenue through one-time purchase</span>
                </div>
                <div className="w-full flex flex-col gap-3 lg:flex-row items-center justify-between px-6">
                    <div className="relative w-full lg:w-fit">
                        <Input className="pl-8 text-white/80 placeholder:text-white/70" placeholder="Search" />
                        <Search size={18} className="absolute top-1/2 -translate-y-1/2 left-2 text-white/70" />
                    </div>
                    <Button className="bg-amber-500 hover:bg-amber-600 text-black w-full lg:w-fit">
                        <span className="text-sm">Create Product</span>
                    </Button>
                </div>
                <MonetizationInAppProductTable />
            </section>

            <section className="w-full bg-primary-800 rounded-md border border-gray-800">
                <div className="flex flex-col gap-1 py-4 text-white p-6">
                    <span className="font-bold">Beta Test</span>
                    <span className="text-xs text-white/70">Offer permanent upgrades or additional features within your app to enhance user experience and generate revenue through one-time purchases.</span>
                </div>
            </section>
        </div>
        </>
    )
}

export default AppManagementMonetization