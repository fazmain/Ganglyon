import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getPerformance } from "firebase/performance";
import { getAnalytics } from "firebase/analytics";

// Main Firebase configuration for the default app
const firebaseConfig = {
  apiKey: "AIzaSyBMMzxk6Gqs1Y0ELk2mb76fzIOHTgszUaA",
  authDomain: "synapti.cc",
  projectId: "med-quiz-aeb42",
  storageBucket: "med-quiz-aeb42.appspot.com",
  databaseURL:
    "https://med-quiz-aeb42-default-rtdb.asia-southeast1.firebasedatabase.app",
  messagingSenderId: "406337293669",
  appId: "1:406337293669:web:c46c2032d52b1a821aa58c",
  measurementId: "G-EP5KHW11W1",
};

// Initializing the default Firebase app
const app = initializeApp(firebaseConfig);

// Firebase services for the default app
const auth = getAuth(app);
const db = getFirestore(app);
const quizdb = getDatabase(app);
const perf = getPerformance(app);
const analytics = getAnalytics(app);

// Initializing a second Firebase app instance for a different database
const app2 = initializeApp(
  {
    databaseURL:
      "https://med-quiz-aeb42-7abd9.asia-southeast1.firebasedatabase.app/",
  },
  "app2"
);

// Firebase service for the second app instance
const questionsdb = getDatabase(app2);

// Exporting all initialized services
export { auth, app, db, quizdb, perf, questionsdb };
