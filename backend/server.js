import emailRouter from "./routes/emailRoute.js";
import express from "express";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use("/api/sendemail/", emailRouter);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server Running on Port " + PORT);
    } else {
        console.log("Error: " + error);
    }
});