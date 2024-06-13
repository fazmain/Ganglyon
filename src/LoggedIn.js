import React from "react";
import { useState, useEffect } from "react";
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
  Link,
} from "@chakra-ui/react";
import home from "./assets/home.png";
import { useUser } from "./contexts/UserContext";
import UserProfile from "./UserProfile";
import Carousel from "./Carousel";
import Image1 from "./assets/carousel/image1.png";
import Image2 from "./assets/carousel/image2.png";
import Image3 from "./assets/carousel/image3.png";

const subjects = [
  "Anatomy",
  "Physiology",
  "Biochemistry",
  "Gyne & Obs",
  "Surgery",
  "Medicine",
  "Community Med",
  "Forensic Med",
  "Pharmacology",
];

const images = [
  Image1, Image2, Image3
];

const DemoWelcome = () => {
  const { colorMode } = useColorMode();
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const user = useUser();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

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
          Let's start your quiz selecting a subject from below
        </Text>
      </Box>
      <Box m={{base:0, md:10}} boxShadow={"lg"} borderRadius={"2xl"}>
       <Image src={images[currentIndex]}/>
      </Box>
      <Box my={6} p={6} borderRadius="lg" boxShadow="lg">
        <Heading size="lg" my={5}>
          Subjects
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={6}>
          {subjects.map((subject) => (
            <Link href={`/landing?subject=${subject}`}>
              <Box
                as="button"
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
                  <Text as="b" pb={3}>
                    {" "}
                    {subject}
                  </Text>
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
