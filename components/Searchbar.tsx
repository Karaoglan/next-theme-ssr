import { AppContext } from '@/context/context';
import useDebounce from '@/hooks/useDebounce';
import { Input, InputGroup, Stack } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

export const Searchbar = () => {
  const [term, setTerm] = useState('');
  const debouncedSearch = useDebounce({ value: term, delay: 500 });
  const { searchTerm, setSearchTerm } = useContext(AppContext);

  useEffect(() => {
    if (debouncedSearch && setSearchTerm) {
      setSearchTerm(debouncedSearch);
    }
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
