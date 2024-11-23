/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");

// Initialize Firebase Admin
admin.initializeApp();

// Function to handle subscription
exports.subscribe = onRequest((req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const email = req.body.email;

  if (!email) {
    return res.status(400).send("Email is required");
  }

  const db = admin.firestore();
  db.collection("subscribers")
    .add({ email, subscribedAt: admin.firestore.FieldValue.serverTimestamp() })
    .then(() => {
      res.status(200).send("Subscription successful!");
    })
    .catch((error) => {
      console.error("Error saving subscription:", error);
      res.status(500).send("Internal Server Error");
    });
});
