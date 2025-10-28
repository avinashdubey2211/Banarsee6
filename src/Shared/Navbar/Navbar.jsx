
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaUser,
//   FaBars,
//   FaTimes,
//   FaHome,
//   FaHeart,
//   FaChevronDown,
// } from "react-icons/fa";
// import {
//   IconButton,
//   TextField,
//   Fade,
//   Box,
//   Drawer,
//   Typography,
//   Divider,
//   Button,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import CloseIcon from "@mui/icons-material/Close";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [showSearch, setShowSearch] = useState(false);
//   const [cartOpen, setCartOpen] = useState(false);

//   const fabrics = [
//     "Silk", "Cotton", "Georgette", "Chiffon", "Crepe",
//     "Organza", "Linen", "Chanderi", "Banarasi", "Pure Silk",
//     "Art Silk", "Cotton Silk", "Tussar Silk", "Kanjivaram", "Kora Silk",
//   ];
//   const colors = [
//     "Red", "Blue", "Green", "Yellow", "Pink",
//     "Purple", "Orange", "Black", "White", "Gold",
//   ];
//   const occasions = ["Festive", "Wedding"];
//   const collections = ["Best Seller", "AMERA- Pure Silk Sarees"];

//   const menuItems = [
//     {
//       name: "HOME",
//       submenu: [
//         { name: "Home", icon: <FaHome className="mr-2" /> },
//         { name: "My Wishlist", icon: <FaHeart className="mr-2" /> },
//       ],
//     },
//     {
//       name: "SAREES",
//       submenu: [
//         { name: "By Fabric", items: fabrics },
//         { name: "By Color", items: colors },
//         { name: "By Occasion", items: occasions },
//         { name: "Curated Collections", items: collections },
//       ],
//     },
//     "DRESS MATERIALS",
//     "LEHENGAS",
//     "DUPATTAS",
//     "BLOUSES",
//     "FABRICS",
//     "OUR COLLECTIONS",
//   ];

//   const toggleDropdown = (index) => {
//     if (activeDropdown === index) setActiveDropdown(null);
//     else setActiveDropdown(index);
//   };

//   return (
//     <header className="w-full sticky top-0 z-50 bg-white">
//       {/* Top Promo */}
//       <div className="w-full bg-red-900 text-white text-center text-sm h-10 flex items-center justify-center">
//         <span className="font-medium">Use code BANARASEE5 to get 5% off</span>
//       </div>

//       {/* Main Navbar */}
//       <div className="w-full shadow-md flex items-center justify-between h-20 px-4 md:px-8 relative">
//         {/* Left: Search */}
//         <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
//           <IconButton
//             onClick={() => setShowSearch(!showSearch)}
//             sx={{
//               color: "gray",
//               "&:hover": { color: "purple" },
//               transition: "0.3s",
//             }}
//           >
//             <SearchIcon fontSize="medium" />
//           </IconButton>

//           {/* Search Input */}
//           <Fade in={showSearch}>
//             <Box
//               sx={{
//                 position: "absolute",
//                 left: 40,
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 width: { xs: "160px", sm: "220px", md: "300px" },
//               }}
//             >
//               <TextField
//                 variant="outlined"
//                 placeholder="Search..."
//                 size="small"
//                 autoFocus
//                 fullWidth
//                 sx={{
//                   backgroundColor: "white",
//                   borderRadius: "25px",
//                   boxShadow: 2,
//                   "& .MuiOutlinedInput-root": { borderRadius: "25px" },
//                 }}
//               />
//             </Box>
//           </Fade>
//         </Box>

//         {/* Center: Logo */}
//         <div className="flex-1 flex items-center justify-center">
//           <img
//             src="https://www.banarasee.in/cdn/shop/files/banarasee_logo.png?v=1680148862"
//             onClick={() => navigate("/")}
//             alt="logo"
//             className="h-12 object-contain cursor-pointer"
//           />
//         </div>

//         {/* Right: User & Cart - visible on all screens */}
//         <div className="flex items-center space-x-4 text-gray-700">
//           <FaUser
//             onClick={() => navigate("/login")}
//             className="text-2xl cursor-pointer hover:text-purple-700"
//           />
//           <IconButton onClick={() => setCartOpen(true)} sx={{ color: "black" }}>
//             <ShoppingCartIcon fontSize="medium" />
//           </IconButton>

//           {/* Hamburger menu - only mobile */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setOpen(!open)}
//               className="p-2 rounded-md text-gray-700 bg-white shadow"
//             >
//               {open ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Menu Section */}
//       <nav className="w-full">
//         {/* Desktop Dropdown */}
//         <div className="hidden lg:flex max-w-full mx-auto justify-center space-x-6 py-3 text-sm font-medium bg-white">
//           {menuItems.map((item, index) => (
//             <div
//               key={typeof item === "string" ? item : item.name}
//               className="relative group"
//               onMouseEnter={() => setActiveDropdown(index)}
//               onMouseLeave={() => setActiveDropdown(null)}
//             >
//               <div className="cursor-pointer hover:text-red-700 flex items-center">
//                 {typeof item === "string" ? (
//                   item
//                 ) : (
//                   <>
//                     {item.name}
//                     {item.submenu && <FaChevronDown className="ml-1 text-xs" />}
//                   </>
//                 )}
//               </div>

