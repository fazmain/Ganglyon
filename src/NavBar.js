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
      window.location.href = "/"; 
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
          {colorMode === "light" ? (
            <Link href="/">
              <img
                src={require("./assets/logo.png")}
                alt="Logo"
               width="150rem"
              />
            </Link>
          ) : (
            <Link href="/">
              <img
                src={require("./assets/logo_dark.png")}
                alt="Logo"
                width="150rem"
              />
            </Link>
          )}
        </Box>
        <IconButton
          ref={btnRef}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={isOpen ? onClose : onOpen}
          display={{ md: "none" }}
        />
        <Flex alignItems={"center"} display={{ base: "none", md: "flex" }}>
          <Link href="/">
            <Button
              mx={2}
              variant="ghost"
              _hover={{ bg: "primary", color: "white" }}
            >
              Home
            </Button>
          </Link>

          {user ? (
            <>
              <Link href="/dashboard">
                <Button
                  mx={2}
                  bg="primary"
                  color="white"
                  _hover={{ bg: "primary", opacity: 0.8 }}
                >
                  Dashboard
                </Button>
              </Link>
              <Button
                onClick={signOut}
                colorScheme="gray"
                mx={2}
                variant="outline"
                _hover={{ bg: "primary", color: "white" }}
              >
                Sign Out
              </Button>
            </>
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
              <Link href="/">
                <Button
                  mx={2}
                  variant="ghost"
                  color="primary"
                  _hover={{ bg: "primary", color: "white" }}
                >
                  Home
                </Button>
              </Link>

              {user ? (
                <>
                  <Button
                    w="100%"
                    onClick={signOut}
                    color="gray"
                    _hover={{ bg: "primary", color: "white" }}
                  >
                    Sign Out
                  </Button>
                  <Link href="/dashboard" w="100%">
                    <Button
                      color="primary"
                      w="100%"
                      _hover={{ bg: "primary", opacity: 0.8 }}
                    >
                      Dashboard
                    </Button>
                  </Link>
                </>
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
