import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Text,
  VStack,
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Tag,
} from "@chakra-ui/react";
import { doc, setDoc, increment, arrayUnion } from "firebase/firestore";
import { db } from "./firebase-config";
import ScoreDisplay from "./ScoreDisplay";
import MCQQuestion from "./MCQQuestion";
import TFQuestion from "./TFQuestion";

const Quiz = ({ quizzes, user }) => {
  const { quizID } = useParams();
  let quiz = quizzes.find((q) => q.quizID === quizID);

  const [randomNumbers, setRandomNumbers] = useState(
    Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * quiz.questions.length)
    )
  );

  console.log(randomNumbers);
  const [timeLeft, setTimeLeft] = useState(300);
  const [timerActive, setTimerActive] = useState(true);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    let interval = null;

    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerActive(false);
      handleQuizFinish();
    }

    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const handleQuizFinish = () => {
    setShowScore(true);
    setTimerActive(false);
  };

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
    const question = quiz.questions[randomNumbers[currentQuestionIndex]];
    let points = 0;

    if (quiz.quizType === "TF") {
      points += handleTFAnswers(question);
    } else if (quiz.quizType === "MCQ") {
      points += handleMCQAnswers(question);
    }

    setScore((prev) => prev + points);

    if (currentQuestionIndex < randomNumbers.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptions({}); // Reset selection for the next question
    } else {
      setShowScore(true);
    }
  };

  const handleTFAnswers = (question) => {
    let tfPoints = 0;
    for (const [key, isCorrect] of Object.entries(question.correct)) {
      if (selectedOptions[key] === isCorrect) {
        tfPoints += 1 / Object.keys(question.correct).length;
      }
    }
    return tfPoints;
  };

  const handleMCQAnswers = (question) => {
    if (Object.keys(selectedOptions).length === 0) {
      setSkip((prev) => prev + 1);
      return 0;
    } else if (selectedOptions === question.correct) {
      return 1; // Full point for a correct MCQ answer
    } else {
      setWrongAnswers((prev) => prev + 1);
      return 0;
    }
  };

  const saveQuizResult = async () => {
    const quizRef = doc(db, "users", user.uid, "quizzes", quiz.quizID);
    try {
      await setDoc(
        quizRef,
        {
          scores: arrayUnion(score.toFixed(1)),
          totalQuestions: randomNumbers.length,
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

  if (showScore || timeLeft === 0) {
    return (
      <Box>
        <ScoreDisplay
          score={score}
          totalQuestions={quiz.questions.length}
          wrong={wrongAnswers}
          skip={skip}
          quiz={quiz}
        />
        {/* {timeLeft === 0 && (<Box><Text>You ran out of time!</Text></Box>)} */}
      </Box>
    );
  }

  const currentQuestion = quiz.questions[randomNumbers[currentQuestionIndex]];
  const isTF = quiz.quizType === "TF";

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <Container>
      <Card mt={5}>
        <VStack spacing={4}>
          <CardHeader>
            <Text fontSize={"2xl"} as="b">
              {currentQuestion.question}
            </Text>
            {currentQuestion.questionUni && (
              <Tag colorScheme="red" size={"md"}>
                {currentQuestion.questionUni}
              </Tag>
            )}
          </CardHeader>
          <Divider />
          {isTF ? (
            <>
              <CardBody>
                <TFQuestion
                  key={`TF-${currentQuestionIndex}`} // Unique key that changes with each question
                  question={currentQuestion}
                  handleTFChange={handleTFChange}
                  selectedOptions={selectedOptions}
                />
              </CardBody>
            </>
          ) : (
            <>
              <CardBody>
                <MCQQuestion
                  key={`MCQ-${currentQuestionIndex}`} // Unique key that changes with each question
                  question={currentQuestion}
                  handleOptionChange={handleOptionChange}
                  selectedOptions={selectedOptions}
                />
              </CardBody>
            </>
          )}
        </VStack>
        <CardFooter>
          <Button
            mt={4}
            onClick={handleAnswerSubmission}
            isDisabled={!selectedOptions}
          >
            {currentQuestionIndex === randomNumbers.length - 1
              ? "Finish Quiz"
              : "Next Question"}
          </Button>
        </CardFooter>
        <Text p={4} fontSize={"lg"} as="b" color={"red.600"}>
          Time Remaining: {minutes} minutes {seconds} seconds
        </Text>
      </Card>
    </Container>
  );
};

export default Quiz;
