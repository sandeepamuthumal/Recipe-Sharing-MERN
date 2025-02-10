import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Export variables
export default {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI
};