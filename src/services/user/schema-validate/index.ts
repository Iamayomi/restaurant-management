import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  role: z.enum(["admin", "staff", "customer"]).default("customer"),
  password: z.string(),
});
