import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logout successful",
      success: true,
    });

    response.cookies.set("token", "", {
      httpOnly: true,
      path: "/",
      expires: new Date(0),
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return response;
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
