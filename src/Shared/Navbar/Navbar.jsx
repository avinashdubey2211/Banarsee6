


// import React, { useState } from "react";
// import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const menuItems = [
//     "HOME",
//     "SAREES",
//     "DRESS MATERIALS",
//     "LEHENGAS",
//     "DUPATTAS",
//     "BLOUSES",
//     "FABRICS",
//     "OUR COLLECTIONS",
//   ];

//   return (
//     <header className="w-full relative z-50">
//       {/* Top Promo */}
//       <div className="w-full bg-red-900 text-white text-center text-sm h-12 flex items-center justify-center">
//         <span className="font-medium">Use code BANARASEE5 to get 5% off</span>
//       </div>

//       {/* Main Navbar */}
//       <div className="w-full bg-white shadow-md flex items-center justify-between h-20 px-4 md:px-8">
//         {/* Left: Search */}
//         <FaSearch className="text-2xl cursor-pointer text-gray-700" />

//         {/* Center: Logo */}
//         <div className="flex-1 flex items-center justify-center">
//           <img
//             src="https://www.banarasee.in/cdn/shop/files/banarasee_logo.png?v=1680148862"
//             alt="logo"
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = "/assets/logo-fallback.png";
//             }}
//             className="h-12 object-contain"
//           />
//         </div>

//         {/* Right: User & Cart */}
//         <div className="hidden md:flex items-center space-x-6 text-gray-700">
//           <FaUser className="text-2xl cursor-pointer" />
//           <FaShoppingCart className="text-2xl cursor-pointer" />
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setOpen(!open)}
//             className="p-2 rounded-md text-gray-700 bg-white shadow"
//             aria-label="Toggle menu"
//           >
//             {open ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
//           </button>
//         </div>
//       </div>

//       {/* Menu */}
//       <nav className="w-full">
//         {/* Desktop Menu */}
//         <div className="hidden md:flex max-w-full mx-auto justify-center space-x-6 py-3 text-sm font-medium bg-white">
//           {menuItems.map((item) => (
//             <div key={item} className="cursor-pointer hover:text-red-700">
//               {item}
//             </div>
//           ))}
//         </div>

//         {/* Mobile Menu: slides from top */}
//         <div
//           className={`fixed top-0 left-0 right-0 h-screen bg-white z-40 transform transition-transform duration-300 ${
//             open ? "translate-y-0" : "-translate-y-full"
//           }`}
//         >
//           <div className="flex items-center justify-between px-4 py-4 shadow-md">
//             <img
//               src="https://www.banarasee.in/cdn/shop/files/banarasee_logo.png?v=1680148862"
//               alt="logo"
//               className="h-12 object-contain"
//             />
//             <button
//               onClick={() => setOpen(false)}
//               className="p-2 rounded-md text-gray-700 bg-white shadow"
//             >
//               <FaTimes className="text-xl" />
//             </button>
//           </div>
//           <div className="flex flex-col items-center justify-center space-y-6 mt-10 text-lg font-medium">
//             {menuItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => setOpen(false)}
//                 className="hover:text-red-700"
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;



// import React, { useState } from "react";
// import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes, FaHome, FaHeart, FaChevronDown } from "react-icons/fa";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const fabrics = [
//     "Silk", "Cotton", "Georgette", "Chiffon", "Crepe", 
//     "Organza", "Linen", "Chanderi", "Banarasi", "Pure Silk",
//     "Art Silk", "Cotton Silk", "Tussar Silk", "Kanjivaram", "Kora Silk"
//   ];

//   const colors = [
//     "Red", "Blue", "Green", "Yellow", "Pink",
//     "Purple", "Orange", "Black", "White", "Gold"
//   ];

//   const occasions = ["Festive", "Wedding"];

//   const collections = [
//     "Best Seller",
//     "AMERA- Pure Silk Sarees"
//   ];

