import { z } from "zod";

export const addressSchema = z.object({
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  zipCode: z.string().regex(/^\d{5,}$/, "Zip code must be at least 5 digits"),
});
