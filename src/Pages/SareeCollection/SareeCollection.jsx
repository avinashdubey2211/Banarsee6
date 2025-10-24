// import React from "react";

// const SareeCollection = () => {
//   const collections = [
//     {
//       img: "https://www.banarasee.in/cdn/shop/files/IMG_9823.jpg?v=1706334567",
//       title: "Organza Sarees",
//     },
//     {
//       img: "https://www.banarasee.in/cdn/shop/files/IMG_9799.jpg?v=1706356648",
//       title: "Chiffon Sarees",
//     },
//     {
//       img: "https://www.banarasee.in/cdn/shop/files/IMG_2432_d6efdde1-33c7-4cc8-8225-244919713e6a_1400x.jpg?v=1706187584",
//       title: "Scallop Border Sarees",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 w-full">
//       {collections.map((item, index) => (
//         <div key={index} className="relative w-full h-[520px] gap-3">
//           <img
//             src={item.img}
//             alt={item.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute bottom-6 left-0 right-0 text-center text-white">
//             <p className="text-xl font-semibold">{item.title}</p>
//             <button className="mt-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
//               View Collection
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SareeCollection;


import React from "react";

const SareeCollection = () => {
  const collections = [
    {
      img: "https://www.banarasee.in/cdn/shop/files/IMG_9823.jpg?v=1706334567",
      title: "Organza Sarees",
    },
    {
      img: "https://www.banarasee.in/cdn/shop/files/IMG_9799.jpg?v=1706356648",
      title: "Chiffon Sarees",
    },
    {
      img: "https://www.banarasee.in/cdn/shop/files/IMG_2432_d6efdde1-33c7-4cc8-8225-244919713e6a_1400x.jpg?v=1706187584",
      title: "Scallop Border Sarees",
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

          {/* Overlay for better readability */}
          <div className="absolute inset-0  bg-opacity-25 hover:bg-opacity-40 transition duration-300"></div>

          {/* Text + Button */}
          <div className="absolute bottom-6 left-0 right-0 text-center text-white">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold">
              {item.title}
            </p>
            <button className="mt-2 bg-white text-black px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-medium hover:bg-gray-200 transition">
              View Collection
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SareeCollection;
