const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");
const axios = require("axios"); // Using axios instead of node-fetch

// Initialize Firebase Admin SDK
admin.initializeApp();

const app = express();

// Retrieve the reCAPTCHA secret key from environment variables
const secretKey = functions.config().recaptcha.secret;
const verificationURL = `https://www.google.com/recaptcha/api/siteverify`;

// Middleware
app.use(cors({ origin: true })); // Adjust origin as needed
app.use(express.json()); // To parse JSON bodies

// Contact Form Submission Endpoint
app.post("/submitContact", async (req, res) => {
  const { name, email, message, recaptchaToken } = req.body;

  // Basic Validation
  if (!name || !email || !message || !recaptchaToken) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const recaptchaResponse = await axios.post(verificationURL, null, {
      params: {
        secret: secretKey,
        response: recaptchaToken,
      },
    });

    const recaptchaData = recaptchaResponse.data;

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return res.status(400).json({ error: "reCAPTCHA verification failed." });
    }

    // Add to 'contacts' collection with server timestamp
    await admin.firestore().collection("contacts").add({
      name,
      email,
      message,
      submittedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return res.status(200).json({ message: "Message received!" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Subscribe Form Submission Endpoint
app.post("/submitSubscribe", async (req, res) => {
  const { email, recaptchaToken } = req.body;

  // Basic Validation
  if (!email || !recaptchaToken) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const recaptchaResponse = await axios.post(verificationURL, null, {
      params: {
        secret: secretKey,
        response: recaptchaToken,
      },
    });

    const recaptchaData = recaptchaResponse.data;

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return res.status(400).json({ error: "reCAPTCHA verification failed." });
    }

    // Add to 'subscribers' collection with server timestamp
    await admin.firestore().collection("subscribers").add({
      email,
      submittedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return res.status(200).json({ message: "Message received!" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Export the Cloud Function
exports.api = functions.https.onRequest(app);
