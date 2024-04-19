import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMMzxk6Gqs1Y0ELk2mb76fzIOHTgszUaA",
  authDomain: "med-quiz-aeb42.firebaseapp.com",
  projectId: "med-quiz-aeb42",
  storageBucket: "med-quiz-aeb42.appspot.com",
  messagingSenderId: "406337293669",
  appId: "1:406337293669:web:c46c2032d52b1a821aa58c",
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, app, db };
