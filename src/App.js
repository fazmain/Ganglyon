import React, { useEffect, useState } from "react";
import { auth } from "./firebase-config";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from "firebase/auth";
import { Button, Box, ChakraProvider } from "@chakra-ui/react";
import Quiz from "./Quiz";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import quizzes from "./quizData";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

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
    signInWithPopup(auth, googleAuthProvider).catch((error) => alert(error.message));
  };

  const signOut = () => {
    firebaseSignOut(auth);
  };

  return (
    <ChakraProvider>
      <Router>
        <Box p={4}>
          {user ? (
            <>
              <Box mb={4}>
                <Button onClick={signOut} colorScheme="red">Sign Out</Button>
                <Link to="/dashboard">
                  <Button colorScheme="teal" ml={3}>Dashboard</Button>
                </Link>
              </Box>
              <Routes>
                <Route path="/" element={<Navigate replace to="/landing" />} />
                <Route path="/landing" element={<LandingPage quizzes={quizzes} />} />
                <Route path="/quiz/:quizID" element={<Quiz quizzes={quizzes} user={user} />} />
                <Route path="/dashboard" element={<Dashboard user={user} />} />
              </Routes>
            </>
          ) : (
            <Button onClick={signInWithGoogle} colorScheme="blue">
              Sign in to take a quiz
            </Button>
          )}
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
