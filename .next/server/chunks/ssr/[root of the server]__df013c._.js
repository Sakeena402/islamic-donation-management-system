module.exports = {

"[externals]/ [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js");

module.exports = mod;
}}),
"[externals]/ [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/action-async-storage.external.js");

module.exports = mod;
}}),
"[externals]/ [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-unit-async-storage.external.js");

module.exports = mod;
}}),
"[externals]/ [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-async-storage.external.js");

module.exports = mod;
}}),
"[project]/components/forms/SubmitButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// components/SubmitButton.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use clien';
;
const SubmitButton = ({ loading, text, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
const __TURBOPACK__default__export__ = SubmitButton;
}}),
"[project]/hooks/useTogglePasswordVisibility.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// /hooks/useTogglePasswordVisibility.ts
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const useTogglePasswordVisibility = ()=>{
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleVisibility = ()=>setVisible(!visible);
    return {
        visible,
        toggleVisibility
    };
};
const __TURBOPACK__default__export__ = useTogglePasswordVisibility;
}}),
"[project]/hooks/useFormValidation.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// /hooks/useFormValidation.ts
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const useFormValidation = (schema)=>{
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
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
const __TURBOPACK__default__export__ = useFormValidation;
}}),
"[project]/components/forms/GeneralForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// /components/forms/GeneralForm.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$SubmitButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/forms/SubmitButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTogglePasswordVisibility$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/useTogglePasswordVisibility.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFormValidation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/hooks/useFormValidation.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const GeneralForm = ({ fields, buttonText, onSubmit, redirectPath, validationSchema })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(fields.reduce((acc, field)=>({
            ...acc,
            [field.name]: ""
        }), {}));
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { errors, validate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFormValidation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(validationSchema);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const isValid = await validate(formData);
        if (!isValid) return;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-center text-gray-800",
                children: buttonText
            }, void 0, false, {
                fileName: "[project]/components/forms/GeneralForm.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/forms/GeneralForm.tsx",
                lineNumber: 63,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "space-y-4",
                onSubmit: handleSubmit,
                children: [
                    fields.map((field)=>{
                        const { visible, toggleVisibility } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTogglePasswordVisibility$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700",
                                    children: field.label
                                }, void 0, false, {
                                    fileName: "[project]/components/forms/GeneralForm.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: field.type === "password" && visible ? "text" : field.type,
                                    name: field.name,
                                    value: formData[field.name],
                                    onChange: handleChange,
                                    required: field.required,
                                    className: "w-full px-3 py-2 mt-1 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500",
                                    placeholder: `Enter your ${field.label.toLowerCase()}`
                                }, void 0, false, {
                                    fileName: "[project]/components/forms/GeneralForm.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this),
                                field.type === "password" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: toggleVisibility,
                                    className: "absolute right-3 top-3 text-gray-600 hover:text-gray-800 focus:outline-none",
                                    children: visible ? "👁️" : "🚫"
                                }, void 0, false, {
                                    fileName: "[project]/components/forms/GeneralForm.tsx",
                                    lineNumber: 80,
                                    columnNumber: 17
                                }, this),
                                errors[field.name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-xs mt-1",
                                    children: errors[field.name]
                                }, void 0, false, {
                                    fileName: "[project]/components/forms/GeneralForm.tsx",
                                    lineNumber: 88,
                                    columnNumber: 38
                                }, this)
                            ]
                        }, field.name, true, {
                            fileName: "[project]/components/forms/GeneralForm.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$SubmitButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        loading: loading,
                        text: buttonText,
                        onClick: handleSubmit
                    }, void 0, false, {
                        fileName: "[project]/components/forms/GeneralForm.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/forms/GeneralForm.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/forms/GeneralForm.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = GeneralForm;
 // // GeneralForm.tsx (update the styles as needed)
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
 // }
 // const GeneralForm: React.FC<GeneralFormProps> = ({
 //   fields,
 //   buttonText,
 //   onSubmit,
 //   redirectPath,
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
 //   const handleSubmit = async (e: React.FormEvent) => {
 //     e.preventDefault(); // Prevent default form submission
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
 //     <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
 //       <h2 className="text-2xl font-bold text-center text-gray-800">{buttonText}</h2>
 //       {error && <p className="text-center text-red-600">{error}</p>}
 //       <form className="space-y-4" onSubmit={handleSubmit}>
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
 //               placeholder={`Enter your ${field.label.toLowerCase()}`} // Placeholder text
 //             />
 //           </div>
 //         ))}
 //         <SubmitButton
 //           loading={loading}
 //           text={buttonText}
 //           onClick={handleSubmit}
 //         />
 //       </form>
 // <p className="text-sm text-center text-gray-600">
 //        {buttonText === "Create Your Account" ? (
 //           <>
 //             Already have an account?{" "}
 //             <a href="/login" className="text-indigo-600 hover:underline">
 //             Login
 //           </a>
 //           </>
 //         ) : (
 //           <>
 //             Do not have an account?{" "}
 //             <a href="/signup" className="text-indigo-600 hover:underline">
 //             SignUp
 //           </a>
 //           </>
 //         )}
 //       </p>
 //     </div>
 //   );
 // };
 // export default GeneralForm;
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
"[externals]/ [external] (fs, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("fs");

module.exports = mod;
}}),
"[externals]/ [external] (stream, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("stream");

