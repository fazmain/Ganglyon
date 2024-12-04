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
import SignUp from "../SignUp";

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
        pt={3}
      >
        <Image
          pl={10}
          src={home}
          alt="Home"
          objectFit="contain"
          height={isDesktop ? "70vh" : "30vh"}
          mx={isDesktop ? 10 : "auto"}
        />
        <Box p={2} mt={2} mx={"auto"}>
          <Stack spacing={3}>
            <Heading
              size={"xl"}
              color={colorMode === "light" ? "dark" : "gray.50"}
            >
              Sign Up
            </Heading>
            {isDesktop ? (
              <Text color={"primary"}>
                <Link href="/">Sign in Instead</Link>
              </Text>
            ) : null}
            <SignUp />
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default Welcome;
