
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; 

// import { FaFacebookF, FaPinterestP, FaInstagram, FaYoutube } from "react-icons/fa";
// import { BsWhatsapp } from "react-icons/bs";


// import { FaStar } from "react-icons/fa";

// const Card_Detail = () => {
//             const navigate = useNavigate(); 


// const products = [
//   {
//     name: "Banarasee Handloom Cotton Silk Kota Checks Saree With Silver Zari Border Purple",
//     price: "₹6,499",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0375_268b1628-7b38-42a3-80e7-804ede94bf35.jpg?v=1761210385",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0383_20567bc3-bbe9-4bef-90a5-1d670be3109c.jpg?v=1761210385",
//   },
//   {
//     name: "Banarasee Handwoven Cotton Silk Saree With Buti Design Contrast Pallu Black Maroon",
//     price: "₹7,499",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
//   },
//   {
//     name: "Banarasee Handloom Plain Cotton Silk Saree With Contrast Border Navy Blue Red",
//     price: "₹5,499",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0205_01970e66-844b-4a83-ae4d-31f58252c343.jpg?v=1760505969",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0212_e9287bb3-646d-49d9-947c-c2c2f9d48e9d.jpg?v=1760505986",
//   },
//   {
//     name: "Banarasee Cotton Silk Saree With Gold Zari Border Contrast Pallu Burgundy Green",
//     price: "₹8,499",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0060_5c5418c6-6769-45e5-a5a1-ee6c92e89142.jpg?v=1761120501",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0066_efaa51ca-d764-4fff-881d-6381833f1e13.jpg?v=1761120501",
//   },



  
// ];



// const product = [
//   {
//     name: "Hanarasee Handloom satin hand dyed saree with mirror work blush pink yellow",
//         price: "₹6,499",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0580_c1c2a33b-2e91-432a-97a4-b457ec4688bd.jpg?v=1760868877",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0591_f644f953-084c-408d-a7e4-cf0b91defbbc.jpg?v=1760868877",
//   },
//   {
//     name: "Banarasee Handloom Satin Hand dyed Saree With-mirror work yellow (dual-tone)",
//         price: "₹7,499",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0615_bdaa58d1-3038-473b-8cfa-334edf62844d.jpg?v=1760868369",
//   },
//   {
//     name: "Banarasee Handloom Satin Hand Dyed Saree With Mirror Work Light Yellow Light Blue",
//         price: "₹9,499",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0596_f470a765-82f3-43e3-adda-1690f82d629d.jpg?v=1760866225",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0599_e9d5bae7-b68c-4285-a5e4-e096dc815db1.jpg?v=1760866225",
//   },
//   {
//     name: "Banarasee Handloom Satin Hand Dyed Saree With Mirror Work Light Yellow Light Pink",
//         price: "₹13,499",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
//     hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
//   },
//   {
//     name: "Banarasee Handloom Semi Dupion Saree With Zari Buta Work contrast border Blush Pinkdual Tone",
//         price: "₹9,499",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0681_b84fdaf7-8e0c-49de-a48e-ee7dfbf380f8_940x.jpg?v=1760851709",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0692_2e4032cc-c4b7-4bf0-adfe-d309a49febb0_940x.jpg?v=1760852413",
//   },
//   {
//     name: "Banarasee Handwoven Plain Tissue Saree With Zari Border Salmon Pink",
//         price: "₹17,499",
//     img: "https://www.banarasee.in/cdn/shop/files/IMG_0524_7e1fc66d-0b70-49f1-a2d4-c82bbf3f5399_1066x.jpg?v=1760849803",
//     hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0530_7698102e-0610-484d-81a9-40b682649243_1066x.jpg?v=1760849803",
//   },
// ];

//   const thumbnails = [
//     "https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
//     "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
//     "https://www.banarasee.in/cdn/shop/files/IMG_0587_8bd705b4-0547-46c0-8c0e-1020a86f48da.jpg?v=1760868877",
//     "https://www.banarasee.in/cdn/shop/files/IMG_0580_c1c2a33b-2e91-432a-97a4-b457ec4688bd.jpg?v=1760868877",
//     "https://www.banarasee.in/cdn/shop/files/IMG_0589_858a6ea7-b904-4cfa-9f8b-5c69b5b91a95.jpg?v=1760868877",
//     "https://www.banarasee.in/cdn/shop/files/IMG_0669_ae0da0cb-9d3d-4090-bece-6684748eba86.jpg?v=1760704707",
//     "https://www.banarasee.in/cdn/shop/files/IMG_5557.jpg?v=1756455721",
//     "https://www.banarasee.in/cdn/shop/files/IMG_0732_d13da717-43b2-4bd0-a99e-c087f1716633.jpg?v=1760850813",
//     "https://judgeme.imgix.net/banarasee/1760210488__1760210458085-_25a6682__original.jpeg",
//     "https://www.banarasee.in/cdn/shop/files/IMG_0741_5680a901-924f-4807-adf5-6fa0a179ae12.jpg?v=1760850813",
//   ];

