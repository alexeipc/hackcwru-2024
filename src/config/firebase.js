import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBfGwyGAVC1VkueIRJVey9CnWHpbSEAfF0",
  authDomain: "hackcwru-2024.firebaseapp.com",
  projectId: "hackcwru-2024",
  storageBucket: "hackcwru-2024.appspot.com",
  messagingSenderId: "498995213085",
  appId: "1:498995213085:web:a326cce62b402d2c9427f4",
  measurementId: "G-PT73TH2PDB"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_GOOGLE_PROVIDER = new GoogleAuthProvider();

export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);

export const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);