//   const menuItems = [
//     {
//       name: "HOME",
//       submenu: [
//         { name: "Home", icon: <FaHome className="mr-2" /> },
//         { name: "My Wishlist", icon: <FaHeart className="mr-2" /> }
//       ]
//     },
//     {
//       name: "SAREES",
//       submenu: [
//         { name: "By Fabric", items: fabrics },
//         { name: "By Color", items: colors },
//         { name: "By Occasion", items: occasions },
//         { name: "Curated Collections", items: collections }
//       ]
//     },
//     "DRESS MATERIALS",
//     "LEHENGAS",
//     "DUPATTAS",
//     "BLOUSES",
//     "FABRICS",
//     "OUR COLLECTIONS",
//   ];

//   return (
//     <header className="w-full relative z-50">
//       {/* Top Promo */}
//       <div className="w-full bg-red-900 text-white text-center text-sm h-12 flex items-center justify-center">
//         <span className="font-medium">Use code BANARASEE5 to get 5% off</span>
//       </div>

//       {/* Main Navbar */}
//       <div className="w-full bg-white shadow-md flex items-center justify-between h-20 px-4 md:px-8">
//         {/* Left: Search */}
//         <FaSearch className="text-2xl cursor-pointer text-gray-700" />

//         {/* Center: Logo */}
//         <div className="flex-1 flex items-center justify-center">
//           <img
//             src="https://www.banarasee.in/cdn/shop/files/banarasee_logo.png?v=1680148862"
//             alt="logo"
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = "/assets/logo-fallback.png";
//             }}
//             className="h-12 object-contain"
//           />
//         </div>

//         {/* Right: User & Cart */}
//         <div className="hidden md:flex items-center space-x-6 text-gray-700">
//           <FaUser className="text-2xl cursor-pointer" />
//           <FaShoppingCart className="text-2xl cursor-pointer" />
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setOpen(!open)}
//             className="p-2 rounded-md text-gray-700 bg-white shadow"
//             aria-label="Toggle menu"
//           >
//             {open ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
//           </button>
//         </div>
//       </div>

//       {/* Menu */}
//       <nav className="w-full">
//         {/* Desktop Menu */}
//         <div className="hidden md:flex max-w-full mx-auto justify-center space-x-6 py-3 text-sm font-medium bg-white">
//           {menuItems.map((item, index) => (
//             <div
//               key={typeof item === 'string' ? item : item.name}
//               className="relative group"
//               onMouseEnter={() => setActiveDropdown(index)}
//               onMouseLeave={() => setActiveDropdown(null)}
//             >
//               <div className="cursor-pointer hover:text-red-700 flex items-center">
//                 {typeof item === 'string' ? item : (
//                   <>
//                     {item.name}
//                     <FaChevronDown className="ml-1 text-xs" />
//                   </>
//                 )}
//               </div>
              
