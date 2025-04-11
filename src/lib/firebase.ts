import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBvarPqeWwj2MCXVDspL79RIjZVp53G2tg",
  authDomain: "shoevista-58bcf.firebaseapp.com",
  projectId: "shoevista-58bcf",
  storageBucket: "shoevista-58bcf.appspot.com",
  messagingSenderId: "385119924624",
  appId: "1:385119924624:web:e94744b863602ead000315",

  measurementId: "G-0QK8X7NWYG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app); // Pass the app instance to getStorage

export { auth, provider, db, storage };
