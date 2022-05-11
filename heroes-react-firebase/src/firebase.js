// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA9Oqv05M5bP1hbRkAlQEgpr7RFlkCWWc",
  authDomain: "hero-sort-2022.firebaseapp.com",
  projectId: "hero-sort-2022",
  storageBucket: "hero-sort-2022.appspot.com",
  messagingSenderId: "221228562540",
  appId: "1:221228562540:web:34abfad86b7949fa410049",
  measurementId: "G-9JHHFY5RDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();