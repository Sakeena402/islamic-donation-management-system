module.exports = {

"[externals]/ [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js");

module.exports = mod;
}}),
"[project]/components/forms/SignUpForm.tsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/components/forms/SignUpForm.tsx'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/app/(auth-pages)/signup/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// 'use client'
// import React from "react";
// import SignupForm from "@/components/forms/SignUpForm";
// import { useRouter } from "next/navigation";
// const SignUpPage = () => {
//   const router = useRouter();
//   const onSubmit = async (user: { username: string; email: string; phoneNo: string; address: string; password: string }) => {
//     try {
//       const response = await fetch("/api/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       });
//       if (!response.ok) {
//         throw new Error("Signup failed");
//       }
//       // Redirect or handle success
//       router.push('/login');
//     } catch (error) {
//       console.error("Signup failed", error.message);
//     }
//   };
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800">Create Your Account</h2>
//         <SignupForm onSubmit={onSubmit} />
//         <p className="text-sm text-center text-gray-600">
//           Already have an account?{" "}
//           <a href="/login" className="text-indigo-600 hover:underline">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };
// export default SignUpPage;
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$GeneralForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/forms/GeneralForm.tsx [app-ssr] (ecmascript)");
'use client';
;
;
const Signup = ()=>{
    const handleSignupSubmit = async (data)=>{
        console.log("Signup data submitted:", data);
    // Implement signup logic here
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$GeneralForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
        buttonText: "Sign Up",
        onSubmit: handleSignupSubmit,
        navigateTo: "/welcome" // Route after successful signup
    }, void 0, false, {
        fileName: "[project]/app/(auth-pages)/signup/page.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Signup;
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
"[project]/app/(auth-pages)/signup/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

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

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__a51518._.js.map