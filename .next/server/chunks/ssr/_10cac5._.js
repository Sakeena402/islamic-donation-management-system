module.exports = {

"[project]/components/CampaignCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// import React from 'react';
// import { motion } from 'framer-motion';
// interface DonationCardProps {
//   campaign: {
//     title: string;
//     image: string;
//     organizer: string;
//     raised: number;
//     target: number;
//     contributors: number;
//   };
// }
// const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
//   return (
//     <motion.div
//       className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 mb-6"
//       initial={{ opacity: 0, y: 40 }} // Start with opacity 0 and slight translation
//       whileInView={{ opacity: 1, y: 0 }} // Fade in and translate to original position when in view
//       transition={{ duration: 0.8 }} // Smooth transition for the animation
//       viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is visible
//     >
//       {/* Image */}
//       <img
//         src={campaign.image}
//         alt={campaign.title}
//         className="w-full h-52 object-cover"
//       />
//       {/* Content */}
//       <div className="p-4">
//         {/* Title */}
//         <h3 className="text-xl font-semibold text-gray-900 mb-2">{campaign.title}</h3>
//         <p className="text-sm text-gray-500 mb-2">by {campaign.organizer}</p>
//         {/* Raised Amount */}
//         <p className="text-sm text-green-600 font-bold mb-3">
//           ₹{campaign.raised} raised out of ₹{campaign.target}
//         </p>
//         {/* Progress Bar */}
//         <div className="relative w-full bg-gray-200 rounded-full h-2 mb-3">
//           <div
//             className="absolute top-0 left-0 h-2 rounded-full bg-yellow-500"
//             style={{ width: `${(campaign.raised / campaign.target) * 100}%` }}
//           ></div>
//         </div>
//         {/* Contributors */}
//         <p className="text-xs text-gray-500 mb-3">
//           ❤️ {campaign.contributors} Contributors
//         </p>
//         {/* Actions */}
//         <div className="flex justify-between items-center">
//           <button className="bg-green-900 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition-all duration-300">
//             Contribute »
//           </button>
//           <button className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
//             Share
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };
// export default CampaignCard;
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
const CampaignCard = ({ campaign })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 mb-6",
        initial: {
            opacity: 0,
            y: 40
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.8
        },
        viewport: {
            once: false,
            amount: 0.2
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: campaign.image,
                alt: campaign.title,
                className: "w-full h-52 object-cover"
            }, void 0, false, {
                fileName: "[project]/components/CampaignCard.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-gray-900 mb-2",
                        children: campaign.title
                    }, void 0, false, {
                        fileName: "[project]/components/CampaignCard.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mb-2",
                        children: [
                            "by ",
                            campaign.organizer
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CampaignCard.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-green-600 font-bold mb-3",
                        children: [
                            "₹",
                            campaign.raised,
                            " raised out of ₹",
                            campaign.target
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CampaignCard.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full bg-gray-200 rounded-full h-2 mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-0 h-2 rounded-full bg-yellow-500",
                            style: {
                                width: `${campaign.raised / campaign.target * 100}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/CampaignCard.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/CampaignCard.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 mb-3",
                        children: [
                            "❤️ ",
                            campaign.contributors,
                            " Contributors"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CampaignCard.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-700 mb-3",
                        children: campaign.description
                    }, void 0, false, {
                        fileName: "[project]/components/CampaignCard.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 mb-3",
                        children: [
                            "Category: ",
                            campaign.category
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CampaignCard.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-green-900 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition-all duration-300",
                                children: "Contribute »"
                            }, void 0, false, {
                                fileName: "[project]/components/CampaignCard.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-gray-400 hover:text-gray-600 transition-colors duration-300",
                                children: "Share"
                            }, void 0, false, {
                                fileName: "[project]/components/CampaignCard.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CampaignCard.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CampaignCard.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CampaignCard.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CampaignCard;
}}),
"[project]/components/CategoryButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)"); // Importing icons
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
;
;
;
const CategoryButton = ({ categories, onCategoryClick })=>{
    // Function to select an icon based on the category
    const getCategoryIcon = (category)=>{
        switch(category){
            case 'Child':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaChild"], {}, void 0, false, {
                    fileName: "[project]/components/CategoryButton.tsx",
                    lineNumber: 15,
                    columnNumber: 16
                }, this);
            case 'Heart transplant':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaHeartbeat"], {}, void 0, false, {
                    fileName: "[project]/components/CategoryButton.tsx",
                    lineNumber: 17,
                    columnNumber: 16
                }, this);
            case 'Labour patients':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaHandsHelping"], {}, void 0, false, {
                    fileName: "[project]/components/CategoryButton.tsx",
                    lineNumber: 19,
                    columnNumber: 16
                }, this);
            case 'Cancer':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaHandHoldingHeart"], {}, void 0, false, {
                    fileName: "[project]/components/CategoryButton.tsx",
                    lineNumber: 21,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaHandsHelping"], {}, void 0, false, {
                    fileName: "[project]/components/CategoryButton.tsx",
                    lineNumber: 23,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center mb-8",
        children: categories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                onClick: ()=>onCategoryClick(category),
                className: "px-4 pb-5 py-3 bg-[#11342b] hover:bg-yellow-500 hover:text-white transition-all duration-100 rounded-lg text-white shadow-lg hover:shadow-xl font-medium text-lg w-full max-w-xs",
                // className="px-4 py-3 bg-gray-100 hover:bg-yellow-500 hover:text-white transition-all duration-100 rounded-lg text-gray-700 shadow-md font-medium text-lg w-full max-w-xs"
                initial: {
                    opacity: 0,
                    scale: 0.9
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                whileHover: {
                    scale: 1.1
                },
                transition: {
                    duration: 0.3
                },
                viewport: {
                    once: false,
                    amount: 0.2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center space-x-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: getCategoryIcon(category)
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryButton.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: category
                        }, void 0, false, {
                            fileName: "[project]/components/CategoryButton.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CategoryButton.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this)
            }, index, false, {
                fileName: "[project]/components/CategoryButton.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/CategoryButton.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CategoryButton;
 // import React, { useEffect, useState } from 'react';
 // import { motion } from 'framer-motion';
 // import { FaChild, FaHeartbeat, FaHandsHelping, FaHandHoldingHeart } from 'react-icons/fa'; // Importing icons
 // import axios from 'axios'; // Importing axios for making requests
 // interface CategoryButtonProps {
 //   onCategoryClick: (category: string) => void;
 // }
 // const CategoryButton: React.FC<CategoryButtonProps> = ({ onCategoryClick }) => {
 //   const [categories, setCategories] = useState<string[]>([]);
 //   // Fetch categories from the backend
 //   useEffect(() => {
 //     const fetchCategories = async () => {
 //       try {
 //         const response = await axios.get('/api/campaign'); // Modify the API endpoint as per your setup
 //         const uniqueCategories = [
 //           ...new Set(response.data.campaigns.map((campaign: any) => campaign.category)),
 //         ]; // Get unique categories
 //         setCategories(uniqueCategories);
 //       } catch (error) {
 //         console.error('Error fetching categories:', error);
 //       }
 //     };
 //     fetchCategories();
 //   }, []);
 //   // Function to select an icon based on the category
 //   const getCategoryIcon = (category: string) => {
 //     switch (category) {
 //       case 'Child':
 //         return <FaChild />;
 //       case 'Heart transplant':
 //         return <FaHeartbeat />;
 //       case 'Labour patients':
 //         return <FaHandsHelping />;
 //       case 'Cancer':
 //         return <FaHandHoldingHeart />;
 //       default:
 //         return <FaHandsHelping />;
 //     }
 //   };
 //   return (
 //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center mb-8">
 //       {categories.map((category, index) => (
 //         <motion.button
 //           key={index}
 //           onClick={() => onCategoryClick(category)} // Call the parent handler when category is clicked
 //           className="px-4 pb-5 py-3 bg-[#11342b] hover:bg-yellow-500 hover:text-white transition-all duration-100 rounded-lg text-white shadow-lg hover:shadow-xl font-medium text-lg w-full max-w-xs"
 //           initial={{ opacity: 0, scale: 0.9 }} // Initial state: slightly smaller and hidden
 //           animate={{ opacity: 1, scale: 1 }} // Animate to normal size and visible
 //           whileHover={{ scale: 1.1 }} // Scale up slightly on hover
 //           transition={{ duration: 0.3 }} // Duration of transition
 //           viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is visible
 //         >
 //           <div className="flex items-center justify-center space-x-2">
 //             {/* Add the icon */}
 //             <span>{getCategoryIcon(category)}</span>
 //             <span>{category}</span>
 //           </div>
 //         </motion.button>
 //       ))}
 //     </div>
 //   );
 // };
 // export default CategoryButton;
}}),
"[project]/app/(campaign)/campaignCards/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// 'use client';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import CampaignCard from '@/components/CampaignCard'; // Make sure to import your CampaignCard component
// const CampaignPage: React.FC = () => {
//   const [campaigns, setCampaigns] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   // Fetch campaigns from the backend API
//   useEffect(() => {
//     // Make sure to replace '/api/campaigns' with your actual backend endpoint
//     fetch('/api/campaign')
//       .then((response) => response.json())
//       .then((data) => {
//         setCampaigns(data);
//         setIsLoading(false);
//       }) 
//       .catch((err) => {
//         setError('Failed to load campaigns');
//         setIsLoading(false);
//       });
//   }, []);
//   return (
//     <div className="mx-auto px-7 m-12 py-15">
//       {/* Section for Heading */}
//       <motion.section
//         className="text-center mb-10"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: false, amount: 0.2 }}
//       >
//         <h2 className="text-2xl pt-5 text-center font-bold font-serif mb-6 md:text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
//           Hope in Healing: Donate to Save Them!
//         </h2>
//       </motion.section>
//       {/* Loading State */}
//       {isLoading ? (
//         <div className="text-center text-lg text-gray-500">Loading campaigns...</div>
//       ) : error ? (
//         <div className="text-center text-lg text-red-500">{error}</div>
//       ) : (
//         <motion.section
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 gap-y-12"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: false, amount: 0.2 }}
//         >
//           {/* Render each campaign card */}
//           {campaigns.map((campaign, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               viewport={{ once: false, amount: 0.2 }}
//             >
//               <CampaignCard campaign={campaign} />
//             </motion.div>
//           ))}
//         </motion.section>
//       )}
//     </div>
//   );
// };
// export default CampaignPage;
// 'use client';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import CampaignCard from '@/components/CampaignCard'; // Import CampaignCard component
// const CampaignPage: React.FC = () => {
//   const [campaigns, setCampaigns] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   // Fetch campaigns from the backend API
//   useEffect(() => {
//     fetch('/api/campaign')
//       .then((response) => response.json())
//       .then((data) => {
//         setCampaigns(data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         setError('Failed to load campaigns');
//         setIsLoading(false);
//       });
//   }, []);
//   return (
//     <div className="mx-auto px-7 py-15 mt-29">
//       {/* Section for Heading */}
//       <motion.section
//         className="text-center mb-10"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: false, amount: 0.2 }}
//       >
//         <h2
//           className="text-2xl font-bold text-center font-serif mb-6 md:text-5xl"
//           style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
//         >
//           Hope in Healing: Donate to Save Them!
//         </h2>
//       </motion.section>
//       {/* Loading State */}
//       {isLoading ? (
//         <div className="text-center text-lg text-gray-500">Loading campaigns...</div>
//       ) : error ? (
//         <div className="text-center text-lg text-red-500">{error}</div>
//       ) : (
//         <motion.section
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 gap-y-12"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: false, amount: 0.2 }}
//         >
//           {/* Render each campaign card */}
//           {campaigns.map((campaign, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               viewport={{ once: false, amount: 0.2 }}
//             >
//               <CampaignCard campaign={campaign} />
//             </motion.div>
//           ))}
//         </motion.section>
//       )}
//     </div>
//   );
// };
// export default CampaignPage;
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CampaignCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/CampaignCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const CampaignPage = ()=>{
    const [campaigns, setCampaigns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(''); // For filtering campaigns
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch campaigns with or without category filter
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLoading(true);
        const fetchCampaigns = async ()=>{
            try {
                const response = await fetch(`/api/campaign?category=${category}`);
                const data = await response.json();
                setCampaigns(data.data || []);
            } catch (error) {
                setError('Failed to load campaigns');
            } finally{
                setLoading(false);
            }
        };
        fetchCampaigns();
    }, [
        category
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto px-7 py-15 mt-36",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                className: "text-center mb-10",
                initial: {
                    opacity: 0,
                    y: 40
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 1
                },
                viewport: {
                    once: false,
                    amount: 0.2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-center font-serif mb-6 md:text-5xl",
                    style: {
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'
                    },
                    children: "Hope in Healing: Donate to Save Them!"
                }, void 0, false, {
                    fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-lg text-gray-500",
                children: "Loading campaigns..."
            }, void 0, false, {
                fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                lineNumber: 243,
                columnNumber: 9
            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-lg text-red-500",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                lineNumber: 245,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 gap-y-12",
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                transition: {
                    duration: 1
                },
                viewport: {
                    once: false,
                    amount: 0.2
                },
                children: campaigns.length > 0 ? campaigns.map((campaign, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: index * 0.2
                        },
                        viewport: {
                            once: false,
                            amount: 0.2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CampaignCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            campaign: {
                                ...campaign,
                                createdBy: campaign.createdBy?.username || 'Unknown'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                            lineNumber: 264,
                            columnNumber: 17
                        }, this)
                    }, index, false, {
                        fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                        lineNumber: 257,
                        columnNumber: 15
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-lg text-gray-500",
                    children: "No campaigns available."
                }, void 0, false, {
                    fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                    lineNumber: 273,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                lineNumber: 247,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
        lineNumber: 208,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CampaignPage;
}}),
"[project]/app/(campaign)/campaignCards/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=_10cac5._.js.map