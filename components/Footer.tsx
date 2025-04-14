'use client';


import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {

  


  return (
    <footer className="bg-orange-100 text-white py-12">
      <div className="container max-w-7xl lg:space-x-10 mx-auto px-5 flex flex-col md:flex-row md:flex-nowrap justify-between gap-10 md:gap-0">

        {/* Logo */}
        <div className="w-full md:w-1/4 flex flex-col justify-center md:justify-start items-center md:items-start border-b md:border-b-0 
        md:border-r border-gray-400 pb-6 md:pb-0">
          <Link href="/">
            <Image 
              src="/logo-wavy.png" 
              alt="MensXP Logo" 
              className="w-40" 
              width={100} 
              height={100} 
            />
          </Link>
          <h2 className='text-gray-700 mt-2 text-center md:text-left'>
            A super modern theme following the latest trends with premium Membership and fully compatible
          </h2>
          <h2 className='text-gray-700 font-bold text-center md:text-left'>Ghost</h2>

  


        </div>

        {/* Categories */}
        <div className="w-full md:w-1/4 text-black text-center md:text-left px-4 border-b md:border-b-0 md:border-r border-gray-400 pb-6 md:pb-0">
          <h2 className="text-xl font-bold hover:text-blue-500 mb-3 cursor-pointer">CATEGORIES</h2>
          <nav className="space-y-2">
            <Link href="/etfs" className="block hover:text-blue-500 hover:underline">ETFS</Link>
            <Link href="/finance" className="block hover:text-blue-500 hover:underline">Finance</Link>
            <Link href="/stock" className="block hover:text-blue-500 hover:underline">Stock</Link>
            <Link href="/trading" className="block hover:text-blue-500 hover:underline">Trading</Link>
          </nav>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4 text-black text-center md:text-left px-4 border-b md:border-b-0 md:border-r border-gray-400 pb-6 md:pb-0">
          <h2 className="text-xl font-bold hover:text-blue-500 mb-3 cursor-pointer">QUICK LINKS</h2>
          <nav className="space-y-2">
            <Link href="/privacy" className="block hover:text-blue-500 hover:underline">Privacy Policy</Link>
            <Link href="/contact" className="block hover:text-blue-500 hover:underline">Contact Us</Link>
            <Link href="/about" className="block hover:text-blue-500 hover:underline">About Us</Link>
          </nav>
        </div>

        {/* Legal */}
        <div className="w-full md:w-1/4 text-black text-center md:text-left px-4">
          <h2 className="text-xl font-bold hover:text-blue-500 mb-3 cursor-pointer">LEGAL</h2>
          <nav className="space-y-2">
            <Link href="/terms" className="block hover:text-blue-500 hover:underline">Terms And Conditions</Link>
            <Link href="/dmca" className="block hover:text-blue-500 hover:underline">DMCA</Link>
            <Link href="/cookies" className="block hover:text-blue-500 hover:underline">Cookies Policy</Link>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t text-black border-gray-700 pt-6 text-center text-sm">
        2025 NEXUS NEWS | ALL RIGHTS RESERVED
      </div>
    </footer>
  )
}

export default Footer