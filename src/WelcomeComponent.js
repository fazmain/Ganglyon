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
  Button,
} from "@chakra-ui/react";
import home from "./assets/home.png";
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
        mt={5}
        p={4}
      >
        <Image
          src={home}
          alt="Home"
          objectFit="contain"
          height="30vh"
          mx={isDesktop ? 10 : "auto"}
        />
        <Box p={2} mt={2} mx={"auto"}>
          <Stack spacing={3}>
            <Heading
              size={"xl"}
              color={colorMode === "light" ? "dark" : "gray.50"}
            >
              Master Your Medical Exams with Ganglyon!
            </Heading>
            <Text
              fontSize={"md"}
              color={colorMode === "light" ? "gray.500" : "gray.200"}
            >
              The ultimate app for Bangladeshi medical students. Access quizzes,
              past question papers, and track your progress all in one place.{" "}
            </Text>
            {/* Depreciated google login */}
            {/* <Button onClick={signInWithGoogle} maxW={"md"} variant={"outline"} leftIcon={<FcGoogle />} size="sm" py={2} px={4} >
          Sign in with Google
        </Button> */}
            <Link href="/signin">
              <Button
                height="50px"
                bg="primary"
                color="white"
                width={"full"}
                mt={6}
              >
                Sign in
              </Button>
            </Link>
            <Link href="/signup">
              <Button height="50px" bg="secondary" color="white" width={"full"}>
                Register
              </Button>
            </Link>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default Welcome;
