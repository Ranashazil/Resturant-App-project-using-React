import React from "react";
import quoteImage from "../assets/images/images.1.png";
import { review } from "./Data";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";

function Review() {
  return (
    <section id="Review" className="max-w-7xl bg-green-300 mx-auto px-4 py-12">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
        Customer's <span className="text-blue-600">Review</span>
      </h1>

      {/* Review Grid */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {review.map((item, index) => (
          <div
            className="bg-green-400 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105"
            key={index}
          >
            {/* Quote Image */}
            <img
              src={quoteImage}
              alt="Quote"
              className="w-12 h-12 mx-auto mb-4"
            />

            {/* Review Description */}
            <p className="text-gray-600 italic text-center mb-4">
              "{item.description}"
            </p>

            {/* Reviewer Info */}
            <div className="flex items-center space-x-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-14 h-14 rounded-full border-2 border-yellow-400"
              />
              <p className="text-lg font-medium text-gray-800">{item.name}</p>
            </div>

            {/* Star Rating */}
            <div className="flex justify-center text-yellow-400 mt-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Review;
