import React from "react";
import { blog } from "./Data";

function Blogs() {
  return (
    <section id="Blog" className="p-8 bg-indigo-300">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our <span className="text-blue-500">Blogs</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blog.map((item, index) => (
          <div
            className="bg-slate-400 shadow-lg rounded-lg p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            key={index}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {item.name}
              </h2>
              <p className="text-gray-600 font-semibold mb-2">
                Price: <span className="text-blue-500">${item.price}</span>
              </p>
              <p className="text-white text-lg mb-2">
                Started by Shazi since: {item.startingDate}
              </p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
