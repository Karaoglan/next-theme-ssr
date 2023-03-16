import useDebounce from '@/hooks/useDebounce';
import { Input, InputGroup, Stack } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/context';

export const Searchbar = () => {
  const [term, setTerm] = useState('utku');
  const debouncedSearch = useDebounce({ value: term, delay: 500 });
  const context = useContext(AppContext);

  useEffect(() => {
    debugger;

    context.setTermContext(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <Stack spacing={4}>
      <InputGroup>
        <Input
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search"
        />
      </InputGroup>
    </Stack>
  );
};
