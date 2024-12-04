import React, { useEffect, useState } from "react";
import { auth } from "./firebase-config";
import { getDatabase, ref, onValue } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { Box, ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import Quiz from "./Quiz";
import LandingPage from "./pages/QuizPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./NavBar";
import Welcome from "./pages/Welcome";
import DemoWelcome from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/400.css";
import DeleteAccount from "./pages/DeleteAccount";
import PrivacyStatement from "./pages/Privacy";
import PastQuestions from "./pages/PastQuestions";
import NotFoundPage from "./pages/404page";
import BookmarkPage from "./pages/BookMarks";
import SignInPage from "./pages/SignInPage";

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    primary: "#0074FF",
    secondary: "#17171E",
    dark: "#021116",
  },
  fonts: {
    heading: `Poppins, sans-serif`,
    body: `Poppins, sans-serif`,
  },
  fontWeights: {
    heading: 600,
    body: 400,
  },
});



function App() {

  const [user, setUser] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  

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

  // if (loading) {
  //   return (
  //     <Box
  //       display="flex"
  //       justifyContent="center"
  //       alignItems="center"
  //       height="100vh"
  //     >
  //       <Image src={require("./assets/logo.png")} alt="Logo" boxSize="100" />
  //     </Box>
  //   );
  // }

  return (
    <UserProvider>
      <ChakraProvider theme={theme}>
        <Router>
          <Container maxW="container.xl" p={4} pt={6}>
            
            <Navbar user={user} auth={auth} />
            <Box>
              {user ? (
                <Routes>
                  <Route path="/" exact element={<DemoWelcome />} />
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
                  <Route
                    path="/DeleteAccount"
                    element={<DeleteAccount user={user} />}
                  />
                  <Route path="/privacy" element={<PrivacyStatement />} />
                  <Route path="/past-questions" element={<PastQuestions />} />
                  <Route path="/bookmarks" element={<BookmarkPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              ) : (
                <>
                  <Routes>
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/signin" element={<SignInPage />} />
                    <Route path="/" element={<Welcome />} />
                    <Route path="/privacy" element={<PrivacyStatement />} />
                  </Routes>
                </>
              )}
            </Box>
          </Container>
        </Router>
      </ChakraProvider>
    </UserProvider>
  );
}

export default App;
