
import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../index";
import { users } from "../../../db/schema";


export async function POST(req: NextRequest){
  try {
    const body = await req.json()
    const {username, email, password , role} = body
    await db.insert(users).values({
      username,
      email,
      password,
      role,
    });

    return NextResponse.json({ message: "User created" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}


