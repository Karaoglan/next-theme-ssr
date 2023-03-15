import {
  Input,
  InputGroup,
  InputLeftElement,
  MenuIcon,
  Stack,
} from '@chakra-ui/react';

export const Searchbar = () => {
  return (
    <Stack spacing={4}>
      <InputGroup>
        <Input type="text" placeholder="Search" />
      </InputGroup>
    </Stack>
  );
};
