// import React, { useEffect, useRef, useState } from 'react'

// const images = [
//   'https://www.banarasee.in/cdn/shop/files/diwali_2_3800W_1300H_desktop_view_1.png?v=1759991798',
//   'https://www.banarasee.in/cdn/shop/files/opulence_redefined_3800_x_1300_px_30c239cd-3ef2-4c96-bfe6-1e4984a10672.jpg?v=1744272171',
//   'https://www.banarasee.in/cdn/shop/files/diwali_1_3800W_1300H_desktop_view.png?v=1759991906',
//   'https://www.banarasee.in/cdn/shop/files/Diwali_3_desktop_view_3800_x_1300_px.png?v=1760010776',
//   'https://www.banarasee.in/cdn/shop/files/Ameya-Banarasee-Website-Banner_1.jpg?v=1721026378'
// ]

// const Home = () => {
//   const [index, setIndex] = useState(0)
//   const timeoutRef = useRef(null)
//   const delay = 4000 // 4s

//   const resetTimeout = () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current)
//     }
//   }

//   useEffect(() => {
//     resetTimeout()
//     timeoutRef.current = setTimeout(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % images.length)
//     }, delay)

//     return () => {
//       resetTimeout()
//     }
//   }, [index])

//   const prev = () => {
//     setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
//   }

//   const next = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % images.length)
//   }

//   return (
//     <div className="w-full h-[70vh] relative overflow-hidden">
//       {/* Slides container */}
//       <div
//         className="whitespace-nowrap transition-transform duration-700 h-full"
//         style={{ transform: `translateX(${-index * 100}%)` }}
//       >
//         {images.map((src, i) => (
//           <div key={i} className="inline-block w-full h-full">
//             <img
//               src={src}
//               alt={`banner-${i}`}
//               className="w-fit h-full object-cover"
//               draggable={false}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Left / Right controls */}
//       <button
//         onClick={prev}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60"
//         aria-label="Previous"
//       >
//         ‹
//       </button>

//       <button
//         onClick={next}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60"
//         aria-label="Next"
//       >
//         ›
//       </button>

//       {/* Pagination dots (optional) */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-white bg-opacity-50'}`}
//             aria-label={`Go to slide ${i + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }


import React, { useEffect, useRef, useState } from 'react'

const images = [
  'https://www.banarasee.in/cdn/shop/files/diwali_2_3800W_1300H_desktop_view_1.png?v=1759991798',
  'https://www.banarasee.in/cdn/shop/files/opulence_redefined_3800_x_1300_px_30c239cd-3ef2-4c96-bfe6-1e4984a10672.jpg?v=1744272171',
  'https://www.banarasee.in/cdn/shop/files/diwali_1_3800W_1300H_desktop_view.png?v=1759991906',
  'https://www.banarasee.in/cdn/shop/files/Diwali_3_desktop_view_3800_x_1300_px.png?v=1760010776',
  'https://www.banarasee.in/cdn/shop/files/Ameya-Banarasee-Website-Banner_1.jpg?v=1721026378'
]

const Home = () => {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)
  const delay = 4000 // 4s

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, delay)

    return () => resetTimeout()
  }, [index])

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="w-full relative overflow-hidden">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(${-index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="shrink-0 w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
            <img
              src={src}
              alt={`banner-${i}`}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Left / Right controls */}
      <button
        onClick={prev}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full hover:bg-opacity-60 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center z-20"
        aria-label="Previous"
      >
        <span className="text-base sm:text-xl md:text-2xl">‹</span>
      </button>

      <button
        onClick={next}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full hover:bg-opacity-60 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center z-20"
        aria-label="Next"
      >
        <span className="text-base sm:text-xl md:text-2xl">›</span>
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full ${i === index ? 'bg-white' : 'bg-white bg-opacity-50'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
