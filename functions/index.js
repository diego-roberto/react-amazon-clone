const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('pk_test_51HQ5E5B1xeOdXcP0tQvhTc1nm8dQrNwBcmc38dzFLPLpfsxr8f5CWeHjGL3S2yQTlZR6EGIP6dLr14yhSBMgtONG00t7wt30YR')

/* API */

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true })); //cors security shit & stuff
app.use(express.json());

// API routes (rotas)
app.get("/", (request, response) => response.status(200).send("OK"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total; 

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // em subunidade da moeda
    currency: "usd",    //moeda
  });

  // OK - Created (status 201)
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command (observador)
exports.api = functions.https.onRequest(app);