//   const [mainImage, setMainImage] = useState(thumbnails[0]);
//   const [color, setColor] = useState("Blush Pink & Yellow");
//   const [size, setSize] = useState("Saree:length 6.3M (including blouse piece)");
//   const [material, setMaterial] = useState("Satin");
//   const [customizations, setCustomizations] = useState({
//     fallAndPico: false,
//     cottonInskirt: false,
//     basicBlouse: false,
//     prePleated: false,
//     satinInskirt: false,
//     designerBlouse: false,
//   });

//   const [accordionOpen, setAccordionOpen] = useState({
//     productDetails: false,
//     returnPolicy: false,
//     additionalInfo: false,
//   });

//   function toggleCustomization(key) {
//     setCustomizations((s) => ({ ...s, [key]: !s[key] }));
//   }

//   function toggleAccordion(key) {
//     setAccordionOpen((s) => ({ ...s, [key]: !s[key] }));
//   }

//   return (
//     <>
//     <div className="min-h-screen bg-white text-gray-900 p-4 md:p-8">
//       {/* ✅ GRID ADJUSTS ONLY ON LARGE SCREENS */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
//         {/* LEFT SECTION */}
//         <div className="flex lg:flex-row flex-col-reverse items-center lg:items-start sticky top-4 self-start gap-4">
//           {/* Thumbnails */}
//           <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto w-full lg:w-28 justify-start lg:justify-start">
//             {thumbnails.map((t, i) => (
//               <button
//                 key={i}
//                 onClick={() => setMainImage(t)}
//                 className={`flex-none w-16 h-16 lg:h-17 lg:w-16 sm:w-24 sm:h-28 border rounded overflow-hidden transition-all duration-300 ${
//                   mainImage === t ? "ring-2 ring-orange-500 scale-105" : ""
//                 }`}
//               >
//                 <img
//                   src={t}
//                   alt={`thumb-${i}`}
//                   className="object-cover w-full h-full"
//                 />
//               </button>
//             ))}
//           </div>

//           {/* Main Image */}
//           <div className="relative bg-gray-50 rounded shadow-sm overflow-hidden w-full">
//             <img
//               src={mainImage}
//               alt="main"
//               className="w-full h-[60vh] sm:h-[70vh] lg:h-[120vh] object-cover rounded"
//             />
//             <div className="absolute left-3 bottom-3 bg-white/80 text-xs sm:text-sm rounded-full px-3 py-1 shadow-md">
//               Click image to open expanded view
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="flex flex-col gap-4 mt-6 lg:mt-0 overflow-auto">
//           <h1 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold">
//             Banarasee Handloom Satin Hand Dyed Saree With Mirror Work - Blush Pink & Yellow
//           </h1>
//           <div className="text-sm text-gray-500">SKU: BAAP3419</div>
//           <div className="text-2xl font-bold mt-2">₹ 2,499.00</div>
//           <div className="text-xs text-gray-400">MRP Inclusive of all taxes</div>

//           {/* OPTIONS */}
//           <div className="mt-4 space-y-4">
//             <SelectOption label="Color" value={color} setValue={setColor} options={["Blush Pink & Yellow", "Peach & Cream", "Gold & Maroon"]} />
//             <SelectOption label="Size" value={size} setValue={setSize} options={["Saree:length 6.3M (including blouse piece)", "Custom Stitching Available", "Child Size"]} />
//             <SelectOption label="Material" value={material} setValue={setMaterial} options={["Satin", "Silk", "Cotton"]} />
//           </div>

//           {/* Quick Info */}
//           <div className="mt-3 flex flex-wrap gap-3 items-center">
//             <QuickInfo iconLabel="Color" value={color} />
//             <QuickInfo iconLabel="Size" value={size} />
//             <QuickInfo iconLabel="Material" value={material} />
//           </div>

