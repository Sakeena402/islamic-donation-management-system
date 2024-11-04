module.exports = {

"[project]/app/(auth-pages)/login/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$GeneralForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/forms/GeneralForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/AuthLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$schemas$2f$validationSchema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/schemas/validationSchema.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const LoginPage = ()=>{
    const [loginError, setLoginError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const onLogin = async (credentials)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/api/auth/login", credentials);
            console.log("Login successful");
            // Redirect user after successful login
            router.push("/dashboard"); // or the appropriate route
        } catch (error) {
            // Handle different types of errors
            if (error.response) {
                // Server responded with a status code
                switch(error.response.status){
                    case 400:
                        // Check if the specific error is due to email or password issues
                        if (error.response.data.error === "Email and password are required") {
                            setLoginError("Please enter both email and password.");
                        } else if (error.response.data.error === "User doesn't exist") {
                            setLoginError("No account found with this email. Please sign up.");
                        } else if (error.response.data.error === "Invalid password") {
                            setLoginError("The password you entered is incorrect. Please try again.");
                        } else {
                            setLoginError("An error occurred. Please try again.");
                        }
                        break;
                    case 500:
                        setLoginError("Server error. Please try again later.");
                        break;
                    default:
                        setLoginError("An unexpected error occurred. Please try again.");
                }
            } else if (error.request) {
                // Request was made but no response received
                setLoginError("No response from the server. Please check your connection.");
            } else {
                // Something else happened in making the request
                setLoginError("An error occurred while logging in. Please try again.");
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        backgroundImage: "https://wallpapers.com/images/hd/1920-x-1080-hd-c65hirjqswhsd1z3.jpg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$GeneralForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            fields: [
                {
                    name: "email",
                    label: "Email",
                    type: "email",
                    required: true
                },
                {
                    name: "password",
                    label: "Password",
                    type: "password",
                    required: true
                }
            ],
            buttonText: "Login",
            onSubmit: onLogin,
            validationSchema: __TURBOPACK__imported__module__$5b$project$5d2f$schemas$2f$validationSchema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginSchema"],
            errorMessage: loginError
        }, void 0, false, {
            fileName: "[project]/app/(auth-pages)/login/page.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(auth-pages)/login/page.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = LoginPage;
 // // app/login/page.tsx
 // 'use client'
 // import React from "react";
 // import GeneralForm from "@/components/forms/GeneralForm";
 // import axios from "axios";
 // import router from "next/router";
 // const LoginPage = () => {
 //   const onLogIn = async (user: { email: string; password: string }) => {
 //     try {
 //       const response = await axios.post("/api/auth/login", user);
 //       console.log("Login sucess")
 //       router.push('/user/profile'); 
 //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
 //     } catch (error:any) {
 //       console.log("Login failed", error.message);
 //   }
 //   };
 //   return (
 //       <GeneralForm
 //       fields={[
 //         { name: "email", label: "Email", type: "email", required: true },
 //         { name: "password", label: "Password", type: "password", required: true },
 //       ]}
 //       buttonText="Login"
 //       onSubmit={onLogIn}
 //       redirectPath="/user/profile" // Redirect after successful login
 //     />
 //   );
 // };
 // export default LoginPage;
 // /* eslint-disable @typescript-eslint/no-unused-vars */
 // 'use client'
 // import { useEffect, useState } from "react";
 // import Link from "next/link";
 // import { useRouter } from "next/navigation";
 // import axios from 'axios';
 // import React from "react";
 // const Login = () => {
 //   const [user, setUser] = useState({
 //     email: '',
 //    password: '',
 //   });
 //   const [buttonDisabled,setButtonDisabled]=useState(true);
 //   const [loading,setLoading]=useState(false);
 //   const router = useRouter();
 //   useEffect(()=>{
 //     if(user.email.length>0 && user.password.length >0){
 //       setButtonDisabled(false)
 //     }else{
 //       setButtonDisabled(true)
 //     }
 //   },[user])
 //   const onLogIn = async () => {
 //     try {
 //     } catch (error) {
 //     }try {
 //       setLoading(true)
 //       setButtonDisabled(true)
 //       const response = await axios.post("/api/auth/login", user);
 //       console.log("Login sucess")
 //       router.push('/user/profile'); 
 //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
 //     } catch (error:any) {
 //       console.log("Login failed", error.message);
 //   }finally {
 //     setTimeout(() => {
 //       setLoading(false);
 //       setButtonDisabled(false);
 //   }, 1000);
 //   }
 //   };
 //   return (
 //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
 //       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
 //         <h2 className="text-2xl font-bold text-center text-gray-800">
 //           Login to Your Account
 //         </h2>
 //         <form  className="space-y-6">
 //           <div>
 //             <label className="block text-sm font-medium text-gray-700">
 //               Email
 //             </label>
 //             <input
 //             type="email"
 //             value={user.email}
 //             onChange={(e) => setUser({ ...user, email: e.target.value })}
 //             required
 //             className="w-full px-3 py-2 mt-1  text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
 //          />
 //           </div>
 //           <div>
 //             <label className="block text-sm font-medium text-gray-700">
 //               Password
 //             </label>
 //             <input
 //                type="password"
 //                value={user.password}
 //                onChange={(e) => setUser({ ...user, password: e.target.value })}
 //                required
 //                className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
 //               />
 //           </div>
 //           <button
 //             type="button"
 //             onClick={onLogIn}
 //             disabled={buttonDisabled}
 //             className={`w-full px-4 py-2 font-semibold text-white rounded-md focus:outline-none focus:ring focus:ring-indigo-200 ${
 //                 buttonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
 //             }`}
 //         >
 //             {loading ? 'Processing...' : 'Login'}
 //         </button>
 //         </form>
 //         <p className="text-sm text-center text-gray-600">
 //           Don&apos;t have an account?{" "}
 //           <Link href="/signup" className="text-indigo-600 hover:underline">
 //            Sign Up
 //           </Link>
 //         </p>
 //       </div>
 //     </div>
 //   );
 // };
 // export default Login;
}}),
"[project]/app/(auth-pages)/login/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=app_%28auth-pages%29_login_page_tsx_40d0ce._.js.map