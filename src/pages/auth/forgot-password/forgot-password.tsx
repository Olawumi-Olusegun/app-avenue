import { resetPasswordSchema, type ResetPasswordSchemaType } from "@/schemas/auth-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"
import AppLogo from "@/components/shared/AppLogo";


const ForgotPassword = () => {

    const form = useForm<ResetPasswordSchemaType>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            email: '',
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
                <span className="text-white">Already have an account?
                    <Link to={"/signup"} className="text-amber-500"> Signup</Link>
                </span>
            </section>

            <section className="place-self-center bg-primary-800 w-full h-fit md:max-w-[350px] p-5 rounded-md flex flex-col items-center justify-center gap-2">
                <AppLogo />
                <h1 className="font-bold text-xl text-white text-center">Reset Password</h1>
                <p className="text-sm text-white text-center">Please enter your details.</p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(() => { })} className="w-full my-3 space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Email</FormLabel>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        {...field}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button variant={"ghost"} type="submit" className="w-full bg-amber-500 mt-3 text-black">Submit</Button>
                    </form>
                </Form>
            </section>
        </div>
    )
}

export default ForgotPassword