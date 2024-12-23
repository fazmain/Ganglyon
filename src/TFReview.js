import React from "react";
import { Box, Stack, Text, Heading, Divider } from "@chakra-ui/react";

const TFReview = ({ quiz, randomNumbers, userAnswers }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mt={6}>
      <Stack spacing={4} p={4}>
      <Heading fontSize="3xl" mb={1} color={"primary"}>
          Review
        </Heading>
        {randomNumbers.map((randomIndex, index) => {
          const question = quiz.questions[randomIndex];
          return (
            <Box
              key={index}
              p={1}
            >
              <Text fontWeight="bold">
                Question {index + 1}: <br /> {question.question}
              </Text>
              {Object.entries(question.options).map(([key, option]) => (
                <Text key={key}>
                  <br />({key.toUpperCase()}) {option}: <br />
                  {userAnswers[index] &&
                  userAnswers[index][key] === question.correct[key] ? <Text as='b' color={"blue.500"}>Correct</Text> : (
                    <>
                      <>
                        {userAnswers[index] && userAnswers[index][key] ? (
                          <Text as="b" color="red.500">Your Answer: True</Text>
                        ) : userAnswers[index] && !userAnswers[index][key] ? (
                          <Text as="b" color="orange.300">Your Answer: Skipped</Text>
                        ) : (
                            <Text as="b" color="red.500">Your Answer: False</Text>
                        )}
                        <br />
                        <Text as="b" color={"teal.600"}>
                          Correct Answer:{" "}
                          {question.correct[key] ? "True" : "False"}
                        </Text>
                      </>
                    </>
                  )}
                </Text>
              ))}
              <br />
              <Divider mt={1}/>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default TFReview;
