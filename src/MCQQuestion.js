// MCQQuestion.js
import React from 'react';
import { RadioGroup, Stack, Radio } from "@chakra-ui/react";

const MCQQuestion = ({ question, handleOptionChange, selectedOptions }) => {
  return (
    <RadioGroup onChange={handleOptionChange} value={selectedOptions}>
      <Stack direction="row">
        {question.options.map((option, index) => (
          <Radio key={index} value={option}>
            {option}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default MCQQuestion;
