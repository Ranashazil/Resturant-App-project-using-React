import React from 'react';
import AboutImage from '../assets/images/download2.jpeg';

function About() {
  return (
    <section id='About' className="max-w-7xl mx-auto px-4 bg-gray-400 py-12">
      <h1 className="text-4xl font-bold text-center text-yellow-400">About</h1> 
      <span className="text-4xl font-bold text-center text-white">Us</span>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={AboutImage}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col bg-yellow-100 justify-center">
          <h3 className="text-3xl font-bold text-gray-800">Our Food Speciality</h3>
          <p className="mt-4 text-lg text-gray-600 transition-transform duration-300 hover:translate-x-2">
            Italian Restaurant: Famous for pasta dishes like spaghetti, lasagna, and pizza.
            <br />
            Indian Restaurant: Specializes in curries, tandoori dishes, and biryanis.
            <br />
            Japanese Restaurant: Known for sushi, sashimi, and ramen.
          </p>
          <p className="mt-4 text-lg text-gray-600 transition-transform duration-300 hover:translate-x-2">
            Mexican Restaurant: Famous for tacos, burritos, enchiladas, and guacamole.
            <br />
            French Restaurant: Known for fine dining, with specialties like coq au vin, croissants, and crème brûlée.
            <br />
            American Restaurant: Often features burgers, steaks, and barbecue ribs.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="px-8 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default About;
