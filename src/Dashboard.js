import React, { useEffect, useState } from 'react';
import { db } from './firebase-config';
import { collection, query, getDocs } from "firebase/firestore";
import { Box, Text } from "@chakra-ui/react";

const Dashboard = ({ user }) => {
    const [quizResults, setQuizResults] = useState([]);

    useEffect(() => {
        const fetchQuizResults = async () => {
            if (user) {
                const q = query(collection(db, "users", user.uid, "quizzes"));
                const querySnapshot = await getDocs(q);
                const results = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setQuizResults(results);
            }
        };

        fetchQuizResults();
    }, [user]);

    return (
        <Box>
            <Text fontSize="2xl">Quiz Results:</Text>
            {quizResults.map(result => (
                <Box key={result.id} p={3} m={1} borderWidth="1px">
                    <Text>Quiz ID: {result.id}</Text>
                    <Text>Score: {result.score}</Text>
                    <Text>Total Questions: {result.totalQuestions}</Text>
                    <Text>Attempts: {result.attempts}</Text>
                </Box>
            ))}
        </Box>
    );
};

export default Dashboard;
