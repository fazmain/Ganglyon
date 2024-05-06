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
  Input,
  HStack,
  Tag,
  useColorMode,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useUser } from "./contexts/UserContext";


function capitalizeFirstLetter(string) {
  return string.toUpperCase()[0] + string.slice(1);
}

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const LandingPage = ({ quizzes }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const {chapterName} = useParams();
const query = useQuery();
const subject = query.get("subject");
  const user = useUser();
  const { colorMode } = useColorMode();
  const [subjectFilter, setSubjectFilter] = useState("");
  const [chapterFilter, setChapterFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [filteredChapters, setFilteredChapters] = useState([]);
  const [filteredTypes, setFilteredTypes] = useState([]);
  const [numberOfQuizzes, setNumberOfQuizzes] = useState(10);
  const [filteredQuizzes, setFilteredQuizzes] = useState([]);


  const handleQuizSelection = (quiz) => {
    setSelectedQuiz(quiz);
    onOpen();
  };

  useEffect(() => {
    if (subject) {
      const filtered = quizzes.filter(quiz => quiz.quizSubject === subject);
      setFilteredQuizzes(filtered);
    } else {
      setFilteredQuizzes(quizzes);
    }
  }, [subject, quizzes]);
  
  // useEffect(() => {
  //   // Filter chapters based on selected subject
  //   if (subjectFilter) {
  //     const chapters = new Set(
  //       quizzes
  //         .filter((quiz) => quiz.quizSubject === subjectFilter)
  //         .map((quiz) => quiz.quizChapter)
  //     );
  //     setFilteredChapters([...chapters]);
  //     setChapterFilter("");
  //     setFilteredTypes([]); // Reset types when subject changes
  //     setTypeFilter("");
  //   } else {
  //     setFilteredChapters([]);
  //     setFilteredTypes([]);
  //     setChapterFilter("");
  //     setTypeFilter("");
  //   }
  // }, [subjectFilter, quizzes]);

  // useEffect(() => {
  //   // Filter types based on selected subject and chapter
  //   if (chapterFilter) {
  //     const types = new Set(
  //       quizzes
  //         .filter(
  //           (quiz) =>
  //             quiz.quizSubject === subjectFilter &&
  //             quiz.quizChapter === chapterFilter
  //         )
  //         .map((quiz) => quiz.quizType)
  //     );
  //     setFilteredTypes([...types]);
  //     setTypeFilter("");
  //   } else {
  //     setFilteredTypes([]);
  //     setTypeFilter("");
  //   }
  // }, [chapterFilter, quizzes]);

  // const filteredQuizzes = quizzes.filter(
  //   (quiz) =>
  //     (subjectFilter ? quiz.quizSubject === subjectFilter : true) &&
  //     (chapterFilter ? quiz.quizChapter === chapterFilter : true) &&
  //     (typeFilter ? quiz.quizType === typeFilter : true)
  // );

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
        <Grid
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap={4}
          width={{ base: "100%", lg: "100%" }}
        >
          {filteredQuizzes.map((quiz) => (
            <GridItem key={quiz.quizID}>
              <Card maxW="sm" _hover={{ boxShadow: "lg" }} mx="auto" bg={"red.50"}>
                <CardHeader onClick={() => handleQuizSelection(quiz)}>
                  <Text fontSize="2xl" fontWeight="bold">
                    {quiz.quizChapter}
                  </Text>
                  <Tag sizeize="md" colorScheme="red">
                    {quiz.quizType === "TF" ? "MCQ" : "SBA"}
                  </Tag>
                </CardHeader>
                {/* <CardBody>
                  <Button
                    colorScheme="red"
                    onClick={() => handleQuizSelection(quiz)}
                  >
                    Take Quiz
                  </Button>
                </CardBody> */}
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Box>

      {selectedQuiz && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          size={{ base: "xs", lg: "lg" }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Quiz Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <HStack>
                <Text fontSize="md" as={"b"}>
                  Subject:{" "}
                </Text>
                <Text fontSize={"md"}>{selectedQuiz.quizSubject}</Text>
              </HStack>
              <HStack>
                <Text fontSize="md" as={"b"} my={1}>
                  Chapter:
                </Text>
                <Text fontSize={"md"}>{selectedQuiz.quizChapter}</Text>
              </HStack>
              <Text my={2}>Number of Questions: </Text>
              <Select
                value={numberOfQuizzes}
                onChange={(e) => setNumberOfQuizzes(e.target.value)}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </Select>
              <HStack>
                <Text fontSize="md" as={"b"} my={1}>
                  Questions:
                </Text>
                <Text fontSize={"md"}>{numberOfQuizzes}</Text>
              </HStack>
              <HStack>
                <Text fontSize="md" as={"b"} mb={1}>
                  Time:
                </Text>
                <Text fontSize={"md"}>
                  {Math.floor((numberOfQuizzes * 20) / 60)} minutes{" "}
                  {(numberOfQuizzes * 20) % 60} seconds
                </Text>
              </HStack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Close
              </Button>
              <Link
                to={`/quiz/${selectedQuiz.quizID}?count=${numberOfQuizzes}`}
                style={{ textDecoration: "none" }}
              >
                <Button colorScheme="green">Start Quiz</Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default memo(LandingPage);
