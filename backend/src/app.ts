import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import appRouter from './routes/index.route.js'; // Importing the router
import cookieParser from 'cookie-parser';
import cors from "cors";
config(); // Load environment variables from .env file

const app = express();

// Middleware 
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser(process.env.COOKIE_SECRET));

// Development logging
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use("/api/v1", appRouter);

export default app;
