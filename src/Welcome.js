import React from "react";
import {
  Box,
  Text,
  HStack,
  Stack,
  Heading,
  Image,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import home from "./assets/home.png";
import SignUp from "./SignUp";

// import { FcGoogle } from "react-icons/fc";

const Welcome = ({ user }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      mt={7}
      p={8}
      borderRadius="lg"
      boxShadow="lg"
      bg={colorMode === "light" ? "white" : "gray.700"}
      responsive={{
        sm: {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <HStack spacing={4}>
        <Stack>
          <Heading
            color={colorMode === "light" ? "red.600" : "red.300"}
            mb={4}
          >
            Medical Quizzes have never been easier!
          </Heading>
          <Text fontSize="xl" mb={4}>
            Sign in to take your first quiz.
          </Text>
          {/* Depreciated google login */}
          {/* <Button
            onClick={signInWithGoogle}
            maxW={"md"}
            variant={"outline"}
            leftIcon={<FcGoogle />}
            size="sm"
            py={2}
            px={4}
          >
            Sign in with Google
          </Button> */}
          <SignUp />
        </Stack>
        <Box>
          {useBreakpointValue({
            lg: (
              <Image
                pr={2}
                src={home}
                alt="Home"
                objectFit="contain"
                height={"100%"}
              />
            ),
            md: null,
          })}
        </Box>
      </HStack>
    </Box>
  );
};

export default Welcome;