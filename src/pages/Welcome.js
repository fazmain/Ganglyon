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
import home from "../assets/home.png";
import SignIn from "../SignIn";
import WelcomeComponent from "../WelcomeComponent";

// import { FcGoogle } from "react-icons/fc";

const Welcome = () => {
  const { colorMode } = useColorMode();
  const isDesktop = useBreakpointValue({ sm: false, lg: true });
  return (
    <>
      {isDesktop ? (
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
                maxW={"lg"}
                color={colorMode === "light" ? "dark" : "gray.50"}
              >
                Master Your Medical Exams with Ganglyon!{" "}
              </Heading>
              <Box maxW={"xl"}>
                <Text
                  fontSize={"md"}
                  color={colorMode === "light" ? "gray.600" : "gray.200"}
                >
                  Empower your studies with Ganglyon, the ultimate app for
                  Bangladeshi medical students. Access quizzes, past question
                  papers, and track your progress all in one place.{" "}
                </Text>
              </Box>
              {/* Depreciated google login */}
              {/* <Button onClick={signInWithGoogle} maxW={"md"} variant={"outline"} leftIcon={<FcGoogle />} size="sm" py={2} px={4} >
          Sign in with Google
        </Button> */}
              {/* <Heading color={"primary"} size={"md"} fontWeight={"bold"}>Sign in </Heading> */}
              <SignIn />
            </Stack>
          </Box>
        </Flex>
      ) : (
        <WelcomeComponent />
      )}
    </>
  );
};

export default Welcome;
