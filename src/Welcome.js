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
} from "@chakra-ui/react";
import home from "./assets/home.png";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
// import { FcGoogle } from "react-icons/fc";

const Welcome = () => {
  const { colorMode } = useColorMode();
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="center"
        mt={7}
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        bg={colorMode === "light" ? "white" : "gray.700"}
      >
        <Stack
          spacing={4}
          alignItems={{ base: "center", lg: "flex-start" }}
          mb={{ base: 6, lg: 0 }}
        >
          <Heading color={colorMode === "light" ? "red.600" : "red.300"}>
            Medical Quizzes have never been easier!
          </Heading>
          <Text fontSize="xl" as="b">Sign in to take your first quiz.</Text>
          {/* Depreciated google login */}
          {/* <Button onClick={signInWithGoogle} maxW={"md"} variant={"outline"} leftIcon={<FcGoogle />} size="sm" py={2} px={4} >
          Sign in with Google
        </Button> */}
          <SignIn />
          <Box mt={4}>
            <Text as="b" fontSize="xl" >Don't have an account?</Text>
            <SignUp />
          </Box>
        </Stack>
        {isDesktop && (
          <Image
            src={home}
            alt="Home"
            objectFit="contain"
            height="400px"
            ml={8}
          />
        )}
      </Flex>
    </>
  );
};

export default Welcome;