//               {typeof item === "object" &&
//                 item.submenu &&
//                 activeDropdown === index && (
//                   <div
//                     className={`${
//                       item.name === "SAREES"
//                         ? "absolute left-60 transform -translate-x-1/2 mt-2 w-[800px] grid grid-cols-4 gap-6 bg-white border shadow-lg rounded-md py-4 z-50 px-6"
//                         : "absolute left-0 mt-2 w-48 bg-white border shadow-lg rounded-md py-2 z-50"
//                     }`}
//                   >
//                     {item.name === "HOME"
//                       ? item.submenu.map((sub) => (
//                           <div
//                             key={sub.name}
//                             className="px-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer"
//                           >
//                             {sub.icon} {sub.name}
//                           </div>
//                         ))
//                       : item.submenu.map((category) => (
//                           <div key={category.name}>
//                             <h3 className="font-semibold border-b pb-2">
//                               {category.name}
//                             </h3>
//                             <div className="space-y-2 mt-2">
//                               {category.items.map((i) => (
//                                 <div
//                                   key={i}
//                                   className="hover:text-red-700 cursor-pointer"
//                                 >
//                                   {i}
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         ))}
//                   </div>
//                 )}
//             </div>
//           ))}
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`fixed top-0 left-0 right-0 h-screen bg-white z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
//             open ? "translate-y-0" : "-translate-y-full"
//           }`}
//         >
//           <div className="flex items-center justify-between px-4 py-4 shadow-md">
//             <img
//               src="https://www.banarasee.in/cdn/shop/files/banarasee_logo.png?v=1680148862"
//               onClick={() => navigate("/")}
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

//           <div className="flex flex-col items-start mt-6 px-6 space-y-4">
//             {menuItems.map((item, index) => (
//               <div key={typeof item === "string" ? item : item.name} className="w-full">
//                 {typeof item === "object" && item.submenu ? (
//                   <>
//                     <button
//                       onClick={() => toggleDropdown(index)}
//                       className="w-full flex justify-between items-center py-2 text-left hover:text-red-700 font-medium"
//                     >
//                       {item.name} <FaChevronDown className="ml-2" />
//                     </button>
//                     {activeDropdown === index && (
//                       <div className="pl-4 mt-2 space-y-2">
//                         {item.submenu.map((sub) =>
//                           sub.items ? (
//                             <div key={sub.name}>
//                               <p className="font-semibold py-1">{sub.name}</p>
//                               <div className="pl-4 space-y-1">
//                                 {sub.items.map((i) => (
//                                   <div key={i} className="hover:text-red-700 cursor-pointer">
//                                     {i}
//                                   </div>
//                                 ))}
//                               </div>
//                             </div>
//                           ) : (
//                             <div
//                               key={sub.name}
//                               className="flex items-center space-x-2 hover:text-red-700 py-1 cursor-pointer"
//                             >
//                               {sub.icon} <span>{sub.name}</span>
//                             </div>
//                           )
//                         )}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <button
//                     className="w-full py-2 text-left hover:text-red-700 font-medium"
//                     onClick={() => setOpen(false)}
//                   >
//                     {item}
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* ✅ Cart Drawer */}
//       <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
//         <Box sx={{ width: { xs: 320, sm: 400 }, p: 3 }}>
//           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             <Typography variant="h6" fontWeight="bold">
//               YOUR CART
//             </Typography>
//             <IconButton onClick={() => setCartOpen(false)}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <Divider sx={{ my: 2 }} />

//           <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
//             <img
//               src="https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369"
//               alt="product"
//               style={{
//                 width: 60,
//                 height: 60,
//                 borderRadius: 8,
//                 objectFit: "cover",
//                 marginRight: 12,
//               }}
//             />
//             <Box sx={{ flex: 1 }}>
//               <Typography variant="subtitle1" fontWeight="bold">
//                 Banarasee Handwoven Plain Tissue Saree With Gold Zari Border & Lace
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Saree: 5.4m | Blouse: 0.88m | Yellow
//               </Typography>

//               <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
//                 <IconButton size="small">
//                   <RemoveIcon />
//                 </IconButton>
//                 <Typography sx={{ mx: 1 }}>2</Typography>
//                 <IconButton size="small">
//                   <AddIcon />
//                 </IconButton>
//                 <Typography sx={{ ml: "auto", fontWeight: "bold" }}>₹4,598.00</Typography>
//               </Box>
//             </Box>
//           </Box>

//           <Divider sx={{ my: 2 }} />

//           <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
//             <Typography variant="h6" fontWeight="bold">
//               SUBTOTAL
//             </Typography>
//             <Typography variant="h6" fontWeight="bold">
//               ₹4,598.00
//             </Typography>
//           </Box>

//           <Typography variant="body2" color="text.secondary" mb={3}>
//             Tax included and shipping calculated at checkout
//           </Typography>

//           <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
//             <TextField
//               placeholder="Discount Code"
//               size="small"
//               fullWidth
//               sx={{ backgroundColor: "#f9f9f9", borderRadius: 1 }}
//             />
//             <Button variant="contained" sx={{ backgroundColor: "black", "&:hover": { backgroundColor: "#333" } }}>
//               APPLY
//             </Button>
//           </Box>

//           <Typography variant="body2" sx={{ color: "purple", cursor: "pointer", mb: 3 }}>
//             🔖 Click here for discount codes
//           </Typography>

//           <Button
//             fullWidth
//             variant="contained"
//             sx={{
//               backgroundColor: "#f0c14b",
//               color: "black",
//               borderRadius: "25px",
//               fontWeight: "bold",
//               "&:hover": { backgroundColor: "#e6b800" },
//             }}
//           >
//             CHECK OUT
//           </Button>
//         </Box>
//       </Drawer>
//     </header>
//   );
// };

