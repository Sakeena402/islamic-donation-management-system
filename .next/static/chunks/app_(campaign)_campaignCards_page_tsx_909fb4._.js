(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_(campaign)_campaignCards_page_tsx_909fb4._.js", {

"[project]/app/(campaign)/campaignCards/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CampaignCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/CampaignCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const CampaignPage = ()=>{
    _s();
    const [campaigns, setCampaigns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''); // For filtering campaigns
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch campaigns with or without category filter
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignPage.useEffect": ()=>{
            setLoading(true);
            const fetchCampaigns = {
                "CampaignPage.useEffect.fetchCampaigns": async ()=>{
                    try {
                        const response = await fetch(`/api/campaign?category=${category}`);
                        const data = await response.json();
                        setCampaigns(data.data || []);
                    } catch (error) {
                        setError('Failed to load campaigns');
                    } finally{
                        setLoading(false);
                    }
                }
            }["CampaignPage.useEffect.fetchCampaigns"];
            fetchCampaigns();
        }
    }["CampaignPage.useEffect"], [
        category
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto px-7 py-15 mt-29",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    onChange: (e)=>setCategory(e.target.value),
                    value: category,
                    className: "p-3 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            children: "All Categories"
                        }, void 0, false, {
                            fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "Health",
                            children: "Health"
                        }, void 0, false, {
                            fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "Education",
                            children: "Education"
                        }, void 0, false, {
                            fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "Environment",
                            children: "Environment"
                        }, void 0, false, {
                            fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-lg text-gray-500",
                children: "Loading campaigns..."
            }, void 0, false, {
                fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                lineNumber: 242,
                columnNumber: 9
            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-lg text-red-500",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                lineNumber: 244,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
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
                children: campaigns.length > 0 ? campaigns.map((campaign, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CampaignCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            campaign: {
                                ...campaign,
                                createdBy: campaign.createdBy?.username || 'Unknown'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                            lineNumber: 263,
                            columnNumber: 17
                        }, this)
                    }, index, false, {
                        fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                        lineNumber: 256,
                        columnNumber: 15
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-lg text-gray-500",
                    children: "No campaigns available."
                }, void 0, false, {
                    fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                    lineNumber: 272,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                lineNumber: 246,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
        lineNumber: 208,
        columnNumber: 5
    }, this);
};
_s(CampaignPage, "gC06lnA+tya5CFOdiRRYRc/mF1k=");
_c = CampaignPage;
const __TURBOPACK__default__export__ = CampaignPage;
var _c;
__turbopack_refresh__.register(_c, "CampaignPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(campaign)/campaignCards/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_%28campaign%29_campaignCards_page_tsx_909fb4._.js.map