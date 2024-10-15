import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(req: NextRequest) {
  const { name, email } = await req.json();
  const updatedUser = await prisma.user.update({
    where: { id: 1 },
    data: { name, email },
  });
  return NextResponse.json(updatedUser);
}