// export default Navbar;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaUser,
//   FaBars,
//   FaTimes,
//   FaHeart,
//   FaHome,
//   FaChevronDown,
// } from "react-icons/fa";
// import {
//   IconButton,
//   TextField,
//   Fade,
//   Box,
//   Drawer,
//   Typography,
//   Divider,
//   Button,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import CloseIcon from "@mui/icons-material/Close";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [showSearch, setShowSearch] = useState(false);
//   const [cartOpen, setCartOpen] = useState(false);

//   const fabrics = [
//     "Silk",
//     "Cotton",
//     "Georgette",
//     "Chiffon",
//     "Crepe",
//     "Organza",
//     "Linen",
//     "Chanderi",
//     "Banarasi",
//     "Pure Silk",
//     "Art Silk",
//     "Cotton Silk",
//     "Tussar Silk",
//     "Kanjivaram",
//     "Kora Silk",
//   ];
//   const colors = [
//     "Red",
//     "Blue",
//     "Green",
//     "Yellow",
//     "Pink",
//     "Purple",
//     "Orange",
//     "Black",
//     "White",
//     "Gold",
//   ];
//   const occasions = ["Festive", "Wedding"];
//   const lehengas = [
//     "All Lehengas",
//     "Art Silk Lehengas",
//     "Chanderi Lehengas",
//     "Georgette Lehengas",
//     "Mul Cotton Lehengas",
//     "Organza Lehengas",
//     "Silk Blend Lehengas",
//     "Rayon Lehengas",
//   ];
//   const fabricsCategory = [
//     "All Fabrics",
//     "Chanderi Fabrics",
//     "Katan Silk Fabrics",
//     "Satin",
//     "Silk Blend",
//   ];
//   const collections = [
//     "Raksha Bandhan",
//     "Monsoon Edit",
//     "Summer Cotton",
//     "Ameysa - Pure Silk Sarees",
//     "Festive Collection",
//     "Clearance",
//   ];

//   const menuItems = [
//     {
//       name: "HOME",
//       submenu: [
//         { name: "Home", icon: <FaHome className="mr-2" /> },
//         { name: "My Wishlist", icon: <FaHeart className="mr-2" /> },
//       ],
//     },
//     {
//       name: "SAREES",
//       submenu: [
//         { name: "By Fabric", items: fabrics },
//         { name: "By Color", items: colors },
//         { name: "By Occasion", items: occasions },
//       ],
//     },
//     {
//       name: "DRESS MATERIALS",
//       submenu: [
//         { name: "By Fabric", items: fabrics },
//         { name: "By Color", items: colors },
//       ],
//     },
//     {
//       name: "LEHENGAS",
//       submenu: [{ name: "By Type", items: lehengas }],
//     },
//     {
//       name: "DUPATTAS",
//       submenu: [
//         { name: "By Fabric", items: fabrics },
//         { name: "By Color", items: colors },
//       ],
//     },
//     {
//       name: "BLOUSES",
//       submenu: [
//         { name: "By Fabric", items: fabrics },
//         { name: "By Color", items: colors },
//       ],
//     },
//     {
//       name: "FABRICS",
//       submenu: [{ name: "By Type", items: fabricsCategory }],
//     },
//     {
//       name: "OUR COLLECTIONS",
//       submenu: [{ name: "By Theme", items: collections }],
//     },
//   ];

//   const toggleDropdown = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   return (
//     <header className="w-full sticky top-0 z-50 bg-white">
//       {/* Top Promo */}
//       <div className="w-full bg-red-900 text-white text-center text-sm h-10 flex items-center justify-center">
//         <span className="font-medium">Use code BANARASEE5 to get 5% off</span>
//       </div>

//       {/* Main Navbar */}
//       <div className="w-full shadow-md flex items-center justify-between h-20 px-4 md:px-8 relative">
//         {/* Left: Search */}
//         <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
//           <IconButton
//             onClick={() => setShowSearch(!showSearch)}
//             sx={{
//               color: "gray",
//               "&:hover": { color: "purple" },
//               transition: "0.3s",
//             }}
//           >
//             <SearchIcon fontSize="medium" />
//           </IconButton>

//           {/* Search Input */}
//           <Fade in={showSearch}>
//             <Box
//               sx={{
//                 position: "absolute",
//                 left: 40,
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 width: { xs: "160px", sm: "220px", md: "300px" },
//               }}
//             >
//               <TextField
//                 variant="outlined"
//                 placeholder="Search..."
//                 size="small"
//                 autoFocus
//                 fullWidth
//                 sx={{
//                   backgroundColor: "white",
//                   borderRadius: "25px",
//                   boxShadow: 2,
//                   "& .MuiOutlinedInput-root": { borderRadius: "25px" },
//                 }}
//               />
//             </Box>
//           </Fade>
//         </Box>

//         {/* Center: Logo */}
//         <div className="flex-1 flex items-center justify-center">
//           <img
//             src="https://www.banarasee.in/cdn/shop/files/banarasee_logo.png?v=1680148862"
//             onClick={() => navigate("/")}
//             alt="logo"
//             className="h-12 object-contain cursor-pointer"
//           />
//         </div>

//         {/* Right: User & Cart */}
//         <div className="flex items-center space-x-4 text-gray-700">
//           <FaUser
//             onClick={() => navigate("/login")}
//             className="text-2xl cursor-pointer hover:text-purple-700"
//           />
//           <IconButton onClick={() => setCartOpen(true)} sx={{ color: "black" }}>
//             <ShoppingCartIcon fontSize="medium" />
//           </IconButton>

