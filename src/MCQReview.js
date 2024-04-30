import React from 'react';
import { Box, Text, VStack } from "@chakra-ui/react";

const MCQReview = ({ quiz, randomNumbers, userAnswers }) => {
  return (
    <VStack spacing={4} p={4}>
      <Text fontSize="2xl" mb={4}>Review of Your MCQ Answers:</Text>
      {randomNumbers.map((randomIndex, index) => {
        const question = quiz.questions[randomIndex];
        return (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Text fontWeight="bold">Question {index + 1}: {question.question}</Text>
            <Text>
              Your Answer: {userAnswers[index] === question.correct ? "Correct" : userAnswers[index]}
              <br />
              Correct Answer: {question.correct}
            </Text>
            <br />
          </Box>
        );
      })}
    </VStack>
  );
};

export default MCQReview;