//               {/* Dropdown for Home */}
//               {typeof item === 'object' && item.name === "HOME" && activeDropdown === index && (
//                 <div className="absolute left-0 mt-2 w-48 bg-white border shadow-lg rounded-md py-2 z-50">
//                   {item.submenu.map((subItem) => (
//                     <div
//                       key={subItem.name}
//                       className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
//                     >
//                       {subItem.icon}
//                       {subItem.name}
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* Mega Menu for Sarees */}
//               {typeof item === 'object' && item.name === "SAREES" && activeDropdown === index && (
//                 <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white border shadow-lg rounded-md py-4 z-50">
//                   <div className="grid grid-cols-4 gap-6 px-6">
//                     {item.submenu.map((category) => (
//                       <div key={category.name} className="space-y-3">
//                         <h3 className="font-semibold text-gray-800 border-b pb-2">{category.name}</h3>
//                         <div className="space-y-2">
//                           {category.items.map((subItem) => (
//                             <div
//                               key={subItem}
//                               className="text-gray-600 hover:text-red-700 cursor-pointer"
//                             >
//                               {subItem}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Mobile Menu: slides from top */}
//         <div
//           className={`fixed top-0 left-0 right-0 h-screen bg-white z-40 transform transition-transform duration-300 ${
//             open ? "translate-y-0" : "-translate-y-full"
//           }`}
//         >
//           <div className="flex items-center justify-between px-4 py-4 shadow-md">
//             <img
//               src="https://www.banarasee.in/cdn/shop/files/banarasee_logo.png?v=1680148862"
//               alt="logo"
//               className="h-12 object-contain"
//             />
//             <button
//               onClick={() => setOpen(false)}
//               className="p-2 rounded-md text-gray-700 bg-white shadow"
//             >
//               <FaTimes className="text-xl" />
//             </button>
//           </div>
//           <div className="flex flex-col items-center justify-center space-y-6 mt-10 text-lg font-medium">
//             {menuItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => setOpen(false)}
//                 className="hover:text-red-700"
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { 
//   FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes, 
//   FaHome, FaHeart, FaChevronDown 
// } from "react-icons/fa";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const fabrics = [
//     "Silk", "Cotton", "Georgette", "Chiffon", "Crepe", 
//     "Organza", "Linen", "Chanderi", "Banarasi", "Pure Silk",
//     "Art Silk", "Cotton Silk", "Tussar Silk", "Kanjivaram", "Kora Silk"
//   ];

//   const colors = [
//     "Red", "Blue", "Green", "Yellow", "Pink",
//     "Purple", "Orange", "Black", "White", "Gold"
//   ];

//   const occasions = ["Festive", "Wedding"];

//   const collections = [
//     "Best Seller",
//     "AMERA- Pure Silk Sarees"
//   ];

//   const menuItems = [
//     {
//       name: "HOME",
//       submenu: [
//         { name: "Home", icon: <FaHome className="mr-2" /> },
//         { name: "My Wishlist", icon: <FaHeart className="mr-2" /> }
//       ]
//     },
//     {
//       name: "SAREES",
//       submenu: [
//         { name: "By Fabric", items: fabrics },
//         { name: "By Color", items: colors },
//         { name: "By Occasion", items: occasions },
//         { name: "Curated Collections", items: collections }
//       ]
//     },
//     "DRESS MATERIALS",
//     "LEHENGAS",
//     "DUPATTAS",
//     "BLOUSES",
//     "FABRICS",
//     "OUR COLLECTIONS",
//   ];

//   return (
//     <header className="w-full sticky top-0 z-50">
//       {/* Top Promo */}
//       <div className="w-full bg-red-900 text-white text-center text-sm h-12 flex items-center justify-center">
//         <span className="font-medium">Use code BANARASEE5 to get 5% off</span>
//       </div>

//       {/* Main Navbar */}
//       <div className="w-full bg-white shadow-md flex items-center justify-between h-20 px-4 md:px-8">
//         {/* Left: Search */}
//         <FaSearch className="text-2xl cursor-pointer text-gray-700" />

//         {/* Center: Logo */}
//         <div className="flex-1 flex items-center justify-center">
//           <img
//             src="https://www.banarasee.in/cdn/shop/files/banarasee_logo.png?v=1680148862"
//             alt="logo"
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = "/assets/logo-fallback.png";
//             }}
//             className="h-12 object-contain"
//           />
//         </div>

//         {/* Right: User & Cart */}
//         <div className="hidden md:flex items-center space-x-6 text-gray-700">
//           <FaUser className="text-2xl cursor-pointer" />
//           <FaShoppingCart className="text-2xl cursor-pointer" />
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setOpen(!open)}
//             className="p-2 rounded-md text-gray-700 bg-white shadow"
//             aria-label="Toggle menu"
//           >
//             {open ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
//           </button>
//         </div>
//       </div>

//       {/* Menu */}
//       <nav className="w-full">
//         {/* Desktop Menu */}
//         <div className="hidden md:flex max-w-full mx-auto justify-center space-x-6 py-3 text-sm font-medium bg-white">
//           {menuItems.map((item, index) => (
//             <div
//               key={typeof item === 'string' ? item : item.name}
//               className="relative group"
//               onMouseEnter={() => setActiveDropdown(index)}
//               onMouseLeave={() => setActiveDropdown(null)}
//             >
//               <div className="cursor-pointer hover:text-red-700 flex items-center">
//                 {typeof item === 'string' ? item : (
//                   <>
//                     {item.name}
//                     {item.submenu && <FaChevronDown className="ml-1 text-xs" />}
//                   </>
//                 )}
//               </div>

