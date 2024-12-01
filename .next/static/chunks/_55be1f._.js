(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_55be1f._.js", {

"[project]/components/CampaignCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
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
// const DonationCard: React.FC<DonationCardProps> = ({ campaign }) => {
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
// export default DonationCard;
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// interface CampaignCardProps {
//   campaign: {
//     id: string;
//     title: string;
//     image: string;
//     organizer: string;
//     raised: number;
//     target: number;
//     contributors: number;
//     description: string;
//     category: string;
//   };
//   isAdmin: boolean; // To determine if the user can edit
//   onUpdate: (updatedCampaign: any) => void; // Callback to handle the updated campaign
// }
// const CampaignCard: React.FC<CampaignCardProps> = ({ campaign, isAdmin, onUpdate }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [updatedCampaign, setUpdatedCampaign] = useState({
//     title: campaign.title,
//     description: campaign.description,
//     image: campaign.image,
//     category: campaign.category,
//     targetAmount: campaign.target,
//   });
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setUpdatedCampaign((prev) => ({ ...prev, [name]: value }));
//   };
//   const handleUpdate = () => {
//     // Call the onUpdate function to send the updated data to the parent component
//     onUpdate(updatedCampaign);
//     setIsEditing(false); // Close the edit form
//   };
//   return (
//     <motion.div
//       className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 mb-6"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: false, amount: 0.2 }}
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
//         {/* Description */}
//         <p className="text-sm text-gray-700 mb-3">{campaign.description}</p>
//         {/* Category */}
//         <p className="text-xs text-gray-500 mb-3">Category: {campaign.category}</p>
//         {/* Edit button for Admin or Creator */}
//         {isAdmin && (
//           <div className="flex justify-between items-center">
//             <button
//               onClick={() => setIsEditing(true)}
//               className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-400 transition-all duration-300"
//             >
//               Edit
//             </button>
//           </div>
//         )}
//         {/* Update Campaign Form (appears when isEditing is true) */}
//         {isEditing && (
//           <div className="mt-4">
//             <div className="mb-4">
//               <input
//                 type="text"
//                 name="title"
//                 value={updatedCampaign.title}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-lg mb-2"
//                 placeholder="Title"
//               />
//             </div>
//             <div className="mb-4">
//               <textarea
//                 name="description"
//                 value={updatedCampaign.description}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-lg mb-2"
//                 placeholder="Description"
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="text"
//                 name="category"
//                 value={updatedCampaign.category}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-lg mb-2"
//                 placeholder="Category"
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="number"
//                 name="targetAmount"
//                 value={updatedCampaign.targetAmount}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-lg mb-2"
//                 placeholder="Target Amount"
//               />
//             </div>
//             <div className="flex justify-between items-center">
//               <button
//                 onClick={handleUpdate}
//                 className="bg-green-900 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition-all duration-300"
//               >
//                 Update
//               </button>
//               <button
//                 onClick={() => setIsEditing(false)}
//                 className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// };
// export default CampaignCard;
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
const CampaignCard = ({ campaign })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: campaign.image,
                alt: campaign.title,
                className: "w-full h-52 object-cover"
            }, void 0, false, {
                fileName: "[project]/components/CampaignCard.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-gray-900 mb-2",
                        children: campaign.title
                    }, void 0, false, {
                        fileName: "[project]/components/CampaignCard.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mb-2",
                        children: [
                            "by ",
                            campaign.organizer
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CampaignCard.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-green-600 font-bold mb-3",
                        children: [
                            "₹",
                            campaign.raised,
                            " raised out of ₹",
                            campaign.target
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CampaignCard.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full bg-gray-200 rounded-full h-2 mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-0 h-2 rounded-full bg-yellow-500",
                            style: {
                                width: `${campaign.raised / campaign.target * 100}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/CampaignCard.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/CampaignCard.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 mb-3",
                        children: [
                            "❤️ ",
                            campaign.contributors,
                            " Contributors"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CampaignCard.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-700 mb-3",
                        children: campaign.description
                    }, void 0, false, {
                        fileName: "[project]/components/CampaignCard.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 mb-3",
                        children: [
                            "Category: ",
                            campaign.category
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CampaignCard.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CampaignCard.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CampaignCard.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
};
_c = CampaignCard;
const __TURBOPACK__default__export__ = CampaignCard;
var _c;
__turbopack_refresh__.register(_c, "CampaignCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(campaign)/campaignCards/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_55be1f._.js.map