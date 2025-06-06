import * as z from "zod";

export const distributorshipApplicationSchema = z.object({
  name: z.string().min(5, "Name must be at least 5 characters long"),
  email: z.string().email("Email is invalid"),
  mobile: z.string().regex(/^\d{10}$/, "Mobile number is invalid"),
  pincode: z
    .string()
    .regex(/^[1-9][0-9]{2}\s?[0-9]{3}$/, "Pincode number is invalid"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
});

export type DistributorshipApplicationValues = z.infer<
  typeof distributorshipApplicationSchema
>;
