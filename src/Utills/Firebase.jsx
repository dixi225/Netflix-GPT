// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5J2cY95v_XvgLSCQOWOpARzti-O86rlI",
  authDomain: "netflix-gpt-2a6a0.firebaseapp.com",
  projectId: "netflix-gpt-2a6a0",
  storageBucket: "netflix-gpt-2a6a0.appspot.com",
  messagingSenderId: "687587228882",
  appId: "1:687587228882:web:01025074be2671d921810b",
  measurementId: "G-W3Y1B09KJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);       
export const auth = getAuth();     