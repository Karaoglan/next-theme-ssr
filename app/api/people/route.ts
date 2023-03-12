import { NextResponse } from 'next/server';

export async function GET() {
  console.log('IN GET OPELE?');
  return NextResponse.json({ msg: 'HELLO ?' });
}
