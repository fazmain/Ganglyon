import React from "react";
import {
  Box,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useDisclosure,
  CloseButton,
  HStack,
} from "@chakra-ui/react";

const Banner = ({ text }) => {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });
  const bgColor = useColorModeValue("secondary", "secondary");
  const textColor = useColorModeValue("gray.100", "gray.100");

React.useEffect(() => {
    const timer = setTimeout(() => {
        onClose();
    }, 10000);

    return () => {
        clearTimeout(timer);
    };
}, []);

  return isVisible ? (
    <Alert status="warning" p={1} bg={bgColor}>
      <Box m="auto">
        <HStack px="2">
          <AlertIcon color={textColor} />
          <AlertDescription as="b" color={textColor}>
            {text}
          </AlertDescription>
          <CloseButton
            color={textColor}
            alignSelf="flex-start"
            right={-1}
            onClick={onClose}
          />
        </HStack>
      </Box>
    </Alert>
  ) : null;
};

export default Banner;
