import React from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="Contact" className="p-8 bg-pink-300">
      <h1 className="text-4xl font-bold text-center mb-8">
        Contact <span className="text-blue-500">Us</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Google Map */}
        <div className="w-full lg:w-1/2 transition-transform duration-300 hover:scale-105">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8230994816645!2d73.06564307407567!3d31.418999652146063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922433fa1e31cf5%3A0x3319f9d38dd6092!2sWhites%20Castle%20Pizza%20Jinnah%20Colony!5e0!3m2!1sen!2s!4v1733571932242!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>

        {/* Contact Form */}
        <form className="w-full lg:w-1/2 transition-transform duration-300 hover:scale-105 bg-gray-300 p-8 rounded-lg shadow-lg ">
          <h3 className="text-2xl font-bold text-red-400 text-center">
            Get in Touch with Us
          </h3>
          {/* Name Input */}
          <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500">
            <FaUser className="text-blue-500 text-xl" />
            <input
              type="text"
              placeholder="Your Name..."
              className="w-full outline-none rounded-lg text-gray-600"
            />
          </div>
          {/* Email Input */}
          <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500">
            <MdEmail className="text-blue-500 text-xl" />
            <input
              type="email"
              placeholder="Your Email..."
              className="w-full outline-none rounded-lg text-gray-600"
            />
          </div>
          {/* Phone Input */}
          <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-blue-500">
            <FaPhoneAlt className="text-blue-500 text-xl" />
            <input
              type="number"
              placeholder="Your Phone Number..."
              className="w-full outline-none rounded-lg text-gray-600"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Contact Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
