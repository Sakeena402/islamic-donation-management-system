(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_6b0e00._.js", {

"[project]/components/forms/SubmitButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
// components/SubmitButton.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use clien';
;
const SubmitButton = ({ loading, text, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: loading,
        className: `w-full px-4 py-2 font-semibold text-white rounded-md focus:outline-none ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}`,
        children: loading ? "Processing..." : text
    }, void 0, false, {
        fileName: "[project]/components/forms/SubmitButton.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};
_c = SubmitButton;
const __TURBOPACK__default__export__ = SubmitButton;
var _c;
__turbopack_refresh__.register(_c, "SubmitButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/forms/GeneralForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
// components/forms/GeneralForm.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$SubmitButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/forms/SubmitButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/lib/iconContext.mjs [app-client] (ecmascript)"); // Optional for styling all icons globally
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)"); // Import new icons
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
const GeneralForm = ({ fields, buttonText, onSubmit, redirectPath })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(fields.reduce((acc, field)=>({
            ...acc,
            [field.name]: ""
        }), {}));
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await onSubmit(formData);
            router.push(redirectPath);
        } catch (error) {
            setError("Submission failed. Please try again.");
        } finally{
            setLoading(false);
        }
    };
    const togglePasswordVisibility = ()=>{
        setShowPassword((prev)=>!prev);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-center text-gray-800",
                children: buttonText
            }, void 0, false, {
                fileName: "[project]/components/forms/GeneralForm.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/forms/GeneralForm.tsx",
                lineNumber: 61,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "space-y-4",
                onSubmit: handleSubmit,
                children: [
                    fields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: field.label
                                }, void 0, false, {
                                    fileName: "[project]/components/forms/GeneralForm.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: field.type === "password" && showPassword ? "text" : field.type,
                                    name: field.name,
                                    value: formData[field.name],
                                    onChange: handleChange,
                                    required: field.required,
                                    className: "w-full px-3 py-2 mt-1 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500",
                                    placeholder: `Enter your ${field.label.toLowerCase()}`
                                }, void 0, false, {
                                    fileName: "[project]/components/forms/GeneralForm.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                field.type === "password" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconContext"].Provider, {
                                    value: {
                                        className: "absolute top-2/3 right-7 transform -translate-y-1/2 text-gray-400"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: togglePasswordVisibility,
                                        "aria-label": "Toggle password visibility",
                                        children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEyeOff"], {}, void 0, false, {
                                            fileName: "[project]/components/forms/GeneralForm.tsx",
                                            lineNumber: 82,
                                            columnNumber: 35
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEye"], {}, void 0, false, {
                                            fileName: "[project]/components/forms/GeneralForm.tsx",
                                            lineNumber: 82,
                                            columnNumber: 50
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/forms/GeneralForm.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/forms/GeneralForm.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, field.name, true, {
                            fileName: "[project]/components/forms/GeneralForm.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$SubmitButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        loading: loading,
                        text: buttonText,
                        onClick: handleSubmit
                    }, void 0, false, {
                        fileName: "[project]/components/forms/GeneralForm.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/forms/GeneralForm.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-center text-gray-600",
                children: buttonText === "Create Your Account" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Already have an account?",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/login",
                            className: "text-indigo-600 hover:underline",
                            children: "Login"
                        }, void 0, false, {
                            fileName: "[project]/components/forms/GeneralForm.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Don't have an account?",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/signup",
                            className: "text-indigo-600 hover:underline",
                            children: "Sign Up"
                        }, void 0, false, {
                            fileName: "[project]/components/forms/GeneralForm.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/forms/GeneralForm.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/forms/GeneralForm.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
};
_s(GeneralForm, "1v8N5tI/ziwVzdOHcjspVOrdyZ8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = GeneralForm;
const __TURBOPACK__default__export__ = GeneralForm;
var _c;
__turbopack_refresh__.register(_c, "GeneralForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
 // // GeneralForm.tsx
 // 'use client'
 // import React, { useState } from "react";
 // import { useRouter } from "next/navigation";
 // import SubmitButton from "@/components/forms/SubmitButton";
 // interface Field {
 //   name: string;
 //   label: string;
 //   type: string;
 //   required?: boolean;
 // }
 // interface GeneralFormProps {
 //   fields: Field[];
 //   buttonText: string;
 //   onSubmit: (formData: { [key: string]: string }) => Promise<void>;
 //   redirectPath: string;
 //   switchForm: () => void; // Function to switch forms
 // }
 // const GeneralForm: React.FC<GeneralFormProps> = ({
 //   fields,
 //   buttonText,
 //   onSubmit,
 //   redirectPath,
 //   switchForm,
 // }) => {
 //   const router = useRouter();
 //   const [formData, setFormData] = useState<{ [key: string]: string }>(
 //     fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
 //   );
 //   const [loading, setLoading] = useState(false);
 //   const [error, setError] = useState<string | null>(null);
 //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 //     setFormData({ ...formData, [e.target.name]: e.target.value });
 //   };
 //   const handleSubmit = async () => {
 //     setLoading(true);
 //     setError(null);
 //     try {
 //       await onSubmit(formData);
 //       router.push(redirectPath);
 //     } catch (error) {
 //       setError("Submission failed. Please try again.");
 //     } finally {
 //       setLoading(false);
 //     }
 //   };
 //   return (
 //     <div className="form-container">
 //       <h2 className="text-2xl font-bold text-center text-gray-800">{buttonText}</h2>
 //       {error && <p className="text-center text-red-600">{error}</p>}
 //       <form className="space-y-4">
 //         {fields.map((field) => (
 //           <div key={field.name}>
 //             <label className="block text-sm font-medium text-gray-700">{field.label}</label>
 //             <input
 //               type={field.type}
 //               name={field.name}
 //               value={formData[field.name]}
 //               onChange={handleChange}
 //               required={field.required}
 //               className="w-full px-3 py-2 mt-1 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
 //             />
 //           </div>
 //         ))}
 //         <SubmitButton
 //           loading={loading}
 //           text={buttonText}
 //           onClick={handleSubmit}
 //         />
 //       </form>
 //       <p className="text-sm text-center text-gray-600">
 //         {buttonText === "Create Your Account" ? (
 //           <>
 //             Already have an account?{" "}
 //             <button className="text-indigo-600 hover:underline" onClick={switchForm}>
 //               Login
 //             </button>
 //           </>
 //         ) : (
 //           <>
 //             Do not have an account?{" "}
 //             <button className="text-indigo-600 hover:underline" onClick={switchForm}>
 //               Sign Up
 //             </button>
 //           </>
 //         )}
 //       </p>
 //     </div>
 //   );
 // };
 // export default GeneralForm;
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
}}),
"[project]/app/(auth-pages)/login/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
// pages/login.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$GeneralForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/forms/GeneralForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const LoginPage = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isSignup, setIsSignup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const onLogin = async (user)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/auth/login", user);
            console.log("Login success");
            router.push('/dashboard'); // Redirect to dashboard after successful login
        } catch (error) {
            console.log("Login failed", error);
        }
    };
    const switchForm = ()=>{
        setIsSignup(!isSignup);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "left-side"
            }, void 0, false, {
                fileName: "[project]/app/(auth-pages)/login/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "right-side",
                children: isSignup ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$GeneralForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    onSubmit: onLogin,
                    redirectPath: "/login",
                    switchForm: switchForm
                }, void 0, false, {
                    fileName: "[project]/app/(auth-pages)/login/page.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$GeneralForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    redirectPath: "/profile",
                    switchForm: switchForm
                }, void 0, false, {
                    fileName: "[project]/app/(auth-pages)/login/page.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(auth-pages)/login/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(auth-pages)/login/page.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
};
_s(LoginPage, "SIJCw9c4BW9i8bNYYPis2nUZl8w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginPage;
const __TURBOPACK__default__export__ = LoginPage;
var _c;
__turbopack_refresh__.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
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
"[project]/app/(auth-pages)/login/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_6b0e00._.js.map