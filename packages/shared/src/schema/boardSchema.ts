import { z } from "zod";

const boardSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, { message: "Board name is required" }),
});

export { boardSchema };