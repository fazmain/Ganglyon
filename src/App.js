import React, { useEffect, useState } from "react";
import { auth } from "./firebase-config";
import { getDatabase, ref, onValue } from "firebase/database";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  Spinner,
  Image,
  Text,
  Box,
  ChakraProvider,
  Container,
} from "@chakra-ui/react";
import Quiz from "./Quiz";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import Navbar from "./NavBar";
//import quizzes from "./quizData";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Welcome from "./Welcome";

function App() {
  const [user, setUser] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    const quizdb = getDatabase();
    const quizRef = ref(quizdb, "quizzes");

    onValue(
      quizRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setQuizzes(data);
        }
        setLoading(false);
      },
      {
        onlyOnce: true,
      }
    );
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuthProvider).catch((error) =>
      alert(error.message)
    );
  };

  const signOut = () => {
    firebaseSignOut(auth);
  };

  if (loading) {
    return (
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      >
      <Image src={require("./assets/logo.png")} alt="Logo" boxSize="100" />
      </Box>
    );
  }

  return (
    <ChakraProvider>
      <Router>
        <Container maxW="container.xl" p={4} pt={6}>
          <Navbar user={user} auth={auth} signInWithGoogle={signInWithGoogle} />
          <Box>
            {user ? (
              <>
                <Routes>
                  <Route
                    path="/"
                    element={<Navigate replace to="/landing" />}
                  />
                  <Route
                    path="/landing"
                    element={<LandingPage user={user} quizzes={quizzes} />}
                  />
                  <Route
                    path="/quiz/:quizID"
                    element={<Quiz quizzes={quizzes} user={user} />}
                  />
                  <Route
                    path="/dashboard"
                    element={<Dashboard user={user} />}
                  />
                </Routes>
              </>
            ) : (
              <Welcome signInWithGoogle={signInWithGoogle} />
            )}
          </Box>
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;
