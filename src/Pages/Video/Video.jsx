import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const shorts = [
  { id: "gFNW7rPCjcI", title: "Short 1" },
  { id: "0h_3S9PoSdQ", title: "Short 2" },
  { id: "gffvB1nDCmU", title: "Short 3" },
  { id: "RrFEeY5Tbks", title: "Short 4" },
  { id: "-LDH-o52_Do", title: "Short 5" },
  { id: "7g1EIeHXDpg", title: "Short 6" },
  { id: "eloyeq9SUrc", title: "Short 7" },
  { id: "eTO4zjbsGAo", title: "Short 8" },
  { id: "Ex2QNCH7Ow4", title: "Short 9" },
];

export default function Video() {
  const containerRef = useRef(null);

  const scrollBy = (direction = "right") => {
    const el = containerRef.current;
    if (!el) return;
    const amount = Math.floor(el.clientWidth * 0.8);
    const to =
      direction === "right" ? el.scrollLeft + amount : el.scrollLeft - amount;
    el.scrollTo({ left: to, behavior: "smooth" });
  };

  return (
    <div className="w-full relative py-4">
      <h2 className="text-lg  px-6 font-semibold mb-3">My Shorts</h2>

      {/* Scroll buttons */}
      <button
        onClick={() => scrollBy("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:scale-110 transition"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => scrollBy("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:scale-110 transition"
      >
        <FaChevronRight />
      </button>

      {/* One-line horizontal scroll container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-smooth gap-4 px-10 hide-scrollbar"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {shorts.map((s) => {
          const thumb = `https://i.ytimg.com/vi/${s.id}/mqdefault.jpg`;
          const url = `https://www.youtube.com/shorts/${s.id}`;
          return (
            <a
              key={s.id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-full sm:w-[80%] md:w-[33%] lg:w-[20%] rounded-lg overflow-hidden shadow-md bg-gray-50 hover:scale-[1.02] transform transition"
            >
              <div className="relative w-full h-52">
                <img
                  src={thumb}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                  ▶ Shorts
                </div>
              </div>
              <div className="p-2">
                <h3 className="text-sm font-medium truncate">{s.title}</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Tap to open on YouTube
                </p>
              </div>
            </a>
          );
        })}
      </div>

      <style>{`
        /* Hide scrollbar visually */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
