// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzn9F_gBCVAKY7YqPSkBdMghT2BfYoiMo",
  authDomain: "architect-portfolio-6f2b3.firebaseapp.com",
  projectId: "architect-portfolio-6f2b3",
  storageBucket: "architect-portfolio-6f2b3.appspot.com",
  messagingSenderId: "59382744078",
  appId: "1:59382744078:web:4e5e74a81745eb53b9285f",
  measurementId: "G-773HV01LTC",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

// Initialize App Check with reCAPTCHA v3
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LdGhYgqAAAAAPc1qC3EjOoyKuzjcIyNIEqnOrBi"), // Replace with your site key
  isTokenAutoRefreshEnabled: true, // Enable token auto-refresh
});

export { app, db, storage, analytics, appCheck };
