// Contact.js

import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Obrada promena u unosu
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Obrada slanja forme
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!window.grecaptcha) {
      setErrorMessage("reCAPTCHA nije učitan. Molimo pokušajte kasnije.");
      return;
    }

    try {
      const token = await window.grecaptcha.execute(
        process.env.REACT_APP_RECAPTCHA_SITE_KEY,
        { action: "submit" }
      );

      const formDataWithCaptcha = {
        ...formData,
        recaptchaToken: token,
      };

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
        throw new Error(data.error || "Došlo je do greške");
      }

      setSuccessMessage(
        "Hvala vam na poruci! Odgovorićemo vam uskoro u vezi sa projektima kuća."
      );
      setFormData({ name: "", email: "", message: "" });
      setErrorMessage("");
    } catch (error) {
      console.error("Greška prilikom slanja kontakt forme:", error);
      setErrorMessage(
        error.message || "Došlo je do greške. Molimo pokušajte ponovo."
      );
      setSuccessMessage("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <Helmet>
        <title>Kontaktirajte nas - Projekti kuća</title>
        <meta
          name="description"
          content="Kontaktirajte nas za više informacija o projektima kuća. Pošaljite poruku, i uskoro ćemo vam odgovoriti."
        />
        <meta
          name="keywords"
          content="projekat kuća, projekti kuća, kontakt, arhitektura, planovi kuća"
        />
        <meta name="author" content="Vaša firma" />
      </Helmet>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Kontaktirajte nas za Projekat Kuće
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Imate pitanja ili Vam je potrebna pomoć? Pošaljite nam poruku u vezi sa
        projektom kuće i mi ćemo vam se uskoro javiti.
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
        {/* Polje za Ime */}
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Ime
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Unesite Vaše ime"
            className="w-full border border-gray-300 rounded p-3"
          />
        </div>
        {/* Polje za Email */}
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
            placeholder="Unesite Vaš email"
            className="w-full border border-gray-300 rounded p-3"
          />
        </div>
        {/* Polje za Poruku */}
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Poruka
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Unesite Vašu poruku sa pitanjima o projektovanju kuće"
            rows="5"
            className="w-full border border-gray-300 rounded p-3"
          ></textarea>
        </div>
        {/* Dugme za Slanje */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Pošalji
        </button>
      </form>
    </div>
  );
};

export default Contact;
