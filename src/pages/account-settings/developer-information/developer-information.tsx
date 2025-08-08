import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FormSchema = z.object({
    first_name: z.string().min(2, { message: "Firstname is required" }),
    last_name: z.string().min(2, { message: "Lastname is required" }),
    username: z.string(),
    email: z.email(),
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
    phone_number: z.string().min(1, { message: "Phone number is required" }),
    country: z.string().min(1, { message: "Country is required" }),
});

const DeveloperInformation = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [logoPreview, setLogoPreview] = useState<string | null>(null);
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            logo: [],
            language: "",
            age_rating: "",
            phone_number: "",
            country: "",
        }
    });



    const submit = (formValues: z.infer<typeof FormSchema>) => console.log(formValues);


    return (
        <div className="w-full flex flex-col gap-5 my-5">
            <section className="w-full my-2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submit)} className="w-full">
                        <div className="w-full grid grid-cols-12 gap-2 border-b border-b-gray-600 py-4">
                            <div className="col-span-12 lg:col-span-3">
                                <FormLabel htmlFor="first_name" className="text-white">First Name</FormLabel>
                            </div>
                            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 gap-3 w-full lg:max-w-[70%]">
                                <FormField
                                    control={form.control}
                                    name="first_name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Input id="first_name" placeholder="Enter first name" {...field} />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            </div>
                        </div>
                        <div className="w-full grid grid-cols-12 gap-2 border-b border-b-gray-600 py-4">
                            <div className="col-span-12 lg:col-span-3">
                                <FormLabel htmlFor="last_name" className="text-white">Last Name</FormLabel>
                            </div>
                            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 gap-3 w-full lg:max-w-[70%]">
                                <FormField
                                    control={form.control}
                                    name="last_name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Input id="last_name" placeholder="Enter last name" {...field} />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            </div>
                        </div>
                        <div className="w-full grid grid-cols-12 gap-2 border-b border-b-gray-600 py-4">
                            <div className="col-span-12 lg:col-span-3">
                                <FormLabel htmlFor="username" className="text-white">Developer Username</FormLabel>
                            </div>
                            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 gap-3 w-full lg:max-w-[70%]">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Input id="username" placeholder="Developer username" {...field} />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            </div>
                        </div>

                        <div className="w-full grid grid-cols-12 gap-2 border-b border-b-gray-600 py-4">
                            <div className="col-span-12 lg:col-span-3">
                                <FormLabel htmlFor="logo" className="text-white">Developer Logo/Avatar</FormLabel>
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
                                                onChange={(event) => {
                                                    const file = event.target.files?.[0];
                                                    if (file) {
                                                        field.onChange(file);
                                                        setLogoPreview(URL.createObjectURL(file));
                                                    }
                                                }}
                                                ref={(event) => {
                                                    field.ref(event);
                                                    fileInputRef.current = event;
                                                }}
                                                name={field.name}
                                            />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="flex items-center gap-8">
                                    <div onClick={() => fileInputRef.current?.click()} className="size-20 rounded-full overflow-hidden border hover:bg-gray-600 cursor-pointer border-gray-600 duration-300">
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
                                <FormLabel htmlFor="email" className="text-white">Email Address</FormLabel>
                            </div>
                            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 gap-3 w-full lg:max-w-[70%]">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input id="email" placeholder="Enter email address" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-12 gap-2 border-b border-b-gray-600 py-4">
                            <div className="col-span-12 lg:col-span-3">
                                <FormLabel htmlFor="phone_number" className="text-white">Phone Number</FormLabel>
                            </div>
                            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 gap-3 w-full lg:max-w-[70%]">
                                <FormField
                                    control={form.control}
                                    name="phone_number"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input id="phone_number" placeholder="Enter phone number" {...field} className="col-span-8" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-12 gap-2 border-b border-b-gray-600 py-4">
                            <div className="col-span-12 lg:col-span-3">
                                <FormLabel htmlFor="country" className="text-white">Country/Region</FormLabel>
                            </div>
                            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 gap-3 w-full lg:max-w-[70%]">
                                <FormField
                                    control={form.control}
                                    name="country"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input id="country" placeholder="Country/region" {...field} className="col-span-8" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
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
                    </form>
                </Form>
            </section>
        </div>
    )
}

export default DeveloperInformation