//           {/* Hamburger menu - only mobile */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setOpen(!open)}
//               className="p-2 rounded-md text-gray-700 bg-white shadow"
//             >
//               {open ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Menu Section - Center Aligned */}
//       <nav className="w-full bg-white shadow-sm py-3 hidden lg:flex justify-center items-center">
//         <div className="flex space-x-8 text-sm font-medium text-gray-700">
//           {menuItems.map((item, index) => (
//             <div
//               key={item.name}
//               className="relative group"
//               onMouseEnter={() => setActiveDropdown(index)}
//               onMouseLeave={() => setActiveDropdown(null)}
//             >
//               <div className="cursor-pointer hover:text-red-700 flex items-center">
//                 {item.name}
//                 {item.submenu && <FaChevronDown className="ml-1 text-xs" />}
//               </div>

//               {item.submenu && activeDropdown === index && (
//                 <div
//                   className={`absolute left-25 transform -translate-x-1/2 mt-2 ${
//                     item.name === "SAREES" ? "w-[700px] grid grid-cols-3" : "w-[330px] grid grid-cols-2"
//                   } gap-6 bg-white border shadow-lg rounded-md py-4 z-50 px-6`}
//                 >
//                   {item.submenu.map((category) => (
//                     <div key={category.name}>
//                       <h3 className="font-semibold border-b pb-2">{category.name}</h3>
//                       <div className="space-y-2 mt-2 max-h-48 overflow-y-auto">
//                         {category.items.map((i) => (
//                           <div key={i} className="hover:text-red-700 cursor-pointer">
//                             {i}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 left-0 right-0 h-screen bg-white z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
//           open ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <div className="flex items-center justify-between px-4 py-4 shadow-md">
//           <img
//             src="https://www.banarasee.in/cdn/shop/files/banarasee_logo.png?v=1680148862"
//             onClick={() => navigate("/")}
//             alt="logo"
//             className="h-12 object-contain"
//           />
//           <button
//             onClick={() => setOpen(false)}
//             className="p-2 rounded-md text-gray-700 bg-white shadow"
//           >
//             <FaTimes className="text-xl" />
//           </button>
//         </div>

//         <div className="flex flex-col items-start mt-6 px-6 space-y-4">
//           {menuItems.map((item, index) => (
//             <div key={item.name} className="w-full">
//               <button
//                 onClick={() => toggleDropdown(index)}
//                 className="w-full flex justify-between items-center py-2 text-left hover:text-red-700 font-medium"
//               >
//                 {item.name}
//                 {item.submenu && <FaChevronDown className="ml-2" />}
//               </button>

//               {activeDropdown === index && item.submenu && (
//                 <div className="pl-4 mt-2 space-y-2">
//                   {item.submenu.map((sub) => (
//                     <div key={sub.name}>
//                       <p className="font-semibold py-1">{sub.name}</p>
//                       <div className="pl-4 space-y-1">
//                         {sub.items.map((i) => (
//                           <div key={i} className="hover:text-red-700 cursor-pointer">
//                             {i}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Cart Drawer */}
//       <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
//         <Box sx={{ width: { xs: 320, sm: 400 }, p: 3 }}>
//           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             <Typography variant="h6" fontWeight="bold">
//               YOUR CART
//             </Typography>
//             <IconButton onClick={() => setCartOpen(false)}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <Divider sx={{ my: 2 }} />

//           <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
//             <img
//               src="https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369"
//               alt="product"
//               style={{
//                 width: 60,
//                 height: 60,
//                 borderRadius: 8,
//                 objectFit: "cover",
//                 marginRight: 12,
//               }}
//             />
//             <Box sx={{ flex: 1 }}>
//               <Typography variant="subtitle1" fontWeight="bold">
//                 Banarasee Handwoven Plain Tissue Saree With Gold Zari Border & Lace
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Saree: 5.4m | Blouse: 0.88m | Yellow
//               </Typography>

//               <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
//                 <IconButton size="small">
//                   <RemoveIcon />
//                 </IconButton>
//                 <Typography sx={{ mx: 1 }}>2</Typography>
//                 <IconButton size="small">
//                   <AddIcon />
//                 </IconButton>
//                 <Typography sx={{ ml: "auto", fontWeight: "bold" }}>₹4,598.00</Typography>
//               </Box>
//             </Box>
//           </Box>

//           <Divider sx={{ my: 2 }} />

//           <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
//             <Typography variant="h6" fontWeight="bold">
//               SUBTOTAL
//             </Typography>
//             <Typography variant="h6" fontWeight="bold">
//               ₹4,598.00
//             </Typography>
//           </Box>

//           <Typography variant="body2" color="text.secondary" mb={3}>
//             Tax included and shipping calculated at checkout
//           </Typography>

//           <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
//             <TextField
//               placeholder="Discount Code"
//               size="small"
//               fullWidth
//               sx={{ backgroundColor: "#f9f9f9", borderRadius: 1 }}
//             />
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "black",
//                 "&:hover": { backgroundColor: "#333" },
//               }}
//             >
//               APPLY
//             </Button>
//           </Box>

//           <Typography variant="body2" sx={{ color: "purple", cursor: "pointer", mb: 3 }}>
//             🔖 Click here for discount codes
//           </Typography>

