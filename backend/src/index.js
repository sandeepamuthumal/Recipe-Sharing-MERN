import express from "express";
import config from "./config.js";
import { connectDB } from "./infrastructure/db.js";
import { globalErrorHandler } from "./api/middleware/global-error-handler.js";
import recipeRouter from "./api/recipe.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/recipes", recipeRouter);

app.use(globalErrorHandler);

connectDB();

app.listen(config.PORT, () => {
    console.log(`Server is listening on port ${config.PORT}`);
});