(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_af9d32._.js", {

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
"[project]/hooks/useFormValidation.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
// /hooks/useFormValidation.ts
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
const useFormValidation = (schema)=>{
    _s();
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const validate = async (data)=>{
        try {
            await schema.validate(data, {
                abortEarly: false
            });
            setErrors({});
            return true;
        } catch (err) {
            const validationErrors = {};
            if (err.inner) {
                err.inner.forEach((error)=>{
                    validationErrors[error.path] = error.message;
                });
            }
            setErrors(validationErrors);
            return false;
        }
    };
    return {
        errors,
        validate
    };
};
_s(useFormValidation, "o+SUXTQUSJNurFcpxixiLrA9BM0=");
const __TURBOPACK__default__export__ = useFormValidation;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/forms/GeneralForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
// // components/forms/GeneralForm.tsx
// 'use client'
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import SubmitButton from "@/components/forms/SubmitButton";
// import { FiEye, FiEyeOff } from "react-icons/fi";
// import { IconContext } from "react-icons";
// import useFormValidation from "@/hooks/useFormValidation";
// import { AnyObjectSchema } from "yup";
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
//   validationSchema: AnyObjectSchema; 
//   errorMessage?: string|null // Prop for displaying error messages
// }
// const GeneralForm: React.FC<GeneralFormProps> = ({
//   fields,
//   buttonText,
//   onSubmit,
//   validationSchema,
//   errorMessage, // Accept error message
// }) => {
//   const router = useRouter();
//   const [formData, setFormData] = useState<{ [key: string]: string }>(
//     fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
//   );
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const { errors, validate } = useFormValidation(validationSchema);
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     const isValid = await validate(formData);
//     if (!isValid) {
//       setLoading(false);
//       return;
//     }
//     try {
//       await onSubmit(formData);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev);
//   };
//   return (
//     <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md">
//       <h2 className="text-2xl font-bold text-center text-gray-800">{buttonText}</h2>
//       <form className="space-y-4" onSubmit={handleSubmit}>
//         {fields.map((field) => (
//           <div key={field.name} className="relative">
//             <label className="block text-sm font-medium text-gray-700">{field.label}</label>
//             <input
//               type={field.type === "password" && showPassword ? "text" : field.type}
//               name={field.name}
//               value={formData[field.name]}
//               onChange={handleChange}
//               required={field.required}
//               className={`w-full px-3 py-2 mt-1 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500 ${
//                 errors[field.name] ? "border-red-600" : ""
//               }`}
//               placeholder={`Enter your ${field.label.toLowerCase()}`}
//             />
//             {errors[field.name] && (
//               <p className="text-sm text-red-600">{errors[field.name]}</p>
//             )}
//             {field.type === "password" && (
//               <IconContext.Provider value={{ className: "absolute top-2/3 right-7 transform -translate-y-1/2 text-gray-400" }}>
//                 <button type="button" onClick={togglePasswordVisibility} aria-label="Toggle password visibility">
//                   {showPassword ? <FiEyeOff /> : <FiEye />}
//                 </button>
//               </IconContext.Provider>
//             )}
//           </div>
//         ))}
//         <div>      {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}</div>
//         <SubmitButton loading={loading} text={buttonText} onClick={handleSubmit} />
//       </form>
//       <p className="text-sm text-center text-gray-600">
//         {buttonText === "Create Your Account" ? (
//           <>
//             Already have an account?{" "}
//             <a href="/login" className="text-indigo-600 hover:underline">Login</a>
//           </>
//         ) : (
//           <>
//             Don't have an account?{" "}
//             <a href="/signup" className="text-indigo-600 hover:underline">Sign Up</a>
//           </>
//         )}
//       </p>
//     </div>
//   );
// };
// export default GeneralForm;
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$SubmitButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/forms/SubmitButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFormValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/useFormValidation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/lib/iconContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
const GeneralForm = ({ fields, buttonText, onSubmit, validationSchema, errorMessage })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(fields.reduce({
        "GeneralForm.useState": (acc, field)=>({
                ...acc,
                [field.name]: ""
            })
    }["GeneralForm.useState"], {}));
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { errors, validate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFormValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(validationSchema);
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        const isValid = await validate(formData);
        if (!isValid) {
            setLoading(false);
            return;
        }
        try {
            await onSubmit(formData);
        } catch (error) {
            console.error(error);
        } finally{
            setLoading(false);
        }
    };
    const togglePasswordVisibility = ()=>{
        setShowPassword((prev)=>!prev);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-lg space-y-3`",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-light text-center text-gray-800 mb-2",
                children: buttonText
            }, void 0, false, {
                fileName: "[project]/components/forms/GeneralForm.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "space-y-2",
                onSubmit: handleSubmit,
                children: [
                    fields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: field.label
                                }, void 0, false, {
                                    fileName: "[project]/components/forms/GeneralForm.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: field.type === "password" && showPassword ? "text" : field.type,
                                    name: field.name,
                                    value: formData[field.name],
                                    onChange: handleChange,
                                    required: field.required,
                                    className: `w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500 ${errors[field.name] ? "border-red-600" : ""}`,
                                    placeholder: `Enter ${field.label.toLowerCase()}`
                                }, void 0, false, {
                                    fileName: "[project]/components/forms/GeneralForm.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                errors[field.name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-600 mt-1",
                                    children: errors[field.name]
                                }, void 0, false, {
                                    fileName: "[project]/components/forms/GeneralForm.tsx",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, this),
                                field.type === "password" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lib$2f$iconContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconContext"].Provider, {
                                    value: {
                                        className: "absolute top-2/3 right-4 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: togglePasswordVisibility,
                                        "aria-label": "Toggle password visibility",
                                        children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEyeOff"], {}, void 0, false, {
                                            fileName: "[project]/components/forms/GeneralForm.tsx",
                                            lineNumber: 255,
                                            columnNumber: 35
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEye"], {}, void 0, false, {
                                            fileName: "[project]/components/forms/GeneralForm.tsx",
                                            lineNumber: 255,
                                            columnNumber: 50
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/forms/GeneralForm.tsx",
                                        lineNumber: 254,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/forms/GeneralForm.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, field.name, true, {
                            fileName: "[project]/components/forms/GeneralForm.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)),
                    errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-red-600",
                        children: errorMessage
                    }, void 0, false, {
                        fileName: "[project]/components/forms/GeneralForm.tsx",
                        lineNumber: 263,
                        columnNumber: 26
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$SubmitButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        loading: loading,
                        text: buttonText,
                        onClick: handleSubmit
                    }, void 0, false, {
                        fileName: "[project]/components/forms/GeneralForm.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/forms/GeneralForm.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm mt-0 text-center text-gray-600",
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
                            lineNumber: 274,
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
                            lineNumber: 279,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/forms/GeneralForm.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/forms/GeneralForm.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
};
_s(GeneralForm, "9+1Zb5D7rgkWeYfEA69cbOtNFHo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFormValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = GeneralForm;
const __TURBOPACK__default__export__ = GeneralForm;
var _c;
__turbopack_refresh__.register(_c, "GeneralForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/layout/AuthLayout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
const AuthLayout = ({ children, backgroundImage })=>{
    _s();
    const [fadeIn, setFadeIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Trigger the fade-in effect after the component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthLayout.useEffect": ()=>{
            setFadeIn(true);
        }
    }["AuthLayout.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col md:flex-row h-screen w-screen overflow-hidden ${fadeIn ? 'fade-in' : ''} font-light`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-3/4 gap-0 top-0 h-full flex flex-col items-center justify-center bg-white shadow-md md:w-1/2  md:h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${fadeIn ? 'fade-in' : ''}`,
                style: {
                    backgroundImage: `url(${backgroundImage || "https://th.bing.com/th/id/R.79c7ed2c85620e0afd0f482ee9f2b00d?rik=GcOYGE7HE2g4Ew&riu=http%3a%2f%2fwww.estraviz.com.br%2fwp-content%2fuploads%2f2012%2f08%2fdonations.jpg&ehk=bKg0gchDKHNqoKD1965b6vhrGLbeGT7uLKjFY806R78%3d&risl=&pid=ImgRaw&r=0"})`
                }
            }, void 0, false, {
                fileName: "[project]/components/layout/AuthLayout.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full md:w-1/2 h-full items-center justify-center ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md p-6 md:p-8 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-light text-gray-800 mb-4 text-center",
                            children: "Welcome to Our Donation Platform"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/AuthLayout.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mb-6 text-center",
                            children: "Your generosity helps us make the world a better place."
                        }, void 0, false, {
                            fileName: "[project]/components/layout/AuthLayout.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center w-full px-8",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/components/layout/AuthLayout.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/AuthLayout.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/AuthLayout.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/AuthLayout.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
_s(AuthLayout, "s7n23fSfhID5pVyFr0/DM12lDnA=");
_c = AuthLayout;
const __TURBOPACK__default__export__ = AuthLayout;
var _c;
__turbopack_refresh__.register(_c, "AuthLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
 // import React, { useEffect, useState } from 'react';
 // const AuthLayout: React.FC<{ children: React.ReactNode; backgroundImage: string }> = ({ children, backgroundImage }) => {
 //   const [fadeIn, setFadeIn] = useState(false);
 //   // Trigger the fade-in effect after the component mounts
 //   useEffect(() => {
 //     setFadeIn(true);
 //   }, []);
 //   return (
 //     <div className={`flex  h-screen w-screen overflow-hidden ${fadeIn ? 'fade-in' : ''}`}>
 //       <div
 //         className={`w-2/3 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${fadeIn ? 'fade-in' : ''}`}
 //         style={{ backgroundImage: `url(${backgroundImage || "https://wallpapers.com/images/hd/1920-x-1080-hd-c65hirjqswhsd1z3.jpg"})` }}
 //       ></div>
 //       <div className={`w-1/2 flex items-center justify-center bg-gray-50 transition-opacity duration-1000 ease-in-out ${fadeIn ? 'fade-in' : ''}`}>
 //         <div className="w-full items-center justify-center m-[80] transition-opacity duration-1000 ease-in-out">{children}</div>
 //       </div>
 //     </div>
 //   );
 // };
 // export default AuthLayout;
}}),
"[project]/schemas/validationSchema.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
// /schemas/validationSchema.ts
__turbopack_esm__({
    "loginSchema": (()=>loginSchema),
    "signupSchema": (()=>signupSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/yup/index.esm.js [app-client] (ecmascript)");
;
const signupSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.object({
    username: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().min(3, "Username must be at least 3 characters").required("Username is required"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().email("Enter a valid email").required("Email is required"),
    phoneNo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().matches(/^\d{10,15}$/, "Enter a valid phone number").required("Phone number is required"),
    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().min(5, "Address must be at least 5 characters").required("Address is required"),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().min(6, "Password must be at least 6 characters").required("Password is required")
});
const loginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().email("Enter a valid email").required("Email is required"),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().required("Password is required")
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(auth-pages)/signup/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$GeneralForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/forms/GeneralForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$AuthLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/layout/AuthLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$schemas$2f$validationSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/schemas/validationSchema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
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
    const [signupError, setSignupError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const onSignUp = async (user)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/auth/signup", user);
            console.log("Signup successful");
            router.push("/verify-notification");
        } catch (error) {
            // Handle different types of errors
            if (error.response) {
                // Server responded with a status code
                switch(error.response.status){
                    case 400:
                        setSignupError("All fields are required. Please fill in all fields.");
                        break;
                    case 409:
                        setSignupError("A user with this email already exists. Please use a different email.");
                        break;
                    case 500:
                        setSignupError("Server error. Please try again later.");
                        break;
                    default:
                        setSignupError("An unexpected error occurred. Please try again.");
                }
            } else if (error.request) {
                // Request was made but no response received
                setSignupError("No response from the server. Please check your connection.");
            } else {
                // Something else happened in making the request
                setSignupError("An error occurred while signing up. Please try again.");
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$AuthLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$GeneralForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
            validationSchema: __TURBOPACK__imported__module__$5b$project$5d2f$schemas$2f$validationSchema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signupSchema"],
            errorMessage: signupError
        }, void 0, false, {
            fileName: "[project]/app/(auth-pages)/signup/page.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(auth-pages)/signup/page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
};
_s(SignupPage, "LQM/82K+nuW15/IrCJIvZHrJKZw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SignupPage;
const __TURBOPACK__default__export__ = SignupPage;
var _c;
__turbopack_refresh__.register(_c, "SignupPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
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

//# sourceMappingURL=_af9d32._.js.map