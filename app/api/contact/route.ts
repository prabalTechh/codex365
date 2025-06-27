import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, question } = body;

    // Validate required fields
    if (!email || !question) {
      return NextResponse.json(
        { error: "Email and question are required" },
        { status: 400 }
      );
    }

    // For portfolio purposes, just return success
    // In a real application, you would save to a database or send an email
    console.log("Contact form submission:", { email, question });

    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon.",
        submittedData: { email, question }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
