import React from "react";
import {
  Box,
  Text,
  Stack,
  Heading,
  Image,
  useColorMode,
  useBreakpointValue,
  Flex,
  Link,
  HStack,
} from "@chakra-ui/react";
import home from "./assets/home.png";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

// import { FcGoogle } from "react-icons/fc";

const Welcome = () => {
  const { colorMode } = useColorMode();
  const isDesktop = useBreakpointValue({ sm: false, lg: true });
  return (
    <>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="center"
        mt={7}
        px={7}
        p={5}
        borderRadius="lg"
        boxShadow="lg"
        bg={colorMode === "light" ? "white" : "gray.700"}
      >
        <Image
          src={home}
          alt="Home"
          objectFit="contain"
          height="50vh"
          mx={isDesktop ? 10 : "auto"}
        />
        <Box p={2} mt={2} mx={"auto"}>
          <Stack spacing={3}>
            <Heading
              size={"xl"}
              color={colorMode === "light" ? "dark" : "gray.50"}
            >
              Medical Quizzes have never been easier!
            </Heading>
            <Text
              fontSize={"md"}
              color={colorMode === "light" ? "gray.600" : "gray.200"}
            >
              Login on Sign up to take a quiz.{" "}
            </Text>
            {/* Depreciated google login */}
            {/* <Button onClick={signInWithGoogle} maxW={"md"} variant={"outline"} leftIcon={<FcGoogle />} size="sm" py={2} px={4} >
          Sign in with Google
        </Button> */}

            <SignIn />
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default Welcome;
