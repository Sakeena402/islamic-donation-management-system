// src/middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = ['/login', '/signup', '/verifyemail'].includes(path);
  const token = request.cookies.get('token')?.value || '';

  let userRole = '';

  // Check if token exists and extract user role
  if (token) {
    try {
      const { id,role,username } = await getDataFromToken(request);
      userRole = role;
    } catch (error) {
      return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
  }

  // Define role-based access
  const rolePaths = {
    admin: ['/admin', '/profile', '/dashboard'],
    user: ['/profile', '/dashboard', '/user'],
    organizer: ['/organizer', '/profile', '/events'],
  };

  const isAuthorized = (role: string, path: string) => {
    return rolePaths[role]?.includes(path) || isPublicPath;
  };

  // Redirect based on user authentication and authorization
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  if (!isAuthorized(userRole, path)) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }
}

// Configuration to match paths
export const config = {
  matcher: ['/', '/profile', '/login', '/signup', '/verifyemail', '/admin', '/user', '/organizer']
};
