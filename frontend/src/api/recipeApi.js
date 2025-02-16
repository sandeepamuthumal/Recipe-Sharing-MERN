import axios from "axios";

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