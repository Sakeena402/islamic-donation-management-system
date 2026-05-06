import connectDB from "@/dbConfig/dbConfig";
import { User } from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token, newPassword } = reqBody;

    if (!token || !newPassword) {
      return NextResponse.json(
        { error: "Token and new password are required" },
        { status: 400 }
      );
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    // Find user with valid reset token
    const user = await User.findOne({
      forgotPasswordToken: token,
      forgotPasswordTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid or expired reset token" },
        { status: 400 }
      );
    }

    // Hash new password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(newPassword, salt);

    // Update user password and clear reset token
    user.password = hashedPassword;
    user.forgotPasswordToken = undefined;
    user.forgotPasswordTokenExpiry = undefined;
    await user.save();

    return NextResponse.json({
      message: "Password reset successfully",
      success: true,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Server error";
    console.error("Reset password error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
