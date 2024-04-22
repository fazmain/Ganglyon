import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ScoreDisplay = ({ score, totalQuestions, wrong, skip, quiz }) => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleTakeAnotherQuiz = () => {
    navigate("/");
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      m="auto"
      mt={5}
      textAlign="center"
      bg="blue.50"
    >
      <Box>
        {quiz.quizType === "MCQ" ? (
          <Stat>
            <StatLabel fontSize="lg">Quiz Completed!</StatLabel>

            <StatNumber fontSize="2xl">{`Correct: ${score}`}</StatNumber>
            <StatNumber fontSize="2xl">{`Wrong: ${wrong}`}</StatNumber>
            <StatNumber fontSize="2xl">{`Skipped: ${skip}`}</StatNumber>
            <Divider />
            <StatLabel fontSize="lg">
              You scored {score.toFixed(1)} out of {totalQuestions.toFixed(1)}
            </StatLabel>
          </Stat>
        ) : (
          <Stat>
            <StatLabel fontSize="lg">Quiz Completed!</StatLabel>
            <StatLabel fontSize="lg">
              You scored {score.toFixed(1)} out of {totalQuestions.toFixed(1)}
            </StatLabel>
          </Stat>
        )}

        <Button mt={4} colorScheme="blue" onClick={handleTakeAnotherQuiz}>
          Take another quiz
        </Button>
      </Box>
      
      {/* <Button mt={4} colorScheme="blue" onClick={handleTakeAnotherQuiz}>
        Take another quiz
      </Button> */}
    </Box>
  );
};

export default ScoreDisplay;
