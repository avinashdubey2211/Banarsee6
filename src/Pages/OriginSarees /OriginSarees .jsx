import React from "react";

const OriginSarees = () => {
  const collections = [
    {
      img: "https://www.banarasee.in/cdn/shop/files/IMG_9823.jpg?v=1706334567",
      title: "Cotton Silk Dress Material",
    },
    {
      img: "https://www.banarasee.in/cdn/shop/files/IMG_9129_e3e6ab11-177a-40cc-8b9e-3de5b1b0bc5a_360x.jpg?v=1701344923",
      title: "Chanderi Dress Material",
    },
    {
      img: "https://www.banarasee.in/cdn/shop/files/IMG_8618_360x.jpg?v=1697089636",
      title: "Katan Silk Dress Material",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 px-4 py-6">
      {collections.map((item, index) => (
        <div
          key={index}
          className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[520px] overflow-hidden rounded-2xl"
        >
          {/* Image */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-opacity-25 hover:bg-opacity-40 transition duration-300"></div>

          {/* Text + Button */}
          <div className="absolute bottom-6 left-0 right-0 text-center text-white">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold">
              {item.title}
            </p>
            <button className="mt-2 bg-white text-black px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-medium hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OriginSarees;
