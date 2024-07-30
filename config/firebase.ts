import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "stlr-b8f19.firebaseapp.com",
  projectId: "stlr-b8f19",
  storageBucket: "stlr-b8f19.appspot.com",
  messagingSenderId: "97153486443",
  appId: process.env.FIREBASE_APP_ID,
};

// initializefirebase
const app = initializeApp(config);

const db = getFirestore(app);

export { db };

export default app;
