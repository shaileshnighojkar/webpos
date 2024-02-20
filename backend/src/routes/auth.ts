import express from "express";
import muneroApi, { TOKEN_API_URL } from "../services/munero/http";
import { getError } from "../services/munero/helpers";
import { AxiosError } from "axios";

const router = express.Router();

router.post("/token", async (req, res) => {
  try {
    const response = await muneroApi.post(TOKEN_API_URL, {
      username: req.body.username,
      password: req.body.password,
    });

    res.send({ data: response.data.token });
  } catch (error) {
    const { status, message } = getError(error, "Failed to get munero token");

    res.status(status).send({ error: message });
  }
});

router.get("/check", async (req, res) => {
  let isValid = false;

  try {
    const response = await muneroApi.post<{ token: string }>(
      "/checkToken",
      {},
      {
        headers: { Authorization: req.headers.authorization },
      }
    );

    isValid = !!response.data.token;
  } catch (error) {
    console.log(error);
  }

  res.send({ data: { isValid } });
});

export default router;
