import { users } from "@/db/schema";
import { db } from "@/index";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod"

const SigninSchema = z.object({
    email : z.string().email(),
    username : z.string().min(4).max(40).optional(),
    password : z.string().min(6).max(40)
})

export async function POST(req: NextRequest){

    const body = await req.json()

    const parsedData = SigninSchema.safeParse(body)

    if(!parsedData.success){
        return NextResponse.json({
            status:400,
            msg : "input validation failed"
        })
    }

    const { email, password } = body

    const isPresent = await db.select().from(users).where(eq(users.email,email))

    
    
    if(isPresent[0]?.id){
        if(isPresent[0]?.password !=password ){
            return NextResponse.json({
                msg: "your passwod is incorrect"
            },{
                status:403
            })
        }
        return NextResponse.json({
            msg: 'this user is already exist in db'
        })
    }else{
        return NextResponse.json({
            msg : "This user is not exist",
        })
    }

   
    

}