//           <Button
//             fullWidth
//             variant="contained"
//             sx={{
//               backgroundColor: "#f0c14b",
//               color: "black",
//               borderRadius: "25px",
//               fontWeight: "bold",
//               "&:hover": { backgroundColor: "#e6b800" },
//             }}
//           >
//             CHECK OUT
//           </Button>
//         </Box>
//       </Drawer>
//     </header>
//   );
// };

// export default Navbar;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaUser,
//   FaBars,
//   FaTimes,
//   FaHeart,
//   FaHome,
//   FaChevronDown,
// } from "react-icons/fa";
// import {
//   IconButton,
//   TextField,
//   Fade,
//   Box,
//   Drawer,
//   Typography,
//   Divider,
//   Button,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import CloseIcon from "@mui/icons-material/Close";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [showSearch, setShowSearch] = useState(false);
//   const [cartOpen, setCartOpen] = useState(false);

//   const fabrics = [
//     "Silk",
//     "Cotton",
//     "Georgette",
//     "Chiffon",
//     "Crepe",
//     "Organza",
//     "Linen",
//     "Chanderi",
//     "Banarasi",
//     "Pure Silk",
//     "Art Silk",
//     "Cotton Silk",
//     "Tussar Silk",
//     "Kanjivaram",
//     "Kora Silk",
//   ];
//   const colors = [
//     "Red",
//     "Blue",
//     "Green",
//     "Yellow",
//     "Pink",
//     "Purple",
//     "Orange",
//     "Black",
//     "White",
//     "Gold",
//   ];
//   const occasions = ["Festive", "Wedding"];
//   const lehengas = [
//     "All Lehengas",
//     "Art Silk Lehengas",
//     "Chanderi Lehengas",
//     "Georgette Lehengas",
//     "Mul Cotton Lehengas",
//     "Organza Lehengas",
//     "Silk Blend Lehengas",
//     "Rayon Lehengas",
//   ];
//   const fabricsCategory = [
//     "All Fabrics",
//     "Chanderi Fabrics",
//     "Katan Silk Fabrics",
//     "Satin",
//     "Silk Blend",
//   ];
//   const collections = [
//     "Raksha Bandhan",
//     "Monsoon Edit",
//     "Summer Cotton",
//     "Ameysa - Pure Silk Sarees",
//     "Festive Collection",
//     "Clearance",
//   ];

//   const menuItems = [
//     {
//       name: "HOME",
//       submenu: [
//         { name: "Home", icon: <FaHome className="mr-2" /> },
//         { name: "My Wishlist", icon: <FaHeart className="mr-2" /> },
//       ],
//     },
//     {
//       name: "SAREES",
//       submenu: [
//         { name: "By Fabric", items: fabrics },
//         { name: "By Color", items: colors },
//         { name: "By Occasion", items: occasions },
//       ],
//     },
//     {
//       name: "DRESS MATERIALS",
//       submenu: [
//         { name: "By Fabric", items: fabrics },
//         { name: "By Color", items: colors },
//       ],
//     },
//     {
//       name: "LEHENGAS",
//       submenu: [{ name: "By Type", items: lehengas }],
//     },
//     {
//       name: "DUPATTAS",
//       submenu: [
//         { name: "By Fabric", items: fabrics },
//         { name: "By Color", items: colors },
//       ],
//     },
//     {
//       name: "BLOUSES",
//       submenu: [
//         { name: "By Fabric", items: fabrics },
//         { name: "By Color", items: colors },
//       ],
//     },
//     {
//       name: "FABRICS",
//       submenu: [{ name: "By Type", items: fabricsCategory }],
//     },
//     {
//       name: "OUR COLLECTIONS",
//       submenu: [{ name: "By Theme", items: collections }],
//     },
//   ];

//   const toggleDropdown = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   return (
//     <header className="w-full sticky top-0 z-50 bg-white">
//       {/* Top Promo */}
//       <div className="w-full bg-red-900 text-white text-center text-sm h-10 flex items-center justify-center">
//         <span className="font-medium">Use code BANARASEE5 to get 5% off</span>
//       </div>

//       {/* Main Navbar */}
//       <div className="w-full shadow-md flex items-center justify-between h-20 px-4 md:px-8 relative">
//         {/* Left: Search */}
//         <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
//           <IconButton
//             onClick={() => setShowSearch(!showSearch)}
//             sx={{
//               color: "gray",
//               "&:hover": { color: "purple" },
//               transition: "0.3s",
//             }}
//           >
//             <SearchIcon fontSize="medium" />
//           </IconButton>

//           {/* Search Input */}
//           <Fade in={showSearch}>
//             <Box
//               sx={{
//                 position: "absolute",
//                 left: 40,
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 width: { xs: "160px", sm: "220px", md: "300px" },
//               }}
//             >
//               <TextField
//                 variant="outlined"
//                 placeholder="Search..."
//                 size="small"
//                 autoFocus
//                 fullWidth
//                 sx={{
//                   backgroundColor: "white",
//                   borderRadius: "25px",
//                   boxShadow: 2,
//                   "& .MuiOutlinedInput-root": { borderRadius: "25px" },
//                 }}
//               />
//             </Box>
//           </Fade>
//         </Box>

//         {/* Center: Logo */}
//         <div className="flex-1 flex items-center justify-center">
//           <img
//             src="https://www.banarasee.in/cdn/shop/files/banarasee_logo.png?v=1680148862"
//             onClick={() => navigate("/")}
//             alt="logo"
//             className="h-12 object-contain cursor-pointer"
//           />
//         </div>

