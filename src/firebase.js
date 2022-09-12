// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwugCqZXkq0C2W4EEVODYO9MjVjmQoUNc",
  authDomain: "clone-33e20.firebaseapp.com",
  projectId: "clone-33e20",
  storageBucket: "clone-33e20.appspot.com",
  messagingSenderId: "961101644967",
  appId: "1:961101644967:web:895a308b5d541fc8bc8782",
  measurementId: "G-392M485Y20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);