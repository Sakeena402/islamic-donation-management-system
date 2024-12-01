// import { NextRequest } from "next/server";
// import jwt from "jsonwebtoken";
// export const getDataFromToken = (request: NextRequest) => {
//     try {
//       const token = request.cookies.get("token")?.value || '';
//       const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
  
//       // Assuming the token contains both `id` and `role`
//       return { id: decodedToken.id, role: decodedToken.role, username: decodedToken.username };
//     } catch (error) {
//           console.error("Error decoding token i dunno why:", error); // Log detailed error for debugging
//           throw new Error(error.message || "Token verification failed");
//         }
//   };

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
    console.log("Cookies:", request.cookies); // Log cookies to check structure
    const token = request.cookies?.get("token")?.value || ''; // Safely access token

    if (!token) throw new Error("Token not found");

    if (!process.env.JWT_SECRET_KEY) {
      throw new Error("JWT_SECRET_KEY is not set in environment variables.");
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY!) as DecodedToken;
    return {
      id: decodedToken.id,
      role: decodedToken.role,
      username: decodedToken.username,
      email: decodedToken.email,
    };
  } catch (error) {
    console.error("Error decoding token:", error); // Log detailed error for debugging
    throw new Error("Token verification failed: " + error.message);
  }
};
