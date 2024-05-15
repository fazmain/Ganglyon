import React from "react";
import { Box, Stack, Text, Heading, Divider } from "@chakra-ui/react";

const MCQReview = ({ quiz, randomNumbers, userAnswers }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mt={6}>
      <Stack spacing={4}>
        <Heading fontSize="3xl" mb={1} color={"primary"}>
          Review
        </Heading>
        {randomNumbers.map((randomIndex, index) => {
          const question = quiz.questions[randomIndex];
          console.log(userAnswers);
          if (userAnswers[index] !== question.correct) {
            return (
              <Box p={1}>
                <Text fontWeight="bold">
                  Question {index + 1}: {question.question}
                </Text>
                <Text as="b" color={"red.500"}>
                  Your Answer:{" "}
                  {userAnswers[index] === null ? "Skipped" : userAnswers[index]}
                </Text>
                <br />
                <Text as="b" color={"green.500"}>
                  Correct Answer: {question.correct}
                </Text>
                {question.solution && <Text>Explanation: {question.solution}</Text>}
                <Divider mt={4}/>
              </Box>
            );
          }
        })}
      </Stack>
    </Box>
  );
};

export default MCQReview;
