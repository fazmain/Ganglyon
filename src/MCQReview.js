import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";

const MCQReview = ({ quiz, randomNumbers, userAnswers }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mt={6}>
      <Stack spacing={4} p={4}>
        <Text fontSize="2xl" mb={1} as="b">
          Review of Your MCQ Answers
        </Text>
        {randomNumbers.map((randomIndex, index) => {
          const question = quiz.questions[randomIndex];
          console.log(userAnswers);
          if (userAnswers[index] !== question.correct) {
            return (
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                <Text fontWeight="bold">
                  Question {index + 1}: {question.question}
                </Text>
                <Text as="b" color={"red.500"}>
                  Your Answer:{" "}
                  {userAnswers[index] === null ? "Skipped" : userAnswers[index]}
                </Text>
                <br />
                <Text as="b" color={"teal.500"}>
                  Correct Answer: {question.correct}
                </Text>
                {question.solution && <Text>Explanation: {question.solution}</Text>}
              </Box>
            );
          }
        })}
      </Stack>
    </Box>
  );
};

export default MCQReview;
