// import { NextRequest } from "next/server";
// import jwt from "jsonwebtoken";
// export const getDataFromToken = (request: NextRequest) => {
//     try {
//       const token = request.cookies.get("token")?.value || '';
//       const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
  
//       // Assuming the token contains both `id` and `role`
//       return { id: decodedToken.id, role: decodedToken.role, username: decodedToken.username };
//     } catch (error: any) {
//       throw new Error(error.message);
//     }
//   };

import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || '';
    if (!token) throw new Error("Token not found");

    const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET_KEY!);
    return { id: decodedToken.id, role: decodedToken.role, username: decodedToken.username };  // Extract user details
  } catch (error) {
    throw new Error(error.message || "Token verification failed");
  }
};
