import React from "react";
import { RadioGroup, Radio, SimpleGrid, Box } from "@chakra-ui/react";

const MCQQuestion = ({ question, handleOptionChange, selectedOptions }) => {
  return (
    <RadioGroup onChange={handleOptionChange} value={selectedOptions}>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} spacing={5} padding={5}>
        {question.options.map((option, index) => (
          <Box border="1px" borderRadius={"lg"}>
            <Radio
              key={index}
              value={option}
              size="lg"
              colorScheme="red"
              padding={2}
              borderWidth="1px"
              _hover={{ bg: "gray.50" }}
              _focusWithin={{ bg: "gray.50" }}
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
