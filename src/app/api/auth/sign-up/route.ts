import prisma from "@/app/utils/db";
import { randomBytes } from "crypto";
import { NextResponse } from "next/server";

const generateEmailVerificationToken = () => {
  return randomBytes(32).toString('hex');
};

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (user) {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 })
    }

    const bcrypt = require("bcrypt");

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = generateEmailVerificationToken();

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        emailVerifToken: verificationToken,
      },
    });

    return NextResponse.json({ success: "Account created" }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}