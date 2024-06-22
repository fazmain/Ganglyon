import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  VStack,
  Select,
} from "@chakra-ui/react";
import { ref, onValue } from 'firebase/database';
import { quizdb } from './firebase-config'; // Ensure the path to your firebase-config file is correct

function Questions() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    subject: "",
    topic: "",
    year: "",
    month: "",
    paper: "",
    university: "",
  });

  useEffect(() => {
    const questionsRef = ref(quizdb, 'questions');
    onValue(questionsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setQuestions(Object.values(data)); // Ensure your data is an array or convert object to array if necessary
      } else {
        console.error("No questions found in the data.");
      }
      setLoading(false);
    });

    return () => { /* Clean up listener */ };
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredQuestions = questions.filter(question =>
    (filters.subject ? question.qSub === filters.subject : true) &&
    (filters.topic ? question.qTopic === filters.topic : true) &&
    (filters.year ? question.qYear === filters.year : true) &&
    (filters.month ? question.qMonth === filters.month : true) &&
    (filters.paper ? question.qPaper === filters.paper : true) &&
    (filters.university ? question.qUni === filters.university : true)
  );

  if (loading) {
    return <div>Loading questions...</div>;
  }

  return (
    <Container>
      <VStack spacing="20px" mt="5">
        <SimpleGrid columns={[1, null, 3]} spacing="20px">
          <Select placeholder="Select subject" name="subject" onChange={handleFilterChange}>
            {/* Populate these options based on actual data or desired filters */}
            <option value="Physiology">Physiology</option>
            <option value="Anatomy">Anatomy</option>
          </Select>
          <Select placeholder="Select topic" name="topic" onChange={handleFilterChange}>
            <option value="General Physiology">General Physiology</option>
            <option value="Blood Physiology">Blood Physiology</option>
          </Select>
          <Select placeholder="Select year" name="year" onChange={handleFilterChange}>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </Select>
        </SimpleGrid>
        <SimpleGrid columns={[1, null, 3]} spacing="20px">
          <Select placeholder="Select month" name="month" onChange={handleFilterChange}>
            <option value="May">May</option>
            <option value="June">June</option>
          </Select>
          <Select placeholder="Select paper" name="paper" onChange={handleFilterChange}>
            <option value="Paper I">Paper I</option>
            <option value="Paper II">Paper II</option>
          </Select>
          <Select placeholder="Select university" name="university" onChange={handleFilterChange}>
            <option value="University of Dhaka">University of Dhaka</option>
            <option value="Other University">Other University</option>
          </Select>
        </SimpleGrid>
      </VStack>
      <SimpleGrid columns={[1, null, 2]} spacing="20px" mt="5">
        {filteredQuestions.map((question, index) => (
          <Card key={index}>
            <CardBody>
              <Text fontSize="xl" fontWeight="bold">{question.question}</Text>
              <Text>Subject: {question.qSub}</Text>
              <Text>Paper: {question.qPaper}</Text>
              <Text>University: {question.qUni}</Text>
              <Text>Year: {question.qYear}</Text>
              <Text>Month: {question.qMonth}</Text>
              <Text>Topic: {question.qTopic}</Text>
              <Text>Marks: {question.qMarks}</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Questions;
