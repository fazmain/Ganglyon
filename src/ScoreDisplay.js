import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Button,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ScoreDisplay = ({ score, totalQuestions, wrong, skip, quiz }) => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleTakeAnotherQuiz = () => {
    navigate("/");
  };

  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderColor={"red.400"}
      borderRadius="lg"
      overflow="hidden"
      p={7}
      m="auto"
      mt={5}
      textAlign="center"
    >
      <Box>
        {quiz.quizType === "MCQ" ? (
          <Stat>
            <StatLabel fontSize="lg">Quiz Completed!</StatLabel>

            <StatNumber fontSize="2xl">{`Correct: ${score}`}</StatNumber>
            <StatNumber fontSize="2xl">{`Wrong: ${wrong}`}</StatNumber>
            <StatNumber fontSize="2xl">{`Skipped: ${skip}`}</StatNumber>

            <StatLabel fontSize="lg">
              You scored {score.toFixed(1)} out of {totalQuestions.toFixed(1)}
            </StatLabel>
          </Stat>
        ) : (
          <Stat>
            <StatLabel fontSize="lg">Quiz Completed!</StatLabel>
            <StatLabel fontSize="2xl">
              You scored {score.toFixed(1)} out of {totalQuestions.toFixed(1)}
            </StatLabel>
          </Stat>
        )}
        <VStack>
          <Button mt={4} colorScheme="gray" onClick={handleTakeAnotherQuiz}>
            Take another quiz
          </Button>
          <Button
            mt={2}
            onClick={() => window.location.reload()}
            colorScheme="red"
          >
            Take quiz again!
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default ScoreDisplay;
