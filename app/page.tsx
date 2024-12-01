import CampaignList from "@/components/CampaignList";
import Footer from "@/components/Footer";
import { FundingComponent } from "@/components/FundingComponent";
import { ImagesSliderDemo } from "@/components/ImagesSlider";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
import { Introduction } from "@/components/Introduction";
import { Navbar } from "@/components/Navbar";
import { RatingSection } from "@/components/RatingSection";
import SuccessStoryCard from "@/components/SuccessStoryCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* <Navbar /> */}

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden">
          <ImagesSliderDemo />
        </section>

        {/* Introduction Section with Left Side Background Image */}

        {/* <section className="p-8 w-full relative bg-gradient-to-r from-[#ffffff] via-[#d2e9e3c3] to-[#c7e6dfa3]">
 */}
        <section className="p-8  w-full relative">
          <div className="absolute left-0 top-35 w-[34%] h-full bg-cover bg-no-repeat bg-[url('/image8.png')] opacity-12"></div>
          
          
          <div className="relative z-10">
            <Introduction />
           
          </div>
          {/* <div className="absolute right-0 top-5 w-[36%] h-full bg-cover bg-no-repeat bg-[url('/image13.jpg')] opacity-12"></div>
         */}
        </section>

        {/* Rating Section with Left Side Background Image */}
        <section className="p-8 w-full relative">
       
           <div className="relative z-10">
           <RatingSection />
          </div>
        </section>

        {/* Additional Content Section */}
        <section className="p-2 bg-white">
          <InfiniteMovingCardsDemo />
        </section>


        <section className="p-11 w-full relative">
       
       <div className="relative mt-10 z-10">
       <CampaignList />
    
      </div>
    </section>

       
        <section className="p-8 w-full relative">
        
       <div className="relative mt-5 z-10">
       <FundingComponent />
      </div>
    </section>
       

    <section className="p-8 w-full relative">
       
       <div className="relative z-10">
       <SuccessStoryCard />
      </div>
    </section>
    
      </main>

      <footer className="bg-[#0b221d] mt-10 text-white p-4 text-center">
      <Footer />
      </footer>
    </div>
  );
}









//Scrolleble



// import { ImagesSliderDemo } from "@/components/ImagesSlider";
// import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
// import { Introduction } from "@/components/Introduction";
// import { Navbar } from "@/components/Navbar";
// import { RatingSection } from "@/components/RatingSection";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="relative min-h-screen flex flex-col">
//       <Navbar />

//       <main className="flex-grow">
//         {/* Main Content */}
//         <section className="relative w-full overflow-hidden">
//           {/* Hero Section */}
//           <ImagesSliderDemo />
//         </section>

//         <section className="relative w-full overflow-hidden">
//         <div >
//           <Introduction />
//           <RatingSection />
//           </div>
//         </section>
//         {/* Parallax Section */}
//         <section className="relative w-full overflow-hidden">
//           <div className="parallax-wrapper">
            
//             {/* Content inside Parallax Section */}
//             <div className="content-scrollable">
//               <h2 className="text-2xl font-bold font-serif mb-2 md:text-5xl text-center text-[#0b221d]">
//                 Our Successful Campaigns
//               </h2>
//               <InfiniteMovingCardsDemo />
//             </div>
//           </div>
//         </section>

      
//       </main>

//       <footer className="bg-gray-800 text-white p-4 text-center">
//         {/* Footer Section */}
//         {/* <Footer /> */}
//       </footer>
//     </div>
//   );
// }
