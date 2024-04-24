import React from "react";
import {
  Box,
  Flex,
  Text,
  useColorMode,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = ({ user, auth, signInWithGoogle }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

return (
    <Box
        bg={
            colorMode === "light"
                ? "rgba(255, 255, 255, 0.2)"
                : "rgba(26, 32, 44, 0.2)"
        }
        px={4}
        py={2}
        borderRadius="lg"
        boxShadow="xl"
        border={"1px"}
    >
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            mx="auto"
        >
            <Box>
                <Link to="/">
                    <img src={require("./assets/logo.png")} alt="Logo" width={"8%"}/>
                </Link>
            </Box>
            <Flex alignItems={"center"}>
                <Button mx={2} colorScheme="purple">
                    <Link to="/dashboard">
                        <Text>Dashboard</Text>
                    </Link>
                </Button>
                {user ? (
                    <Box mx={2}>
                        {/* <Text fontSize="2xl" mb={4}>
                            Welcome, {user.displayName || "User"}!
                        </Text> */}
                        <Button onClick={signOut} colorScheme="red">
                            Sign Out
                        </Button>
                    </Box>
                ) : (
                    <Button onClick={signInWithGoogle} colorScheme="blue">
                        Sign in to take a quiz
                    </Button>
                )}

                <IconButton
                    aria-label="Toggle theme"
                    onClick={toggleColorMode}
                    ml={2}
                    icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                />
            </Flex>
        </Flex>
    </Box>
);
};

export default Navbar;
