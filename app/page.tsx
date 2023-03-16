'use client';
import { HanButton } from '@/components/HanButton';
import { HanCard } from '@/components/HanCard';
import { Link } from '@chakra-ui/next-js';
import { Button, Center, Divider, useColorMode } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/context';
import { Person } from '@/type';

export default async function Page() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [people, setPeople] = useState([]);

  const context = useContext(AppContext);

  console.log('ENV???', process.env.NEXT_PUBLIC_NAME);
  const url = `${process.env.NEXT_PUBLIC_API_BASE}/api/people`;
  console.log('URL???', url);

  useEffect(() => {
    debugger;
    const search = async (term: string) => {
      const people = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/people?q=${term}`
      );
      return people.json();
    };

    if (context.termContext) {
      search(context.termContext)
        .then((peop) => setPeople(peop))
        .catch(console.error);
    }
  }, [context.termContext]);

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
      {people ? (
        people.map((p: Person) => <div key={p.firstName}>{p.firstName}</div>)
      ) : (
        <></>
      )}
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
