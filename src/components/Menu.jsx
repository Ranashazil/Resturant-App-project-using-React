import React from "react";
import { menu } from "./Data";

function Menu() {
  return (
    <section id="Menu" className="max-w-7xl bg-sky-300 mx-auto px-4 py-12">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
        Our <span className="text-white">Menu</span>
      </h1>
      <h2 className="text-2xl font-bold text-yellow-300 mb-2">
                Try Your Taste Here
              </h2>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menu.map((item, index) => (
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            key={index}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg text-gray-600">{item.name}</p>
                <p className="text-lg font-bold text-yellow-400">${item.price}</p>
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

export default Menu;
