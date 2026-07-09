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
      // Generic message to prevent email enumeration
      return NextResponse.json({
        message:
          "If an account with that email exists, a verification email has been sent.",
        success: true,
      });
    }

    if (user.isVerified) {
      return NextResponse.json(
        { error: "Email is already verified" },
        { status: 400 }
      );
    }

    // Resend verification email
    await sendEmail({ email, emailType: "VERIFY", userId: user._id });

    return NextResponse.json({
      message: "Verification email has been resent. Please check your inbox.",
      success: true,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Server error";
    console.error("Resend verification error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
