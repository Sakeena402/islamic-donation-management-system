import connectDB from "@/dbConfig/dbConfig";
import { User } from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailer";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      // Return generic message to prevent email enumeration
      return NextResponse.json({
        message:
          "If an account with that email exists, a password reset link has been sent.",
        success: true,
      });
    }

    // Send reset password email
    await sendEmail({ email, emailType: "RESET", userId: user._id });

    return NextResponse.json({
      message:
        "If an account with that email exists, a password reset link has been sent.",
      success: true,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Server error";
    console.error("Forgot password error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
