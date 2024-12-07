import React from "react";
import { product } from "./Data";
import { FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

function Products() {
  return (
    <section id="Products"  className="max-w-7xl scroll-smooth bg-red-300 mx-auto px-4 py-12">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
        Our <span className="text-white">Products</span>
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {product.map((item, index) => (
          <div
            className="bg-white  rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            key={index}
          >
            {/* Icons Section */}
            <div className="flex justify-end space-x-3 p-4">
              <FaShoppingCart className="text-gray-600 hover:text-yellow-400 cursor-pointer transition duration-300" />
              <FaHeart className="text-gray-600 hover:text-red-500 cursor-pointer transition duration-300" />
              <FaEye className="text-gray-600 hover:text-blue-500 cursor-pointer transition duration-300" />
            </div>

            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <p className="text-lg font-medium text-gray-800 mb-2">
                {item.name}
              </p>
              <p className="text-lg font-bold text-yellow-400 mb-4">
                Price: ${item.price}
              </p>
              <div className="flex text-blue-500 text-center justify-center p-2 mb-3">
                <FaStar  />
                <FaStar  />
                <FaStar  />
                <FaStar  />
                <FaRegStarHalfStroke />

              </div>
              <button className="w-full px-4 py-2 bg-yellow-400 text-white font-semibold rounded-md hover:bg-yellow-500 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
