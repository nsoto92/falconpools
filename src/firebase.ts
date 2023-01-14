import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtMBzLVwbJGpEed50Qfi7Oc-yI1a1E3ew",
  authDomain: "falconpoolspr-8248c.firebaseapp.com",
  projectId: "falconpoolspr-8248c",
  storageBucket: "falconpoolspr-8248c.appspot.com",
  messagingSenderId: "502263737110",
  appId: "1:502263737110:web:24116d58f1390cce31fe37",
  measurementId: "G-KDP37HE665"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in");
  } else {
    console.log("User is signed out");
  };
});

initializeApp(firebaseConfig);
