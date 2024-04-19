import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Radio, RadioGroup, Stack, Text, VStack, HStack } from "@chakra-ui/react";
import { doc, setDoc, increment } from "firebase/firestore";
import { db } from "./firebase-config";

const Quiz = ({ quizzes, user }) => {
  const { quizID } = useParams();
  const quiz = quizzes.find((q) => q.quizID === quizID);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (value) => {
    setSelectedOptions(value);
  };

  const handleTFChange = (optionKey, value) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionKey]: value === "true",
    }));
  };

  const handleAnswerSubmission = () => {
    const question = quiz.questions[currentQuestionIndex];
    let points = 0;

    if (quiz.quizType === "TF") {
      for (const [key, isCorrect] of Object.entries(question.correct)) {
        if (selectedOptions[key] === isCorrect) {
          points += 1 / Object.keys(question.correct).length;  // Evenly distribute points across all TF options
        }
      }
    } else if (quiz.quizType === "MCQ") {
      if (selectedOptions === question.correct) {
        points = 1;  // Full point for a correct MCQ answer
      }
    }

    setScore(prev => prev + points);

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptions({});  // Reset selection for the next question
    } else {
      setShowScore(true);
    }
  };

  const saveQuizResult = async () => {
    const quizRef = doc(db, "users", user.uid, "quizzes", quiz.quizID);
    try {
      await setDoc(quizRef, {
        score: score.toFixed(1),
        totalQuestions: quiz.questions.length,
        lastAttemptScore: score.toFixed(1),
        attempts: increment(1),
      }, { merge: true });
    } catch (error) {
      console.error("Error writing document:", error);
    }
  };

  if (showScore) {
    saveQuizResult();
    return <Text>You scored {score.toFixed(1)} out of {quiz.questions.length}</Text>;
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isTF = quiz.quizType === "TF";  // Determine if it's a True/False quiz based on quizType

  return (
    <Box>
      <Text mb={4}>{currentQuestion.question}</Text>
      <VStack spacing={4}>
        {isTF ?
          Object.keys(currentQuestion.options).map((key) => (
            <HStack key={key}>
              <Text>{`${currentQuestion.options[key]} (${key.toUpperCase()}):`}</Text>
              <RadioGroup onChange={(e) => handleTFChange(key, e)} value={selectedOptions[key]?.toString()}>
                <Stack direction="row">
                  <Radio value="true">True</Radio>
                  <Radio value="false">False</Radio>
                </Stack>
              </RadioGroup>
            </HStack>
          )) :
          <RadioGroup onChange={handleOptionChange} value={selectedOptions}>
            <Stack direction="row">
              {currentQuestion.options.map((option, index) => (
                <Radio key={index} value={option}>{option}</Radio>
              ))}
            </Stack>
          </RadioGroup>
        }
      </VStack>
      <Button
        mt={4}
        onClick={handleAnswerSubmission}
        isDisabled={!selectedOptions}
      >
        {currentQuestionIndex === quiz.questions.length - 1 ? "Finish Quiz" : "Next Question"}
      </Button>
    </Box>
  );
};

export default Quiz;
