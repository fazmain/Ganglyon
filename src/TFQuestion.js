// TFQuestion.js
import React from 'react';
import { HStack, Text, RadioGroup, Stack, Radio } from "@chakra-ui/react";

const TFQuestion = ({ question, handleTFChange, selectedOptions }) => {
  return (
    <>
      {Object.keys(question.options).map((key) => (
        <HStack key={key} spacing={4}>
          <Text>{`${question.options[key]} (${key.toUpperCase()}):`}</Text>
          <RadioGroup
            onChange={(e) => handleTFChange(key, e)}
            value={selectedOptions[key]?.toString()}
          >
            <Stack direction="row">
              <Radio value="true">True</Radio>
              <Radio value="false">False</Radio>
            </Stack>
          </RadioGroup>
        </HStack>
      ))}
    </>
  );
};

export default TFQuestion;
