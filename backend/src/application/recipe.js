import Recipe from '../infrastructure/schemas/recipe.js';
import { RecipeDTO } from './dto/receipe.js';
import { ValidationError } from "../domain/errors/validation-error.js";
import { NotFoundError } from "../domain/errors/not-found-error.js";

//get all recipes
export const getRecipes = async(req, res, next) => {
    try {
        const search = req.query.search;
        const recipes = await Recipe.find({
            $or: [
                { title: new RegExp(search, "i") },
                { ingredients: new RegExp(search, "i") },
            ]
        });

        return res.status(200).json({ success: true, recipes: recipes });
    } catch (error) {
        next(error);
    }
};

//create a new recipe
export const createRecipe = async(req, res, next) => {
    try {
        console.log(req.body);
        const recipe = RecipeDTO.safeParse(req.body);

        if (!recipe.success) {
            throw new ValidationError("Invalid recipe data");
        }

        const newRecipe = await Recipe.create({
            title: recipe.data.title,
            description: recipe.data.description,
            ingredients: recipe.data.ingredients,
            instructions: recipe.data.instructions,
            cookingTime: recipe.data.cookingTime,
        });

        return res.status(201).json({ success: true, recipe: newRecipe });
    } catch (error) {
        next(error);
    }
};

//update a recipe
export const updateRecipe = async(req, res, next) => {
    const { id } = req.params;
    try {
        const recipe = RecipeDTO.safeParse(req.body);
        if (!recipe.success) {
            throw new ValidationError("Invalid recipe data");
        }

        const updatedRecipe = await Recipe.findByIdAndUpdate(id, {
            title: recipe.data.title,
            description: recipe.data.description,
            ingredients: recipe.data.ingredients,
            instructions: recipe.data.instructions,
            cookingTime: recipe.data.cookingTime,
        }, { new: true });

        return res.status(200).json({ success: true, recipe: updatedRecipe });
    } catch (error) {
        next(error);
    }
};

//delete a recipe
export const deleteRecipe = async(req, res, next) => {
    const { id } = req.params;
    try {
        const recipe = await Recipe.findByIdAndDelete(id);
        if (!recipe) {
            throw new NotFoundError(`Recipe with id ${id} not found`);
        }
        return res.status(200).json({ success: true, message: "Recipe deleted successfully" });
    } catch (error) {
        next(error);
    }
};



//get a recipe by id
export const getRecipeById = async(req, res, next) => {
    const { id } = req.params;
    try {
        const recipe = await Recipe.findById(id);
        if (!recipe) {
            throw new NotFoundError(`Recipe with id ${id} not found`);
        }
        return res.status(200).json({ success: true, recipe: recipe });
    } catch (error) {
        next(error);
    }
};