(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_(auth-pages)_signup_page_tsx_eac088._.js", {

"[project]/app/(auth-pages)/signup/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
// SignupPage.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$GeneralForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/forms/GeneralForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/router.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/AuthLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$schemas$2f$validationSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/schemas/validationSchema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
const SignupPage = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [signupError, setSignupError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const onSignUp = async (user)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/auth/signup", user);
            console.log("Signup successful");
            router.push("/login");
        } catch (error) {
            if (error.response && error.response.status === 409) {
                // If user already exists, show a message in the form
                setSignupError("A user with this email already exists. Please use a different email.");
            } else {
                setSignupError("Signup failed. Please try again.");
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        backgroundImage: "https://wallpapers.com/images/hd/1920-x-1080-hd-c65hirjqswhsd1z3.jpg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$GeneralForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                fields: [
                    {
                        name: "username",
                        label: "Full Name",
                        type: "text",
                        required: true
                    },
                    {
                        name: "email",
                        label: "Email",
                        type: "email",
                        required: true
                    },
                    {
                        name: "phoneNo",
                        label: "Phone Number",
                        type: "text",
                        required: true
                    },
                    {
                        name: "address",
                        label: "Address",
                        type: "text",
                        required: true
                    },
                    {
                        name: "password",
                        label: "Password",
                        type: "password",
                        required: true
                    }
                ],
                buttonText: "Create Your Account",
                onSubmit: onSignUp,
                validationSchema: __TURBOPACK__imported__module__$5b$project$5d2f$schemas$2f$validationSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signupSchema"]
            }, void 0, false, {
                fileName: "[project]/app/(auth-pages)/signup/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            signupError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-600 text-center mt-4",
                children: signupError
            }, void 0, false, {
                fileName: "[project]/app/(auth-pages)/signup/page.tsx",
                lineNumber: 43,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(auth-pages)/signup/page.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
};
_s(SignupPage, "3hiaiROKcg8g7pO1jA3YIz2WK+w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SignupPage;
const __TURBOPACK__default__export__ = SignupPage;
var _c;
__turbopack_refresh__.register(_c, "SignupPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
 // // SignupPage.tsx
 // 'use client'
 // import React, { useState } from "react";
 // import GeneralForm from "@/components/forms/GeneralForm";
 // import axios from "axios";
 // import router from "next/router";
 // import AuthLayout from "@/components/AuthLayout"; 
 // import { signupSchema } from "@/schemas/validationSchema";
 // const SignupPage = () => {
 //   const [serverError, setServerError] = useState<string | null>(null);
 //   const onSignUp = async (user: { username: string; email: string; phoneNo: string; address: string; password: string }) => {
 //     try {
 //       const response = await axios.post("/api/auth/signup", user);
 //       console.log("Signup successful");
 //       router.push('/login');
 //     } catch (error: any) {
 //       if (error.response?.data?.error) {
 //         setServerError(error.response.data.error);
 //       } else {
 //         setServerError("Signup failed. Please try again.");
 //       }
 //     }
 //   };
 //   return (
 //     <AuthLayout backgroundImage="https://wallpapers.com/images/hd/1920-x-1080-hd-c65hirjqswhsd1z3.jpg">
 //       <GeneralForm
 //         fields={[
 //           { name: "username", label: "Full Name", type: "text", required: true },
 //           { name: "email", label: "Email", type: "email", required: true },
 //           { name: "phoneNo", label: "Phone Number", type: "text", required: true },
 //           { name: "address", label: "Address", type: "text", required: true },
 //           { name: "password", label: "Password", type: "password", required: true },
 //         ]}
 //         buttonText="Create Your Account"
 //         onSubmit={onSignUp}
 //         validationSchema={signupSchema}
 //         serverError={serverError}
 //       />
 //       {signupError && <p className="text-red-600 text-center mt-4">{signupError}</p>}
 //     </AuthLayout>
 //   );
 // };
 // export default SignupPage;
 // 'use client'
 // import React from "react";
 // import GeneralForm from "@/components/forms/GeneralForm";
 // import axios from "axios";
 // import router from "next/router";
 // const SignupPage = () => {
 //   const onSignUp = async (user: { username: string; email: string; phoneNo: string; address: string; password: string }) => {
 //     try {
 //       const response = await axios.post("/api/auth/signup", user);
 //       console.log("Signup sucess")
 //       router.push('/login'); 
 //     } catch (error:any) {
 //       console.log("Signup failed", error.message);
 //   }
 //   };
 //   return (
 //     <GeneralForm
 //       fields={[
 //         { name: "username", label: "Full Name", type: "text", required: true },
 //         { name: "email", label: "Email", type: "email", required: true },
 //         { name: "phoneNo", label: "Phone Number", type: "text", required: true },
 //         { name: "address", label: "Address", type: "text", required: true },
 //         { name: "password", label: "Password", type: "password", required: true },
 //       ]}
 //       buttonText="Create Your Account"
 //       onSubmit={onSignUp}
 //       redirectPath="/login" // Redirect after successful signup
 //     />
 //   );
 // };
 // export default SignupPage;
 // /* eslint-disable @typescript-eslint/no-unused-vars */
 // 'use client'
 // import { useState,useEffect } from "react";
 // import Link from "next/link";
 // import { useRouter } from "next/navigation";
 // import axios from 'axios';
 // import React from "react";
 // const SignUp = () => {
 //   const [user, setUser] = useState({
 //     username: '',
 //     email: '',
 //     phoneNo: '',
 //     address: '',
 //     password: '',
 //   });
 // const [buttonDisabled,setButtonDisabled]  = useState(false)
 // const [loading,setLoading]=useState(false)
 // const router = useRouter();
 // useEffect(() => {
 //   if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
 //       setButtonDisabled(false);
 //   } else {
 //       setButtonDisabled(true);
 //   }
 // }, [user]);
 //   const onSignUp = async () => {
 //     try {
 //       setLoading(true)
 //       setButtonDisabled(true)
 //       const response = await axios.post("/api/auth/signup", user);
 //       console.log("Signup sucess")
 //       router.push('/login'); 
 //     } catch (error:any) {
 //       console.log("Signup failed", error.message);
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
 //           Create Your Account
 //         </h2>
 //         <form className="space-y-6">
 //           <div>
 //             <label className="block text-sm font-medium text-gray-700">
 //               Full Name
 //             </label>
 //             <input
 //               type="text"
 //               value={user.username}
 //               onChange={(e) => setUser({ ...user, username: e.target.value })}
 //               required
 //               className="w-full px-3 py-2 mt-1 border text-gray-700 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
 //             />
 //           </div>
 //           <div>
 //             <label className="block text-sm font-medium text-gray-700">
 //               Email
 //             </label>
 //             <input
 //               type="email"
 //               value={user.email}
 //               onChange={(e) => setUser({ ...user, email: e.target.value })}
 //               required
 //               className="w-full px-3 py-2 mt-1  text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
 //             />
 //           </div>
 //           <div>
 //             <label className="block text-sm font-medium text-gray-700">
 //               Phone Number
 //             </label>
 //             <input
 //               type="text"
 //               value={user.phoneNo}
 //               onChange={(e) => setUser({ ...user, phoneNo: e.target.value })}
 //               required
 //               className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
 //             />
 //           </div>
 //           <div>
 //             <label className="block text-sm font-medium text-gray-700">
 //               Address
 //             </label>
 //             <input
 //               type="text"
 //               value={user.address}
 //               onChange={(e) => setUser({ ...user, address: e.target.value })}
 //               required
 //               className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
 //             />
 //           </div>
 //           <div>
 //             <label className="block text-sm font-medium text-gray-700">
 //               Password
 //             </label>
 //             <input
 //               type="password"
 //               value={user.password}
 //               onChange={(e) => setUser({ ...user, password: e.target.value })}
 //               required
 //               className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
 //             />
 //           </div>
 //           <button
 //             type="button"
 //             onClick={onSignUp}
 //             disabled={buttonDisabled}
 //             className={`w-full px-4 py-2 font-semibold text-white rounded-md focus:outline-none focus:ring focus:ring-indigo-200 ${
 //                 buttonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
 //             }`}
 //         >
 //             {loading ? 'Processing...' : 'Sign Up'}
 //         </button>
 //         </form>
 //         <p className="text-sm text-center text-gray-600">
 //           Already have an account?{" "}
 //           <Link href="/login" className="text-indigo-600 hover:underline">
 //            Login
 //           </Link>
 //         </p>
 //       </div>
 //     </div>
 //   );
 // };
 // export default SignUp;
 // app/signup/page.tsx// app/signup/page.tsx
}}),
"[project]/app/(auth-pages)/signup/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_%28auth-pages%29_signup_page_tsx_eac088._.js.map