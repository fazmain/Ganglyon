import React, { useState } from "react";
import { auth } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,  // Import this
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

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Signed in successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Failed to sign in",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setIsLoading(false);
  };

  const handlePasswordReset = async () => {
    if (email) { // Make sure the user has entered their email
      try {
        await sendPasswordResetEmail(auth, email);
        toast({
          title: "Reset Link Sent",
          description: "Check your email for the password reset link",
          status: "info",
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: "Failed to send reset link",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Email Required",
        description: "Please enter your email address to reset your password",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p="8" borderWidth="1px" borderRadius="lg">
      <Text fontSize="xl" as="b">
        Sign in
      </Text>
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
        mt="4"
        onClick={handleSignIn}
        isLoading={isLoading}
      >
        Sign In
      </Button>
      <Button
        mt="4"
        colorScheme="blue"
        onClick={handlePasswordReset}
        isLoading={isLoading}
        variant="outline"
      >
        Forgot Password?
      </Button>
    </Box>
  );
}

export default SignIn;
