"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { GrNext, GrPrevious } from "react-icons/gr";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000 })]
  );

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      title: "Explore Nature",
      subtitle: "Find peace in the mountains",
      buttonText: "Explore Now",
    },
    {
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      title: "City Life",
      subtitle: "Feel the energy of the city",
      buttonText: "Add your idea",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
      title: "Adventure",
      subtitle: "Start your journey today",
      buttonText: "Get Started",
    },
  ];

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="mt-15 relative overflow-hidden py-5 w-full mx-auto">
      {/* Carousel */}
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[400px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
                <h2 className="text-3xl font-bold">{slide.title}</h2>
                <p className="mt-2 text-lg">{slide.subtitle}</p>

                <button className="mt-4 px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 px-4 py-2 rounded-full shadow"
      >
        <GrPrevious />
      </button>

      {/* Next */}
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 px-4 py-2 rounded-full shadow"
      >
        <GrNext />
      </button>
    </div>
  );
}