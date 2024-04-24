import { Box, Text, HStack, Heading, Image } from "@chakra-ui/react";
import home from "./assets/home.gif";

const Welcome = ({ signInWithGoogle }) => {
  return (
    <Box p={8} borderRadius="lg" boxShadow="lg">
      <HStack>
        <Box>
          <Heading color="purple.600" mb={4}>
            Medical Quizzes have never been easier!
          </Heading>
          <Text fontSize={"xl"} as="b">
            Sign in to take your first quiz.
          </Text>{" "}
        </Box>
        <Box>
          <Image src={home} alt="Home" />
        </Box>
      </HStack>
    </Box>
  );
};

export default Welcome;
