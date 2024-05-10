import { React, useState } from "react";
import {
  HStack,
  Text,
  RadioGroup,
  Stack,
  Radio,
  Divider,
  Box,
} from "@chakra-ui/react";
import { set } from "firebase/database";

const TFQuestion = ({ question, handleTFChange, selectedOptions }) => {
  return (
    <>
      {Object.keys(question.options).map((key) => (
        <Stack key={key} spacing={4}>
          <Text>{`(${key.toUpperCase()}) ${question.options[key]} :`}</Text>
          <RadioGroup
            onChange={(value) => handleTFChange(key, value)}
            value={selectedOptions[key]?.toString()}
            colorScheme="blue"
          >
            <Stack direction="row">
              <Box border={"1px"} p={2} m={2} borderRadius={"md"}>
                <Radio value="true">True</Radio>
              </Box>
              <Box border={"1px"} p={2} m={2} borderRadius={"md"}>
                <Radio value="false">False</Radio>
              </Box>
            </Stack>
          </RadioGroup>
        </Stack>
      ))}
    </>
  );
};

export default TFQuestion;
