import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

const TFReview = ({ quiz, randomNumbers, userAnswers }) => {
  return (
    <VStack spacing={4} p={4}>
      <Text fontSize="2xl" mb={4}>
        Review of Your Answers:
      </Text>
      {randomNumbers.map((randomIndex, index) => {
        const question = quiz.questions[randomIndex];
        return (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
          >
            <Text fontWeight="bold">
              Question {index + 1}: <br /> {question.question}
            </Text>
            {Object.entries(question.options).map(([key, option]) => (
              <Text key={key}>
                ({key.toUpperCase()}) {option}:
                <br />
                <>
                  {userAnswers[index] && userAnswers[index][key] ? (
                    <b>Your Answer: True</b>
                  ) : userAnswers[index] && !userAnswers[index][key] ? (
                    <b>Your Answer: Skipped</b>
                  ) : (
                    <b>Your Answer: False</b>
                  )}
                </>
                <br />
                <Text as="b" color={"green.600"}>
                  {question.correct[key]
                    ? "Correct Answer: True"
                    : "Correct Answer: False"}
                </Text>
              </Text>
            ))}
            <br />
          </Box>
        );
      })}
    </VStack>
  );
};

export default TFReview;