module.exports = mod;
}}),
"[externals]/ [external] (zlib, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("zlib");

module.exports = mod;
}}),
"[project]/components/AuthLayout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// AuthLayout.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const AuthLayout = ({ children, backgroundImage })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-2/3 bg-cover bg-center",
                style: {
                    backgroundImage: `url(${backgroundImage})`
                }
            }, void 0, false, {
                fileName: "[project]/components/AuthLayout.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1/2 flex items-center justify-center bg-gray-50",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/AuthLayout.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AuthLayout.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = AuthLayout;
}}),
"[externals]/ [external] (util, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("util");

module.exports = mod;
}}),
"[externals]/ [external] (path, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("path");

module.exports = mod;
}}),
"[externals]/ [external] (http, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("http");

module.exports = mod;
}}),
"[externals]/ [external] (https, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("https");

module.exports = mod;
}}),
"[externals]/ [external] (url, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("url");

module.exports = mod;
}}),
"[externals]/ [external] (assert, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("assert");

module.exports = mod;
}}),
"[externals]/ [external] (tty, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("tty");

module.exports = mod;
}}),
"[externals]/ [external] (os, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("os");

module.exports = mod;
}}),
"[externals]/ [external] (events, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("events");

module.exports = mod;
}}),
"[project]/app/(auth-pages)/login/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// LoginPage.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$GeneralForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/forms/GeneralForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/router.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AuthLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/AuthLayout.tsx [app-ssr] (ecmascript)"); // Import the layout
var __TURBOPACK__imported__module__$5b$project$5d2f$schemas$2f$validationSchema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/schemas/validationSchema.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const LoginPage = ()=>{
    const onLogin = async (user)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/api/auth/login", user);
            console.log("Login successful");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].push('/user/profile'); // Redirect to dashboard or desired page
        } catch (error) {
            console.log("Login failed", error.message);
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
            redirectPath: "/user/profile"
        }, void 0, false, {
            fileName: "[project]/app/(auth-pages)/login/page.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(auth-pages)/login/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = LoginPage;
 // // pages/login.tsx
 // 'use client'
 // import React, { useState } from "react";
 // import GeneralForm from "@/components/forms/GeneralForm";
 // import axios from "axios";
 // import { useRouter } from "next/navigation";
 // const LoginPage = () => {
 //   const router = useRouter();
 //   const [isSignup, setIsSignup] = useState(false);
 //   const onLogin = async (user: { email: string; password: string }) => {
 //     try {
 //       const response = await axios.post("/api/auth/login", user);
 //       console.log("Login success");
 //       router.push('/dashboard'); // Redirect to dashboard after successful login
 //     } catch (error) {
 //       console.log("Login failed", error);
 //     }
 //   };
 //   const switchForm = () => {
 //     setIsSignup(!isSignup);
 //   };
 //   return (
 //     <div className="container">
 //       <div className="left-side"></div>
 //       <div className="right-side">
 //         {isSignup ? (
 //           <GeneralForm
 //             fields={[
 //               { name: "username", label: "Full Name", type: "text", required: true },
 //               { name: "email", label: "Email", type: "email", required: true },
 //               { name: "phoneNo", label: "Phone Number", type: "text", required: true },
 //               { name: "address", label: "Address", type: "text", required: true },
 //               { name: "password", label: "Password", type: "password", required: true },
 //             ]}
 //             buttonText="Create Your Account"
 //             onSubmit={onLogin}
 //             redirectPath="/login"
 //             switchForm={switchForm}
 //           />
 //         ) : (
 //           <GeneralForm
 //             fields={[
 //               { name: "email", label: "Email", type: "email", required: true },
 //               { name: "password", label: "Password", type: "password", required: true },
 //             ]}
 //             buttonText="Login"
 //             onSubmit={onLogin}
 //             redirectPath="/profile"
 //             switchForm={switchForm}
 //           />
 //         )}
 //       </div>
 //     </div>
 //   );
 // };
 // export default LoginPage;
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

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__df013c._.js.map