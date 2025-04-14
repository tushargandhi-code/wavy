"use client"
import React, { useState } from 'react'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import politics from '@/constants/politics'
import Link from "next/link"
import Post3 from '@/components/Post3'
import allArticles from '@/constants/all'
import Newsletter from '@/components/Newsletter'

const page = () => {
  const [visibleAfterNewsletter, setVisibleAfterNewsletter] = useState(2)

  const handleLoadMore = () => {
    setVisibleAfterNewsletter(prev => prev + 2)
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        
        {/* Main Article Section */}
        <div className="flex-1 py-20">
          
          {/* First 3 posts */}
          {politics.slice(0, 3).map((post, index) => (
            <Link
              key={index}
              href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
              passHref
            >
              <Blogs
                maincontent={post.title}
                maindesc={post.contents[0]}
                mainimg={`/articles/${post.imgUrl}`}
                author={post.authorName}
                days={post.articleNumber}
                title=""
                maintitle=""
                buttontext=""
                buttoncolor=""
                buttonhovercolor=""
              />
            </Link>
          ))}

          {/* Newsletter in the middle */}
          <Newsletter />

          {/* Next posts after newsletter */}
          {politics.slice(3, 3 + visibleAfterNewsletter).map((post, index) => (
            <Link
              key={index}
              href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
              passHref
            >
              <Blogs
                maincontent={post.title}
                maindesc={post.contents[0]}
                mainimg={`/articles/${post.imgUrl}`}
                author={post.authorName}
                days={post.articleNumber}
                title=""
                maintitle=""
                buttontext=""
                buttoncolor=""
                buttonhovercolor=""
              />
            </Link>
          ))}

          {/* Load More button if more posts exist */}
          {3 + visibleAfterNewsletter < politics.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMore}
                className="mt-6 px-6 py-2 text-left text-white font-semibold rounded-lg transition-all duration-300 bg-gradient-to-r
              from-pink-500 to-orange-400 hover:cursor-pointer hover:from-orange-500 hover:to-pink-600 shadow-md hover:shadow-lg"
              >
                Load More
              </button>
            </div>
          )}
        </div>

        {/* Sidebar Section */}
        <div className="w-full mb-24 bg-orange-100 sticky top-32 lg:mt-32 rounded-xl shadow-lg lg:h-[550px] px-6 lg:w-[350px]">
          <h2 className="text-black mt-8 hover:text-pink-500 hover:cursor-pointer text-left font-bold tracking-wide text-3xl sm:text-xl mb-6">
            Popular Articles
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {allArticles.slice(0, 3).map((post, index) => (
              <Link
                key={index}
                href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                passHref
              >
                <div className="bg-grey-200 mt-2 w-full">
                  <Post3
                    pimg={`/articles/${post.imgUrl}`}
                    pheading={post.title}
                    pcontent={post.contents}
                    articleNumber={post.articleNumber}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default page
