import { useEffect, useState } from "react";
import { Box, Button, Text, Select, Container, VStack, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LandingPage = ({ quizzes, user }) => {
  const [subjectFilter, setSubjectFilter] = useState("");
  const [chapterFilter, setChapterFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [filteredChapters, setFilteredChapters] = useState([]);
  const [filteredTypes, setFilteredTypes] = useState([]);

  useEffect(() => {
    // Filter chapters based on selected subject
    if (subjectFilter) {
      const chapters = new Set(
        quizzes.filter(quiz => quiz.quizSubject === subjectFilter).map(quiz => quiz.quizChapter)
      );
      setFilteredChapters([...chapters]);
      setChapterFilter('');
      setFilteredTypes([]);  // Reset types when subject changes
      setTypeFilter('');
    } else {
      setFilteredChapters([]);
      setFilteredTypes([]);
      setChapterFilter('');
      setTypeFilter('');
    }
  }, [subjectFilter, quizzes]);

  useEffect(() => {
    // Filter types based on selected subject and chapter
    if (chapterFilter) {
      const types = new Set(
        quizzes.filter(quiz => quiz.quizSubject === subjectFilter && quiz.quizChapter === chapterFilter).map(quiz => quiz.quizType)
      );
      setFilteredTypes([...types]);
      setTypeFilter('');
    } else {
      setFilteredTypes([]);
      setTypeFilter('');
    }
  }, [chapterFilter, quizzes]);

  const filteredQuizzes = quizzes.filter(
    quiz =>
      (subjectFilter ? quiz.quizSubject === subjectFilter : true) &&
      (chapterFilter ? quiz.quizChapter === chapterFilter : true) &&
      (typeFilter ? quiz.quizType === typeFilter : true)
  );

  return (
    <Container maxW="container.xl" p={4}>
      {user && (
        <Text fontSize="2xl" mb={4}>
          Welcome, {user.displayName || "User"}!
        </Text>
      )}
      <Text fontSize="2xl" px={5}>
        Select a Quiz:
      </Text>
      <VStack spacing={4} p={5} align="stretch">
        <Select
          placeholder="Select Subject"
          onChange={(e) => setSubjectFilter(e.target.value)}
          value={subjectFilter}
        >
          {[...new Set(quizzes.map(quiz => quiz.quizSubject))].map(subject => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </Select>
        <Select
          placeholder="Select Chapter"
          onChange={(e) => setChapterFilter(e.target.value)}
          value={chapterFilter}
        >
          {filteredChapters.map(chapter => (
            <option key={chapter} value={chapter}>{chapter}</option>
          ))}
        </Select>
        <Select
          placeholder="Select Type"
          onChange={(e) => setTypeFilter(e.target.value)}
          value={typeFilter}
        >
          {filteredTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </Select>
      </VStack>
      <Grid templateColumns="repeat(auto-fill, minmax(490px, 1fr))" gap={4}>
        {filteredQuizzes.map(quiz => (
          <GridItem key={quiz.quizID}>
            <Link to={`/quiz/${quiz.quizID}`} style={{ textDecoration: "none" }}>
              <Button
                colorScheme="teal"
                width="full"
                size="lg"
                _hover={{ transform: "scale(1.05)", transition: "all .2s ease-in-out" }}
              >
                {quiz.quizChapter} ({quiz.quizType === "TF" ? "MCQ" : "SBA"})
              </Button>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default LandingPage;
