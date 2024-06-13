import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
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
  useDisclosure,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";
import { doc, setDoc, increment, arrayUnion } from "firebase/firestore";
import { db } from "./firebase-config";
import ScoreDisplay from "./ScoreDisplay";
import MCQQuestion from "./MCQQuestion";
import TFQuestion from "./TFQuestion";
import TFReview from "./TFReview";
import MCQReview from "./MCQReview";

const Quiz = ({ quizzes, user }) => {
  const { quizID } = useParams();
  let quiz = quizzes.find((q) => q.quizID === quizID);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const numberOfQuizzes = parseInt(queryParams.get("count"));

  const [randomNumbers, setRandomNumbers] = useState(() => {
    const numbers = [];
    while (numbers.length < numberOfQuizzes) {
      const randomNumber = Math.floor(Math.random() * quiz.questions.length);
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  });

  const [timeLeft, setTimeLeft] = useState(numberOfQuizzes * 30);
  const [timerActive, setTimerActive] = useState(true);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [skip, setSkip] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    onOpen();
  };

  const confirmFinishQuiz = () => {
    setShowScore(true);
    setTimerActive(false);
    onClose();
  };

  useEffect(() => {
    if (showScore) {
      saveQuizResult();
    }
  }, [showScore]);

  const handleOptionChange = (value) => {
    setSelectedOptions(value);
    userAnswers[currentQuestionIndex] = value;
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

  const formatDate = (date) => {
    return [
      date.getFullYear(),
      ("0" + (date.getMonth() + 1)).slice(-2), // Adds leading zero if needed
      ("0" + date.getDate()).slice(-2), // Adds leading zero if needed
    ].join("-");
  };

  const saveQuizResult = async () => {
    const quizRef = doc(db, "users", user.uid, "quizzes", quiz.quizID);
    const userRef = doc(db, "users", user.uid);
    const today = formatDate(new Date()); // Get today's date in local timezone YYYY-MM-DD format
    const timestamp = Date.now(); // Get the current timestamp

    try {
      await setDoc(
        quizRef,
        {
          scores: arrayUnion({ score: score.toFixed(1), timestamp }),
          totalQuestions: randomNumbers.length,
          quizInfo: quiz.quizSubject + " - " + quiz.quizChapter,
          lastAttemptScore: score.toFixed(1),
          attempts: increment(1),
          quizType: quiz.quizType,
        },
        { merge: true }
      );

      // Update daily attempts, creating or incrementing the field for today
      await setDoc(
        userRef,
        {
          dailyQuizzes: {
            [today]: increment(1),
          },
        },
        { merge: true }
      );
      console.log("Quiz data saved:", quizRef, userRef);
    } catch (error) {
      console.error("Error writing document:", error);
    }
  };

  if (showScore || timeLeft === 0) {
    return (
      <>
        <Box>
          <ScoreDisplay
            score={score}
            totalQuestions={randomNumbers.length}
            wrong={wrongAnswers}
            skip={skip}
            quiz={quiz}
          />
        </Box>
        {quiz.quizType === "MCQ" ? (
          <Box>
            <MCQReview
              quiz={quiz}
              randomNumbers={randomNumbers}
              userAnswers={userAnswers}
            />
          </Box>
        ) : (
          <Box>
            <TFReview
              quiz={quiz}
              randomNumbers={randomNumbers}
              userAnswers={userAnswers}
            />
          </Box>
        )}
      </>
    );
  }

  const currentQuestion = quiz.questions[randomNumbers[currentQuestionIndex]];
  const isTF = quiz.quizType === "TF";

  isTF ? (userAnswers[currentQuestionIndex] = selectedOptions) : void 0;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <Container>
      <Card mt={5}>
        <CardHeader>
          <Text fontSize={"xl"} as="b" color="primary">
            Question {currentQuestionIndex + 1}
          </Text>
          <br />
          <Text fontSize={"2xl"} as="b">
            {currentQuestion.question}
          </Text>
          <br />
          {currentQuestion.questionUni && (
            <Tag bg="primary" color="white" size={"md"}>
              {currentQuestion.questionUni}
            </Tag>
          )}
        </CardHeader>
        <Divider />
        <Text p={4} fontSize={"lg"} as="b" color={"secondary"}>
          Time Remaining: {minutes} minutes {seconds} seconds
        </Text>
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

        <CardFooter>
          <VStack width={"full"}>
            {currentQuestionIndex === randomNumbers.length - 1 ? (
              ""
            ) : (
              <Button
                mt={4}
                onClick={handleAnswerSubmission}
                isDisabled={!selectedOptions}
                width={"full"}
              >
                Next Question
              </Button>
            )}

            <Button
              onClick={() => {
                handleQuizFinish();
                if (currentQuestionIndex === randomNumbers.length - 1) {handleAnswerSubmission();}
              }}
              width={"full"}
              color={"white"}
              bg="primary"
            >
              Finish Quiz
            </Button>
          </VStack>
        </CardFooter>
      </Card>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ base: "xs", lg: "lg" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Finish Quiz</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure you want to finish the quiz?</ModalBody>
          <ModalFooter>
            <Button bg="dark" color={"white"} mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button bg="primary" color="white" onClick={confirmFinishQuiz}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Quiz;
