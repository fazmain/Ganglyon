import { useEffect, useState, memo } from "react";
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
  Tag,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useUser } from "./contexts/UserContext";

const LandingPage = ({ quizzes }) => {
  const user = useUser();
  const { colorMode } = useColorMode();
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
      <Box mt={5} mb={7} p={8} borderRadius="lg" boxShadow="lg">
        <Box
          justify="space-between"
          mb={4}
          pb={4}
          borderBottomWidth="1px"
          borderColor="gray.200"
        >
          {user && (
            <Text
              as="b"
              fontSize="4xl"
              color={colorMode === "light" ? "red.500" : "red.400"}
            >
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
              color={colorMode === "light" ? "red.600" : "red.400"}
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
              color={colorMode === "light" ? "red.600" : "red.400"}
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
              color={colorMode === "light" ? "red.600" : "red.400"}
            >
              {filteredTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </WrapItem>
        </Wrap>
      </Box>
      <Divider my={4} />

      <Box>
        <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={4} width={"100%"}>
          {filteredQuizzes.map((quiz) => (
            <GridItem key={quiz.quizID}>
              <Card maxW="sm" _hover={{ boxShadow: "lg" }} mx="auto">
                <CardHeader>
                  <Text fontSize="2xl" fontWeight="bold">
                    {quiz.quizChapter}
                  </Text>
                  <Tag sizeize="md" colorScheme="red">
                    {quiz.quizType === "TF" ? "MCQ" : "SBA"}
                  </Tag>
                  <HStack>
                    <Text fontSize="md" as={"b"}>
                      Questions:
                    </Text>
                    <Text fontSize={"md"}>10</Text>
                  </HStack>
                  <HStack>
                    <Text fontSize="md" as={"b"}>
                      Time:
                    </Text>
                    <Text fontSize={"md"}>5 Minutes</Text>
                  </HStack>
                </CardHeader>
                <CardBody>
                  <Link
                    to={`/quiz/${quiz.quizID}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      colorScheme="red"
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
      </Box>
    </Container>

  );
};

export default memo(LandingPage);
