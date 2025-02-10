import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTPS7GuZDLBUy9WWsYEvRuXJXUkb7SfCw",
  authDomain: "track-it-ai.firebaseapp.com",
  projectId: "track-it-ai",
  storageBucket: "track-it-ai.firebasestorage.app",
  messagingSenderId: "380749338926",
  appId: "1:380749338926:web:e60e2644e04ab82c6e42bf",
  measurementId: "G-RRPL30VY0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


