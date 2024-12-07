import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { cart as initialCart } from "./Data"; // Import directly from Data.js
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState(initialCart); // Use the cart from Data.js
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  // Function to remove an item from the cart
  const handleRemoveItem = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  return (
    <>
<header className="bg-yellow-200 shadow-md sticky top-0 z-40 w-full">
  <div className="flex items-center justify-between py-4 px-4 md:px-6">
    {/* Logo */}
    <a href="#" className="flex items-center">
      <img src={Logo} alt="Logo" className="h-12 rounded-sm" />
    </a>

    {/* Navigation Links */}
    <nav className="hidden md:flex space-x-6">
      <a
        className="text-gray-600 hover:text-gray-900 hover:underline font-medium transition duration-200"
        href="#Home"
      >
        Home
      </a>
      <a
        className="text-gray-600 hover:text-gray-900 hover:underline font-medium transition duration-200"
        href="#About"
      >
        About
      </a>
      <a
        className="text-gray-600 hover:text-gray-900 hover:underline font-medium transition duration-200"
        href="#Menu"
      >
        Menu
      </a>
      <a
        className="text-gray-600  hover:text-gray-900 hover:underline font-medium transition duration-200"
        href="#Products"
      >
        Products
      </a>
      <a
        className="text-gray-600 hover:text-gray-900 hover:underline font-medium transition duration-200"
        href="#Review"
      >
        Review
      </a>
      <a
        className="text-gray-600 hover:text-gray-900 hover:underline font-medium transition duration-200"
        href="#Contact"
      >
        Contact
      </a>
      <a
        className="text-gray-600 hover:text-gray-900 hover:underline font-medium transition duration-200"
        href="#Blog"
      >
        Blog
      </a>
    </nav>

    {/* Search and Icons */}
    <div className="flex items-center space-x-1">
      <IoSearchOutline
        onClick={() => setShowSearch(!showSearch)}
        className="text-gray-600 hover:text-gray-900 text-xl cursor-pointer transition duration-200"
      />
      {showSearch && (
        <div className="relative">
          <input
            id="search"
            placeholder="Plz Search Here..."
            className="w-60 px-4 py-2 text-sm text-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <label htmlFor="search" className="sr-only">
            Search
          </label>
        </div>
      )}
      <IoCartOutline
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="text-gray-600 hover:text-gray-900 text-xl cursor-pointer transition duration-200"
      />
      <CiMenuBurger
        className="text-gray-600 hover:text-gray-900 text-xl cursor-pointer transition duration-200 block md:hidden"
        onClick={() => setIsMenuOpen(true)}
      />
    </div>
  </div>
</header>


      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <RxCross2
            className="text-gray-600 hover:text-red-600 cursor-pointer text-2xl"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
        <nav className="p-4 space-y-4">
          <a href="#Home" className="block text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#About" className="block text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#Menu" className="block text-gray-600 hover:text-gray-900">
            Menu
          </a>
          <a
            href="#Products"
            className="block text-gray-600 hover:text-gray-900"
          >
            Products
          </a>
          <a
            href="#Review"
            className="block text-gray-600 hover:text-gray-900"
          >
            Review
          </a>
          <a
            href="#Contact"
            className="block text-gray-600 hover:text-gray-900"
          >
            Contact
          </a>
          <a href="#Blog" className="block text-gray-600 hover:text-gray-900">
            Blog
          </a>
        </nav>
      </div>

      {/* Cart Drawer */}
      <div
        className={`fixed top-28 right-0 h-full w-80 bg-white shadow-lg transition-transform duration-300 z-50 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <RxCross2
            className="text-gray-600 hover:text-red-600 cursor-pointer text-2xl"
            onClick={() => setIsCartOpen(false)}
          />
        </div>
        <div className="p-4 space-y-4">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div
                className="flex items-center border-b pb-4 mb-4 last:border-none last:pb-0 last:mb-0"
                key={index}
              >
                <RxCross2
                  onClick={() => handleRemoveItem(index)}
                  className="text-gray-500 hover:text-red-600 cursor-pointer text-lg mr-4"
                />
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-gray-800 font-semibold text-sm">
                    {item.name}
                  </h3>
                  <div className="text-gray-500 text-sm">${item.price}</div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>
        <div className="p-4">
          <a
            href="#"
            className="block bg-blue-500 text-white text-center font-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Check Out
          </a>
        </div>
      </div>

      {/* Overlay */}
      {(isCartOpen || isMenuOpen) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => {
            setIsCartOpen(false);
            setIsMenuOpen(false);
          }}
        ></div>
      )}
    </>
  );
}

export default Navbar;
