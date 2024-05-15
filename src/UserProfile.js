// Chakra imports
import { Avatar, Box, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "./Card.js";
import React from "react";

export default function UserProfile(props) {
  const { avatar, name, email, college, profession } = props;
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "#009bd6 !important",
    "#009bd6 !important"
  );
  return (
    <Card mb={{ base: "0px", lg: "20px" }} align="center" maxW="md" boxShadow="md" borderRadius="xl" pb={5}>
      <Box bg="#2bbdf2" bgSize="cover" borderTopRadius={"xl"} h="131px" w="100%" />

      <Avatar
        mx="auto"
        src={avatar}
        h="87px"
        w="87px"
        mt="-43px"
        border="4px solid"
        bg="white"
      />
      <Text color={textColorPrimary} fontWeight="bold" fontSize="xl" mt="5px">
        {name}
      </Text>
      <Text color={textColorSecondary} fontSize="sm">
        {email}
      </Text>
      <Text color={textColorSecondary} fontSize="sm">
        {college}
      </Text>
      <Text color={textColorSecondary} fontSize="sm">
        {profession}
      </Text>
    </Card>
  );
}