//           {/* Customization */}
//           <div className="mt-4 border-t pt-4">
//             <div className="text-sm font-medium mb-2">
//               Customization Options (Only Available for Prepaid Orders)
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//               {Object.keys(customizations).map((key) => (
//                 <label key={key} className="flex items-center gap-2 text-sm">
//                   <input
//                     type="checkbox"
//                     checked={customizations[key]}
//                     onChange={() => toggleCustomization(key)}
//                   />
//                   {key.replace(/([A-Z])/g, " $1").trim()}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="mt-4 flex flex-col sm:flex-row gap-3">
//             <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded font-medium">
//               Add to Cart
//             </button>
//             <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded font-medium">
//               Buy It Now
//             </button>
//             <button className="flex-none border px-4 py-3 rounded flex items-center gap-2">
//               ❤️ Add to Wishlist
//             </button>
//           </div>

//           {/* Accordions */}
//           <div className="mt-4 space-y-2">
//             <Accordion
//               title="Product Details"
//               open={accordionOpen.productDetails}
//               onToggle={() => toggleAccordion("productDetails")}
//             >
//               <p className="text-sm text-gray-700">
//                 This saree is handloom satin, hand-dyed with mirror work.
//                 Length: 6.3M including blouse piece. Care: Dry clean only.
//               </p>
//             </Accordion>

//             <Accordion
//               title="Return Policy"
//               open={accordionOpen.returnPolicy}
//               onToggle={() => toggleAccordion("returnPolicy")}
//             >
//               <p className="text-sm text-gray-700">
//                 Returns accepted within 7 days in original condition.
//                 Customizations are non-refundable.
//               </p>
//             </Accordion>

//             <Accordion
//               title="Additional Information"
//               open={accordionOpen.additionalInfo}
//               onToggle={() => toggleAccordion("additionalInfo")}
//             >
//               <p className="text-sm text-gray-700">
//                 Dispatch within 2-4 business days. Free shipping on orders above ₹499.
//               </p>
//             </Accordion>
//           </div>

          
//         </div>
        
//       </div>
//     </div>
//     {/* ✅ Customer Review Section */}
//           <div className="mt-8 flex flex-col items-center justify-center text-center">
//             <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
//               Customer Review
//             </h2>

//             <div className="flex justify-center space-x-2 mb-3">
//               {[...Array(5)].map((_, i) => (
//                 <FaStar key={i} className="text-red-500 text-2xl sm:text-3xl" />
//               ))}
//             </div>

//             <p className="text-gray-600 text-base sm:text-lg">
//               Be the first to write a review
//             </p>
//           </div>



//           {/* You May Also Like */}

