import React, { useEffect, useState } from "react";
import { auth } from "./firebase-config";
import { getDatabase, ref, onValue } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import Quiz from "./Quiz";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import Navbar from "./NavBar";
import Welcome from "./Welcome";
import SignUp from "./SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    const quizzesRef = ref(db, "quizzes");
    onValue(quizzesRef, (snapshot) => {
      const data = snapshot.val();
      setQuizzes(Object.values(data || {}));
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <ChakraProvider>
      <UserProvider>
        <Router>
          <Container maxW="container.xl" p={4} pt={6}>
            <Navbar user={user} auth={auth} />
            <Box>
              {user ? (
                <Routes>
                  <Route
                    path="/"
                    element={<Navigate replace to="/landing" />}
                  />
                  <Route
                    path="/landing"
                    element={<LandingPage quizzes={quizzes} />}
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
              ) : (
                <>
                  <Welcome />
                </>
              )}
            </Box>
          </Container>
        </Router>
      </UserProvider>
    </ChakraProvider>
  );
}

export default App;
