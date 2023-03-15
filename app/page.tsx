'use client';
import { HanButton } from '@/components/HanButton';
import { HanCard } from '@/components/HanCard';
import { Link } from '@chakra-ui/next-js';
import { Button, Center, Divider, useColorMode } from '@chakra-ui/react';

export default function Page() {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log('ENV???', process.env.NEXT_PUBLIC_NAME);
  const url = `${process.env.NEXT_PUBLIC_API_BASE}/api/people`;
  console.log('URL???', url);

  return (
    <section>
      <nav>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </nav>
      <Center>
        <Link href="/people" color="blue.400" _hover={{ color: 'blue.500' }}>
          PEOPLE
        </Link>
      </Center>
      <HanCard />
      <Divider />
      <Center>
        <HanButton buttonText="CLICK ME" />
      </Center>
      <Center>
        <HanButton buttonText="CLICK ME" />
      </Center>
      <Center>
        <HanButton buttonText="CLICK ME" />
      </Center>
      <Center>
        <HanButton buttonText="CLICK ME" />
      </Center>
      <Center>
        <HanButton buttonText="CLICK ME" />
      </Center>
      <Center>
        <HanButton buttonText="CLICK ME" />
      </Center>
      <Center>
        <HanButton buttonText="CLICK ME" />
      </Center>
      <Center>
        <HanButton buttonText="CLICK ME" />
      </Center>
      <Center>
        <HanButton buttonText="CLICK ME" />
      </Center>
    </section>
  );
}
