import React from 'react'
import Footer from '../../components/Footer'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Wavy and what we do.",
  keywords: ["Stock Market", "About", "Trading", "ETFS", "Finance"],
};


const About = () => {
  return (
    <>

    
    
<div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500   to-pink-500 text-white py-10 text-center">
        <h1 className="text-4xl mt-14 font-bold">About Wavy</h1>
        <p className="text-md mt-2 text-gray-300">
          Your trusted source for ETF insights, stock trading strategies, and financial news.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* Who We Are */}
        <section>
          <h2 className="text-2xl text-indigo-700  font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-600 text-md leading-relaxed">
            Wavy is a digital publication focused on delivering accurate, timely, and insightful content about the financial markets. Founded by a team of analysts, traders, and financial writers, we are committed to simplifying the complexities of finance for everyday investors and enthusiasts.
          </p>
          <p className="text-gray-600 text-md leading-relaxed mt-4">
            We believe in the power of informed investing. Our goal is to equip our readers with the knowledge they need to navigate a constantly evolving economic landscape with confidence and clarity.
          </p>
        </section>

        {/* Our Mission */}
        <section>
          <h2 className="text-2xl text-indigo-700  font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 text-md leading-relaxed">
            At Wavy, our mission is to democratize access to quality financial information. We strive to bridge the gap between Wall Street and the everyday investor by delivering well-researched, data-driven articles and analysis that help our readers make smarter financial decisions.
          </p>
          <p className="text-gray-600 text-md leading-relaxed mt-4">
            We maintain editorial independence, uphold journalistic integrity, and focus on clarity, transparency, and real-world value in everything we publish.
          </p>
        </section>

        {/* What We Cover */}
        <section>
          <h2 className="text-2xl text-indigo-700  font-semibold mb-4">What We Cover</h2>
          <ul className="list-disc list-inside text-md text-gray-600 space-y-2">
            <li><strong>ETFs:</strong> In-depth analysis of exchange-traded funds, including sector-specific trends, fund performance, and risk assessment.</li>
            <li><strong>Stock Trading:</strong> Daily market recaps, technical analysis, breakout watchlists, and strategy breakdowns for both beginners and active traders.</li>
            <li><strong>Finance News:</strong> Breaking stories and macroeconomic developments that shape market sentiment and impact investment decisions.</li>
            <li><strong>Education:</strong> Step-by-step guides, terminology explainers, and portfolio-building basics for retail investors.</li>
            <li><strong>Opinion & Commentary:</strong> Insights from industry professionals, economic outlooks, and thoughtful commentary on current events.</li>
          </ul>
        </section>

        {/* Editorial Approach */}
        <section>
          <h2 className="text-2xl text-indigo-700  font-semibold mb-4">Our Editorial Approach</h2>
          <p className="text-gray-600 text-md leading-relaxed">
            Every piece of content published on Wavy goes through a rigorous editorial process to ensure accuracy, clarity, and fairness. Our writers adhere to strict standards and verify information using reputable sources.
          </p>
          <p className="text-gray-600 text-md leading-relaxed mt-4">
            We avoid hype and sensationalism — our focus is on delivering value. Whether its an ETF breakdown or a market opinion, we back our work with data, charts, and historical context.
          </p>
        </section>

        {/* Our Readers */}
        <section>
          <h2 className="text-2xl text-indigo-700  font-semibold mb-4">Who Reads Wavy?</h2>
          <p className="text-gray-600 text-md leading-relaxed">
            Our audience includes individual investors, active traders, financial advisors, and anyone seeking to better understand how the markets work. Whether you are just getting started with ETFs or optimizing your trading strategy, Wavy delivers insights tailored to your level.
          </p>
        </section>
      </main>
    </div>

<Footer/>
    </>
  )
}

export default About
