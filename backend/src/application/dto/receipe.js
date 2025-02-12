import { z } from "zod";

export const RecipeDTO = z.object({
    title: z.string().min(3, "Title is required"),
    description: z.string(),
    ingredients: z.array(z.string()).nonempty("At least one ingredient required"),
    instructions: z.array(z.string()).nonempty("At least one instruction required"),
    cookingTime: z.number().min(1, "Cooking time must be greater than 0"),
});