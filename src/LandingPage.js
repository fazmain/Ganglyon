import { React, useState } from "react";
import { Box, Button, Text, Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LandingPage = ({ quizzes, user }) => {
  const [subjectFilter, setSubjectFilter] = useState("");
  const [chapterFilter, setChapterFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const filteredQuizzes = quizzes.filter(quiz =>
    (subjectFilter ? quiz.quizSubject === subjectFilter : true) &&
    (chapterFilter ? quiz.quizChapter === chapterFilter : true) &&
    (typeFilter ? quiz.quizType === typeFilter : true)
  );

  return (
    <Box p={4}>
      {user && (
        <Text fontSize="2xl" mb={4}>
          Welcome, {user.displayName || "User"}!
        </Text>
      )}
      <Text fontSize="2xl" mb={4}>
        Select a Quiz:
      </Text>
      <Select
        placeholder="Select Subject"
        onChange={(e) => setSubjectFilter(e.target.value)}
      >
        {[...new Set(quizzes.map((quiz) => quiz.quizSubject))].map(
          (subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          )
        )}
      </Select>
      <Select
        placeholder="Select Chapter"
        onChange={(e) => setChapterFilter(e.target.value)}
      >
        {[...new Set(quizzes.map((quiz) => quiz.quizChapter))].map(
          (chapter) => (
            <option key={chapter} value={chapter}>
              {chapter}
            </option>
          )
        )}
      </Select>
      <Select
        placeholder="Select Type"
        onChange={(e) => setTypeFilter(e.target.value)}
      >
        {[...new Set(quizzes.map((quiz) => quiz.quizType))].map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </Select>
      {filteredQuizzes.map((quiz) => (
        <Box key={quiz.quizID} mb={2}>
          <Link to={`/quiz/${quiz.quizID}`} style={{ textDecoration: "none" }}>
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
