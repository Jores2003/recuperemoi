// -----------------------------------------------------
//  IMPORTS FIREBASE
// -----------------------------------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-storage.js";


// -----------------------------------------------------
//  CONFIG FIREBASE (VERSION EXACTE DE TA CONSOLE)
// -----------------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyA6njGAi3K8Q6DI2GCHBXfQBVgb7DN0TH8",
  authDomain: "recuperemoi-4d374.firebaseapp.com",
  projectId: "recuperemoi-4d374",
  storageBucket: "recuperemoi-4d374.firebasestorage.app",
  messagingSenderId: "1042205176062",
  appId: "1:1042205176062:web:58f93a3e62c535fc6675af",
  measurementId: "G-KP9GSY5ZY8"
};


// -----------------------------------------------------
//  INITIALISATION
// -----------------------------------------------------
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


// -----------------------------------------------------
//  EXPORTS
// -----------------------------------------------------
export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  doc,
  setDoc
};


// -----------------------------------------------------
//  UPLOAD PHOTO
// -----------------------------------------------------
export async function uploadPhoto(file, userId) {
  const fileRef = ref(storage, `dons/${userId}/${Date.now()}_${file.name}`);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
}


// -----------------------------------------------------
//  ENREGISTRER UN DON
// -----------------------------------------------------
export async function submitDon(data) {
  await addDoc(collection(db, "dons"), {
    ...data,
    submitted: serverTimestamp()
  });
}
