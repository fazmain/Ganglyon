import React from 'react';
import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const LandingPage = ({ quizzes }) => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Select a Quiz:</Text>
      {quizzes.map((quiz) => (
        <Box key={quiz.quizID} mb={2}>
          <Link to={`/quiz/${quiz.quizID}`} style={{ textDecoration: 'none' }}>
            <Button colorScheme="teal" width="full">
              {quiz.quizSubject} - {quiz.quizChapter} ({quiz.quizType})
            </Button>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default LandingPage;
