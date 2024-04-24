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
  Flex,
  Icon,
  Link,
  Skeleton,
  SkeletonText,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Grid,
  GridItem,
  AspectRatio,
} from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

const Dashboard = ({ user }) => {
  const [quizResults, setQuizResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizResults = async () => {
      setLoading(true);
      if (user) {
        const q = query(collection(db, "users", user.uid, "quizzes"));
        const querySnapshot = await getDocs(q);
        const results = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQuizResults(results);
      }
      setLoading(false);
    };

    fetchQuizResults();
  }, [user]);

  if (loading) {
    return (
      <Container centerContent>
        <Skeleton height="40px" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Container>
    );
  }

  if (!quizResults.length) {
    return (
      <Container centerContent>
        <Heading>No Results Found</Heading>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={5}>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading as="h1" size="xl">
          Dashboard
        </Heading>
      </Flex>
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

            <Text fontSize="lg">
              <strong>Total Questions:</strong> {result.totalQuestions}
            </Text>

            <Divider my={3} />
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <GridItem>
                <Stat>
                  <StatLabel>Attempts</StatLabel>
                  <StatNumber>{result.attempts}</StatNumber>
                  <StatHelpText>
                    Number of times you've taken this quiz
                  </StatHelpText>
                </Stat>
              </GridItem>
              <GridItem>
                <Stat>
                  <StatLabel>Last Score</StatLabel>
                  <StatNumber>{result.lastAttemptScore}</StatNumber>
                  <StatHelpText>Your score in the last attempt</StatHelpText>
                </Stat>
              </GridItem>
            </Grid>
            <Button
              onClick={() => navigate(`/quiz/${result.id}`)}
              colorScheme="purple"
              
            >
              Take quiz again!
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Dashboard;
