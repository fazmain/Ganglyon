import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = ({ user, auth, signInWithGoogle }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <Box
      bg={colorMode === "light" ? "white" : "gray.700"}
      px={4}
      py={2}
      boxShadow="md"
      borderRadius={"lg"}
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        maxW="1200px"
        mx="auto"
      >
        <Box>
          <Link to="/">
            <img
              src={require("./assets/logo.png")}
              alt="Logo"
              width={"65rem"}
            />
          </Link>
        </Box>
        <IconButton
          ref={btnRef}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={isOpen ? onClose : onOpen}
          display={{ md: "none" }}
        />
        <Flex alignItems={"center"} display={{ base: "none", md: "flex" }}>
          <Button
            as={Link}
            href="/"
            mx={2}
            variant="ghost"
            colorScheme="purple"
          >
            Home
          </Button>
          <Button as={Link} href="/dashboard" mx={2} colorScheme="purple">
            Dashboard
          </Button>

          {user ? (
            <Button onClick={signOut} colorScheme="red" mx={2} variant="outline">
              Sign Out
            </Button>
          ) : (
            <></>
          )}
          <IconButton
            aria-label="Toggle theme"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            ml={2}
          />
        </Flex>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Welcome</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <Button as={Link} href="/dashboard" w="100%" colorScheme="purple">
                Dashboard
              </Button>
              {user ? (
                <Button w="100%" onClick={signOut} colorScheme="red">
                  Sign Out
                </Button>
              ) : (
                <></>
              )}
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <IconButton
              aria-label="Toggle theme"
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              w="100%"
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
