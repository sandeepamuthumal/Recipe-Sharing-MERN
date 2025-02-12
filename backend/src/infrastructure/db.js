import mongoose from 'mongoose';
import config from '../config.js';

export const connectDB = async() => {
    try {
        const connectionString = config.MONGO_URI;
        await mongoose.connect(connectionString);
        console.log("Connected to Database");
    } catch (error) {
        console.error(error);
        console, log("Failed to connect to Database");
    }
}