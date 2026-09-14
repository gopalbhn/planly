import { z } from "zod";

export const taskSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, { message: "Task name is required" }),
   
});