import React from "react";
import { FaFacebookF, FaPinterestP, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
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
  );
};

export default Footer;
