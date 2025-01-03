import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const data = await prisma.<%= resource %>.findMany();
  return NextResponse.json(data);
}

export async function POST(request) {
  const body = await request.json();
  const newData = await prisma.<%= resource %>.create({
    data: body,
  });
  return NextResponse.json(newData, { status: 201 });
}