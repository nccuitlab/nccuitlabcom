import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST() {
  revalidateTag('homepage');
  return NextResponse.json({ revalidated: true });
}
