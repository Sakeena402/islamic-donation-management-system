

// "use client";

// import { cn } from "@/lib/utils";
// import React, { useEffect, useState } from "react";

// export const InfiniteMovingCards = ({
//   items,
//   direction = "left",
//   speed = "fast",
//   pauseOnHover = true,
//   className,
// }: {
//   items: {
//     image: string;
//     title: string;
//     description: string;
//     fundsCollected: number;
//   }[];
//   direction?: "left" | "right";
//   speed?: "fast" | "normal" | "slow";
//   pauseOnHover?: boolean;
//   className?: string;
// }) => {
//   const containerRef = React.useRef<HTMLDivElement>(null);
//   const scrollerRef = React.useRef<HTMLUListElement>(null);

//   const [start, setStart] = useState(false);
//   const [selectedCard, setSelectedCard] = useState<number | null>(null);

//   useEffect(() => {
//     addAnimation();
//   }, []);

//   function addAnimation() {
//     if (containerRef.current && scrollerRef.current) {
//       const scrollerContent = Array.from(scrollerRef.current.children);

//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         if (scrollerRef.current) {
//           scrollerRef.current.appendChild(duplicatedItem);
//         }
//       });

//       getDirection();
//       getSpeed();
//       setStart(true);
//     }
//   }

//   const getDirection = () => {
//     if (containerRef.current) {
//       containerRef.current.style.setProperty(
//         "--animation-direction",
//         direction === "left" ? "forwards" : "reverse"
//       );
//     }
//   };

//   const getSpeed = () => {
//     if (containerRef.current) {
//       const duration =
//         speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
//       containerRef.current.style.setProperty("--animation-duration", duration);
//     }
//   };

//   return (
//     <>
//       <div
//         ref={containerRef}
//         className={cn(
//           "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
//           className
//         )}
//       >
//         <ul
//           ref={scrollerRef}
//           className={cn(
//             "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
//             start && "animate-scroll",
//             pauseOnHover && "hover:[animation-play-state:paused]"
//           )}
//         >
//           {items.map((item, idx) => (
//             <li
//               className="w-[350px] bg-[#0b221d] rounded-lg flex-shrink-0 relative border border-slate-700 overflow-hidden"
//               key={idx}
//               onClick={() => setSelectedCard(idx)}
//               style={{
//                 background:
//                   "linear-gradient(180deg, rgba(11, 34, 29, 0.9), rgba(11, 34, 29, 1))",
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-bold text-white">{item.title}</h3>
//                 <p className="text-sm text-gray-300">{item.description}</p>
//                 <div className="mt-4 flex items-center justify-between">
//                   <span className="text-sm text-gray-400">
//                     Funds Collected: ${item.fundsCollected}
//                   </span>
//                   <button className="px-4 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-500">
//                     Notify Me
//                   </button>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Popup Modal */}
//       {selectedCard !== null && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
//           onClick={() => setSelectedCard(null)}
//         >
//           <div
//             className="w-96 bg-[#0b221d] p-6 rounded-lg relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <img
//               src={items[selectedCard].image}
//               alt={items[selectedCard].title}
//               className="w-full h-48 object-cover rounded"
//             />
//             <h3 className="text-2xl font-bold text-white mt-4">
//               {items[selectedCard].title}
//             </h3>
//             <p className="text-gray-300 text-sm mt-2">
//               {items[selectedCard].description}
//             </p>
//             <p className="text-gray-400 text-sm mt-4">
//               Funds Collected: ${items[selectedCard].fundsCollected}
//             </p>
//             <button
//               className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
//               onClick={() => setSelectedCard(null)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };



"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string;
    title: string;
    description: string;
    fundsCollected: number;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "25s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              className={cn(
                "w-[350px] bg-[#0b221d] rounded-lg flex-shrink-0 relative border border-slate-700 overflow-hidden transition-transform transform hover:scale-110 hover:[animation-play-state:paused]"
              )}
              key={idx}
              onClick={() => setSelectedCard(idx)}
              style={{
                background:
                  "linear-gradient(180deg, rgba(11, 34, 29, 0.9), rgba(11, 34, 29, 1))",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    Funds Collected: ${item.fundsCollected}
                  </span>

                  <button
          className={`px-6 py-1 text-sm rounded-lg font-semibold  bg-green-600 text-white `}
          
        >
         Check
        </button>
                  
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Popup Modal */}
      {selectedCard !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="w-96 bg-[#0b221d] p-6 rounded-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={items[selectedCard].image}
              alt={items[selectedCard].title}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-2xl font-bold text-white mt-4">
              {items[selectedCard].title}
            </h3>
            <p className="text-gray-300 text-sm mt-2">
              {items[selectedCard].description}
            </p>
            <p className="text-gray-400 text-sm mt-4">
              Funds Collected: ${items[selectedCard].fundsCollected}
            </p>
            <button
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
              onClick={() => setSelectedCard(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
