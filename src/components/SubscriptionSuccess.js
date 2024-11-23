import React from "react";

const SubscriptionSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-400">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Subscription Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for subscribing to our newsletter. Stay tuned for the latest
          updates and exclusive offers!
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default SubscriptionSuccess;
