import React, { useEffect, useState, useContext } from "react";
import {
  Container,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  Button,
  useToast,
  Center,
  Box,
  IconButton,
  Heading,
  Tag,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { useUser } from "../contexts/UserContext";
import {
  getFirestore,
  doc,
  updateDoc,
  arrayRemove,
  onSnapshot,
} from "firebase/firestore";
import { DeleteIcon } from "@chakra-ui/icons";

function BookmarkPage() {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useUser();
  const db = getFirestore();
  const toast = useToast();

  useEffect(() => {
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      const unsubscribe = onSnapshot(
        userDocRef,
        (doc) => {
          if (doc.exists()) {
            setBookmarks(doc.data().bookmarks || []);
          } else {
            setBookmarks([]);
          }
          setLoading(false);
        },
        (error) => {
          toast({
            title: "Error",
            description: "Error fetching bookmarks.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      );

      return () => unsubscribe();
    }
  }, [user, db]);

  const removeBookmark = async (question) => {
    const userDocRef = doc(db, "users", user.uid);
    try {
      await updateDoc(userDocRef, {
        bookmarks: arrayRemove(question),
      });
      toast({
        title: "Bookmark Removed",
        description: "The bookmark has been successfully removed.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to remove the bookmark.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  if (!user) {
    return (
      <Container>
        <Text fontSize="xl" mt="5">
          You must be logged in to see your bookmarks.
        </Text>
      </Container>
    );
  }

  if (loading) {
    return (
      <Center>
        <Box m={8} p={5}>
          <Text>Loading questions...</Text>
        </Box>
      </Center>
    );
  }

  if (bookmarks.length === 0) {
    return (
      <Center>
        <Box m={8} p={5}>
          <Text>No bookmarks found.</Text>
        </Box>
      </Center>
    );
  }

  return (
    <Box>
      <Center my={5}>
        <Heading>Saved Questions</Heading>
      </Center>
      <SimpleGrid columns={[1, null, 2]} spacing="20px">
        {bookmarks.map((bookmark, index) => (
          <Card key={index}>
            <CardBody>
              <Text fontSize="lg" fontWeight="bold">
                {bookmark.question}
              </Text>

              <Text color={"gray.500"}>
                {bookmark.qUni}, {bookmark.qMonth}, {bookmark.qYear}
              </Text>
              <HStack>
                <Tag colorScheme="blue" size={"md"} p={2}>
                  {bookmark.qTopic}
                </Tag>
                <Spacer />
                <IconButton
                  mt="4"
                  variant="outline"
                  size="md"
                  colorScheme="red"
                  aria-label="Remove Bookmark"
                  icon={<DeleteIcon />}
                  onClick={() => removeBookmark(bookmark)}
                />
              </HStack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default BookmarkPage;
