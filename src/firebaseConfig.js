// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYhObN71fq_T5UMlJ43CjTDtpKcxujRIg",
  authDomain: "linkup-9f473.firebaseapp.com",
  projectId: "linkup-9f473",
  storageBucket: "linkup-9f473.appspot.com",
  messagingSenderId: "4840763154",
  appId: "1:4840763154:web:b35685b412b2169bad0dcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
