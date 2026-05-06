import connectDB from "@/dbConfig/dbConfig";
import { User } from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User doesn't exist" },
        { status: 400 }
      );
    }

    if (!user.isVerified) {
      return NextResponse.json(
        { error: "Please verify your email to log in" },
        { status: 401 }
      );
    }

    // Check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 400 }
      );
    }

    // Create JWT token
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    };
    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {
      expiresIn: "1d",
    });

    // Create response and set the cookie with proper security
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 24 * 60 * 60, // 1 day in seconds
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return response;
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Server error";
    console.error("Login error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
