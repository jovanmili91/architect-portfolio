const functions = require("firebase-functions/v2");
const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");

admin.initializeApp();

const app = express();

app.use(
  cors({
    origin: [
      "https://projektikuce.rs",
      "https://architect-portfolio-6f2b3.web.app",
      "http://localhost:3000",
    ],
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.post("/", async (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(400).send("Email is required");
  }

  const db = admin.firestore();
  try {
    await db.collection("subscribers").add({
      email,
      subscribedAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    res.status(200).send("Subscription successful!");
  } catch (error) {
    console.error("Error saving subscription:", error);
    res.status(500).send("Internal Server Error");
  }
});

exports.subscribe = functions.https.onRequest(app);
