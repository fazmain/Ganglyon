import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { collection, query, getDocs } from "firebase/firestore";
import {
  Box,
  Text,
  Container,
  SimpleGrid,
  Heading,
  Divider,
  Button,
} from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate
} from "react-router-dom";


const Dashboard = ({ user }) => {
  const [quizResults, setQuizResults] = useState([]);

  const navigate = useNavigate();  

  useEffect(() => {
    const fetchQuizResults = async () => {
      if (user) {
        const q = query(collection(db, "users", user.uid, "quizzes"));
        const querySnapshot = await getDocs(q);
        const results = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQuizResults(results);
      }
    };

    fetchQuizResults();
  }, [user]);

  if (!quizResults.length) {
    return (
      <Container centerContent>
        <Heading>No Results Found</Heading>
      </Container>
    );
  }

return (
    <Container maxW="container.xl" py={5}>
        <Heading as="h1" size="xl" mb={6}>
            All Results
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
            {quizResults.map((result) => (
                <Box
                    key={result.id}
                    p={5}
                    shadow="md"
                    borderWidth="1px"
                    borderRadius="lg"
                >
                    <Heading as="h3" size="md">
                        {result.quizInfo}
                    </Heading>
                    <Text fontSize="lg" mt={2}>
                        <strong>Last Score:</strong> {result.lastAttemptScore}
                    </Text>
                    <Text fontSize="lg">
                        <strong>Total Questions:</strong> {result.totalQuestions}
                    </Text>
                    <Text fontSize="lg">
                        <strong>Attempts:</strong> {result.attempts}
                    </Text>
                    <Divider my={3} />
                    <Button onClick={() => navigate(`/quiz/${result.id}`)} colorScheme="blue">
                        Take quiz again!
                    </Button>
                </Box>
            ))}
        </SimpleGrid>
    </Container>
);
};

export default Dashboard;
