import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();
export async function POST(req : NextRequest){
    const body = await req.json();
    
    await prisma.user.create({
        data : {
            username : body.username,
            password : body.password
        }
    })


    return Response.json({
        msg : "You are logged in"
    })
}