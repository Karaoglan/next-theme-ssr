'use client';
import { HanButton } from '@/components/HanButton';
import { HanCard } from '@/components/HanCard';
import { Link } from '@chakra-ui/next-js';
import { Button, Center, Divider, Text, useColorMode } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

import { Person } from '@/type';
import { AppContext } from '@/context/context';

export default function Page() {
  const [people, setPeople] = useState<Person[]>([]);

  const { searchTerm } = useContext(AppContext);

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

    if (searchTerm) {
      search(searchTerm)
        .then((peop) => setPeople(peop))
        .catch(console.error);
    }
  }, [searchTerm]);

  return (
    <section>
      {people.map((person, i) => (
        <Center key={i}>
          <Text>
            {person.firstName}-{person.lastName}
          </Text>
        </Center>
      ))}
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
