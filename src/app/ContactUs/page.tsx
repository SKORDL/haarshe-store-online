"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          // Reset the form
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error.text);
        }
      );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left side content */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">GET IN TOUCH WITH US</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The Most Relevant information. 100% Privacy Protected! Find what you
          are looking for Here. 99% Match on Your Search Query. Only relevant
          search results, Click here and Find. All the Answers. Discover us now!
          Multiple sources combined. Easy Access To Information.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-xl">🏠</span>
            <div>
              <p className="font-semibold">Our Location</p>
              <p className="text-gray-600">
                Los Angeles, CA 90504, United States
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xl">📞</span>
            <div>
              <p className="font-semibold">Phone Number</p>
              <p className="text-gray-600">(332) 772-3392</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xl">✉️</span>
            <div>
              <p className="font-semibold">Email Address</p>
              <p className="text-gray-600">salesamz@haarsheonline.net</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side form */}
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white font-bold py-3 px-6 rounded-md hover:bg-gray-800 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
