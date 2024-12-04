// Chakra imports
import { Avatar, Box, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "./Card.js";
import React from "react";

export default function UserProfile(props) {
  const { avatar, name, email, college, profession } = props;
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "#cccccc !important",
    "#cccccc !important"
  );
  return (
    <Box>
      <Card mb={{ base: "0px", lg: "20px" }} align="center" maxW="md" pb={5}>
        {/* <Avatar
          my="auto"
          mx="auto"
          src={avatar}
          p={1}
          h="110px"
          w="110px"
          border="1px solid"
          bg="white"
        /> */}
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="4xl"
          mt="10px"
        >
          {name}
        </Text>

        <Text color={textColorSecondary} fontSize="md">
          {college}
        </Text>
      </Card>
    </Box>
  );
}
