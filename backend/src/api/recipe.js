import express from "express";
import { getRecipes, createRecipe, updateRecipe, deleteRecipe, getRecipeById } from "../application/recipe.js";

const recipeRouter = express.Router();

recipeRouter.get("/", getRecipes);
recipeRouter.post("/", createRecipe);
recipeRouter.put("/:id", updateRecipe);
recipeRouter.delete("/:id", deleteRecipe);
recipeRouter.get("/:id", getRecipeById);

export default recipeRouter;