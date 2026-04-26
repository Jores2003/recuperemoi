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
// -----------------------------
//  CATEGORIES + SOUS-CATEGORIES
// -----------------------------
const subcategories = {
  textile: ["vêtements", "chaussures", "sacs", "linge de maison"],
  deee: ["petit électroménager", "gros électroménager", "informatique", "téléphones", "TV / audio", "consoles"],
  mobilier: ["meuble", "literie", "chaise", "table", "rangement"],
  jouets: ["jouets plastiques", "jouets électroniques", "peluches", "jeux de société"],
  divers: ["décoration", "ustensiles", "accessoires divers", "petit matériel"],
  culture: ["livres", "CD / DVD", "instruments de musique"],
  puericulture: ["poussette", "siège auto", "lit bébé", "accessoires bébé"],
  sport: ["équipement sportif", "vélo", "accessoires de sport"]
};

// Remplir automatiquement les sous-catégories
export function setupCategorySelector() {
  const categorySelect = document.getElementById("category");
  const subcategorySelect = document.getElementById("subcategory");

  categorySelect.addEventListener("change", () => {
    const selected = categorySelect.value;
    subcategorySelect.innerHTML = "<option value=''>Sélectionner...</option>";

    if (subcategories[selected]) {
      subcategories[selected].forEach(sub => {
        const opt = document.createElement("option");
        opt.value = sub;
        opt.textContent = sub;
        subcategorySelect.appendChild(opt);
      });
    }
  });
}
import { getStorage, ref, uploadBytes, getDownloadURL } 
from "https://www.gstatic.com/firebasejs/12.12.1/firebase-storage.js";

const storage = getStorage(app);

// Upload d'une photo
async function uploadPhoto(file, userId) {
  const fileRef = ref(storage, `dons/${userId}/${Date.now()}_${file.name}`);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
}

export { uploadPhoto };
import { collection, addDoc, serverTimestamp } 
from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

export async function submitDon(data) {
  await addDoc(collection(db, "dons"), {
    ...data,
    submitted: serverTimestamp()
  });
}
