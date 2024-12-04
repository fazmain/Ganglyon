import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  Image
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // make sure you are using react-router-dom v5 or v6

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container centerContent>
      <VStack spacing={4} mt="20">
        <Heading as="h1" size="xl" textAlign="center">
          Oops! Page not found.
        </Heading>
        <Text fontSize="lg" color="gray.600">
          We can't find the page you're looking for.
        </Text>
        <Button colorScheme="blue" onClick={() => navigate('/')}>
          Go Home
        </Button>
      </VStack>
    </Container>
  );
}

export default NotFoundPage;
