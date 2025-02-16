import axios from "axios";
import { toast } from "react-toastify";


const API_BASE_URL = "http://localhost:5000/api/recipes";

// Fetch all recipes
export const getAllRecipes = async(search) => {
    try {
        const response = await axios.get(API_BASE_URL + `?search=${search}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching recipes:", error);
        throw error;
    }
};

// Fetch a single recipe by ID
export const getRecipeById = async(id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching recipe:", error);
        return { success: false };
    }
};

// Add a new recipe
export const createRecipe = async(recipeData) => {
    try {
        const response = await fetch(API_BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipeData),
        });
        return await response.json();
    } catch (error) {
        console.error("Error adding recipe:", error);
        return { success: false };
    }
};

// Update an existing recipe
export const updateRecipe = async(id, recipeData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipeData),
        });
        return await response.json();
    } catch (error) {
        console.error("Error updating recipe:", error);
        return { success: false };
    }
};

// Delete a recipe
export const deleteRecipe = async(id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: "DELETE",
        });
        return await response.json();
    } catch (error) {
        console.error("Error deleting recipe:", error);
        return { success: false };
    }
};