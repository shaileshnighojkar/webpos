import express from "express";
import { getToken, checkToken } from "../services/munero";

const router = express.Router();

router.post("/token", async (req, res) => {
  const { username, password } = req.body;
  const apiResponse = await getToken(username, password);
  res.send(apiResponse);
});

router.get("/check", async (req, res) => {
  const apiResponse = await checkToken(req.headers.authorization);
  res.send(apiResponse);
});

export default router;
