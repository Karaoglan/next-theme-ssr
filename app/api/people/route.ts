import { NextRequest, NextResponse } from 'next/server';
import { Person } from '@/type';

const PEOPLE: Person[] = [
  {
    firstName: 'burak',
    lastName: 'karaoglan',
    nickname: 'BRK',
  },
  {
    firstName: 'utku',
    lastName: 's',
  },
];

export async function GET(req: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return NextResponse.json(
    PEOPLE.filter((person) =>
      person.firstName.startsWith(req.nextUrl.searchParams?.get('q') || '')
    )
  );
}
