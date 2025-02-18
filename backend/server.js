import emailRouter from "./routes/emailRoute.js";
import express from "express";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 4000;

app.use(express.json());

// app.use(cors({
//     origin: 'https://srimedha-thummala.vercel.app'
// }));

const allowedOrigins = [
    'http://localhost:3001',  // Local development
    'https://srimedha-thummala.vercel.app',  // Deployed frontend URL  // Another domain
  ];
  
  const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        // Allow requests from allowed origins or when there's no origin (e.g., testing or server-side requests)
        callback(null, true);
      } else {
        // Reject requests from other origins
        callback(new Error('Not allowed by CORS'));
      }
    }
  };
  
  app.use(cors(corsOptions));

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

export default app;