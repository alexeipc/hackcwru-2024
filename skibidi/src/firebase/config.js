import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: 'AIzaSyBfGwyGAVC1VkueIRJVey9CnWHpbSEAfF0',
  authDomain: 'hackcwru-2024.firebaseapp.com',
//   databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'hackcwru-2024',
//   storageBucket: 'your-project-id-1234.appspot.com',
//   messagingSenderId: '12345-insert-yourse',
  appId: '1:498995213085:ios:1ecfddc9c913bd2e9427f4',
  // measurementId: "G-HENJ7D82KH",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);