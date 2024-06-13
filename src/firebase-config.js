import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getPerformance } from "firebase/performance";
import {getAnalytics} from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBMMzxk6Gqs1Y0ELk2mb76fzIOHTgszUaA",
  authDomain: "med-quiz-aeb42.firebaseapp.com",
  projectId: "med-quiz-aeb42",
  storageBucket: "med-quiz-aeb42.appspot.com",
  databaseURL: "https://med-quiz-aeb42-default-rtdb.asia-southeast1.firebasedatabase.app",
  messagingSenderId: "406337293669",
  appId: "1:406337293669:web:c46c2032d52b1a821aa58c",
  measurementId: "G-EP5KHW11W1"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const quizdb = getDatabase(app);

const perf = getPerformance(app);

const analytics = getAnalytics(app);

export { auth, app, db, quizdb, perf };