//            <div className="w-full px-4 sm:px-6 md:px-8 py-12 bg-gray-50">
//       {/* Title */}
//       <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 py-6 sm:mb-4">
//         You May Also Like
//       </h1>

      

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product, idx) => (
//           <div key={idx} className="group cursor-pointer">
//             <div className="relative w-full overflow-hidden rounded-lg">
//               <img
//                 src={product.img}
//                 alt={product.name}
//                 className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <img
//                 src={product.hoverImg}
//                 alt={`${product.name}-hover`}
//                 className="absolute top-0 left-0 w-full h-[350px] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//               />
//             </div>

          
           

//             {/* Brand Name */}
//             <p className="text-gray-700 text-xs mt-2">Banarasee</p>

//             {/* Product Info */}
//             <div className="text-start mt-1">
//               <p className="font-medium text-gray-900 text-sm sm:text-base">
//                 {product.name}
//               </p>

//               {/* Price */}
//               <p className="text-gray-700 font-semibold py-2 text-sm sm:text-base">
//                 {product.price}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

     
//     </div>


//   {/* check  the Best Seller  */}
//      <div className="w-full px-4 sm:px-6 md:px-8 py-12 bg-gray-50">
//       {/* Title */}
//       <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 py-6 sm:mb-4">
// check  the Best Seller 
//       </h1>

      

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {product.map((p, idx) => (
//           <div key={idx} className="group cursor-pointer">
//             <div className="relative w-full overflow-hidden rounded-lg">
//               <img
//                 src={p.img}
//                 alt={p.name}
//                 className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <img
//                 src={p.hoverImg}
//                 alt={`${p.name}-hover`}
//                 className="absolute top-0 left-0 w-full h-[30px] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//               />
//             </div>

          
           

//             {/* Brand Name */}
//             <p className="text-gray-700 text-xs mt-2">Banarasee</p>

//             {/* p Info */}
//             <div className="text-start mt-1">
//               <p className="font-medium text-gray-900 text-sm sm:text-base">
//                 {p.name}
//               </p>

//               {/* Price */}
//               <p className="text-gray-700 font-semibold py-2 text-sm sm:text-base">
//                 {p.price}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View All Button */}
//       <div className="flex justify-center mt-8 sm:mt-10">
//         <button 
//                  onClick={() => navigate("/productspage")} 

//         className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition text-sm sm:text-base">
//           View All
//         </button>
//       </div>
//     </div>

//     {/* fooder */}
//      <footer className="bg-[#5B0A0A] text-white py-10 px-4 sm:px-6 md:px-12">
//           <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//             {/* About Banarasee */}
//             <div>
//               <h3 className="text-lg font-semibold mb-3">ABOUT BANARASEE</h3>
//               <p className="text-sm sm:text-base leading-relaxed">
//                 Banarasee is an online destination for exquisite sarees, stitched kurtas & suit sets, dress materials, dupattas, lehengas and fabric. Our brand is rooted in the rich heritage of Banaras (Varanasi), a city that is renowned for its intricate weaving techniques and handcrafted textiles.
//               </p>
//               <div className="flex gap-3 mt-3 text-white text-sm">
//                 <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
//                 <FaPinterestP className="hover:text-gray-300 cursor-pointer" />
//                 <FaInstagram className="hover:text-gray-300 cursor-pointer" />
//                 <FaYoutube className="hover:text-gray-300 cursor-pointer" />
//               </div>
//             </div>
    
//             {/* Shop */}
//             <div>
//               <h3 className="text-lg font-semibold mb-3">SHOP</h3>
//               <ul className="text-sm sm:text-base space-y-1">
//                 <li className="hover:text-gray-300 cursor-pointer">Sarees</li>
//                 <li className="hover:text-gray-300 cursor-pointer">Kurtas & Suit Sets</li>
//                 <li className="hover:text-gray-300 cursor-pointer">Dress Materials</li>
//                 <li className="hover:text-gray-300 cursor-pointer">Lehengas</li>
//                 <li className="hover:text-gray-300 cursor-pointer">Dupattas</li>
//                 <li className="hover:text-gray-300 cursor-pointer">Fabrics</li>
//                 <li className="hover:text-gray-300 cursor-pointer">Blouses</li>
//                 <li className="hover:text-gray-300 cursor-pointer">Sale</li>
//               </ul>
//             </div>
    
//             {/* Quick Links */}
//             <div>
//               <h3 className="text-lg font-semibold mb-3">QUICK LINKS</h3>
//               <ul className="text-sm sm:text-base space-y-1">
//                 <li className="hover:text-gray-300 cursor-pointer">Search</li>
//                 <li className="hover:text-gray-300 cursor-pointer">About Us</li>
//                 <li className="hover:text-gray-300 cursor-pointer">Blog</li>
//                 <li className="hover:text-gray-300 cursor-pointer">Return Policies</li>
//                 <li className="hover:text-gray-300 cursor-pointer">Privacy Policy</li>
//                 <li className="hover:text-gray-300 cursor-pointer">Shipping</li>
//                 <li className="hover:text-gray-300 cursor-pointer">Disclaimer</li>
//                 <li className="hover:text-gray-300 cursor-pointer">Terms & Conditions</li>
//                 <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
//                 <li className="hover:text-gray-300 cursor-pointer">Bulk Enquiry</li>
//               </ul>
//             </div>
    
//             {/* Contact Us */}
//             <div>
//               <h3 className="text-lg font-semibold mb-3">CONTACT US</h3>
//               <p className="text-sm sm:text-base"><span className="font-semibold">EMAIL:</span> buyatbanarasee@gmail.com</p>
//               <p className="text-sm sm:text-base mt-1"><span className="font-semibold">PHONE:</span> +91 77550 01985</p>
//               <p className="text-sm sm:text-base mt-3 font-semibold">REGISTERED ADDRESS</p>
//               <p className="text-sm sm:text-base">D 58/30 Sigra</p>
//               <p className="text-sm sm:text-base">Varanasi</p>
//               <p className="text-sm sm:text-base">221010</p>
//             </div>
//           </div>
    
//           {/* Bottom copyright */}
//           <div className="text-center text-xs sm:text-sm mt-8 text-gray-300">
//             © 2025, Banarasee <span className="hover:text-white cursor-pointer">Powered by Shopify</span>
//           </div>
    
//           {/* WhatsApp floating button */}
//           <a
//             href="https://wa.me/917755001985"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
//           >
//             <BsWhatsapp size={24} />
//           </a>
//         </footer>
//     </>
//   );
// };

// // Reusable Components
// const SelectOption = ({ label, value, setValue, options }) => (
//   <div>
//     <label className="block text-sm font-medium mb-1">{label}</label>
//     <select
//       className="w-full border p-3 rounded"
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//     >
//       {options.map((opt, i) => (
//         <option key={i}>{opt}</option>
//       ))}
//     </select>
//   </div>
// );

// const QuickInfo = ({ iconLabel, value }) => (
//   <button className="flex items-center gap-3 px-3 py-2 border rounded hover:shadow-sm">
//     <div className="w-9 h-9 bg-gray-100 rounded flex items-center justify-center text-sm font-medium">
//       {iconLabel[0]}
//     </div>
//     <div className="text-left">
//       <div className="text-xs text-gray-500">{iconLabel}</div>
//       <div className="text-sm font-medium">{value}</div>
//     </div>
//   </button>
// );

// const Accordion = ({ title, children, open, onToggle }) => (
//   <div className="border rounded">
//     <button
//       onClick={onToggle}
//       className="w-full flex items-center justify-between px-4 py-3"
//     >
//       <div className="text-sm font-medium">{title}</div>
//       <div className="text-sm">{open ? "−" : "+"}</div>
//     </button>
//     <div className={`px-4 pb-4 transition-all ${open ? "block" : "hidden"}`}>
//       {children}
//     </div>
//   </div>
// );

// export default Card_Detail;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

import { FaFacebookF, FaPinterestP, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";


import { FaStar } from "react-icons/fa";

const Card_Detail = () => {
            const navigate = useNavigate(); 


const products = [
  {
    name: "Banarasee Handloom Cotton Silk Kota Checks Saree With Silver Zari Border Purple",
    price: "₹6,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0375_268b1628-7b38-42a3-80e7-804ede94bf35.jpg?v=1761210385",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0383_20567bc3-bbe9-4bef-90a5-1d670be3109c.jpg?v=1761210385",
  },
  {
    name: "Banarasee Handwoven Cotton Silk Saree With Buti Design Contrast Pallu Black Maroon",
    price: "₹7,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
  },
  {
    name: "Banarasee Handloom Plain Cotton Silk Saree With Contrast Border Navy Blue Red",
    price: "₹5,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0205_01970e66-844b-4a83-ae4d-31f58252c343.jpg?v=1760505969",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0212_e9287bb3-646d-49d9-947c-c2c2f9d48e9d.jpg?v=1760505986",
  },
  {
    name: "Banarasee Cotton Silk Saree With Gold Zari Border Contrast Pallu Burgundy Green",
    price: "₹8,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0060_5c5418c6-6769-45e5-a5a1-ee6c92e89142.jpg?v=1761120501",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0066_efaa51ca-d764-4fff-881d-6381833f1e13.jpg?v=1761120501",
  },



  
];



const product = [
  {
    name: "Hanarasee Handloom satin hand dyed saree with mirror work blush pink yellow",
        price: "₹6,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0580_c1c2a33b-2e91-432a-97a4-b457ec4688bd.jpg?v=1760868877",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0591_f644f953-084c-408d-a7e4-cf0b91defbbc.jpg?v=1760868877",
  },
  {
    name: "Banarasee Handloom Satin Hand dyed Saree With-mirror work yellow (dual-tone)",
        price: "₹7,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0615_bdaa58d1-3038-473b-8cfa-334edf62844d.jpg?v=1760868369",
  },
  {
    name: "Banarasee Handloom Satin Hand Dyed Saree With Mirror Work Light Yellow Light Blue",
        price: "₹9,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0596_f470a765-82f3-43e3-adda-1690f82d629d.jpg?v=1760866225",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0599_e9d5bae7-b68c-4285-a5e4-e096dc815db1.jpg?v=1760866225",
  },
  {
    name: "Banarasee Handloom Satin Hand Dyed Saree With Mirror Work Light Yellow Light Pink",
        price: "₹13,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
    hoverImg:"https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
  },
  {
    name: "Banarasee Handloom Semi Dupion Saree With Zari Buta Work contrast border Blush Pinkdual Tone",
        price: "₹9,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0681_b84fdaf7-8e0c-49de-a48e-ee7dfbf380f8_940x.jpg?v=1760851709",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0692_2e4032cc-c4b7-4bf0-adfe-d309a49febb0_940x.jpg?v=1760852413",
  },
  {
    name: "Banarasee Handwoven Plain Tissue Saree With Zari Border Salmon Pink",
        price: "₹17,499",
    img: "https://www.banarasee.in/cdn/shop/files/IMG_0524_7e1fc66d-0b70-49f1-a2d4-c82bbf3f5399_1066x.jpg?v=1760849803",
    hoverImg: "https://www.banarasee.in/cdn/shop/files/IMG_0530_7698102e-0610-484d-81a9-40b682649243_1066x.jpg?v=1760849803",
  },
];

  const thumbnails = [
    "https://www.banarasee.in/cdn/shop/files/IMG_0629_83518389-1da8-4d08-925e-3c019e0c7a82.jpg?v=1760864807",
    "https://www.banarasee.in/cdn/shop/files/IMG_0624_5f791440-d158-430f-bffd-3a421fee8c19.jpg?v=1760864807",
    "https://www.banarasee.in/cdn/shop/files/IMG_0587_8bd705b4-0547-46c0-8c0e-1020a86f48da.jpg?v=1760868877",
    "https://www.banarasee.in/cdn/shop/files/IMG_0580_c1c2a33b-2e91-432a-97a4-b457ec4688bd.jpg?v=1760868877",
    "https://www.banarasee.in/cdn/shop/files/IMG_0589_858a6ea7-b904-4cfa-9f8b-5c69b5b91a95.jpg?v=1760868877",
    "https://www.banarasee.in/cdn/shop/files/IMG_0669_ae0da0cb-9d3d-4090-bece-6684748eba86.jpg?v=1760704707",
    "https://www.banarasee.in/cdn/shop/files/IMG_5557.jpg?v=1756455721",
    "https://www.banarasee.in/cdn/shop/files/IMG_0732_d13da717-43b2-4bd0-a99e-c087f1716633.jpg?v=1760850813",
    "https://judgeme.imgix.net/banarasee/1760210488__1760210458085-_25a6682__original.jpeg",
    "https://www.banarasee.in/cdn/shop/files/IMG_0741_5680a901-924f-4807-adf5-6fa0a179ae12.jpg?v=1760850813",
  ];

  const [mainImage, setMainImage] = useState(thumbnails[0]);
  const [color, setColor] = useState("Blush Pink & Yellow");
  const [size, setSize] = useState("Saree:length 6.3M (including blouse piece)");
  const [material, setMaterial] = useState("Satin");
  const [customizations, setCustomizations] = useState({
    fallAndPico: false,
    cottonInskirt: false,
    basicBlouse: false,
    prePleated: false,
    satinInskirt: false,
    designerBlouse: false,
  });

  const [accordionOpen, setAccordionOpen] = useState({
    productDetails: false,
    returnPolicy: false,
    additionalInfo: false,
  });

  function toggleCustomization(key) {
    setCustomizations((s) => ({ ...s, [key]: !s[key] }));
  }

  function toggleAccordion(key) {
    setAccordionOpen((s) => ({ ...s, [key]: !s[key] }));
  }

  return (
    <>
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-8">
      {/* ✅ GRID ADJUSTS ONLY ON LARGE SCREENS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT SECTION */}
        <div className="flex lg:flex-row flex-col-reverse items-center lg:items-start overflow-y-auto  gap-4">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto w-full lg:w-28 justify-start lg:justify-start">
            {thumbnails.map((t, i) => (
              <button
                key={i}
                onClick={() => setMainImage(t)}
                className={`flex-none w-16 h-16 lg:h-17 lg:w-16 sm:w-24 sm:h-28 border rounded overflow-hidden transition-all duration-300 ${
                  mainImage === t ? "ring-2 ring-orange-500 scale-105" : ""
                }`}
              >
                <img
                  src={t}
                  alt={`thumb-${i}`}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="relative bg-gray-50 rounded shadow-sm overflow-hidden w-full">
            <img
              src={mainImage}
              alt="main"
              className="w-full h-[60vh] sm:h-[70vh] lg:h-[120vh] object-cover rounded"
            />
            <div className="absolute left-3 bottom-3 bg-white/80 text-xs sm:text-sm rounded-full px-3 py-1 shadow-md">
              Click image to open expanded view
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-4 mt-6 lg:mt-0 overflow-auto">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold">
            Banarasee Handloom Satin Hand Dyed Saree With Mirror Work - Blush Pink & Yellow
          </h1>
          <div className="text-sm text-gray-500">SKU: BAAP3419</div>
          <div className="text-2xl font-bold mt-2">₹ 2,499.00</div>
          <div className="text-xs text-gray-400">MRP Inclusive of all taxes</div>

          {/* OPTIONS */}
          <div className="mt-4 space-y-4">
            <SelectOption label="Color" value={color} setValue={setColor} options={["Blush Pink & Yellow", "Peach & Cream", "Gold & Maroon"]} />
            <SelectOption label="Size" value={size} setValue={setSize} options={["Saree:length 6.3M (including blouse piece)", "Custom Stitching Available", "Child Size"]} />
            <SelectOption label="Material" value={material} setValue={setMaterial} options={["Satin", "Silk", "Cotton"]} />
          </div>

          {/* Quick Info */}
          <div className="mt-3 flex flex-wrap gap-3 items-center">
            <QuickInfo iconLabel="Color" value={color} />
            <QuickInfo iconLabel="Size" value={size} />
            <QuickInfo iconLabel="Material" value={material} />
          </div>

          {/* Customization */}
          <div className="mt-4 border-t pt-4">
            <div className="text-sm font-medium mb-2">
              Customization Options (Only Available for Prepaid Orders)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Object.keys(customizations).map((key) => (
                <label key={key} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={customizations[key]}
                    onChange={() => toggleCustomization(key)}
                  />
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </label>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded font-medium">
              Add to Cart
            </button>
            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded font-medium">
              Buy It Now
            </button>
            <button className="flex-none border px-4 py-3 rounded flex items-center gap-2">
              ❤️ Add to Wishlist
            </button>
          </div>

          {/* Accordions */}
          <div className="mt-4 space-y-2">
            <Accordion
              title="Product Details"
              open={accordionOpen.productDetails}
              onToggle={() => toggleAccordion("productDetails")}
            >
              <p className="text-sm text-gray-700">
                This saree is handloom satin, hand-dyed with mirror work.
                Length: 6.3M including blouse piece. Care: Dry clean only.
              </p>
            </Accordion>

            <Accordion
              title="Return Policy"
              open={accordionOpen.returnPolicy}
              onToggle={() => toggleAccordion("returnPolicy")}
            >
              <p className="text-sm text-gray-700">
                Returns accepted within 7 days in original condition.
                Customizations are non-refundable.
              </p>
            </Accordion>

            <Accordion
              title="Additional Information"
              open={accordionOpen.additionalInfo}
              onToggle={() => toggleAccordion("additionalInfo")}
            >
              <p className="text-sm text-gray-700">
                Dispatch within 2-4 business days. Free shipping on orders above ₹499.
              </p>
            </Accordion>
          </div>

          
        </div>
        
      </div>
    </div>
    {/* ✅ Customer Review Section */}
          <div className="mt-8 flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
              Customer Review
            </h2>

            <div className="flex justify-center space-x-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-red-500 text-2xl sm:text-3xl" />
              ))}
            </div>

            <p className="text-gray-600 text-base sm:text-lg">
              Be the first to write a review
            </p>
          </div>



          {/* You May Also Like */}

           <div className="w-full px-4 sm:px-6 md:px-8 py-12 bg-gray-50">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 py-6 sm:mb-4">
        You May Also Like
      </h1>

      

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative w-full overflow-hidden rounded-lg">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <img
                src={product.hoverImg}
                alt={`${product.name}-hover`}
                className="absolute top-0 left-0 w-full h-[350px] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>

          
           

            {/* Brand Name */}
            <p className="text-gray-700 text-xs mt-2">Banarasee</p>

            {/* Product Info */}
            <div className="text-start mt-1">
              <p className="font-medium text-gray-900 text-sm sm:text-base">
                {product.name}
              </p>

              {/* Price */}
              <p className="text-gray-700 font-semibold py-2 text-sm sm:text-base">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

     
    </div>


  {/* check  the Best Seller  */}
     <div className="w-full px-4 sm:px-6 md:px-8 py-12 bg-gray-50">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 py-6 sm:mb-4">
check  the Best Seller 
      </h1>

      

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((p, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative w-full overflow-hidden rounded-lg">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <img
                src={p.hoverImg}
                alt={`${p.name}-hover`}
                className="absolute top-0 left-0 w-full h-[30px] object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>

          
           

            {/* Brand Name */}
            <p className="text-gray-700 text-xs mt-2">Banarasee</p>

            {/* p Info */}
            <div className="text-start mt-1">
              <p className="font-medium text-gray-900 text-sm sm:text-base">
                {p.name}
              </p>

              {/* Price */}
              <p className="text-gray-700 font-semibold py-2 text-sm sm:text-base">
                {p.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-8 sm:mt-10">
        <button 
                 onClick={() => navigate("/productspage")} 

        className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition text-sm sm:text-base">
          View All
        </button>
      </div>
    </div>

    {/* fooder */}
     <footer className="bg-[#5B0A0A] text-white py-10 px-4 sm:px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* About Banarasee */}
            <div>
              <h3 className="text-lg font-semibold mb-3">ABOUT BANARASEE</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Banarasee is an online destination for exquisite sarees, stitched kurtas & suit sets, dress materials, dupattas, lehengas and fabric. Our brand is rooted in the rich heritage of Banaras (Varanasi), a city that is renowned for its intricate weaving techniques and handcrafted textiles.
              </p>
              <div className="flex gap-3 mt-3 text-white text-sm">
                <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
                <FaPinterestP className="hover:text-gray-300 cursor-pointer" />
                <FaInstagram className="hover:text-gray-300 cursor-pointer" />
                <FaYoutube className="hover:text-gray-300 cursor-pointer" />
              </div>
            </div>
    
            {/* Shop */}
            <div>
              <h3 className="text-lg font-semibold mb-3">SHOP</h3>
              <ul className="text-sm sm:text-base space-y-1">
                <li className="hover:text-gray-300 cursor-pointer">Sarees</li>
                <li className="hover:text-gray-300 cursor-pointer">Kurtas & Suit Sets</li>
                <li className="hover:text-gray-300 cursor-pointer">Dress Materials</li>
                <li className="hover:text-gray-300 cursor-pointer">Lehengas</li>
                <li className="hover:text-gray-300 cursor-pointer">Dupattas</li>
                <li className="hover:text-gray-300 cursor-pointer">Fabrics</li>
                <li className="hover:text-gray-300 cursor-pointer">Blouses</li>
                <li className="hover:text-gray-300 cursor-pointer">Sale</li>
              </ul>
            </div>
    
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">QUICK LINKS</h3>
              <ul className="text-sm sm:text-base space-y-1">
                <li className="hover:text-gray-300 cursor-pointer">Search</li>
                <li className="hover:text-gray-300 cursor-pointer">About Us</li>
                <li className="hover:text-gray-300 cursor-pointer">Blog</li>
                <li className="hover:text-gray-300 cursor-pointer">Return Policies</li>
                <li className="hover:text-gray-300 cursor-pointer">Privacy Policy</li>
                <li className="hover:text-gray-300 cursor-pointer">Shipping</li>
                <li className="hover:text-gray-300 cursor-pointer">Disclaimer</li>
                <li className="hover:text-gray-300 cursor-pointer">Terms & Conditions</li>
                <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
                <li className="hover:text-gray-300 cursor-pointer">Bulk Enquiry</li>
              </ul>
            </div>
    
            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-3">CONTACT US</h3>
              <p className="text-sm sm:text-base"><span className="font-semibold">EMAIL:</span> buyatbanarasee@gmail.com</p>
              <p className="text-sm sm:text-base mt-1"><span className="font-semibold">PHONE:</span> +91 77550 01985</p>
              <p className="text-sm sm:text-base mt-3 font-semibold">REGISTERED ADDRESS</p>
              <p className="text-sm sm:text-base">D 58/30 Sigra</p>
              <p className="text-sm sm:text-base">Varanasi</p>
              <p className="text-sm sm:text-base">221010</p>
            </div>
          </div>
    
          {/* Bottom copyright */}
          <div className="text-center text-xs sm:text-sm mt-8 text-gray-300">
            © 2025, Banarasee <span className="hover:text-white cursor-pointer">Powered by Shopify</span>
          </div>
    
          {/* WhatsApp floating button */}
          <a
            href="https://wa.me/917755001985"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          >
            <BsWhatsapp size={24} />
          </a>
        </footer>
    </>
  );
};

// Reusable Components
const SelectOption = ({ label, value, setValue, options }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <select
      className="w-full border p-3 rounded"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {options.map((opt, i) => (
        <option key={i}>{opt}</option>
      ))}
    </select>
  </div>
);

const QuickInfo = ({ iconLabel, value }) => (
  <button className="flex items-center gap-3 px-3 py-2 border rounded hover:shadow-sm">
    <div className="w-9 h-9 bg-gray-100 rounded flex items-center justify-center text-sm font-medium">
      {iconLabel[0]}
    </div>
    <div className="text-left">
      <div className="text-xs text-gray-500">{iconLabel}</div>
      <div className="text-sm font-medium">{value}</div>
    </div>
  </button>
);

const Accordion = ({ title, children, open, onToggle }) => (
  <div className="border rounded">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between px-4 py-3"
    >
      <div className="text-sm font-medium">{title}</div>
      <div className="text-sm">{open ? "−" : "+"}</div>
    </button>
    <div className={`px-4 pb-4 transition-all ${open ? "block" : "hidden"}`}>
      {children}
    </div>
  </div>
);

export default Card_Detail;
