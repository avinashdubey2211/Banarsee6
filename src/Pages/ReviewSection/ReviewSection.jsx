// import React, { useRef } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const reviews = [
//   {
//     name: "Vandana Bhatnagar",
//     title: "👌",
//     text: "A beautiful saree in every sense of color, work and quality",
//     img: "https://via.placeholder.com/300x300.png?text=Saree+1",
//   },
//   {
//     name: "Anna Kaur V.",
//     title: "Very happy customer as usual !!!!!!!",
//     text: "I look absolutely stunning in this saree!!! The colors and patterns complement my beauty.",
//     img: "https://via.placeholder.com/300x300.png?text=Saree+2",
//   },
//   {
//     name: "S. Banerjee",
//     title: "Yellow Floral Print Saree",
//     text: "Very nice saree.... Extremely satisfied",
//     img: "https://via.placeholder.com/300x300.png?text=Saree+3",
//   },
//   // Add 6 more cards
//   { name: "Customer 4", title: "Title 4", text: "Text 4", img: "https://via.placeholder.com/300x300.png?text=Saree+4" },
//   { name: "Customer 5", title: "Title 5", text: "Text 5", img: "https://via.placeholder.com/300x300.png?text=Saree+5" },
//   { name: "Customer 6", title: "Title 6", text: "Text 6", img: "https://via.placeholder.com/300x300.png?text=Saree+6" },
//   { name: "Customer 7", title: "Title 7", text: "Text 7", img: "https://via.placeholder.com/300x300.png?text=Saree+7" },
//   { name: "Customer 8", title: "Title 8", text: "Text 8", img: "https://via.placeholder.com/300x300.png?text=Saree+8" },
//   { name: "Customer 9", title: "Title 9", text: "Text 9", img: "https://via.placeholder.com/300x300.png?text=Saree+9" },
// ];

// const ReviewSection = () => {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const { scrollLeft, clientWidth } = scrollRef.current;
//       const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
//       scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h2 className="text-center text-xl font-semibold mb-2">
//         Weaving Praise - Here's Why They Love Us:
//       </h2>
//       <p className="text-center text-sm text-gray-500 mb-4">from 6076 reviews ✅</p>

//       <div className="relative">
//         <button
//           onClick={() => scroll("left")}
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
//         >
//           <FaChevronLeft />
//         </button>
//         <div
//           ref={scrollRef}
//           className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-6 overflow-x-auto scroll-smooth px-12"
//         >
//           {reviews.map((review, idx) => (
//             <div
//               key={idx}
//               className="bg-white shadow-md rounded-lg p-4 shrink-0"
//             >
//               <img
//                 src={review.img}
//                 alt={review.name}
//                 className="w-full h-48 object-cover rounded-md mb-4"
//               />
//               <div className="text-center">
//                 <div className="text-red-700 mb-1">★★★★★</div>
//                 <h3 className="font-semibold text-red-700">{review.name}</h3>
//                 <p className="text-sm text-gray-600 mt-1">{review.title}</p>
//                 <p className="text-gray-500 mt-2">{review.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={() => scroll("right")}
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
//         >
//           <FaChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ReviewSection;


import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const reviews = [
  { 
    name: "Vandana Bhatnagar", 
    title: "Elegant Pink Saree", 
    text: "The color and fabric of this saree are just perfect for festive occasions.", 
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0640_32dabf50-fbc4-4c56-b636-64f9f2fa595a_1066x.jpg?v=1760705900" 
  },
  { 
    name: "Anna Kaur V.", 
    title: "Vibrant Blue Designer Saree", 
    text: "Absolutely stunning! The design is exquisite and fits beautifully.", 
    img: "https://www.banarasee.in/cdn/shop/files/IMG_9129_e3e6ab11-177a-40cc-8b9e-3de5b1b0bc5a_1066x.jpg?v=1701344923" 
  },
  { 
    name: "S. Banerjee", 
    title: "Yellow Floral Print Saree", 
    text: "Loved the floral pattern! Very comfortable and elegant.", 
    img: "https://judgeme.imgix.net/banarasee/1738860647__1000295432__original.jpg" 
  },
  { 
    name: "Ritika Sharma", 
    title: "Classic Red Saree", 
    text: "The saree looks gorgeous and the quality is top-notch.", 
    img: "https://judgeme.imgix.net/banarasee/1705149857__img_20240113_180918_698__original.jpg" 
  },
  { 
    name: "Priya Mehta", 
    title: "Festive Green Saree", 
    text: "Absolutely love it! Perfect for family gatherings and functions.", 
    img: "https://judgeme.imgix.net/banarasee/1760783205__fe6e8691-3ffa-482e-b3b0-b4045abfed87__original.jpeg" 
  },
  { 
    name: "Anjali Verma", 
    title: "Elegant Banner Saree", 
    text: "Beautifully crafted saree with a luxurious feel.", 
    img: "https://www.banarasee.in/cdn/shop/files/Ameya-Banarasee-Mobile-Website-Banner_1.jpg?v=1721026399" 
  },
  { 
    name: "Sonia Kapoor", 
    title: "Designer Pink & Gold Saree", 
    text: "The intricate design makes it perfect for special occasions.", 
    img: "https://www.banarasee.in/cdn/shop/files/IMG_9799_1066x.jpg?v=1706356648" 
  },
  { 
    name: "Meera Jain", 
    title: "Casual Elegant Saree", 
    text: "Comfortable, stylish, and perfect for daily wear.", 
    img: "https://www.banarasee.in/cdn/shop/files/IMG_1949_600x.jpg?v=1688795223" 
  },
  { 
    name: "Divya Nair", 
    title: "Traditional White Saree", 
    text: "Loved the simplicity and elegance. Perfect for traditional events.", 
    img: "https://www.banarasee.in/cdn/shop/files/IMG_2014_600x.jpg?v=1688790104" 
  },
];


const ReviewSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-center text-xl font-semibold mb-2">
        Weaving Praise - Here's Why They Love Us:
      </h2>
      <p className="text-center text-sm text-gray-500 mb-4">from 6076 reviews ✅</p>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaChevronLeft />
        </button>

        {/* Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-4"
        >
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="shrink-0 w-[calc(100%-2rem)] sm:w-[70%] md:w-[51%] lg:w-[33%] bg-white shadow-md rounded-lg p-4"
            >
              <img
                src={review.img}
                alt={review.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <div className="text-center">
                <div className="text-red-700 mb-1">★★★★★</div>
                <h3 className="font-semibold text-red-700">{review.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{review.title}</p>
                <p className="text-gray-500 mt-2">{review.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
