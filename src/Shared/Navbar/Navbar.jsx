// // Navbar.jsx
// import React from "react";
// import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

// function Navbar() {
//   return (
//     <header className="w-full h-full  ">
//       {/* Tall  */}
//       <div className="w-full bg-red-900 text-white text-center text-sm h-12 flex items-center justify-center">
//         <span className="font-medium">Use code BANARASEE5 to get 5% off</span>
//       </div>

//       {/* Main */}
//       <div className="w-full bg-white shadow-md flex items-center justify-between h-20">
//         <div className="flex items-center pl-4">
//           <FaSearch className="text-2xl cursor-pointer text-gray-700" />
//         </div>

//         {/* Center: Logo  */}
//         <div className="flex-1 flex items-center justify-center">
//           <img
//             src="https://www.banarasee.in/cdn/shop/files/banarasee_logo.png?v=1680148862"
//             alt="logo"
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = '/assets/logo-fallback.png';
//             }}
//             className="h-12 object-contain"
//           />
//         </div>

//         {/* Right: User & Cart icons  */}
//         <div className="flex items-center pr-4 space-x-6 text-gray-700">
//           <FaUser className="text-2xl cursor-pointer" />
//           <FaShoppingCart className="text-2xl cursor-pointer" />
//         </div>
//       </div>

//       {/* Menu  */}
//       <nav className="w-full bg-white">
//         <div className="max-w-full mx-auto flex justify-center space-x-6 py-3 text-sm font-medium">
//           <div className="cursor-pointer">HOME</div>
//           <div className="cursor-pointer">SAREES</div>
//           <div className="cursor-pointer">DRESS MATERIALS</div>
//           <div className="cursor-pointer">LEHENGAS</div>
//           <div className="cursor-pointer">DUPATTAS</div>
//           <div className="cursor-pointer">BLOUSES</div>
//           <div className="cursor-pointer">FABRICS</div>
//           <div className="cursor-pointer">OUR COLLECTIONS</div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;



















// // Navbar.jsx
// import React, { useState } from "react";
// import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

// function Navbar() {
//   return (
//     <header className="w-full h-full  ">
//       {/* Tall  */}
//       <div className="w-full bg-red-900 text-white text-center text-sm h-12 flex items-center justify-center">
//         <span className="font-medium">Use code BANARASEE5 to get 5% off</span>
//       </div>

//       {/* Main */}
//       <div className="w-full bg-white shadow-md flex items-center justify-between h-20">
//         <div className="flex items-center pl-4">
//           <FaSearch className="text-2xl cursor-pointer text-gray-700" />
//         </div>

//         {/* Center: Logo  */}
//         <div className="flex-1 flex items-center justify-center">
//           <img
//             src="https://www.banarasee.in/cdn/shop/files/banarasee_logo.png?v=1680148862"
//             alt="logo"
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = '/assets/logo-fallback.png';
//             }}
//             className="h-12 object-contain"
//           />
//         </div>

//         {/* Right: User & Cart icons  */}
//         <div className="flex items-center pr-4 space-x-6 text-gray-700">
//           <FaUser className="text-2xl cursor-pointer" />
//           <FaShoppingCart className="text-2xl cursor-pointer" />
//         </div>
//       </div>

//       {/* Menu */}
//       <nav className="w-full bg-white relative">
//         {/* Desktop / Tablet horizontal menu (shown on md+) */}
//         <div className="hidden md:flex max-w-full mx-auto justify-center space-x-6 py-3 text-sm font-medium">
//           <div className="cursor-pointer">HOME</div>
//           <div className="cursor-pointer">SAREES</div>
//           <div className="cursor-pointer">DRESS MATERIALS</div>
//           <div className="cursor-pointer">LEHENGAS</div>
//           <div className="cursor-pointer">DUPATTAS</div>
//           <div className="cursor-pointer">BLOUSES</div>
//           <div className="cursor-pointer">FABRICS</div>
//           <div className="cursor-pointer">OUR COLLECTIONS</div>
//         </div>

//         {/* Mobile menu button (shown on small screens) */}
//         <div className="md:hidden flex items-center justify-center py-2">
//           <MobileMenu />
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;

// function MobileMenu() {
//   const [open, setOpen] = useState(false)

//   const items = [
//     'HOME',
//     'SAREES',
//     'DRESS MATERIALS',
//     'LEHENGAS',
//     'DUPATTAS',
//     'BLOUSES',
//     'FABRICS',
//     'OUR COLLECTIONS'
//   ]

//   return (
//     <div className="w-full">
//       <button
//         onClick={() => setOpen(!open)}
//         className="p-2 rounded-md text-gray-700 bg-white shadow-sm"
//         aria-label="Toggle menu"
//       >
//         {open ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Slide-down menu */}
//       <div className={`absolute left-0 right-0 bg-white shadow-md transition-max-h duration-300 overflow-hidden ${open ? 'max-h-80' : 'max-h-0'}`}>
//         <div className="flex flex-col p-4 space-y-3 text-center">
//           {items.map((it) => (
//             <button key={it} onClick={() => setOpen(false)} className="text-sm font-medium">
//               {it}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }



import React, { useState } from "react";
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    "HOME",
    "SAREES",
    "DRESS MATERIALS",
    "LEHENGAS",
    "DUPATTAS",
    "BLOUSES",
    "FABRICS",
    "OUR COLLECTIONS",
  ];

  return (
    <header className="w-full relative z-50">
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
        <div className="hidden md:flex items-center space-x-6 text-gray-700">
          <FaUser className="text-2xl cursor-pointer" />
          <FaShoppingCart className="text-2xl cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
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
        {/* Desktop Menu */}
        <div className="hidden md:flex max-w-full mx-auto justify-center space-x-6 py-3 text-sm font-medium bg-white">
          {menuItems.map((item) => (
            <div key={item} className="cursor-pointer hover:text-red-700">
              {item}
            </div>
          ))}
        </div>

        {/* Mobile Menu: slides from top */}
        <div
          className={`fixed top-0 left-0 right-0 h-screen bg-white z-40 transform transition-transform duration-300 ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 shadow-md">
            <img
              src="https://www.banarasee.in/cdn/shop/files/banarasee_logo.png?v=1680148862"
              alt="logo"
              className="h-12 object-contain"
            />
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-md text-gray-700 bg-white shadow"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-6 mt-10 text-lg font-medium">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setOpen(false)}
                className="hover:text-red-700"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
