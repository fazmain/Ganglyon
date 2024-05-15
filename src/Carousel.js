import React, { useState, useEffect } from 'react';
import { Box, Button, Image, Flex } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <Flex alignItems="center" justifyContent="center" position="relative" p={4}>
      <Button onClick={prevImage} position="absolute" left="0" top="50%" zIndex="2">
        <ChevronLeftIcon />
      </Button>
      <Image src={images[currentIndex]} boxSize="300px" objectFit="cover" borderRadius="md" />
      <Button onClick={nextImage} position="absolute" right="0" top="50%" zIndex="2">
        <ChevronRightIcon />
      </Button>
    </Flex>
  );
};

export default Carousel;
