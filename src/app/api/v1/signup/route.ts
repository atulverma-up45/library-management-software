
import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../index";
import { users } from "../../../../db/schema";


export async function POST(req: NextRequest){
  try {
    const body = await req.json()
    const {username, email, password , role} = body
    // before adding the user check the user is already present in the database or not if user is already present then return....

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


