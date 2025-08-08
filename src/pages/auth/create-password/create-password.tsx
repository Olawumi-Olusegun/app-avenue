import { createPasswordSchema, type CreatePasswordSchemaType } from "@/schemas/auth-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import AppLogo from "@/components/shared/AppLogo";


const CreatePassword = () => {

    const form = useForm<CreatePasswordSchemaType>({
        resolver: zodResolver(createPasswordSchema),
        defaultValues: {
            password: '',
            confirm_password: '',
        },
    });

    return (
        <div className="w-full p-5 lg:max-w-[1440px] min-h-dvh grid grid-cols-1 grid-rows-[auto_1fr] justify-center relative">
            <div className="absolute inset-0 z-[-2]">
                <img
                    src="./assets/images/auth-bg.png"
                    alt="app bg"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/80"></div>
            </div>

            <section className="w-full flex items-center justify-between flex-wrap">
                <div className="flex items-center gap-1">
                    <AppLogo className="p-1 scale-75" />
                    <span className="text-white">AppAvenue Developer</span>
                </div>
                <span className="text-white">Dont't have an account?
                    <Link to={"/register"} className="text-amber-500">Register</Link>
                </span>
            </section>

            <section className="place-self-center bg-primary-800 w-full h-fit md:max-w-[350px] p-5 rounded-md flex flex-col items-center justify-center gap-2">
                <AppLogo />
                <h1 className="font-bold text-white text-center">Create a password</h1>
                <p className="text-sm text-white text-center">Minimum 8 characters, including uppercase, lowercase and numbers</p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(() => { })} className="w-full my-3 space-y-5">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Create Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Enter password"
                                            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirm_password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Enter password again"
                                            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex items-center gap-3 text-white w-full">
                            <Checkbox id="terms" className="self-start" />
                            <Label htmlFor="terms" className="flex-wrap flex-1 font-normal w-full gap-0 text-xs">I agree to the AppAvenue Developer {" "}
                                <Link to={"/terms"} className="text-amber-500">Terms of Service</Link>
                                and {" "}
                                <Link to={"/privacy-policy"} className="text-amber-500">Privacy Policy</Link>.
                            </Label>
                        </div>
                        <Button variant={"ghost"} type="submit" className="w-full bg-amber-500 text-black">Submit</Button>
                    </form>
                </Form>
            </section>
        </div>
    )
}

export default CreatePassword