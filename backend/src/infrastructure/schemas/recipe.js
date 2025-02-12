import mongoose, { Mongoose } from "mongoose";

const RecipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    ingredients: [String],
    instructions: [String],
    cookingTime: { type: Number, required: true },
}, { timestamps: true });

const Recipe = mongoose.model("Recipe", RecipeSchema);

export default Recipe;