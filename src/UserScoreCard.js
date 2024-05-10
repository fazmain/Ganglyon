import { Box, Flex, Text, Stat, StatLabel, StatNumber } from "@chakra-ui/react";

const UserScoreCard = ({ result }) => {
  const firstScore = result?.scores[0].score;
  const lastScore = result?.scores[result?.scores.length - 1]?.score;
  const scoreIncrease = lastScore - firstScore;

  return (
    <Box>
      <Text fontSize="md">
        Increase:
      </Text>
      <Stat>
        <StatNumber color={scoreIncrease > 0 ? "green.500" : "red.500"}>
          {scoreIncrease >= 0 ? "+" : ""}
          {scoreIncrease ? scoreIncrease : "NA"}
        </StatNumber>
      </Stat>
    </Box>
  );
};

export default UserScoreCard;
