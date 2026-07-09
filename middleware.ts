import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define public paths (no auth required)
  const publicPaths = [
    '/login',
    '/signup',
    '/verifyemail',
    '/forgot-password',
    '/reset-password',
    '/verify-notification',
    '/',
  ];

  // Define role-based protected paths
  const rolePaths: Record<string, string[]> = {
    Admin: [
      '/admin',
      '/user',
      '/dashboard',
      '/user-pages/user/profile',
      '/create-campaign',
      '/campaign/campaignCards',
    ],
    Organizer: [
      '/organizer',
      '/user',
      '/events',
      '/create-campaign',
      '/user-pages/user/profile',
      '/campaign/campaignCards',
    ],
    Donor: [
      '/user-pages/user/profile',
      '/dashboard',
      '/user',
      '/create-campaign',
      '/campaign/campaignCards',
      '/donation',
    ],
  };

  // Check if path is public
  const isPublicPath = publicPaths.includes(path);

  // Get token from cookies
  const token = request.cookies.get('token')?.value || '';

  let userRole = '';

  // Extract role from token if exists
  if (token) {
    try {
      const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET_KEY!);
      userRole = decodedToken.role;
    } catch (error) {
      // Invalid or expired token - clear it
      const response = NextResponse.redirect(new URL('/login', request.nextUrl));
      response.cookies.delete('token');
      return response;
    }
  }

  // Case 1: User is authenticated and trying to access public paths
  if (isPublicPath && token) {
    // Redirect to home or role-based default page
    const defaultPath = rolePaths[userRole]?.[0] || '/';
    return NextResponse.redirect(new URL(defaultPath, request.nextUrl));
  }

  // Case 2: User is not authenticated and trying to access protected paths
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  // Case 3: Check role-based authorization
  if (token && !isPublicPath) {
    const allowedPaths = rolePaths[userRole] || [];
    if (!allowedPaths.includes(path)) {
      // Redirect to home if unauthorized
      return NextResponse.redirect(new URL('/', request.nextUrl));
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    '/',
    '/login',
    '/signup',
    '/verifyemail',
    '/forgot-password',
    '/reset-password',
    '/verify-notification',
    '/user-pages/user/profile',
    '/admin/:path*',
    '/organizer/:path*',
    '/dashboard/:path*',
    '/user/:path*',
    '/events/:path*',
    '/create-campaign/:path*',
    '/campaign/:path*',
    '/donation/:path*',
  ],
};
