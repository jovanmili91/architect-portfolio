// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDzn9F_gBCVAKY7YqPSkBdMghT2BfYoiMo",
    authDomain: "architect-portfolio-6f2b3.firebaseapp.com",
    projectId: "architect-portfolio-6f2b3",
    storageBucket: "architect-portfolio-6f2b3.firebasestorage.app",
    messagingSenderId: "59382744078",
    appId: "1:59382744078:web:4e5e74a81745eb53b9285f",
    measurementId: "G-773HV01LTC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
