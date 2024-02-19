import express from "express";
import { getToken } from "./services/munero";

const app = express();
app.use(express.json());

app.post("/token", async (req, res) => {
  const { username, password } = req.body;
  const { token, error } = await getToken(username, password);
  res.send({ token, error });
});

export default app;
