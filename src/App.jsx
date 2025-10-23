
import React, { useEffect } from "react";
// import { FaWhatsapp } from "react-icons/fa";
import Homes from './Page/Homes/index'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './Shared/Navbar/Navbar'



function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Homes/>} />
        {/* <Route path="/home_page" element={<Home_Page/>} /> */}
       



      </Routes>

      {/* WhatsApp  Button */}
      {/* <a
        href="https://wa.me/917317018945"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 z-50 left-10 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={30} />
      </a> */}
    </>
  );
}

export default App;