// Contact.js
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async e => {
    e.preventDefault();
    await addDoc(collection(db, 'contacts'), formData);
    // Handle success (e.g., show a thank you message)
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for name, email, and message */}
    </form>
  );
};

export default Contact;
