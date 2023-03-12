'use client';
import { CustomCard } from '@/components/custom-card';
import { Link } from '@chakra-ui/next-js';
import { Button, useColorMode } from '@chakra-ui/react';

export default function Page() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <section>
      <nav>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </nav>
      <Link href="/about" color="blue.400" _hover={{ color: 'blue.500' }}>
        About
      </Link>
      <CustomCard />
    </section>
  );
}
