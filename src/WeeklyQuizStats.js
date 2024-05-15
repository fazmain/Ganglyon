import React, { useEffect, useState } from "react";
import { useUser } from "./contexts/UserContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import BarChart from "./QuizBarChart";
import { color } from "framer-motion";

export const barChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["F", "Sa", "S", "M", "T", "W", "Th"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  fill: {
    type: "solid",
    colors: "#0097E6",
  },
  dataLabels: {
    enabled: true,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "20px",
    },
  },
};

const WeeklyQuizStats = () => {
  const user = useUser();
  const [weeklyQuizzes, setWeeklyQuizzes] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          calculateWeeklyQuizzes(data.dailyQuizzes);
        } else {
          console.log("No user document!");
        }
      }
    };

    fetchQuizzes();
  }, [user]);

  useEffect(() => {
    setChartData([
      {
        name: "Quiz Taken",
        data: weeklyQuizzes,
      },
    ]);
  }, [weeklyQuizzes]);

  const calculateWeeklyQuizzes = (dailyQuizzes) => {
    const today = new Date();
    const startOfWeek = new Date(today - ((today.getDay() + 2) % 7) * 86400000); // Set to the most recent Friday
    startOfWeek.setHours(0, 0, 0, 0);
    const quizzesCount = Array(7).fill(0);

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek.getTime() + i * 86400000);
      const formattedDate = day.toISOString().split("T")[0];
      quizzesCount[i] = dailyQuizzes[formattedDate] || 0;
    }

    setWeeklyQuizzes(quizzesCount);
  };

  return (
    <Box maxW="md" borderRadius={"lg"} boxShadow={"lg"} align="center" my={5}>
      <Text fontSize="md" fontWeight="bold" pt={6} px={6}>
        Quizzes Taken This Week{" "}
      </Text>
      <Box height="210px">
        <BarChart
          key={JSON.stringify(weeklyQuizzes)}
          chartData={[
            {
              name: "Quiz Taken",
              data: weeklyQuizzes,
            },
          ]}
          chartOptions={barChartOptions}
        />
      </Box>
    </Box>
  );
};

export default WeeklyQuizStats;
