import React from "react";
import {
  Box,
  Text,
  HStack,
  Heading,
  Image,
  Button,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import home from "./assets/home.png";

import { FcGoogle } from "react-icons/fc";

const Welcome = ({ signInWithGoogle }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      mt={7}
      p={8}
      borderRadius="lg"
      boxShadow="lg"
      bg={colorMode === "light" ? "white" : "gray.700"}
    >
      <HStack spacing={200}>
        <Box pl={"3"}>
          <Heading color={colorMode === "light" ? "red.600" : "red.300"} mb={4}>
            Medical Quizzes have never been easier!
          </Heading>
          <Text fontSize="xl" mb={4}>
            Sign in to take your first quiz.
          </Text>
          <Button
            onClick={signInWithGoogle}
            maxW={"md"}
            variant={"outline"}
            leftIcon={<FcGoogle />}
          >
            Sign in with Google
          </Button>
        </Box>
        <Box>
          <Image
            pr={10}
            src={home}
            alt="Home"
            objectFit="contain"
            height={"100%"}
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default Welcome;
