import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
export const getDataFromToken = (request: NextRequest) => {
    try {
      const token = request.cookies.get("token")?.value || '';
      const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
  
      // Assuming the token contains both `id` and `role`
      return { id: decodedToken.id, role: decodedToken.role };
    } catch (error: any) {
      throw new Error(error.message);
    }
  };