import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA6njGAi3K8Q6DI2GCHBXfQBVgb7DN0TH8",
  authDomain: "recuperemoi-4d374.firebaseapp.com",
  projectId: "recuperemoi-4d374",
  storageBucket: "recuperemoi-4d374.firebasestorage.app",
  messagingSenderId: "1042205176062",
  appId: "1:1042205176062:web:58f93a3e62c535fc6675af",
  measurementId: "G-KP9GSY5ZY8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
