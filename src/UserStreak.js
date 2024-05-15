import React, { useEffect, useState } from "react";
import { useUser } from "./contexts/UserContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import {
  Box,
  Text,
  HStack,
  Icon,
  Center,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Heading,
  useBreakpointValue,
  Stack,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import activeday from "./assets/streak/active.svg";
import inactiveday from "./assets/streak/inactive.svg";

const StreakComponent = () => {
  const user = useUser();
  const [streak, setStreak] = useState(0);
  const [dailyActivities, setDailyActivities] = useState([]);
  const direction = useBreakpointValue({ base: "column", md: "row" });
  useEffect(() => {
    const fetchDailyQuizzes = async () => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const activities = calculateWeekActivities(data.dailyQuizzes);
          setDailyActivities(activities);
          calculateStreak(data.dailyQuizzes);
        } else {
          console.log("No such document!");
        }
      }
    };

    const formatDate = (date) => {
      return [
        date.getFullYear(),
        ("0" + (date.getMonth() + 1)).slice(-2), // Adds leading zero if needed
        ("0" + date.getDate()).slice(-2), // Adds leading zero if needed
      ].join("-");
    };

    const calculateStreak = (dailyQuizzes) => {
      const today = new Date();
      let currentStreak = 0;
      let checkDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 1
      ); // Start from yesterday

      while (true) {
        const formattedDate = formatDate(checkDate);
        if (dailyQuizzes && dailyQuizzes[formattedDate]) {
          currentStreak++;
          checkDate.setDate(checkDate.getDate() - 1);
        } else {
          break;
        }
      }

      setStreak(currentStreak);
    };

    const calculateWeekActivities = (dailyQuizzes) => {
      const days = new Array(7).fill(false);
      const today = new Date();

      for (let i = 0; i < 7; i++) {
        const checkDate = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() - i
        );
        const formattedDate = formatDate(checkDate);
        if (dailyQuizzes && dailyQuizzes[formattedDate]) {
          days[6 - i] = true; // Fill array in reverse order
        }
      }

      return days;
    };

    fetchDailyQuizzes();
  }, [user]);

  return (
    <Flex direction={direction} align="center">
      <Box
        bg="secondary"
        borderRadius="xl"
        width={"full"}
        color="white"
        py={{ base: 5, md: "60px" }}
        mb={{ base: 5, md: 0 }}
        maxW={"xl"}
        boxShadow={"lg"}
      >
        <Stack direction={"row"} spacing={2} justifyContent="center">
          <Text alignContent={"center"} fontSize="xl">
            Current Streak:{" "}
          </Text>
          <Heading alignContent={"center"}>{streak + 1}</Heading>
          <Text alignContent={"center"} fontSize="xl">
            Days
          </Text>
        </Stack>
      </Box>
      <Spacer />

      <Box
        align={"center"}
        borderRadius={"xl"}
        boxShadow={"lg"}
        my={2}
        py={5}
        bg={"#DBF8FE"}
        width={{ base: "full", md: "xl" }}
      >
        <Text as="b" fontSize={"md"} color={"black"}>
          Last Seven Days Streak
        </Text>
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent="center"
          mt={3}
          px={4}
        >
          {dailyActivities.map((active, index) => (
            <Box p={0.2} key={index}>
              {active ? (
                <img src={activeday} alt="Active day" width="50px" />
              ) : (
                <img src={inactiveday} alt="Inactive day" width="50px" />
              )}
              {active ? (
                <Text  as="b" fontSize="xs" color="gray.600">
                  Day {index + 1}
                </Text>
              ) : (
                <Text fontSize="xs" pt={"5px"} color="gray.600">Day {index + 1}</Text>
              )}
            </Box>
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

export default StreakComponent;
