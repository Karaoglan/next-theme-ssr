import { Box, Button, Heading, Text } from '@chakra-ui/react';

export const HanCard = () => {
  return (
    <Box bg="white">
      SELAM CARD
      <Button variant={'primary'} />
      <Box border={'1px'} borderColor={'primary'} m={2}>
        SELAM MARGIN
        <Text fontWeight={'normal'}>TEXT NORMAL 300?</Text>
        <Text fontWeight={'medium'}>TEXT MEDIUM 600?</Text>
        <Text fontWeight={'bold'}>TEXT BOLD 700?</Text>
        <Text>DEFAULTS_?</Text>
        <Heading>COmic? The spectacle before us was indeed sublime.</Heading>
      </Box>
      <Box w="10" h="10" bg="primary" />
      <Box w="10" h="10" bg="secondary" />
      <Box w="10" h="10" bg="blue.200" />
    </Box>
  );
};
