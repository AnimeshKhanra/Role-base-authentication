import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";



const app = express();
  
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));
app.use(express.json({limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());

// import route
import authRouter from "./routers/auth.routers.js"

app.use("/api/v1/user", authRouter);


export { app };