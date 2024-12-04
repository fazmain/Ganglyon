import React, { useEffect, useState, useContext } from "react";
import {
  Container,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  VStack,
  Select,
  Button,
  useToast,
  Box,
  Center,
  HStack,
  IconButton,
  Tag,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { ref, onValue } from "firebase/database";
import { questionsdb } from "../firebase-config"; // Ensure this is the correct path
import { useUser } from "../contexts/UserContext"; // Ensure this is the correct path
import {
  getFirestore,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
} from "firebase/firestore";
import { StarIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function Questions() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    subject: "",
    topic: "",
    year: "",
    month: "",
    paper: "",
    university: "",
  });

  const [bookmarks, setBookmarks] = useState([]);
  const user = useUser();
  const db = getFirestore();
  const toast = useToast();

  useEffect(() => {
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      const unsubscribe = onSnapshot(
        userDocRef,
        (doc) => {
          if (doc.exists() && doc.data().bookmarks) {
            // Map to just the ids for easier comparison
            setBookmarks(doc.data().bookmarks.map((bk) => bk.id));
          } else {
            setBookmarks([]);
          }
        },
        (error) => {
          console.error("Error fetching bookmarks: ", error);
        }
      );

      return () => unsubscribe();
    }
  }, [user, db]);

  useEffect(() => {
    const questionsRef = ref(questionsdb, "questions");
    onValue(
      questionsRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setQuestions(
            Object.values(data).map((question, index) => ({
              ...question,
              id: index,
            }))
          );
        }
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching data: ", error);
      }
    );
  }, []);

  const handleBookmark = async (question) => {
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to bookmark questions.",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
      return;
    }
    const userDocRef = doc(db, "users", user.uid);
    const isBookmarked = bookmarks.includes(question.id);
    try {
      await updateDoc(userDocRef, {
        bookmarks: isBookmarked ? arrayRemove(question) : arrayUnion(question),
      });

      toast({
        title: isBookmarked ? "Bookmark Removed" : "Bookmarked",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error updating bookmarks: ", error);
      toast({
        title: "Error",
        description: "Failed to update the bookmarks.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredQuestions = questions.filter(
    (question) =>
      (filters.subject ? question.qSub === filters.subject : true) &&
      (filters.topic ? question.qTopic === filters.topic : true) &&
      (filters.year ? question.qYear === filters.year : true) &&
      (filters.month ? question.qMonth === filters.month : true) &&
      (filters.paper ? question.qPaper === filters.paper : true) &&
      (filters.university ? question.qUni === filters.university : true)
  );

  if (loading) {
    return (
      <Center>
        <Box m={8} p={5}>
          <Text>Loading questions...</Text>
        </Box>
      </Center>
    );
  }

  return (
    <Box>
      <Center my={5}>
        <Heading>Question Bank</Heading>
      </Center>
      <VStack spacing="20px" mt="5">
        <HStack width={"full"}>
          <Select
            placeholder="Subject"
            name="subject"
            onChange={handleFilterChange}
          >
            <option value="Physiology">Physiology</option>
            <option value="Anatomy">Anatomy</option>
          </Select>
          <Select
            placeholder="Paper"
            name="paper"
            onChange={handleFilterChange}
          >
            <option value="Paper I">Paper I</option>
            <option value="Paper II">Paper II</option>
          </Select>
        </HStack>
        <Select placeholder="Topic" name="topic" onChange={handleFilterChange}>
          <option value="General Physiology">General Physiology</option>
          <option value="Blood Physiology">Blood Physiology</option>
        </Select>
        <HStack width="full">
          <Select placeholder="Year" name="year" onChange={handleFilterChange}>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </Select>
          <Select
            placeholder="Month"
            name="month"
            onChange={handleFilterChange}
          >
            <option value="May">May</option>
            <option value="June">June</option>
          </Select>
        </HStack>

        <Select
          placeholder="University"
          name="university"
          onChange={handleFilterChange}
        >
          <option value="University of Dhaka">University of Dhaka</option>
          <option value="Other University">Other University</option>
        </Select>
      </VStack>
      <SimpleGrid columns={[1, null, 2]} spacing="20px" mt="5">
        {filteredQuestions.map((question, index) => (
          <Card key={index}>
            <CardBody>
              <Text fontSize="xl" fontWeight="bold" color="primary">
                Question {index + 1}
              </Text>
              <Text fontWeight="bold">{question.question}</Text>
              { question.subQuestions ?  question.subQuestions.map((subQ, i) => (
                <Text fontWeight={"bold"} key={i}>{subQ}</Text>
              )) : null}
              <HStack>
                <Tag p={2} size="md">
                  Marks: {question.qMarks}
                </Tag>
                <Spacer />
                {bookmarks.includes(question.id) ? (
                  <IconButton
                    mt="4"
                    size="sm"
                    colorScheme="blue"
                    aria-label="Remove Bookmark"
                    icon={<StarIcon />}
                    onClick={() => handleBookmark(question)}
                  />
                ) : (
                  <IconButton
                    mt="4"
                    size="sm"
                    variant="outline"
                    colorScheme="blue"
                    aria-label="Remove Bookmark"
                    icon={<StarIcon />}
                    onClick={() => handleBookmark(question)}
                  />
                )}
              </HStack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
      <Button
        position="fixed"
        bottom="5"
        right="5"
        bg={"secondary"}
        color="white"
        onClick={() => navigate("/bookmarks")}
        zIndex="tooltip"
      >
        Go to Bookmarks
      </Button>
    </Box>
  );
}

export default Questions;