//         {/* Right: User & Cart */}
//         <div className="flex items-center space-x-4 text-gray-700">
//           <FaUser
//             onClick={() => navigate("/login")}
//             className="text-2xl cursor-pointer hover:text-purple-700"
//           />
//           <IconButton onClick={() => setCartOpen(true)} sx={{ color: "black" }}>
//             <ShoppingCartIcon fontSize="medium" />
//           </IconButton>

//           {/* Hamburger menu - only mobile */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setOpen(!open)}
//               className="p-2 rounded-md text-gray-700 bg-white shadow"
//             >
//               {open ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
//             </button>
//           </div>
//         </div>
//       </div>

//      {/* Menu Section - Center Aligned */}
// <nav className="w-full bg-white shadow-sm py-3 hidden lg:flex justify-center items-center">
//   <div className="flex space-x-8 text-sm font-medium text-gray-700">
//     {menuItems.map((item, index) => (
//       <div
//         key={item.name}
//         className="relative"
//         onMouseEnter={() => setActiveDropdown(index)}
//         onMouseLeave={() => setActiveDropdown(null)}
//       >
//         {/* Main Menu Text */}
//         <div
//           className="cursor-pointer hover:text-red-700 flex items-center select-none"
//           onClick={() => {
//             if (item.name === "HOME") navigate("/");
//           }}
//         >
//           {item.name}
//           {item.submenu && <FaChevronDown className="ml-1 text-xs" />}
//         </div>

//         {/* Dropdown Menu */}
//         {item.submenu && activeDropdown === index && (
//           <div
//             className={`absolute left-1/2 transform -translate-x-1/2 mt-2 ${
//               item.name === "SAREES"
//                 ? "w-[500px] grid grid-cols-3 gap-6"
//                 : item.name === "HOME"
//                 ? "w-48 flex flex-col items-start"
//                 : "w-[400px] grid grid-cols-2 gap-6"
//             } bg-white border shadow-lg rounded-md py-4 z-50 px-6`}
//             onMouseEnter={() => setActiveDropdown(index)}
//             onMouseLeave={() => setActiveDropdown(null)}
//           >
//             {/* HOME dropdown vertically */}
//             {item.name === "HOME" ? (
//               <div className="flex flex-col w-full">
//                 {item.submenu.map((sub) => (
//                   <div
//                     key={sub.name}
//                     className="flex items-center w-full hover:bg-gray-100 rounded px-2 py-2 cursor-pointer"
//                     onClick={() => {
//                       setActiveDropdown(null);
//                       if (sub.name === "Home") navigate("/");
//                       else if (sub.name === "My Wishlist") navigate("/wishlist");
//                     }}
//                   >
//                     {sub.icon}
//                     <span>{sub.name}</span>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               item.submenu.map((category) => (
//                 <div key={category.name}>
//                   <h3 className="font-semibold border-b pb-2">{category.name}</h3>
//                   <div className="space-y-2 mt-2 max-h-48 overflow-y-auto">
//                     {category.items?.map((i) => (
//                       <div
//                         key={i}
//                         className="hover:text-red-700 cursor-pointer"
//                       >
//                         {i}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         )}
//       </div>
//     ))}
//   </div>
// </nav>


//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 left-0 right-0 h-screen bg-white z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
//           open ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <div className="flex items-center justify-between px-4 py-4 shadow-md">
//           <img
//             src="https://www.banarasee.in/cdn/shop/files/banarasee_logo.png?v=1680148862"
//             onClick={() => navigate("/")}
//             alt="logo"
//             className="h-12 object-contain"
//           />
//           <button
//             onClick={() => setOpen(false)}
//             className="p-2 rounded-md text-gray-700 bg-white shadow"
//           >
//             <FaTimes className="text-xl" />
//           </button>
//         </div>

//         <div className="flex flex-col items-start mt-6 px-6 space-y-4">
//           {menuItems.map((item, index) => (
//             <div key={item.name} className="w-full">
//               <button
//                 onClick={() => toggleDropdown(index)}
//                 className="w-full flex justify-between items-center py-2 text-left hover:text-red-700 font-medium"
//               >
//                 {item.name}
//                 {item.submenu && <FaChevronDown className="ml-2" />}
//               </button>

//               {activeDropdown === index && item.submenu && (
//                 <div className="pl-4 mt-2 space-y-2">
//                   {item.submenu.map((sub) => (
//                     <div key={sub.name}>
//                       <p className="font-semibold py-1">{sub.name}</p>
//                       <div className="pl-4 space-y-1">
//                         {sub.items?.map((i) => (
//                           <div key={i} className="hover:text-red-700 cursor-pointer">
//                             {i}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Cart Drawer */}
//       <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
//         <Box sx={{ width: { xs: 320, sm: 400 }, p: 3 }}>
//           <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             <Typography variant="h6" fontWeight="bold">
//               YOUR CART
//             </Typography>
//             <IconButton onClick={() => setCartOpen(false)}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <Divider sx={{ my: 2 }} />

//           <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
//             <img
//               src="https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369"
//               alt="product"
//               style={{
//                 width: 60,
//                 height: 60,
//                 borderRadius: 8,
//                 objectFit: "cover",
//                 marginRight: 12,
//               }}
//             />
//             <Box sx={{ flex: 1 }}>
//               <Typography variant="subtitle1" fontWeight="bold">
//                 Banarasee Handwoven Plain Tissue Saree With Gold Zari Border & Lace
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Saree: 5.4m | Blouse: 0.88m | Yellow
//               </Typography>

