import { Person } from '@/type';

async function getPeople(): Promise<Person[]> {
  const url = `${process.env.NEXT_PUBLIC_API_BASE}/api/people`;
  const response = await fetch(url);

  return response.json();
}

export default async function Page() {
  const people = await getPeople();
  console.log('P', people);

  return (
    <div>
      {people.map((person, i) => (
        <div className="" key={i}>
          {person.firstName}-{person.lastName}
        </div>
      ))}
    </div>
  );
}
