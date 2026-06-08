import express from "express";
import dotenv from "dotenv";
import { connectdb } from "./db/connectdb.js";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use("/auth", authRoutes);

app.listen(5000, () => {
  connectdb();
  console.log("server is running at port 5000");
});
