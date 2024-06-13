import React, { useState } from "react";
import { auth } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail, // Import this
} from "firebase/auth";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Text,
  Link,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

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
    navigate("/");
    setIsLoading(false);
  };

  const handlePasswordReset = async () => {
    if (email) {
      // Make sure the user has entered their email
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
    <Box>
      <Text fontSize="xl" as="b">
        Sign in
      </Text>
      <FormControl mt="4" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          variant="filled"
          height={"50px"}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl mt="4" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          variant="filled"
          height={"50px"}
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <Flex justifyContent="flex-end">
        <Button
          mt={4}
          color="secondary"
          onClick={handlePasswordReset}
          isLoading={isLoading}
          variant="link"
        >
          Forgot Password?
        </Button>
      </Flex>
      <Button
        height="50px"
        bg="primary"
        color="white"
        width={"full"}
        mt={6}
        onClick={handleSignIn}
        isLoading={isLoading}
      >
        Sign In
      </Button>

      <Box py={5}>
        <HStack>
          <Text as="b">
            <Link href="/signup">Don't have an account?</Link>
          </Text>
          <Text as="b" color={"primary"} _hover={{ color: "secondary" }}>
            <Link href="/signup"> Sign Up </Link>
          </Text>
        </HStack>
      </Box>
    </Box>
  );
}

export default SignIn;
