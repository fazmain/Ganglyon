import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { collection, query, getDocs, getDoc, doc } from "firebase/firestore";
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
  Tag,
} from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import UserWelcome from "./UserWelcome";
import UserScoreCard from "./UserScoreCard";
import StreakComponent from "./UserStreak";
import WeeklyQuizStats from "./WeeklyQuizStats";

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
      <Box centerContent>
        <Box justify="space-between" mb={6}>
          <UserWelcome />
        </Box>
        <Box p={5} boxShadow={"lg"} borderRadius={"lg"}>
          <Text as="b" size="xl" color="dark" my={1}>
            Take your first quiz to see your results here!
          </Text>
          <br />
          <Button
            onClick={() => navigate(`/`)}
            width={"full"}
            bg="primary"
            color="white"
            my={3}
          >
            Take a quiz!
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Container maxW="container.xl" py={5}>
      <Box justify="center" align="center" mb={6}>
        <UserWelcome />
      </Box>
      <StreakComponent />
      <WeeklyQuizStats />
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
              <br />
              <Tag colorScheme="red">
                {result.quizType === "TF" ? "MCQ" : "SBA"}
              </Tag>
            </Heading>

            <Divider my={3} />
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
              <GridItem>
                <Stat>
                  <StatLabel fontSize="md">Attempts</StatLabel>
                  <StatNumber>{result.attempts}</StatNumber>
                </Stat>
              </GridItem>
              <GridItem>
                <Stat>
                  <StatLabel fontSize="md">Last Score</StatLabel>
                  <StatNumber>{result.lastAttemptScore}</StatNumber>
                </Stat>
              </GridItem>
              <GridItem>
                <UserScoreCard user={user} result={result} />
              </GridItem>
            </Grid>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Dashboard;