//               {/* Dropdown for HOME */}
//               {typeof item === 'object' && item.name === "HOME" && activeDropdown === index && (
//                 <div className="absolute left-0 mt-2 w-48 bg-white border shadow-lg rounded-md py-2 z-50">
//                   {item.submenu.map((subItem) => (
//                     <div
//                       key={subItem.name}
//                       className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
//                     >
//                       {subItem.icon}
//                       {subItem.name}
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* Mega Menu for SAREES */}
//               {typeof item === 'object' && item.name === "SAREES" && activeDropdown === index && (
//                 <div className="absolute left-60 transform -translate-x-1/2 mt-2 w-[800px] bg-white border shadow-lg rounded-md py-4 z-50">
//                   <div className="grid grid-cols-4 gap-6 px-6">
//                     {item.submenu.map((category) => (
//                       <div key={category.name} className="space-y-3">
//                         <h3 className="font-semibold text-gray-800 border-b pb-2">{category.name}</h3>
//                         <div className="space-y-2">
//                           {category.items.map((subItem) => (
//                             <div
//                               key={subItem}
//                               className="text-gray-600 hover:text-red-700 cursor-pointer"
//                             >
//                               {subItem}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Mobile Menu: slides from top */}
//         <div
//           className={`fixed top-0 left-0 right-0 h-screen bg-white z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
//             open ? "translate-y-0" : "-translate-y-full"
//           }`}
//         >
//           <div className="flex items-center justify-between px-4 py-4 shadow-md">
//             <img
//               src="https://www.banarasee.in/cdn/shop/files/banarasee_logo.png?v=1680148862"
//               alt="logo"
//               className="h-12 object-contain"
//             />
//             <button
//               onClick={() => setOpen(false)}
//               className="p-2 rounded-md text-gray-700 bg-white shadow"
//             >
//               <FaTimes className="text-xl" />
//             </button>
//           </div>

