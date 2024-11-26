
'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
      <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>
    );
  }
  const testimonials = [
    {
      image: "/image1.jpeg",
      title: "Hospital Construction",
      description: "Help us build a modern hospital to provide free medical services to the underprivileged.",
      fundsCollected: 250000,
    },
    {
      image: "/image2.jpg",
      title: "School Building Fund",
      description: "Contribute to the construction of a school in rural areas to educate future generations.",
      fundsCollected: 180000,
    },
    {
      image: "/image3.jpg",
      title: "Madrasah Development",
      description: "Support the renovation of a madrasah to enhance Islamic education facilities.",
      fundsCollected: 120000,
    },
    {
      image: "/image4.jpeg",
      title: "Water Wells for Villages",
      description: "Donate to dig water wells in drought-stricken regions to provide clean drinking water.",
      fundsCollected: 95000,
    },
    {
      image: "/image5.avif",
      title: "Disaster Relief Fund",
      description: "Join hands to support victims of natural disasters with shelter, food, and medical aid.",
      fundsCollected: 300000,
    },
    {
      image: "/image6.avif",
      title: "Orphanage Support Program",
      description: "Help us provide a safe home, education, and care for orphans.",
      fundsCollected: 200000,
    },
  ];
  