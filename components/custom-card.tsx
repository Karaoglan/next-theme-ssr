import { Box, Button } from '@chakra-ui/react';

export const CustomCard = () => {
  return (
    <Box bg="white">
      SELAM CARD
      <Button variant={'primary'} />
      <Box border={'1px'} borderColor={'primary'} m={2}>
        SELAM MARGIN
      </Box>
      <Box w="10" h="10" bg="primary" />
      <Box w="10" h="10" bg="secondary" />
    </Box>
  );
};
