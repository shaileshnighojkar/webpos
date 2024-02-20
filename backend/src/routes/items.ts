import express from "express";
import muneroApi from "../services/munero/http";
import { getError } from "../services/munero/helpers";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await muneroApi.get("/items", {
      headers: { Authorization: req.headers.authorization },
    });

    res.send({ data: response.data });
  } catch (error) {
    const { status, message } = getError(error, "Failed to get munero items");

    res.status(status).send({ error: message });
  }
});

router.get("/wallet-balance", async (req, res) => {
  try {
    const response = await muneroApi.get("/wallets/balances", {
      headers: { Authorization: req.headers.authorization },
    });

    res.send({ data: response.data });
  } catch (error) {
    const { status, message } = getError(error, "Failed to get munero items");

    res.status(status).send({ error: message });
  }
});

export default router;
