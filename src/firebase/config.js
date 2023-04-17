import { initializeApp } from "firebase/app";
// importing services provided by fire base
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAK0XAh2N8D-SkKCeGVZcx0p4iGyusXxYI",
  authDomain: "eshop-9bf29.firebaseapp.com",
  projectId: "eshop-9bf29",
  storageBucket: "eshop-9bf29.appspot.com",
  messagingSenderId: "1028044021481",
  appId: "1:1028044021481:web:d6a3184e6c2c331d26da78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app)
export default app;