import React from 'react';
import downloadImage from '../assets/images/download.jpeg';

function Home() {
  return (
    <>
      <section id='Home' className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${downloadImage})` }}>
        {/* Overlay for blur effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
          <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            We have the no.1 <span className="text-yellow-400">food in Pakistan</span>
          </h3>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl">
          At SS Restaurant, we bring you a delightful fusion of flavors, ambiance, and hospitality. Nestled in the heart of [Location], our establishment is known for its carefully curated menu featuring traditional and modern dishes
          </p>
          <button className="mt-8 px-6 py-3 bg-yellow-400 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-yellow-500 hover:animate-bounce transition duration-300">
            Taste it
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