//               <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
//                 <IconButton size="small">
//                   <RemoveIcon />
//                 </IconButton>
//                 <Typography sx={{ mx: 1 }}>2</Typography>
//                 <IconButton size="small">
//                   <AddIcon />
//                 </IconButton>
//                 <Typography sx={{ ml: "auto", fontWeight: "bold" }}>₹4,598.00</Typography>
//               </Box>
//             </Box>
//           </Box>

//           <Divider sx={{ my: 2 }} />

//           <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
//             <Typography variant="h6" fontWeight="bold">
//               SUBTOTAL
//             </Typography>
//             <Typography variant="h6" fontWeight="bold">
//               ₹4,598.00
//             </Typography>
//           </Box>

//           <Typography variant="body2" color="text.secondary" mb={3}>
//             Tax included and shipping calculated at checkout
//           </Typography>

//           <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
//             <TextField
//               placeholder="Discount Code"
//               size="small"
//               fullWidth
//               sx={{ backgroundColor: "#f9f9f9", borderRadius: 1 }}
//             />
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "black",
//                 "&:hover": { backgroundColor: "#333" },
//               }}
//             >
//               APPLY
//             </Button>
//           </Box>

//           <Typography variant="body2" sx={{ color: "purple", cursor: "pointer", mb: 3 }}>
//             🔖 Click here for discount codes
//           </Typography>

