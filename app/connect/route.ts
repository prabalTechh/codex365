import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    // For portfolio purposes, just return success
    // In a real application, you would save to a database or send an email
    console.log("Connect form submission:", { name, email, message });

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! I'll get back to you soon.",
      submittedData: { name, email, message }
    }, { status: 201 });

  } catch (error) {
    console.error("Connect form error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}