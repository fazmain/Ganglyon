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
        py={3}
        mb={3}
      >
        <Stack direction={"row"} spacing={2} justifyContent="center">
          <Text alignContent={"center"} fontSize="xl">
            Current Streak:{" "}
          </Text>
          <Heading alignContent={"center"}>{streak}</Heading>
          <Text alignContent={"center"} fontSize="xl">
            Days
          </Text>
        </Stack>
      </Box>
      <Spacer />

      <Spacer />
      <Box align={"center"} borderRadius={"xl"} boxShadow={"lg"} my={2} py={4}>
        <Text as="b" fontSize={"md"}>
          Last Seven Days Streak
        </Text>
        <Stack direction={"row"} spacing={1} justifyContent="center" mt={2} px={5}>
          {dailyActivities.map((active, index) => (
            <Box p={1} >
              <img
                key={index}
                src={
                  active
                    ? require("./assets/streak/active.png")
                    : require("./assets/streak/inactive.png")
                }
                alt={active ? "Active day" : "Inactive day"}
                width="50px"
              />
            </Box>
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

export default StreakComponent;
