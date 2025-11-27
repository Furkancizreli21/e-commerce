"use client";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";

const lookbookItems = [
  {
    id: 1,
    title: "Monochrome Street",
    category: "Streetwear",
    season: "Fall 2024",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop",
    size: "lg",
  },
  {
    id: 2,
    title: "Soft Neutrals",
    category: "Essentials",
    season: "All Season",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
    size: "md",
  },
  {
    id: 3,
    title: "Night Statement",
    category: "Evening",
    season: "Winter 2024",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop",
    size: "md",
  },
  {
    id: 4,
    title: "Relaxed Fit",
    category: "Casual",
    season: "Spring 2024",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
    size: "sm",
  },
  {
    id: 5,
    title: "Tailored Effortless",
    category: "Smart Casual",
    season: "All Season",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop",
    size: "lg",
  },
  {
    id: 6,
    title: "All-Black Edit",
    category: "Minimal",
    season: "Fall 2024",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop",
    size: "sm",
  },
];

export default function DarkLookbook() {
  return (
    <div className="bg-[#ece6e6] min-h-screen text-white overflow-x-hidden selection:bg-white selection:text-black">
      <div className="pt-32 pb-20 px-4 md:px-12 max-w-[1800px] mx-auto">
        {lookbookItems.map((item, index) => {
          const isLarge = item.size === "lg";
          const isEven = index % 2 === 0;

          return (
            <div
              key={item.id}
              className={`group relative flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32 md:mb-48 ${
                isLarge ? "md:flex-col !gap-8" : isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`relative w-full ${isLarge ? "h-[80vh]" : "md:w-1/2 h-[60vh] md:h-[80vh]"}`}>
                <div className="relative w-full h-full overflow-hidden bg-[#1a1a1a]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-1000 ease-out group-hover:scale-110 group-hover:contrast-125 opacity-80 group-hover:opacity-100"
                  />

                  <div className="absolute inset-0 border border-white/10 scale-95 group-hover:scale-100 transition-transform duration-700"></div>
                </div>

                <span className="absolute -top-12 -left-8 md:-left-16 text-[8rem] md:text-[12rem] font-bold text-white/5 font-sans leading-none select-none z-0">
                  0{index + 1}
                </span>
              </div>

              <div className={`relative z-10 flex flex-col ${isLarge ? "items-start w-full px-4" : "md:w-1/2 items-start"}`}>
                <div className="flex items-center gap-4 mb-6 border-b border-white/20 pb-4 w-full md:w-auto">
                  <span className="text-xs font-mono text-gray-400 uppercase">{item.season}</span>
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span className="text-xs font-mono text-white uppercase">{item.category}</span>
                </div>

                <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9] mb-8 uppercase text-transparent bg-clip-text bg-linear-to-br from-white to-gray-600">
                  {item.title}
                </h2>

                <div className="flex flex-col gap-6">
                  <p className="max-w-md text-gray-400 font-light leading-relaxed">
                    Bu görünüm, modern şehir hayatının dinamizmini yansıtır. Kumaş dokusu ve kesim detaylarıyla fark yaratır.
                  </p>

                  <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-gray-400 transition-colors group-hover:translate-x-4 duration-300">
                    Discover Look <ArrowDownRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
