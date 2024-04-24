import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Text,
  Select,
  Container,
  VStack,
  Grid,
  GridItem,
  Flex,
  Icon,
  Divider,
  Wrap,
  WrapItem,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  ring,
  HStack,
} from "@chakra-ui/react";
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
        quizzes
          .filter((quiz) => quiz.quizSubject === subjectFilter)
          .map((quiz) => quiz.quizChapter)
      );
      setFilteredChapters([...chapters]);
      setChapterFilter("");
      setFilteredTypes([]); // Reset types when subject changes
      setTypeFilter("");
    } else {
      setFilteredChapters([]);
      setFilteredTypes([]);
      setChapterFilter("");
      setTypeFilter("");
    }
  }, [subjectFilter, quizzes]);

  useEffect(() => {
    // Filter types based on selected subject and chapter
    if (chapterFilter) {
      const types = new Set(
        quizzes
          .filter(
            (quiz) =>
              quiz.quizSubject === subjectFilter &&
              quiz.quizChapter === chapterFilter
          )
          .map((quiz) => quiz.quizType)
      );
      setFilteredTypes([...types]);
      setTypeFilter("");
    } else {
      setFilteredTypes([]);
      setTypeFilter("");
    }
  }, [chapterFilter, quizzes]);

  const filteredQuizzes = quizzes.filter(
    (quiz) =>
      (subjectFilter ? quiz.quizSubject === subjectFilter : true) &&
      (chapterFilter ? quiz.quizChapter === chapterFilter : true) &&
      (typeFilter ? quiz.quizType === typeFilter : true)
  );

  return (
    <Container maxW="container.xl" p={4} pt={6}>
      <Box
        justify="space-between"
        mb={4}
        pb={4}
        borderBottomWidth="1px"
        borderColor="gray.200"
      >
        {user && (
          <Text as="b" fontSize="4xl" color="purple.600">
            Welcome, {user.displayName || "User"}!
          </Text>
        )}
      </Box>
      <Text fontSize="2xl" fontWeight="bold" pb={4}>
        All Quizzes
      </Text>
      <Wrap spacing={4} mb={4}>
        <WrapItem>
          <Select
            placeholder="Select Subject"
            onChange={(e) => setSubjectFilter(e.target.value)}
            value={subjectFilter}
            variant={"filled"}
            color="purple.700"
          >
            {[...new Set(quizzes.map((quiz) => quiz.quizSubject))].map(
              (subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              )
            )}
          </Select>
        </WrapItem>
        <WrapItem>
          <Select
            placeholder="Select Chapter"
            onChange={(e) => setChapterFilter(e.target.value)}
            value={chapterFilter}
            variant={"filled"}
            color="purple.700"
          >
            {filteredChapters.map((chapter) => (
              <option key={chapter} value={chapter}>
                {chapter}
              </option>
            ))}
          </Select>
        </WrapItem>
        <WrapItem>
          <Select
            placeholder="Select Type"
            onChange={(e) => setTypeFilter(e.target.value)}
            value={typeFilter}
            variant={"filled"}
            color="purple.700"
          >
            {filteredTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </WrapItem>
      </Wrap>
      <Divider my={4} />

      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={4}>
        {filteredQuizzes.map((quiz) => (
          <GridItem key={quiz.quizID}>
            <Card maxW="sm" overflow="hidden" _hover={{ boxShadow: "lg" }}>
              <CardHeader>
                <Text fontSize="lg" fontWeight="bold">
                  {quiz.quizChapter}
                </Text>
                <Text fontSize="md" color="gray.500">
                  {quiz.quizType === "TF" ? "MCQ" : "SBA"}
                </Text>
              </CardHeader>
              <CardBody>
                <Link
                  to={`/quiz/${quiz.quizID}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    colorScheme="purple"
                    width="50%"
                    size="md"
                    _hover={{
                      transform: "scale(1.05)",
                      transition: "all .2s ease-in-out",
                    }}
                  >
                    Take Quiz
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default LandingPage;
