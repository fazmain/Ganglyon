import React, { useEffect, useState } from "react";
import { auth } from "./firebase-config";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from "firebase/auth";
import { Button, Box, ChakraProvider, Container } from "@chakra-ui/react";
import Quiz from "./Quiz";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import Navbar from "./NavBar";
import quizzes from "./quizData";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Welcome from "./Welcome";

function App() {
  const [user, setUser] = useState(null);

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

  return (
    <ChakraProvider>
      <Router>
        <Container maxW="container.xl" p={4} pt={6}>
          <Navbar user={user} auth = {auth} signInWithGoogle={signInWithGoogle} />
          <Box p={4}>
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
            <Welcome signInWithGoogle={signInWithGoogle}/>
            )}
          </Box>
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;
