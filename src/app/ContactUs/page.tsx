"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { AlertCircle, CheckCircle } from "lucide-react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_phone: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const result = await emailjs.send(
        "service_7y4j6r8",
        "template_hlcjgmj",
        formData,
        "tvPyMSr9E1JDQJtMu"
      );

      console.log("Email sent successfully!", result.text);
      setStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });
      setFormData({
        from_name: "",
        from_email: "",
        from_phone: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Failed to send email:", error.text);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setLoading(false);
      // Auto-hide the status message after 5 seconds
      setTimeout(() => {
        setStatus({ type: null, message: "" });
      }, 5000);
    }
  };

  return (
    <div className="mt-16 bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
      <div className="flex flex-col space-y-4">
        {status.type && (
          <div
            className={`${
              status.type === "success"
                ? "bg-green-100 border-green-500 text-green-700"
                : "bg-red-100 border-red-500 text-red-700"
            } border-l-4 p-4 rounded flex items-center space-x-2`}
          >
            {status.type === "success" ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <span>{status.message}</span>
          </div>
        )}

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.from_name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.from_email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="from_phone"
            placeholder="Your Phone"
            className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.from_phone}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white font-bold py-3 px-6 rounded-md hover:bg-gray-800 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
