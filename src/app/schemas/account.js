import { z } from "zod";

export const accountSchema = z
  .object({
    username: z.string().min(4, "Username at least 4 characters"),
    password: z.string().min(6, "Password at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
