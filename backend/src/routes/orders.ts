import express from "express";
import muneroApi from "../services/munero/http";
import { getError } from "../services/munero/helpers";

const router = express.Router();

router.post("/", async (req, res) => {
  const payload = {
    customerName: "Mohammed Riyad El Khoudary",
    firstName: "Mohammed",
    lastName: "El Khoudary",
    referenceNo: "MY-REF-NO-0002",
    deliveryChannel: "api",
    contactNumber: "+972599409858",
    smsMobileNumber: "+972599409858",
    emailAddress: "techie@munero.net",
    additionalParameters: {},
    countryCode: "AE",
    languageCode: "EN",
    orderDate: "2022-05-15",
    lineItems: [
      {
        cardItemId: req.body.cardItemId,
        value: req.body.value,
      },
    ],
  };

  try {
    const response = await muneroApi.post("/placeOrder", payload, {
      headers: { Authorization: req.headers.authorization },
    });

    res.send({ data: response.data });
  } catch (error) {
    const { status, message } = getError(error, "Failed to order");

    res.status(status).send({ error: message });
  }
});

export default router;