//           <Button
//             fullWidth
//             variant="contained"
//             sx={{
//               backgroundColor: "#f0c14b",
//               color: "black",
//               borderRadius: "25px",
//               fontWeight: "bold",
//               "&:hover": { backgroundColor: "#e6b800" },
//             }}
//           >
//             CHECK OUT
//           </Button>
//         </Box>
//       </Drawer>
//     </header>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaBars,
  FaTimes,
  FaHeart,
  FaHome,
  FaChevronDown,
} from "react-icons/fa";
import {
  IconButton,
  TextField,
  Fade,
  Box,
  Drawer,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // =================== Data ===================
  const fabrics = [
    "Silk",
    "Cotton",
    "Georgette",
    "Chiffon",
    "Crepe",
    "Organza",
    "Linen",
    "Chanderi",
    "Banarasi",
    "Pure Silk",
    "Art Silk",
    "Cotton Silk",
    "Tussar Silk",
    "Kanjivaram",
    "Kora Silk",
  ];
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Pink",
    "Purple",
    "Orange",
    "Black",
    "White",
    "Gold",
  ];
  const occasions = ["Festive", "Wedding"];
  const lehengas = [
    "All Lehengas",
    "Art Silk Lehengas",
    "Chanderi Lehengas",
    "Georgette Lehengas",
    "Mul Cotton Lehengas",
    "Organza Lehengas",
    "Silk Blend Lehengas",
    "Rayon Lehengas",
  ];
  const fabricsCategory = [
    "All Fabrics",
    "Chanderi Fabrics",
    "Katan Silk Fabrics",
    "Satin",
    "Silk Blend",
  ];
  const collections = [
    "Raksha Bandhan",
    "Monsoon Edit",
    "Summer Cotton",
    "Ameysa - Pure Silk Sarees",
    "Festive Collection",
    "Clearance",
  ];

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
      ],
    },
    {
      name: "DRESS MATERIALS",
      submenu: [
        { name: "By Fabric", items: fabrics },
        { name: "By Color", items: colors },
      ],
    },
    {
      name: "LEHENGAS",
      submenu: [{ name: "By Type", items: lehengas }],
    },
    {
      name: "DUPATTAS",
      submenu: [
        { name: "By Fabric", items: fabrics },
        { name: "By Color", items: colors },
      ],
    },
    {
      name: "BLOUSES",
      submenu: [
        { name: "By Fabric", items: fabrics },
        { name: "By Color", items: colors },
      ],
    },
    {
      name: "FABRICS",
      submenu: [{ name: "By Type", items: fabricsCategory }],
    },
    {
      name: "OUR COLLECTIONS",
      submenu: [{ name: "By Theme", items: collections }],
    },
  ];

  const toggleDropdown = (index) =>
    setActiveDropdown(activeDropdown === index ? null : index);

  // =================== Animation Variants ===================
  const dropdownAnim = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const mobileMenuAnim = {
    hidden: { y: "-100%" },
    visible: { y: 0, transition: { duration: 0.35, ease: "easeOut" } },
    exit: { y: "-100%", transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      {/* Top Promo */}
      <div className="w-full bg-red-900 text-white text-center text-sm h-10 flex items-center justify-center">
        <span className="font-medium tracking-wide">
          Use code <strong>BANARASEE5</strong> to get 5% off ✨
        </span>
      </div>

      {/* =================== Main Navbar =================== */}
      <div className="w-full shadow-md flex items-center justify-between h-20 px-4 md:px-8 relative">
        {/* Left - Search */}
        <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={() => setShowSearch(!showSearch)}
            sx={{ color: "gray", "&:hover": { color: "#a30000" } }}
          >
            <SearchIcon fontSize="medium" />
          </IconButton>

          <Fade in={showSearch}>
            <Box
              sx={{
                position: "absolute",
                left: 40,
                top: "50%",
                transform: "translateY(-50%)",
                width: { xs: "160px", sm: "220px", md: "300px" },
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Search products..."
                size="small"
                fullWidth
                autoFocus
                sx={{
                  backgroundColor: "white",
                  borderRadius: "25px",
                  boxShadow: 2,
                  "& .MuiOutlinedInput-root": { borderRadius: "25px" },
                }}
              />
            </Box>
          </Fade>
        </Box>

        {/* Center - Logo */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://www.banarasee.in/cdn/shop/files/banarasee_logo.png?v=1680148862"
            alt="Banarasee Logo"
            className="h-12 object-contain cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Right - Icons */}
        <div className="flex items-center space-x-4 text-gray-700">
          <FaUser
            onClick={() => navigate("/login")}
            className="text-2xl cursor-pointer hover:text-red-800 transition-all"
          />
          <IconButton onClick={() => setCartOpen(true)} sx={{ color: "black" }}>
            <ShoppingCartIcon fontSize="medium" />
          </IconButton>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md text-gray-700 bg-white shadow"
            >
              {open ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* =================== Desktop Menu =================== */}
      <nav className="w-full bg-white py-3 hidden lg:flex justify-center items-center shadow-sm">
        <div className="flex space-x-10 text-sm font-semibold text-gray-700">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div
                className="cursor-pointer hover:text-red-700 flex items-center select-none transition-colors"
                onClick={() => {
                  if (item.name === "HOME") navigate("/");
                }}
              >
                {item.name}
                {item.submenu && <FaChevronDown className="ml-1 text-xs" />}
              </div>

              {/* Dropdown */}
              <AnimatePresence>
                {item.submenu && activeDropdown === index && (
                  <motion.div
                    variants={dropdownAnim}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={`absolute left-1/2 transform -translate-x-1/2 mt-2 ${
                      item.name === "SAREES"
                        ? "w-[500px] grid grid-cols-3 gap-6"
                        : item.name === "HOME"
                        ? "w-48 flex flex-col items-start"
                        : "w-[400px] grid grid-cols-2 gap-6"
                    } bg-white border shadow-xl rounded-md py-4 z-50 px-6`}
                  >
                    {item.name === "HOME" ? (
                      <div className="flex flex-col w-full">
                        {item.submenu.map((sub) => (
                          <div
                            key={sub.name}
                            className="flex items-center hover:bg-gray-100 rounded px-3 py-2 cursor-pointer transition"
                            onClick={() => {
                              setActiveDropdown(null);
                              if (sub.name === "Home") navigate("/");
                              else if (sub.name === "My Wishlist") navigate("/wishlist");
                            }}
                          >
                            {sub.icon}
                            <span>{sub.name}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      item.submenu.map((category) => (
                        <div key={category.name}>
                          <h3 className="font-semibold border-b pb-2 text-gray-800">
                            {category.name}
                          </h3>
                          <div className="space-y-2 mt-2 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
                            {category.items?.map((i) => (
                              <div
                                key={i}
                                className="hover:text-red-700 cursor-pointer transition"
                              >
                                {i}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </nav>

      {/* =================== Mobile Menu =================== */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenuAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 right-0 h-screen bg-white z-40 overflow-y-auto"
          >
            <div className="flex items-center justify-between px-4 py-4 shadow-md">
              <img
                src="https://www.banarasee.in/cdn/shop/files/banarasee_logo.png?v=1680148862"
                onClick={() => navigate("/")}
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

            <div className="flex flex-col items-start mt-6 px-6 space-y-4">
              {menuItems.map((item, index) => (
                <div key={item.name} className="w-full">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="w-full flex justify-between items-center py-2 text-left hover:text-red-700 font-medium"
                  >
                    {item.name}
                    {item.submenu && <FaChevronDown className="ml-2" />}
                  </button>

                  <AnimatePresence>
                    {activeDropdown === index && item.submenu && (
                      <motion.div
                        variants={dropdownAnim}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="pl-4 mt-2 space-y-2"
                      >
                        {item.submenu.map((sub) => (
                          <div key={sub.name}>
                            <p className="font-semibold py-1">{sub.name}</p>
                            <div className="pl-4 space-y-1">
                              {sub.items?.map((i) => (
                                <div
                                  key={i}
                                  className="hover:text-red-700 cursor-pointer"
                                >
                                  {i}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================== Cart Drawer =================== */}
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Box sx={{ width: { xs: 320, sm: 400 }, p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h6" fontWeight="bold">
              YOUR CART
            </Typography>
            <IconButton onClick={() => setCartOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
            <img
              src="https://www.banarasee.in/cdn/shop/files/IMG_0612_7f9543d0-ae1f-4e85-9dbc-2224490c344a.jpg?v=1760868369"
              alt="product"
              style={{
                width: 60,
                height: 60,
                borderRadius: 8,
                objectFit: "cover",
                marginRight: 12,
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                Banarasee Handwoven Plain Tissue Saree With Gold Zari Border
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Saree: 5.4m | Blouse: 0.88m | Yellow
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <IconButton size="small">
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ mx: 1 }}>2</Typography>
                <IconButton size="small">
                  <AddIcon />
                </IconButton>
                <Typography sx={{ ml: "auto", fontWeight: "bold" }}>₹4,598.00</Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              SUBTOTAL
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              ₹4,598.00
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary" mb={3}>
            Tax included & shipping calculated at checkout.
          </Typography>

          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            <TextField
              placeholder="Discount Code"
              size="small"
              fullWidth
              sx={{ backgroundColor: "#f9f9f9", borderRadius: 1 }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              APPLY
            </Button>
          </Box>

          <Typography
            variant="body2"
            sx={{ color: "purple", cursor: "pointer", mb: 3 }}
          >
            🔖 Click here for discount codes
          </Typography>

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#f0c14b",
              color: "black",
              borderRadius: "25px",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#e6b800" },
            }}
          >
            CHECK OUT
          </Button>
        </Box>
      </Drawer>
    </header>
  );
};

export default Navbar;
