import { z } from 'zod'

export const emailSchema = z.email({ message: "Please enter a valid email address" });


export const signinSchema = z.object({
  email: emailSchema,
  password: z.string().min(2).max(50),
});

export const signupSchema = z.object({
  first_name: z.string().min(1, { message: "Firstname is required"}),
  last_name: z.string().min(1, { message: "Lastname is required"}),
  developer_username: z.string().min(1, { message: "Developer username is required"}),
});

export const createPasswordSchema = z.object({
  password: z.string().min(1, { message: "Password is required"}),
  confirm_password: z.string().min(1, { message: "Confirm Password is required"}),
});


export const createDeveloperAccountSchema = z.object({
  email: emailSchema,
  phone_number: z.string().min(2).max(50),
});

export const resetPasswordSchema = z.object({  email: emailSchema });

export type SigninSchemaType = z.infer<typeof signinSchema>;
export type SignupSchemaType = z.infer<typeof signupSchema>;
export type CreatePasswordSchemaType = z.infer<typeof createPasswordSchema>;
export type CreateDeveloperAccountSchemaType = z.infer<typeof createDeveloperAccountSchema>;
export type EmailSchemaType = z.infer<typeof emailSchema>;
export type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;