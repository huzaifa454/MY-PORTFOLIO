import React from "react";
import picture from "../assets/pic2.jpeg";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="text-white min-h-screen flex flex-col justify-center items-center py-16">
      <h1 className="text-center text-white text-3xl font-primary mb-8">
        Get in Touch
      </h1>

      <div className="flex justify-between items-center w-full max-w-screen-md">
        <p className="flex items-center">
          <FaPhoneAlt className="text-[#00FFF5] mr-2 text-3xl" />
          Phone:{" "}
          <span className="text-[#00FFF5] font-semibold ml-1">03252208246</span>
        </p>
        <div className="flex flex-col items-center">
          <div className="w-72 h-72 md:w-96 md:h-96 bg-black overflow-hidden rounded-full border-4 border-primary shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl mb-8">
            <img
              src={picture}
              alt="image"
              className="object-cover rounded-full py-6"
            />
          </div>
        </div>
        <p className="flex items-center">
          <FaEnvelope className="text-[#00FFF5] mr-2 text-3xl" />
          Email:{" "}
          <span className="text-[#00FFF5] font-semibold ml-1">
            huzaifaaamir454@gmail.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
