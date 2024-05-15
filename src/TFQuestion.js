import { React, useState } from "react";
import {
  HStack,
  Text,
  RadioGroup,
  Stack,
  Radio,
  Divider,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { set } from "firebase/database";

const TFQuestion = ({ question, handleTFChange, selectedOptions }) => {
  const isDarkMode = useColorMode().colorMode === "dark";
  return (
    <>
      {Object.keys(question.options).map((key) => (
        <Stack key={key} spacing={1}>
          <Text>{`(${key.toUpperCase()}) ${question.options[key]} :`}</Text>
          <RadioGroup
            mb={3}
            onChange={(value) => handleTFChange(key, value)}
            value={selectedOptions[key]?.toString()}
            colorScheme="blue"
          >
            <Stack direction="row" spacing={3}>
              <Box
                borderRadius={"lg"}
                bg={isDarkMode ? "gray.600" : "gray.100"}
              >
                <Radio
                  value="true"
                  size="lg"
                  colorScheme="blue"
                  padding={2}
                  width={"full"}
                  _hover={{ bg: isDarkMode ? "gray.600" : "gray.50" }}
                  _focusWithin={{ bg: isDarkMode ? "gray.600" : "gray.50" }}
                >
                  True
                </Radio>
              </Box>
              <Box
                borderRadius={"lg"}
                bg={isDarkMode ? "gray.600" : "gray.100"}
              >
                <Radio
                  size="lg"
                  colorScheme="blue"
                  padding={2}
                  width={"full"}
                  _hover={{ bg: isDarkMode ? "gray.600" : "gray.50" }}
                  _focusWithin={{ bg: isDarkMode ? "gray.600" : "gray.50" }}
                  value="false"
                >
                  False
                </Radio>
              </Box>
            </Stack>
          </RadioGroup>
        </Stack>
      ))}
    </>
  );
};

export default TFQuestion;
