import { NextResponse } from 'next/server';
import { Person } from '../../../type';

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

export async function GET() {
  return NextResponse.json(PEOPLE);
}
