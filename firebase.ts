// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaFZunw5JeJLDvvZ9zG_VbkWSX9VH_cs8",
  authDomain: "kmgurkulam.firebaseapp.com",
  projectId: "kmgurkulam",
  storageBucket: "kmgurkulam.firebasestorage.app",
  messagingSenderId: "772804796402",
  appId: "1:772804796402:web:0dbfcebc6f9e447917556b",
  measurementId: "G-C27BRS37CB"
};

const app = initializeApp(firebaseConfig);

// ✅ Export Firestore
export const db = getFirestore(app);