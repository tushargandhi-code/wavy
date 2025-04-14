import React from 'react'

import Footer from '../../components/Footer'

import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Cookie Policy",
}

const CookiesPolicy = () => {
  return (
    <>
      <div className="bg-gray-50 text-gray-800 min-h-screen">
        {/* Header */}
        <header className="bg-gradient-to-r from-indigo-500 via-purple-500   to-pink-500 text-white py-10 text-center">
          <h1 className="text-4xl mt-14  font-bold">Cookies Policy</h1>
          <p className="text-md mt-2 text-gray-300">
            Learn how Wavy uses cookies and similar technologies to enhance your browsing experience.
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
          {/* What Are Cookies? */}
          <section>
            <h2 className="text-2xl text-indigo-700 font-semibold mb-4">What Are Cookies?</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              Cookies are small data files stored on your device when you visit websites. They help improve functionality, analyze usage, and deliver personalized content. Wavy uses cookies to enhance performance and tailor your experience.
            </p>
            <p className="text-gray-600 text-md leading-relaxed mt-4">
              Some cookies are essential for the operation of our website, while others help us understand user behavior and improve our content.
            </p>
          </section>

          {/* How We Use Cookies */}
          <section>
            <h2 className="text-2xl text-indigo-700 font-semibold mb-4">How We Use Cookies</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              At Wavy, we use cookies for a variety of purposes, including:
            </p>
            <ul className="list-disc list-inside text-md text-gray-600 space-y-2 mt-4">
              <li><strong>Essential Cookies:</strong> Enable core functionality like security, network management, and accessibility.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our site so we can improve user experience.</li>
              <li><strong>Performance Cookies:</strong> Monitor site performance and gather data on technical issues.</li>
              <li><strong>Advertising Cookies:</strong> Deliver relevant advertisements and track campaign effectiveness across platforms.</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences for a more personalized experience.</li>
            </ul>
          </section>

          {/* Your Choices */}
          <section>
            <h2 className="text-2xl text-indigo-700 font-semibold mb-4">Managing Cookies</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              You can control and manage cookies through your browser settings. Most browsers allow you to reject or delete cookies at any time. However, please note that disabling cookies may impact the functionality of some parts of our site.
            </p>
            <p className="text-gray-600 text-md leading-relaxed mt-4">
              You can also opt out of certain third-party cookies used for advertising through industry opt-out tools.
            </p>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <h2 className="text-2xl text-indigo-700 font-semibold mb-4">Third-Party Cookies</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              Some cookies may be placed by third-party services we use, such as analytics platforms or advertising networks. We do not control these cookies and encourage you to review their privacy policies.
            </p>
          </section>

          {/* Updates to This Policy */}
          <section>
            <h2 className="text-2xl text-indigo-700 font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              Wavy may update this Cookies Policy from time to time. We encourage you to review this page periodically for any changes. Your continued use of our site signifies your agreement to the updated terms.
            </p>
          </section>
        </main>
      </div>

      <Footer />
    </>
  )
}

export default CookiesPolicy
