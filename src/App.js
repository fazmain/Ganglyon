import React, { useEffect, useState } from "react";
import { auth } from "./firebase-config";
import { getDatabase, ref, onValue } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { Box, ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import Quiz from "./Quiz";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import Navbar from "./NavBar";
import Welcome from "./Welcome";
import Banner from "./Banner";
import DemoWelcome from "./DemoWelcome";
import '@fontsource/roboto'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";


const theme = extendTheme({
  fonts: {
    heading: `roboto`,
    body: `roboto`,
  },
})

function App() {
  const [user, setUser] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect((user) => {
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
        <Banner text="This app is under development and may contain bugs, errors, or outdated information." />

        <Router>
          <Container maxW="container.xl" p={4} pt={6}>
            <Navbar user={user} auth={auth} />
            <Box>
              {user ? (
                <Routes>
                  <Route path="/" element={<DemoWelcome />} />
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
      </ChakraProvider>
    </UserProvider>
  );
}

export default App;
