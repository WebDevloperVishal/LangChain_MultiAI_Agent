import {z} from "zod";

export const RegisterSchema = z.object({
    name: z.string().min(3).max(255),
    name: z.string(),
    password: z.string().min(6).max(255)

})