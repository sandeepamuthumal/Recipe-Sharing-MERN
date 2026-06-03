import express from "express";
import config from "./config.js";
import { connectDB } from "./infrastructure/db.js";
import { globalErrorHandler } from "./api/middleware/global-error-handler.js";
import recipeRouter from "./api/recipe.js";
import cors from "cors";

const app = express();
app.use(express.json());
const allowedOrigins = [
    "http://localhost",
    "http://localhost:5173"
];

app.use(
    cors({
        origin: function(origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            callback(new Error("Not allowed by CORS"));
        },
    })
);

app.use("/api/recipes", recipeRouter);

app.use(globalErrorHandler);

connectDB();

app.listen(config.PORT, () => {
    console.log(`Server is listening on port ${config.PORT}`);
});