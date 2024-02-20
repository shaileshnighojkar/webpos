import express from "express";
import cors from "cors";
import authRouter from "./routes/auth";
import itemsRouter from "./routes/items";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/items", itemsRouter);

export default app;
