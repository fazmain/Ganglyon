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
  Grid,
  SimpleGrid,
  HStack,
  VStack,
} from "@chakra-ui/react";
import home from "./assets/home.png";
import { Link } from "react-router-dom";
import { useUser } from "./contexts/UserContext";
import UserProfile from "./UserProfile";

const subjects = [
  "Anatomy",
  "Physiology",
  "Biochemistry",
  "Gyne",
  "Surgery",
  "Medicine",
  "Community",
  "Forensic",
  "Pharma",
];

const DemoWelcome = () => {
  const { colorMode } = useColorMode();
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const user = useUser();

  const refresh = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  return (
    <>
      <Box
        my={6}
        p={6}
        borderRadius="lg"
        boxShadow="lg"
        bg={colorMode === "light" ? "white" : "gray.700"}
      >
        <Text fontSize="2xl" as="b">
          Welcome, {user ? user.displayName : "User"}!
        </Text>
        <br />
        <Text
          fontSize="md"
          color={colorMode === "light" ? "gray.600" : "gray.400"}
        >
          Let's start your quiz selecting a subject from bellow
        </Text>
      </Box>
      <Box>
        <Heading size="lg" my={5}>
          Subjects
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={6}>
          {subjects.map((subject) => (
            <Link as={Link} to={`/landing?subject=${subject}`}>
              <Box
                as="button"
                onClick={refresh}
                borderRadius={"xl"}
                bg={colorMode === "light" ? "gray.50" : "gray.600"}
                boxShadow={"lg"}
              >
                <VStack>
                  <Box px={12} pt={7} pb={3}>
                    <img
                      src={require(`./assets/subjects/${subject}.png`)}
                      alt={subject}
                    />
                  </Box>
                  <Text as="b" pb={1}> {subject}</Text>
                </VStack>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default DemoWelcome;
