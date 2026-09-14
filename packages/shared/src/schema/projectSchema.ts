import { z } from "zod";

const projectSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, { message: "Project name is required" }),
});

export { projectSchema };