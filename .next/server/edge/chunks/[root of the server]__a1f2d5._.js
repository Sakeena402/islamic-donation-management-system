(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__a1f2d5._.js", {

"[externals]/ [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:async_hooks");

module.exports = mod;
}}),
"[externals]/ [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:buffer");

module.exports = mod;
}}),
"[project]/helpers/getDataFromToken.ts [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
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
__turbopack_esm__({
    "getDataFromToken": (()=>getDataFromToken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsonwebtoken/index.js [middleware] (ecmascript)");
;
const getDataFromToken = (request)=>{
    try {
        console.log("Cookies:", request.cookies); // Log cookies to check structure
        const token = request.cookies?.get("token")?.value || ''; // Safely access token
        if (!token) throw new Error("Token not found");
        const decodedToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].verify(token, process.env.JWT_SECRET_KEY);
        return {
            id: decodedToken.id,
            role: decodedToken.role,
            username: decodedToken.username,
            email: decodedToken.email
        };
    } catch (error) {
        console.error("Error decoding token:", error); // Log detailed error for debugging
        throw new Error(error.message || "Token verification failed");
    }
};
}}),
"[project]/config/rolesConfig.ts [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "rolePaths": (()=>rolePaths)
});
const rolePaths = {
    Admin: [
        '/admin',
        '/dashboard',
        '/user-pages/user/profile',
        '/campaign/create-campaign'
    ],
    Donor: [
        '/donor',
        '/user-pages/user/profile',
        '/campaign/create-campaign'
    ],
    Organizer: [
        '/organizer',
        '/events',
        '/user-pages/user/profile',
        '/campaign/create-campaign'
    ]
};
}}),
"[project]/middleware.ts [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// // src/middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { getDataFromToken } from "@/helpers/getDataFromToken";
// export async function middleware(request: NextRequest) {
//   const path = request.nextUrl.pathname;
//   const isPublicPath = ['/login', '/signup', '/verifyemail', '/'].includes(path);  // Public routes
//   const token = request.cookies.get('token')?.value || '';  // Get token from cookies
//   let userRole = '';
//   // Check if token exists and extract user role
//   if (token) {
//     try {
//       const { id, role, username } = await getDataFromToken(request);  // Assuming `getDataFromToken` extracts the role from the token
//       userRole = role;
//     } catch (error) {
//       return NextResponse.redirect(new URL('/login', request.nextUrl));  // Invalid token
//     }
//   }
//   // Define role-based access
//   const rolePaths = {
//     Admin: ['/admin', '/user', '/dashboard','/user-pages/user/profile','/campaign/create-campaign'],
//     Donor: ['/user-pages/user/profile', '/dashboard', '/user','/campaign/create-campaign'],
//     Organizer: ['/organizer', '/user', '/events', '/campaign/create-campaign','/user-pages/user/profile'],
//   };
//   // Helper function to check if a path is allowed for a particular role
//   const isAuthorized = (role: string, path: string) => {
//     return rolePaths[role]?.includes(path) || isPublicPath;
//   };
//   // Case 1: Redirect logged-in users trying to access public paths
//   if (isPublicPath && token) {
//     return NextResponse.redirect(new URL('/', request.nextUrl));  // Redirect authenticated users from public pages to home
//   }
//   // Case 2: Redirect unauthenticated users trying to access non-public paths
//   if (!isPublicPath && !token) {
//     return NextResponse.redirect(new URL('/login', request.nextUrl));  // Redirect unauthenticated users to login page
//   }
//   // Case 3: Check if the user has permission to access the requested path based on their role
//   if (token && !isAuthorized(userRole, path)) {
//     return NextResponse.redirect(new URL('/', request.nextUrl));  // Redirect unauthorized users to the home page (or other appropriate page)
//   }
//   // Allow the request to continue if everything is valid
//   return NextResponse.next();
// }
// // Configuration to match the paths
// export const config = {
//   matcher: [
//     '/', '/user-pages/user/profile', '/login', '/signup', '/verifyemail', 
//     '/admin', '/user', '/organizer', '/events', '/campaign/create-campaign'
//   ],  // List of paths where the middleware should be applied
// };
__turbopack_esm__({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$getDataFromToken$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/helpers/getDataFromToken.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$rolesConfig$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/config/rolesConfig.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
;
;
;
async function middleware(request) {
    const path = request.nextUrl.pathname;
    const isPublicPath = [
        '/login',
        '/signup',
        '/verifyemail',
        '/'
    ].includes(path);
    const token = request.cookies?.get('token')?.value || ''; // Safely access token
    let userRole = '';
    if (token) {
        try {
            const { role } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$helpers$2f$getDataFromToken$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["getDataFromToken"])(request); // Pass the entire request to the helper
            userRole = role;
        } catch (error) {
            console.error("Error decoding token:", error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/login', request.nextUrl));
        }
    }
    const isAuthorized = (role, path)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$rolesConfig$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["rolePaths"][role]?.includes(path) || isPublicPath;
    };
    if (isPublicPath && token) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$rolesConfig$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["rolePaths"][userRole]?.[0] || '/', request.nextUrl));
    }
    if (!isPublicPath && !token) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/login', request.nextUrl));
    }
    if (token && !isAuthorized(userRole, path)) {
        console.warn(`Unauthorized access attempt by role: ${userRole} to path: ${path}`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/', request.nextUrl));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        '/',
        '/user-pages/user/profile',
        '/login',
        '/signup',
        '/verifyemail',
        '/admin',
        '/donor',
        '/organizer',
        '/events',
        '/campaign/create-campaign'
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__a1f2d5._.js.map