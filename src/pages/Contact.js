// Contact.js

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!window.grecaptcha) {
      setErrorMessage("reCAPTCHA not loaded. Please try again later.");
      return;
    }

    try {
      const token = await window.grecaptcha.execute(
        "6LdGhYgqAAAAAPc1qC3EjOoyKuzjcIyNIEqnOrBi",
        { action: "submit" }
      );

      // Add the reCAPTCHA token to the form data
      const formDataWithCaptcha = {
        ...formData,
        recaptchaToken: token,
      };

      // Send the form data to your server
      const response = await fetch(
        "https://api-f52ied62eq-uc.a.run.app/submitContact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataWithCaptcha),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSuccessMessage(
        "Thank you for your message! We will get back to you soon."
      );
      setFormData({ name: "", email: "", message: "" });
      setErrorMessage("");
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );
      setSuccessMessage("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Have questions or need help? Send us a message, and we’ll get back to
        you.
      </p>
      {successMessage && (
        <div className="bg-green-100 text-green-800 p-4 rounded mb-6 text-center">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-100 text-red-800 p-4 rounded mb-6 text-center">
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded p-3"
          />
        </div>
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded p-3"
          />
        </div>
        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
            rows="5"
            className="w-full border border-gray-300 rounded p-3"
          ></textarea>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
