'use client';
import { CustomCard } from '@/components/custom-card';
import { useEffect } from 'react';

/*import { Box, Text } from "@chakra-ui/react";
<Box w={20} h={20} bg="secondary">
      <Text color={'white'}>SELAMLAR</Text>
    </Box>*/

export default async function Page() {
  useEffect(() => {
    fetch('/api/people')
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (<div>SELAMLARE</div>);
}
