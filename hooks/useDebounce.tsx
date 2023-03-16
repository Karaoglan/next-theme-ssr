import { useEffect, useState } from 'react';
import { DebouncedParams } from '@/type';

export default function useDebounce({ value, delay }: DebouncedParams) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
