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
  Heading,
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
import { useUser } from "../contexts/UserContext";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const LandingPage = ({ quizzes }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const { chapterName } = useParams();
  const query = useQuery();
  const subject = query.get("subject");
  const user = useUser();
  const { colorMode } = useColorMode();
  const [numberOfQuizzes, setNumberOfQuizzes] = useState(10);
  const [filteredQuizzes, setFilteredQuizzes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleQuizSelection = (quiz) => {
    setSelectedQuiz(quiz);
    onOpen();
  };

  useEffect(() => {
    if (subject) {
      const filtered = quizzes.filter((quiz) => quiz.quizSubject === subject);
      setFilteredQuizzes(filtered);
      setIsLoading(false);
    } else {
      setFilteredQuizzes(quizzes);
      setIsLoading(false);
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
      <Button color={"primary"} variant={"link"}>
        <Link to={"/"}> {"< "}Back to All Quizzes</Link>
      </Button>

      <Box my={8} align={"center"}>
        <Heading fontWeight={"900"}>{subject}</Heading>
      </Box>
      <Box>
        {filteredQuizzes.length === 0 ? (
          <Box align="center" borderRadius={"lg"} boxShadow={"lg"} m={8} p={8}>
            <Text as="b" color="primary" size="xl">
              Loading Quizzes...
            </Text>
          </Box>
        ) : (
          <Grid
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            gap={4}
            width={{ base: "100%", lg: "100%" }}
          >
            {filteredQuizzes.map((quiz) => (
              <GridItem key={quiz.quizID}>
                <Card
                  maxW="sm"
                  _hover={{ boxShadow: "lg" }}
                  mx="auto"
                  bg={colorMode === "light" ? "gray.50" : "gray.600"}
                  borderRadius={"xl"}
                >
                  <CardHeader onClick={() => handleQuizSelection(quiz)}>
                    <Text fontSize="2xl" fontWeight="bold">
                      {quiz.quizChapter}
                    </Text>
                    <Tag sizeize="md" bg="secondary" color="white">
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
        )}
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
                height={"50px"}
                variant="filled"
                value={numberOfQuizzes}
                onChange={(e) => setNumberOfQuizzes(e.target.value)}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
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
                  {Math.floor((numberOfQuizzes * 30) / 60)} minutes{" "}
                  {(numberOfQuizzes * 30) % 60} seconds
                </Text>
              </HStack>
            </ModalBody>
            <ModalFooter>
              <Button bg="dark" color={"white"} mr={3} onClick={onClose}>
                Close
              </Button>
              <Link
                to={`/quiz/${selectedQuiz.quizID}?count=${numberOfQuizzes}`}
                style={{ textDecoration: "none" }}
              >
                <Button bg="primary" color="white">
                  Start Quiz
                </Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default memo(LandingPage);
