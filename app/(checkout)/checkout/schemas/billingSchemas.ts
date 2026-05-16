import { z } from "zod";

export const BillingSchema = z.object({
  name: z.string()
    .min(1, "This field is required")
    .min(3, "Name must be at least 3 characters long")
    .regex(/^[a-zA-Z\s]+$/, "Name must only contain alphabetic characters"),
  email: z.string()
    .min(1, "This field is required")
    .email("Invalid email address"),
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
  
  
})



export type UserBillingData = z.infer<typeof BillingSchema>;