//           <div className="flex flex-col items-center justify-center space-y-6 mt-10 text-lg font-medium">
//             {menuItems.map((item) => (
//               <button
//                 key={typeof item === 'string' ? item : item.name}
//                 onClick={() => setOpen(false)}
//                 className="hover:text-red-700"
//               >
//                 {typeof item === 'string' ? item : item.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaHome,
  FaHeart,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false); // mobile/tablet menu open
  const [activeDropdown, setActiveDropdown] = useState(null); // submenu toggle for mobile/tablet

  const fabrics = [
    "Silk","Cotton","Georgette","Chiffon","Crepe",
    "Organza","Linen","Chanderi","Banarasi","Pure Silk",
    "Art Silk","Cotton Silk","Tussar Silk","Kanjivaram","Kora Silk"
  ];

  const colors = [
    "Red","Blue","Green","Yellow","Pink",
    "Purple","Orange","Black","White","Gold"
  ];

  const occasions = ["Festive","Wedding"];
  const collections = ["Best Seller","AMERA- Pure Silk Sarees"];

  const menuItems = [
    {
      name: "HOME",
      submenu: [
        { name: "Home", icon: <FaHome className="mr-2" /> },
        { name: "My Wishlist", icon: <FaHeart className="mr-2" /> },
      ],
    },
    {
      name: "SAREES",
      submenu: [
        { name: "By Fabric", items: fabrics },
        { name: "By Color", items: colors },
        { name: "By Occasion", items: occasions },
        { name: "Curated Collections", items: collections },
      ],
    },
    "DRESS MATERIALS",
    "LEHENGAS",
    "DUPATTAS",
    "BLOUSES",
    "FABRICS",
    "OUR COLLECTIONS",
  ];

  const toggleDropdown = (index) => {
    if (activeDropdown === index) setActiveDropdown(null);
    else setActiveDropdown(index);
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Promo */}
      <div className="w-full bg-red-900 text-white text-center text-sm h-12 flex items-center justify-center">
        <span className="font-medium">Use code BANARASEE5 to get 5% off</span>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-white shadow-md flex items-center justify-between h-20 px-4 md:px-8">
        {/* Left: Search */}
        <FaSearch className="text-2xl cursor-pointer text-gray-700" />

        {/* Center: Logo */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://www.banarasee.in/cdn/shop/files/banarasee_logo.png?v=1680148862"
            alt="logo"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/logo-fallback.png";
            }}
            className="h-12 object-contain"
          />
        </div>

        {/* Right: User & Cart */}
        <div className="hidden lg:flex items-center space-x-6 text-gray-700">
          <FaUser className="text-2xl cursor-pointer" />
          <FaShoppingCart className="text-2xl cursor-pointer" />
        </div>

        {/* Mobile/Tablet Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md text-gray-700 bg-white shadow"
            aria-label="Toggle menu"
          >
            {open ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Menu */}
      <nav className="w-full">
        {/* Desktop Menu (hover dropdown for lg: and above) */}
        <div className="hidden lg:flex max-w-full mx-auto justify-center space-x-6 py-3 text-sm font-medium bg-white">
          {menuItems.map((item, index) => (
            <div
              key={typeof item === "string" ? item : item.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="cursor-pointer hover:text-red-700 flex items-center">
                {typeof item === "string" ? item : (
                  <>
                    {item.name}
                    {item.submenu && <FaChevronDown className="ml-1 text-xs" />}
                  </>
                )}
              </div>

              {/* Dropdown / Mega Menu */}
              {typeof item === "object" && item.submenu && activeDropdown === index && (
                <div
                  className={`${
                    item.name === "SAREES"
                      ? "absolute left-60 transform -translate-x-1/2 mt-2 w-[800px] grid grid-cols-4 gap-6 bg-white border shadow-lg rounded-md py-4 z-50 px-6"
                      : "absolute left-0 mt-2 w-48 bg-white border shadow-lg rounded-md py-2 z-50"
                  }`}
                >
                  {item.name === "HOME"
                    ? item.submenu.map((sub) => (
                        <div key={sub.name} className="px-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer">
                          {sub.icon} {sub.name}
                        </div>
                      ))
                    : item.submenu.map((category) => (
                        <div key={category.name}>
                          <h3 className="font-semibold border-b pb-2">{category.name}</h3>
                          <div className="space-y-2 mt-2">
                            {category.items.map((i) => (
                              <div key={i} className="hover:text-red-700 cursor-pointer">{i}</div>
                            ))}
                          </div>
                        </div>
                      ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Menu (click to toggle) */}
        <div
          className={`fixed top-0 left-0 right-0 h-screen bg-white z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 shadow-md">
            <img
              src="https://www.banarasee.in/cdn/shop/files/banarasee_logo.png?v=1680148862"
              alt="logo"
              className="h-12 object-contain"
            />
            <button onClick={() => setOpen(false)} className="p-2 rounded-md text-gray-700 bg-white shadow">
              <FaTimes className="text-xl" />
            </button>
          </div>

          <div className="flex flex-col items-start mt-6 px-6 space-y-4">
            {menuItems.map((item, index) => (
              <div key={typeof item === "string" ? item : item.name} className="w-full">
                {typeof item === "object" && item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="w-full flex justify-between items-center py-2 text-left hover:text-red-700 font-medium"
                    >
                      {item.name} <FaChevronDown className="ml-2" />
                    </button>
                    {activeDropdown === index && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.submenu.map((sub) =>
                          sub.items ? (
                            <div key={sub.name}>
                              <p className="font-semibold py-1">{sub.name}</p>
                              <div className="pl-4 space-y-1">
                                {sub.items.map((i) => (
                                  <div key={i} className="hover:text-red-700 cursor-pointer">{i}</div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div key={sub.name} className="flex items-center space-x-2 hover:text-red-700 py-1 cursor-pointer">
                              {sub.icon} <span>{sub.name}</span>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <button className="w-full py-2 text-left hover:text-red-700 font-medium" onClick={() => setOpen(false)}>
                    {item}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
