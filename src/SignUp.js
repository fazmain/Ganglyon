import React, { useState } from "react";
import { auth } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Text,
} from "@chakra-ui/react";
import { updateProfile } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSignUp = async () => {
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: name,
      });
      toast({
        title: "Account created successfully",
        description: "Welcome, " + name,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error creating account",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setIsLoading(false);
  };

  return (
    <Box maxW="md" my={7} p="8" borderWidth="1px" borderRadius="lg" boxShadow={"lg"}>
      <Text as="b" fontSize="lg" color={"red.500"}>
        Don't have an account?
      </Text>
      <br />
      <Text fontSize="xl" as="b">
          Sign Up
        </Text>
      <FormControl isRequired mt={4}>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl mt="4" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl mt="4" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button
        colorScheme="red"
        variant="outline"
        mt="4"
        onClick={handleSignUp}
        isLoading={isLoading}
      >
        Sign Up
      </Button>
      
    </Box>
  );
}

export default SignUp;
