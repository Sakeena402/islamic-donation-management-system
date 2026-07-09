import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

interface DecodedToken {
  id: string;
  role: string;
  username: string;
  email: string;
}

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies?.get("token")?.value || "";

    if (!token) throw new Error("Token not found");

    if (!process.env.JWT_SECRET_KEY) {
      throw new Error("JWT_SECRET_KEY is not set in environment variables.");
    }

    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY!
    ) as DecodedToken;

    return {
      id: decodedToken.id,
      role: decodedToken.role,
      username: decodedToken.username,
      email: decodedToken.email,
    };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown token error";
    throw new Error("Token verification failed: " + message);
  }
};
