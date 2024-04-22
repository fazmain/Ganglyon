import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { doc, setDoc, increment, arrayUnion } from "firebase/firestore";
import { db } from "./firebase-config";
import ScoreDisplay from "./ScoreDisplay";
import MCQQuestion from "./MCQQuestion";
import TFQuestion from "./TFQuestion";

const Quiz = ({ quizzes, user }) => {
  const { quizID } = useParams();
  const quiz = quizzes.find((q) => q.quizID === quizID);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    if (showScore) {
      saveQuizResult();
    }
  }, [showScore]);

  const handleOptionChange = (value) => {
    setSelectedOptions(value);
  };

  const handleTFChange = (optionKey, value) => {
    setSelectedOptions((prev) => ({
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
          points += 1 / Object.keys(question.correct).length; // Evenly distribute points across all TF options
        }
      }
    } else if (quiz.quizType === "MCQ") {
      if (Object.keys(selectedOptions).length === 0) {
      setSkip((prev) => prev + 1);
      } else if (selectedOptions === question.correct) {
      points = 1; // Full point for a correct MCQ answer
      } else {
      setWrongAnswers((prev) => prev + 1);
      }
    }

    setScore((prev) => prev + points);

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptions({}); // Reset selection for the next question
    } else {
      setShowScore(true);
    }
  };

  const saveQuizResult = async () => {
    const quizRef = doc(db, "users", user.uid, "quizzes", quiz.quizID);
    try {
      await setDoc(
        quizRef,
        {
          scores: arrayUnion(score.toFixed(1)),
          totalQuestions: quiz.questions.length,
          quizInfo: quiz.quizSubject + " - " + quiz.quizChapter,
          lastAttemptScore: score.toFixed(1),
          attempts: increment(1),
        },
        { merge: true }
      );
    } catch (error) {
      console.error("Error writing document:", error);
    }
  };

  if (showScore) {
    return (
      <Box>
        <ScoreDisplay score={score} totalQuestions={quiz.questions.length} wrong={wrongAnswers} skip = {skip} quiz = {quiz} />;
      </Box>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isTF = quiz.quizType === "TF"; // Determine if it's a True/False quiz based on quizType

  return (
    <Box>
      <Text mb={4}>{currentQuestion.question}</Text>
      <VStack spacing={4}>
        {isTF ? (
          <TFQuestion
            question={currentQuestion}
            handleTFChange={handleTFChange}
            selectedOptions={selectedOptions}
          />
        ) : (
          <MCQQuestion
            question={currentQuestion}
            handleOptionChange={handleOptionChange}
            selectedOptions={selectedOptions}
          />
        )}
      </VStack>
      <Button
        mt={4}
        onClick={handleAnswerSubmission}
        isDisabled={!selectedOptions}
      >
        {currentQuestionIndex === quiz.questions.length - 1
          ? "Finish Quiz"
          : "Next Question"}
      </Button>
    </Box>
  );
};

export default Quiz;
