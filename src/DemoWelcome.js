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
  Button,
} from "@chakra-ui/react";
import home from "./assets/home.png";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { Link } from "react-router-dom";
import { useUser } from "./contexts/UserContext";

// import { FcGoogle } from "react-icons/fc";

const DemoWelcome = () => {
  const { colorMode } = useColorMode();
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const user = useUser();

  const refresh = () => {window.location.reload()};

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
          <Text fontSize="xl" as="b">
            Welcome, {user ? user.displayName : "User"}!
          </Text>
          {/* Depreciated google login */}
          {/* <Button onClick={signInWithGoogle} maxW={"md"} variant={"outline"} leftIcon={<FcGoogle />} size="sm" py={2} px={4} >
          Sign in with Google
        </Button> */}
          <Box>
            <Button colorScheme="red" variant={"outline"} onClick={refresh}>
              <Link to="/landing">Go to all quizzes.</Link>
            </Button>
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

export default DemoWelcome;
