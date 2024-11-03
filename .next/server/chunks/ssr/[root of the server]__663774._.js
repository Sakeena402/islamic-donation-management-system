module.exports = {

"[externals]/ [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js");

module.exports = mod;
}}),
"[project]/components/forms/SignUpForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// // app/signup/components/SignupForm.tsx
// 'use client';
// import React, { useState, useEffect } from "react";
// interface User {
//   username: string;
//   email: string;
//   phoneNo: string;
//   address: string;
//   password: string;
// }
// interface SignupFormProps {
//   onSubmit: (user: User) => Promise<void>;
// }
// const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
//   const [user, setUser] = useState<User>({
//     username: '',
//     email: '',
//     phoneNo: '',
//     address: '',
//     password: '',
//   });
//   const [buttonDisabled, setButtonDisabled] = useState(true);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     const { email, password, username } = user;
//     setButtonDisabled(!(email && password && username));
//   }, [user]);
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true); // Start loading
//     await onSubmit(user); // Call onSubmit and wait for it to complete
//     setLoading(false); // End loading
//   };
//   return (
//     <form className="space-y-6" onSubmit={handleSubmit}>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Full Name</label>
//         <input
//           type="text"
//           value={user.username}
//           onChange={(e) => setUser({ ...user, username: e.target.value })}
//           required
//           className="w-full px-3 py-2 mt-1 border text-gray-700 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Email</label>
//         <input
//           type="email"
//           value={user.email}
//           onChange={(e) => setUser({ ...user, email: e.target.value })}
//           required
//           className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//         <input
//           type="text"
//           value={user.phoneNo}
//           onChange={(e) => setUser({ ...user, phoneNo: e.target.value })}
//           required
//           className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Address</label>
//         <input
//           type="text"
//           value={user.address}
//           onChange={(e) => setUser({ ...user, address: e.target.value })}
//           required
//           className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Password</label>
//         <input
//           type="password"
//           value={user.password}
//           onChange={(e) => setUser({ ...user, password: e.target.value })}
//           required
//           className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
//         />
//       </div>
//       <button
//         type="submit"
//         disabled={buttonDisabled || loading}
//         className={`w-full px-4 py-2 font-semibold text-white rounded-md focus:outline-none focus:ring focus:ring-indigo-200 ${
//           buttonDisabled || loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
//         }`}
//       >
//         {loading ? "Submitting..." : "Sign Up"}
//       </button>
//     </form>
//   );
// };
// export default SignupForm;
// app/components/GeneralForm.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './SubmitButton'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
const GeneralForm = ({ fields, buttonText, onSubmit, navigateTo })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(fields.reduce((acc, field)=>({
            ...acc,
            [field.name]: ""
        }), {}));
    const [buttonDisabled, setButtonDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const isFormComplete = fields.every((field)=>!field.required || formData[field.name]);
        setButtonDisabled(!isFormComplete);
    }, [
        formData,
        fields
    ]);
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async ()=>{
        setLoading(true);
        try {
            await onSubmit(formData);
            router.push(navigateTo); // Navigate to specified route after submission
        } catch (error) {
            console.error("Form submission failed", error);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "space-y-6",
        children: [
            fields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-gray-700",
                            children: field.label
                        }, void 0, false, {
                            fileName: "[project]/components/forms/SignUpForm.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: field.type,
                            name: field.name,
                            value: formData[field.name],
                            onChange: handleChange,
                            required: field.required,
                            className: "w-full px-3 py-2 mt-1 border text-gray-700 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                        }, void 0, false, {
                            fileName: "[project]/components/forms/SignUpForm.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)
                    ]
                }, field.name, true, {
                    fileName: "[project]/components/forms/SignUpForm.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SubmitButton, {
                onClick: handleSubmit,
                isLoading: loading,
                disabled: buttonDisabled,
                text: buttonText
            }, void 0, false, {
                fileName: "[project]/components/forms/SignUpForm.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/forms/SignUpForm.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = GeneralForm;
}}),
"[project]/app/(auth-pages)/login/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
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
// app/login/Login.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$SignUpForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/forms/SignUpForm.tsx [app-ssr] (ecmascript)");
'use client';
;
;
const Login = ()=>{
    const handleLoginSubmit = async (data)=>{
        // Your login logic here
        console.log("Login data submitted:", data);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$SignUpForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
        onSubmit: handleLoginSubmit
    }, void 0, false, {
        fileName: "[project]/app/(auth-pages)/login/page.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Login;
}}),
"[project]/app/(auth-pages)/login/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_require__("[externals]/ [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__663774._.js.map