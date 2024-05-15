import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Button,
  Divider,
  VStack,
  Icon,
  Text,
  Progress,
  StatGroup,
  CircularProgress,
  CircularProgressLabel,
  Stack,
  Heading,
  Image,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import correct from "./assets/scoredisplay/correct.png";
import incorrect from "./assets/scoredisplay/incorrect.png";
import skipped from "./assets/scoredisplay/skipped.png";


const ScoreDisplay = ({ score, totalQuestions, wrong, skip, quiz }) => {
  const navigate = useNavigate(); 

  const handleTakeAnotherQuiz = () => {
    navigate("/");
  };

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  const scorePercentage = (score / totalQuestions) * 100;

  return (
    <Box maxW="sm" overflow="hidden" m="auto" mt={5} textAlign="center">
      <Box>
        {quiz.quizType === "MCQ" ? (
          <Box
            textAlign="center"
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
          >
            <Heading>Your Score</Heading>
            <Text fontSize="md" color={"gray.500"}>
              Cardiovascular Physiology
            </Text>
            <CircularProgress
              value={scorePercentage}
              color="primary"
              thickness="14px"
              size="150px"
              p={2}
              m={2}
            >
              <CircularProgressLabel>
                <Heading fontSize={"50px"}>{score}</Heading>
              </CircularProgressLabel>
            </CircularProgress>
            <Text color="gray.500">Out of {totalQuestions}</Text>
            <StatGroup mt={8}>
              <Box align={"center"} p={2}>
                <Box align={"center"}>
                  <Image src={correct} alt="incorrect" height="30px" />
                </Box>
                <Text as="b">Correct</Text>
                <Heading>{score}</Heading>
              </Box>
              <Box align={"center"} p={2}>
                <Box align={"center"}>
                  <Image src={incorrect} alt="incorrect" height="30px" />
                </Box>
                <Text as="b">Incorrect</Text>
                <Heading>{wrong}</Heading>
              </Box>

              <Box align={"center"} p={2}>
                <Box align={"center"}>
                  <Image src={skipped} alt="incorrect" height="30px" />
                </Box>
                <Text as="b">Skipped</Text>
                <Heading>{skip}</Heading>
              </Box>
            </StatGroup>
          </Box>
        ) : (
          <Box
            textAlign="center"
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
          >
            <Heading>Your Score</Heading>
            <Text fontSize="md" color={"gray.500"}>
              Cardiovascular Physiology
            </Text>
            <CircularProgress
              value={scorePercentage}
              color="primary"
              thickness="14px"
              size="150px"
              p={2}
              m={2}
            >
              <CircularProgressLabel>
                <Heading fontSize={"50px"}>{score.toFixed(1)}</Heading>
              </CircularProgressLabel>
            </CircularProgress>
            <Text color="gray.500">Out of {totalQuestions}</Text>
          </Box>
        )}

        <Stack direction="column" spacing={3}>
          <Button height="50px" mt={4} bg="secondary" onClick={handleTakeAnotherQuiz}>
            Take Another Quiz
          </Button>
          <Button height="50px" color="white" bg="primary" onClick={navigateToDashboard}>
            Go To Dashboard
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ScoreDisplay;
