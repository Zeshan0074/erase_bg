
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDNgL7U5-IPJcYNyoTs3N6QDOE5wRoHZkQ",
  authDomain: "erase-bg-9c203.firebaseapp.com",
  projectId: "erase-bg-9c203",
  storageBucket: "erase-bg-9c203.appspot.com",
  messagingSenderId: "806796432386",
  appId: "1:806796432386:web:2353d9f28193f42268431b",
  measurementId: "G-XFDRG3NJ94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default app;