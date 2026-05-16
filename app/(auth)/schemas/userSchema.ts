import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string()
    .min(1, "This field is required")
    .min(3, "Name must be at least 3 characters long")
    .regex(/^[a-zA-Z\s]+$/, "Name must only contain alphabetic characters"),
  email: z.string()
    .min(1, "This field is required")
    .email("Invalid email address"),
  password: z.string()
    .min(1, "This field is required")
    .min(6, "Password must be at least 6 characters long"),
  confirmPassword: z.string()
    .min(1, "This field is required"),
  address: z.string().optional(),
  mobile: z.string()
    .min(1, "This field is required")
    .refine(
      (value) => {
        if (value.startsWith("01")) {
          return value.length === 11;
        }
        
        return false;
      },
      {
        message: "Mobile must be 11 digits (01XXXXXXXXX)"
      }
    ),
  username: z.string()
    .min(1, "This field is required")
    .min(3, "Username must be at least 3 characters long"),
  
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export const logInSchema = z.object({
  username: z.string()
    .min(1, "This field is required")
    .min(3, "Invalid username"),
  password: z.string()
    .min(1, "This field is required")
    .min(6, "Invalid password"),
});

export type UserSignUpData = z.infer<typeof signUpSchema>;
export type UserLogInData = z.infer<typeof logInSchema>;
