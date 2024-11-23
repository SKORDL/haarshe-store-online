import React from "react";
import { AlertCircle } from "lucide-react";

export default function ErrorStripe() {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center">
      <AlertCircle className="w-16 h-16 text-red-500 mb-6" />

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        Payment Processing Error
      </h2>

      <p className="text-gray-600 mb-6 max-w-md">
        We encountered an issue while processing your payment. Don't worry - no
        charges were made to your account. Please try again or contact support
        if the problem persists.
      </p>

      <a
        href="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
      >
        Return to Homepage
      </a>
    </div>
  );
}
