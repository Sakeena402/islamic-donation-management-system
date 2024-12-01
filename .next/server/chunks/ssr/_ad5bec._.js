module.exports = {

"[project]/components/CampaignList.tsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion'; // Importing motion from framer-motion
// import CategoryButton from '@/components/CategoryButton';
// import DonationCard from '@/components/DonationCard';
// const CampaignList: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const categories = [
//     'All',
//     'Child',
//     'Cancer',
//     'Labour patients',
//     'Heart transplant',
//     'NICU care',
//     'Bone marrow transplant',
//     'Accident treatment',
//   ];
//   const campaigns = [
//     {
//       title: 'I Need Your Urgent Support For My Avascular Necrosis',
//       image: './image1.jpeg',
//       organizer: 'Suhani Ray',
//       raised: 700000,
//       target: 1012000,
//       contributors: 116,
//       category: 'Health',
//     },
//     {
//       title: 'A Dancer and Single Mother Asha Sarella Needs Our Help',
//       image: './image1.jpeg',
//       organizer: 'Mahesh',
//       raised: 1000000,
//       target: 1250000,
//       contributors: 125,
//       category: 'Health',
//     },
//     {
//       title: 'Offer Neshvi The Chance To Hear The World!',
//       image: './image1.jpeg',
//       organizer: 'Rita Suhay',
//       raised: 130000,
//       target: 800000,
//       contributors: 99,
//       category: 'Health',
//     },
//     {
//       title: 'Help Mendona Beat Lupus Nephritis',
//       image: './image1.jpeg',
//       organizer: 'Mukesh Goyal',
//       raised: 1500000,
//       target: 2000000,
//       contributors: 552,
//       category: 'Health',
//     },
//     {
//       title: 'Offer Neshvi The Chance To Hear The World!',
//       image: './image1.jpeg',
//       organizer: 'Rita Suhay',
//       raised: 130000,
//       target: 800000,
//       contributors: 99,
//       category: 'Health',
//     },
//     {
//       title: 'Help Mendona Beat Lupus Nephritis',
//       image: './image1.jpeg',
//       organizer: 'Mukesh Goyal',
//       raised: 1500000,
//       target: 2000000,
//       contributors: 552,
//       category: 'Health',
//     },
//   ];
//   const filteredCampaigns =
//     selectedCategory === 'All'
//       ? campaigns
//       : campaigns.filter((c) => c.category === selectedCategory);
//   return (
//     <div className="mx-auto px-7 m-12 py-15">
//       {/* Section for Heading with animation */}
//       <motion.section
//         className="text-center mb-10"
//         initial={{ opacity: 0, y: 40 }} // Start with opacity 0 and slight translation
//         whileInView={{ opacity: 1, y: 0 }} // Fade in and translate to original position when in view
//         transition={{ duration: 1 }} // Smooth transition for the animation
//         viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is visible
//       >
//          <h2 className="text-2xl pt-5 text-center font-bold font-serif mb-6 md:text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
//           Hope in Healing: Donate to Save Them!
//         </h2>
//       </motion.section>
//       {/* Section for Categories with animation */}
//       <motion.section
//         className="mb-10"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }} // Fade in the category section
//         transition={{ duration: 0.8 }}
//         viewport={{ once: false, amount: 0.2 }}
//       >
//         <CategoryButton
//           categories={categories}
//           onCategoryClick={(category) => setSelectedCategory(category)}
//         />
//       </motion.section>
//       {/* Section for Donation Cards - Grid with 3 cards per row with animation */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }} // Fade in the grid section
//         transition={{ duration: 1 }}
//         viewport={{ once: false, amount: 0.2 }}
//       >
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 gap-y-12">
//           {filteredCampaigns.map((campaign, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }} // Start with opacity 0 and slight translation
//               whileInView={{ opacity: 1, y: 0 }} // Fade in and translate to original position when in view
//               transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered animation delay for each card
//               viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is visible
//             >
//               <DonationCard campaign={campaign} />
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>
//     </div>
//   );
// };
// export default CampaignList;
// 'use client';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import CategoryButton from '@/components/CategoryButton';
// import CampaignCard from '@/components/CampaignCard';
// const CampaignList: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [categories, setCategories] = useState<string[]>([]);
//   const [campaigns, setCampaigns] = useState<any[]>([]);
//   // Fetch categories and campaigns from the backend
//   useEffect(() => {
//     fetch('/api/categories')
//       .then((response) => response.json())
//       .then((data) => setCategories(data))
//       .catch((error) => console.error('Error fetching categories:', error));
//     fetch('/api/campaigns')
//       .then((response) => response.json())
//       .then((data) => setCampaigns(data))
//       .catch((error) => console.error('Error fetching campaigns:', error));
//   }, []);
//   const filteredCampaigns =
//     selectedCategory === 'All'
//       ? campaigns
//       : campaigns.filter((campaign) => campaign.category === selectedCategory);
//   return (
//     <div className="mx-auto px-7 m-12 py-15">
//       {/* Section for Heading with animation */}
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
//       {/* Section for Categories with animation */}
//       <motion.section
//         className="mb-10"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: false, amount: 0.2 }}
//       >
//         <CategoryButton
//           categories={categories}
//           onCategoryClick={(category) => setSelectedCategory(category)}
//         />
//       </motion.section>
//       {/* Section for Donation Cards - Grid with 3 cards per row with animation */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: false, amount: 0.2 }}
//       >
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 gap-y-12">
//           {filteredCampaigns.map((campaign, index) => (
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
//         </div>
//       </motion.section>
//     </div>
//   );
// };
// export default CampaignList;
}}),
"[project]/app/(campaign)/campaignCards/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// 'use client';
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import CampaignCard from '@/components/CampaignCard';
// import CampaignList from '@/components/CampaignList';
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
//               <CampaignList campaign={campaign} />
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CampaignList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/CampaignList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const CampaignPage = ()=>{
    const [campaigns, setCampaigns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch campaigns from the backend API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Make sure to replace '/api/campaigns' with your actual backend endpoint
        fetch('/api/campaign').then((response)=>response.json()).then((data)=>{
            setCampaigns(data);
            setIsLoading(false);
        }).catch((err)=>{
            setError('Failed to load campaigns');
            setIsLoading(false);
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto px-7 m-12 py-15",
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
                    className: "text-2xl pt-5 text-center font-bold font-serif mb-6 md:text-5xl",
                    style: {
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'
                    },
                    children: "Hope in Healing: Donate to Save Them!"
                }, void 0, false, {
                    fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-lg text-gray-500",
                children: "Loading campaigns..."
            }, void 0, false, {
                fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-lg text-red-500",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                lineNumber: 131,
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
                children: campaigns.map((campaign, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CampaignList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            campaign: campaign
                        }, void 0, false, {
                            fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                            lineNumber: 149,
                            columnNumber: 15
                        }, this)
                    }, index, false, {
                        fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                        lineNumber: 142,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(campaign)/campaignCards/page.tsx",
        lineNumber: 113,
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

//# sourceMappingURL=_ad5bec._.js.map