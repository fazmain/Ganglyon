import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { getAuth, deleteUser } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const DeleteAccount = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const toast = useToast();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleDeleteAccount = async () => {
    setIsDeleting(true);
    try {
      // Delete user data from Firestore
      const userDocRef = doc(db, "users", user.uid);
      await deleteDoc(userDocRef);

      // Delete user account from Firebase Authentication
      const currentUser = auth.currentUser;
      await deleteUser(currentUser);

      toast({
        title: "Account deleted.",
        description: "Your account has been deleted successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      // Redirect to home or login page after account deletion
      navigate("/");
    } catch (error) {
      toast({
        title: "Error deleting account.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setIsDeleting(false);
    }
  };

  return (
    <Container>
      <Box mt={10} p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading as="h1" size="xl" mb={4}>
          Delete Account
        </Heading>
        <Text mb={6}>
          Are you sure you want to delete your account? This action cannot be
          undone.
        </Text>
        <VStack spacing={4}>
          <Button colorScheme="red" onClick={() => setIsOpen(true)}>
            Delete My Account
          </Button>
        </VStack>
      </Box>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Account
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={handleDeleteAccount}
                ml={3}
                isLoading={isDeleting}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Container>
  );
};

export default DeleteAccount;
