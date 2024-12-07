import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      {/* Social Links */}
      <div className="container mx-auto text-center mb-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-100">
          Follow Us
        </h3>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=61553081346688"
            className="hover:text-blue-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="#"
            className="hover:text-pink-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/rana-shazil-2629402a0/"
            className="hover:text-blue-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="#"
            className="hover:text-red-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterest size={28} />
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <a
            href="#Home"
            className="hover:text-blue-400 bg-yellow-500 rounded-lg p-3 hover:scale-150 transition-transform duration-200 font-bold "
          >
            Home
          </a>
          <a
            href="#About"
            className="hover:text-blue-400 bg-yellow-500 rounded-lg p-3 hover:scale-150 transition-transform duration-200 font-bold "
          >
            About Us
          </a>
          <a
            href="#Menu"
            className="hover:text-blue-400 bg-yellow-500 rounded-lg p-3 hover:scale-150 transition-transform duration-200 font-bold "
          >
            Menu
          </a>
          <a
            href="#Products"
            className="hover:text-blue-400 bg-yellow-500 rounded-lg p-3 hover:scale-150 transition-transform duration-200 font-bold "
          >
            Products
          </a>
          <a
            href="#Review"
            className="hover:text-blue-400 bg-yellow-500 rounded-lg p-3 hover:scale-150 transition-transform duration-200 font-bold "
          >
            Review
          </a>
          <a
            href="#Contact"
            className="hover:text-blue-400 bg-yellow-500 rounded-lg p-3 hover:scale-150 transition-transform duration-200 font-bold "
          >
            Contact
          </a>
          <a
            href="#Blog"
            className="hover:text-blue-400 bg-yellow-500 rounded-lg p-3 hover:scale-150 transition-transform duration-100 font-bold "
          >
            Blog
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto text-center mt-6">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
