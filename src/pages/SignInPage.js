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

const Welcome = () => {
  const { colorMode } = useColorMode();
  const isDesktop = useBreakpointValue({ sm: false, lg: true });
  return (
    <>
      <Box m={1} pt={4}>
        <Image
          pl={10}
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
              Sign In
            </Heading>

            <SignIn />
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Welcome;
