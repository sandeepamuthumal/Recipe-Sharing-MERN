import express from "express";
import config from "./config.js";

const app = express();
app.use(express.json());

app.listen(config.PORT, () => {
    console.log(`Server is listening on port ${config.PORT}`);
});