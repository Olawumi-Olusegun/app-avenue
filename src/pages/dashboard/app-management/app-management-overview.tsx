import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import AppSubLinks from "./app-sublinks";
import { Plus } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardHeader from "@/components/shared/DashboardHeader";

const FormSchema = z.object({
    app_name: z.string().min(2, { message: "Firstname is required" }),
    plaform: z.string().min(2, { message: "Lastname is required" }),
    short_description: z.string(),
    category: z.string().min(2, { message: "Category is required" }),
    full_description: z.string().min(2, { message: "Full description is required" }),
    logo: z
        .array(
            z.instanceof(File).refine((file) => file.size < 1 * 1024 * 1024, {
                message: "File size must be less than 1MB",
            }),
        )
        .max(1, { message: "Only 1 file are allowed", })
        .nullable(),
    language: z.string().min(1, { message: "At least one language is required" }),
    age_rating: z.string().min(1, { message: "Age rating is required" }),
    privacy_policy_url: z.string().url({ message: "Invalid URL" }).optional(),
    personal_info: z.array(z.string()).optional(),
});

const AppManagementOverview = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [logoPreview, setLogoPreview] = useState<string | null>(null);
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            app_name: "",
            plaform: "",
            short_description: "",
            full_description: "",
            logo: [],
            language: "",
            age_rating: "",
            privacy_policy_url: "",
            personal_info: [],
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
                <h1 className="font-bold text-white">App Information</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submit)} className="w-full">
                        <div className="w-full grid grid-cols-12 gap-2 border-b border-b-gray-600 py-4">
                            <div className="col-span-12 lg:col-span-3">
                                <FormLabel htmlFor="app_name" className="text-white">App Name</FormLabel>
                                <span className="text-xs text-white/70">Write a short introduction.</span>
                            </div>
                            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 gap-3 w-full lg:max-w-[70%]">
                                <FormField
                                    control={form.control}
                                    name="app_name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Input id="app_name" placeholder="Enter app name" {...field} />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            </div>
                        </div>

                        <div className="w-full grid grid-cols-12 gap-2 border-b border-b-gray-600 py-4">
                            <div className="col-span-12 lg:col-span-3">
                                <FormLabel htmlFor="logo" className="text-white">Logo</FormLabel>
                                <span className="text-xs text-white/70">SVG, PNG or JPG (max. 800x800px)</span>
                            </div>
                            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 gap-3 w-full lg:max-w-[70%]">
                                <FormField
                                    control={form.control}
                                    name="logo"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <Input
                                                id="logo"
                                                type="file"
                                                className="hidden"
                                                accept=".jpg,.jpeg,.png"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        field.onChange(file);
                                                        setLogoPreview(URL.createObjectURL(file));
                                                    }
                                                }}
                                                ref={(e) => {
                                                    field.ref(e);
                                                    fileInputRef.current = e;
                                                }}
                                                name={field.name}
                                            />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="flex items-center gap-8">
                                    <div onClick={() => fileInputRef.current?.click()} className="size-20 rounded-2xl overflow-hidden border hover:bg-gray-600 cursor-pointer border-gray-600 duration-300">
                                        {logoPreview ? (
                                            <img
                                                src={logoPreview}
                                                alt="Logo Preview"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : null}
                                    </div>
                                    <Button type="button" size={"sm"} className="bg-amber-400 hover:bg-amber-500 text-black w-fit">Upload</Button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-12 gap-2 border-b border-b-gray-600 py-4">
                            <div className="col-span-12 lg:col-span-3">
                                <FormLabel htmlFor="plaform" className="text-white">Platform</FormLabel>
                                <span className="text-xs text-white/70">Write a short introduction.</span>
                            </div>
                            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 gap-3 w-full lg:max-w-[70%]">
                                <FormField
                                    control={form.control}
                                    name="plaform"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input id="plaform" placeholder="Enter app name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-12 gap-2 border-b border-b-gray-600 py-4">
                            <div className="col-span-12 lg:col-span-3">
                                <FormLabel htmlFor="short_description" className="text-white">Short Description</FormLabel>
                                <span className="text-xs text-white/70">Write a short introduction.</span>
                            </div>
                            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 gap-3 w-full lg:max-w-[70%]">
                                <FormField
                                    control={form.control}
                                    name="short_description"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <FormControl>
                                                <Input id="short_description" placeholder="Enter short description" {...field} className="col-span-8" />
                                            </FormControl>
                                            <FormDescription className="text-xs text-white/70">275 characters left</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-12 gap-2 border-b border-b-gray-600 py-4">
                            <div className="col-span-12 lg:col-span-3">
                                <FormLabel htmlFor="full_description" className="text-white">Full Description</FormLabel>
                                <span className="text-xs text-white/70">Write a short introduction.</span>
                            </div>
                            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 gap-3 w-full lg:max-w-[70%]">
                                <FormField
                                    control={form.control}
                                    name="full_description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Textarea
                                                    id="full_description"
                                                    rows={30}
                                                    {...field}
                                                    placeholder="Enter description"
                                                    className="resize-none h-[200px]"
                                                >
                                                </Textarea>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-12 gap-2 border-b border-b-gray-600 py-4">
                            <div className="col-span-12 lg:col-span-3">
                                <FormLabel htmlFor="category" className="text-white">Category</FormLabel>
                            </div>
                            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 gap-3 w-full lg:max-w-[70%]">
                                <FormField
                                    control={form.control}
                                    name="category"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl className="w-full text-white">
                                                    <SelectTrigger id="category">
                                                        <SelectValue placeholder="Select category" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="productivity" className="cursor-pointer hover:bg-gray-500">Productivity</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-12 gap-2 border-b border-b-gray-600 py-4">
                            <div className="col-span-12 lg:col-span-3">
                                <FormLabel htmlFor="firstName" className="text-white">Preview Images</FormLabel>
                            </div>
                            <div className="col-span-12 lg:col-span-9 grid grid-cols-2 gap-3 w-full lg:max-w-[70%] ">
                                <div className="h-40 rounded-sm border border-gray-600 overflow-hidden">
                                    <img src="/assets/images/cal.png" alt="cal" className="h-full w-full object-cover object-center" />
                                </div>
                                <div className="h-40 rounded-sm border border-gray-600 overflow-hidden">
                                    <img src="/assets/images/cal.png" alt="cal" className="h-full w-full object-cover object-center" />
                                </div>
                                <div className="h-40 rounded-sm border border-gray-600 overflow-hidden">
                                    <img src="/assets/images/cal.png" alt="cal" className="h-full w-full object-cover object-center" />
                                </div>
                                <div className="h-40 rounded-sm border border-gray-600 overflow-hidden">
                                    <img src="/assets/images/cal.png" alt="cal" className="h-full w-full object-cover object-center" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-12 gap-2 border-b border-b-gray-600 py-4">
                            <div className="col-span-12 lg:col-span-3">
                                <FormLabel htmlFor="language" className="text-white">Language</FormLabel>
                            </div>
                            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 gap-3 w-full lg:max-w-[70%]">
                                <FormField
                                    control={form.control}
                                    name="language"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl className="w-full text-white">
                                                    <SelectTrigger id="language">
                                                        <SelectValue placeholder="Select your language" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="english" className="cursor-pointer hover:bg-gray-500">English</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-12 gap-2 border-b border-b-gray-600 py-4">
                            <div className="col-span-12 lg:col-span-3">
                                <FormLabel htmlFor="age_rating" className="text-white">Age Rating</FormLabel>
                            </div>
                            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 gap-3 w-full lg:max-w-[70%]">
                                <FormField
                                    control={form.control}
                                    name="age_rating"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl className="w-full text-white">
                                                    <SelectTrigger id="age_rating">
                                                        <SelectValue placeholder="Select your age" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="4+" className="cursor-pointer hover:bg-gray-500">4+</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-5 mt-2">
                            <span className="font-medium text-white py-2">App Privacy</span>
                            <div className="w-full grid grid-cols-12 gap-2 border-b border-b-gray-600 py-4">
                                <div className="col-span-12 lg:col-span-3 flex flex-col gap-5 self-center">
                                    <FormLabel htmlFor="privacy_policy_url" className="text-white">Privacy Policy URL</FormLabel>
                                </div>
                                <div className="col-span-12 lg:col-span-9 grid grid-cols-1 gap-3 w-full lg:max-w-[70%]">
                                    <FormField
                                        control={form.control}
                                        name="privacy_policy_url"
                                        render={({ field }) => (
                                            <FormItem className="">
                                                <FormControl>
                                                    <Input id="privacy_policy_url" {...field} placeholder="Enter your email" className="col-span-8" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-12 gap-2 border-b border-b-gray-600 py-4">
                            <div className="col-span-12 lg:col-span-3">
                                <FormLabel htmlFor="firstName" className="text-white">Permission Information</FormLabel>
                            </div>
                            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 gap-3 w-full lg:max-w-[70%]">
                                <div className="w-full flex flex-col gap-3">
                                    <span className="text-white text-sm">Personal Information</span>
                                    <FormField
                                        control={form.control}
                                        name="short_description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input id="short_description" {...field} placeholder="Browsing History" className="col-span-8" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="short_description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input id="short_description" {...field} placeholder="Search History" className="col-span-8" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="short_description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Textarea id="short_description" {...field} placeholder="Cookies and Website Data" className="col-span-8 resize-none h-[60px]" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="short_description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input id="short_description" {...field} placeholder="Location Data" className="col-span-8" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="short_description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input id="short_description" {...field} placeholder="Usage Data" className="col-span-8" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="short_description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input id="short_description" {...field} placeholder="Device Information" className="col-span-8" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="short_description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input id="short_description" {...field} placeholder="Crash Data" className="col-span-8" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="button" size={"sm"} className="place-self-start bg-transparent hover:text-white/60 transition-colors duration-300">
                                        <Plus size={15} />
                                        Add Another
                                    </Button>
                                </div>

                                <div className="w-full flex flex-col gap-3">
                                    <span className="text-white text-sm">Non-Personal Information</span>
                                    <FormField
                                        control={form.control}
                                        name="short_description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input id="short_description" {...field} placeholder="Aggregated Data Usage" className="col-span-8" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="short_description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input id="short_description" {...field} placeholder="Anonymouse Crash Report" className="col-span-8" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="button" size={"sm"} className="place-self-start bg-transparent hover:text-white/60 transition-colors duration-300">
                                        <Plus size={15} />
                                        Add Another
                                    </Button>

                                </div>

                                <div className="w-full flex flex-col gap-3">
                                    <span className="text-white text-sm">Tracking Information</span>
                                    <FormField
                                        control={form.control}
                                        name="short_description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input id="short_description" {...field} placeholder="Tracking Blocker" className="col-span-8" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="short_description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input id="short_description" {...field} placeholder="Cookies and Similar Technologies" className="col-span-8" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="button" size={"sm"} className="place-self-start bg-transparent hover:text-white/60 transition-colors duration-300">
                                        <Plus size={15} />
                                        Add Another
                                    </Button>

                                </div>
                            </div>



                        </div>
                    </form>
                </Form>
            </section>
        </div>
        </>
    )
}

export default AppManagementOverview