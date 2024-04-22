import React from "react";
import { Box, Flex, Text, useColorMode, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = (user) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === "light" ? "gray.100" : "gray.700"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Link to="/">
            <Text fontSize="xl" fontWeight="bold">
              Home
            </Text>
          </Link>
        </Box>
        <Flex alignItems={"center"}>
          <Box mx={2}>
            <Link to="/quizzes">
              <Text fontSize="xl">Quizzes</Text>
            </Link>
          </Box>
          <Box mx={2}>
            <Link to="/dashboard">
              <Text fontSize="xl">Dashboard</Text>
            </Link>
          </Box>
          {user && (
            <Text fontSize="2xl" mb={4}>
              Welcome, {user.displayName || "User"}!
            </Text>
          )}

          <IconButton
            aria-label="Toggle theme"
            onClick={toggleColorMode}
            ml={2}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
