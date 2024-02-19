import express from "express";
import { getItems } from "../services/munero";

const router = express.Router();

router.get("/", async (req, res) => {
  const apiResponse = await getItems(req.headers.authorization);
  res.send(apiResponse);
});

export default router;
