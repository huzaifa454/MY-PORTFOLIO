import React from "react";
import pic from "../assets/image2.png";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-white cursor-default px-6 py-6"
    >
      <h1 className="text-4xl font-primary text-center">Get in Touch</h1>
      <p className="text-center text-lg mt-4 max-w-2xl">
        We are here to answer your questions and provide the support you need.
        Reach out to us using any of the options below!
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mt-12 space-y-8 md:space-y-0">
        <div className="flex flex-col items-center w-full md:w-1/3 text-center">
          <FaPhoneAlt className="text-primary text-4xl mb-4" />
          <h2 className="text-xl font-bold">Phone</h2>
          <p className="text-lg ">032-5220-8246</p>
          <p className="text-sm text-primary">Mon-Fri, 9am - 6pm</p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={pic}
            alt="Contact"
            className="w-48 h-48 rounded-full border-4 border-primary shadow-lg hover:scale-105 transition-transform"
          />
        </div>
        <div className="flex flex-col items-center w-full md:w-1/3 text-center">
          <FaEnvelope className="text-primary text-4xl mb-4" />
          <h2 className="text-xl font-bold">Email</h2>
          <p className="text-lg">zhdevelopers0@gmail.com</p>
          <p className="text-sm text-primary">We respond within 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
