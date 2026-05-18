"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000 })]
  );

  const slides = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  ];

  // Previous Slide
  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  // Next Slide
  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
      
      {/* Carousel */}
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full">
               
              <img
                src={slide}
                alt="slide"
                className="w-full h-[400px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 px-4 py-2 rounded-full shadow"
      >
        ◀
      </button>

      {/* Next Button */}
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 px-4 py-2 rounded-full shadow"
      >
        ▶
      </button>
    </div>
  );
}