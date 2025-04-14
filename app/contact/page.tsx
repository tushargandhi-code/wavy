"use client";
import React, { useState } from "react";
import Footer from "../../components/Footer";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    let errorMsg = "";
    if (name === "name" || name === "message") {
      if (/\d/.test(value)) {
        errorMsg = "Must not contain numbers";
      }
    }
    if (name === "email") {
      if (!/^\S+@\S+\.\S+$/.test(value)) {
        errorMsg = "Enter a valid email";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required!");
      return;
    }

    if (errors.name || errors.email || errors.message) {
      alert("Please fix the errors before submitting.");
      return;
    }

    alert("Submitted Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="bg-gray-50 text-gray-800 min-h-screen">
        {/* Header */}
        <header className="bg-gradient-to-r from-indigo-500 via-purple-500   to-pink-500 text-white py-10 text-center">
          <h1 className="text-4xl mt-14 font-bold">Contact Wavy</h1>
          <p className="text-md mt-2 text-gray-300">
            Reach out with questions, feedback, or just to say hello — we’d love to hear from you.
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl text-indigo-700 font-semibold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="mt-6 px-6 py-2 text-white font-semibold rounded-lg transition-all duration-300 bg-gradient-to-r
   from-pink-500 to-orange-400 hover:cursor-pointer hover:from-orange-500 hover:to-pink-600 shadow-md hover:shadow-lg"
              >
                Submit
              </button>
            </form>
          </section>

          {/* Contact Info */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl text-indigo-700 font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> New York, Carmel, 10512
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> support@wavy.com
            </p>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
