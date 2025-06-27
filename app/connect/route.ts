import {  PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function POST(req:NextRequest){

    try{
        const body = await req.json();
        const {name , email , message } = body;
        if(!name || !email || !message){
            return NextResponse.json(
                {error: "Name, email and message are required"},
                {status: 400}
            );
        }

        const InsertData = await prisma.contact.create({
            data:{
                name,
                email,
                message
            }
        })

        return NextResponse.json({
            success: true,
            contact: InsertData
        },{status: 201});
      

    }catch(error){
        console.error("Database error:", error);
        return NextResponse.json(
            {error: "Internal Server Error"},
            {status: 500}
        );

    }
}