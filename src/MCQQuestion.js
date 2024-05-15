import React from "react";
import {
  RadioGroup,
  Radio,
  SimpleGrid,
  Box,
  useColorMode,
} from "@chakra-ui/react";

const MCQQuestion = ({ question, handleOptionChange, selectedOptions }) => {
  const isDarkMode = useColorMode().colorMode === "dark";
  return (
    <RadioGroup onChange={handleOptionChange} value={selectedOptions}>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} spacing={5} py={5}>
        {question.options.map((option, index) => (
          <Box
            borderRadius={"lg"}
            bg={isDarkMode ? "gray.600" : "gray.100"} 
          >
            <Radio
              key={index}
              value={option}
              size="lg"
              colorScheme={"blue"}
              padding={2}
              width={"full"}
              _hover={{ bg: isDarkMode ? "gray.600" : "gray.50" }} 
              _focusWithin={{ bg: isDarkMode ? "gray.600" : "gray.50" }} 
            >
              {option}
            </Radio>
          </Box>
        ))}
      </SimpleGrid>
    </RadioGroup>
  );
};

export default MCQQuestion;
