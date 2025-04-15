'use client';

import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for subscribing with ${email}!`);
    setEmail("")
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500  text-white py-10 mr-8 ml-8 rounded-2xl px-4 sm:px-8 lg:px-16">
      <div className="  text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-white text-base sm:text-lg mb-2">
          Subscribe to our email newsletter to get the latest posts 
        </p>
        <p className="text-white text-base sm:text-lg mb-6">
          delievered right to your email
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 sm:gap-0">
  <input
    type="email"
    required
    placeholder="Enter your email address"
    className="w-full sm:flex-1 lg:ml-44  bg-white px-4 py-3 rounded-lg sm:rounded-r-none text-black focus:outline-none focus:ring-2
     focus:ring-pink-500"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <button
    type="submit"
    className="w-full sm:w-auto hover:cursor-pointer bg-pink-600 hover:bg-pink-700 lg:mr-32 text-white px-6 py-3
     rounded-lg sm:rounded-l-none font-semibold transition duration-300"
  >
    Get Started
  </button>
</form>

      </div>
    </section>
  );
};

export default Newsletter;
