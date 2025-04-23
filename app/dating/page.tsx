'use client';

import React, { useState } from 'react'
import Footer from '../../components/Footer'

import CreationDate from '@/components/Date'
import usNews from '@/constants/usnews';
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/components/Breadcrumb';



const Entertainment = () => {
  const [visiblePosts, setVisiblePosts] = useState(12) 

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 12) 
  }

  return (
    <>
      <div className='bg-white'>
        <div className='mt-20 pt-8 text-black text-center  flex flex-col justify-center'>
        <div className="max-w-7xl text-black px-6 lg:px-28">
       <Breadcrumb />
        </div>
          

          <div className='max-w-7xl mx-auto lg:p-4 text-left'>
          {/* {entertainment.slice(0,1).map((post,index) => (
          <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
            <Blogs
            maincontent={post.title}
            maindesc= {post.contents[0]}
            mainimg={`/articles/${post.imgUrl}`}
            author={post.authorName}
            days={post.articleNumber}
            title={post.section}
            maintitle={post.section}
            buttontext='see all'
            buttoncolor='bg-orange-500'
            buttonhovercolor='hover:bg-blue-600'
            />
        
            </Link>
          ))} */}


                 <div className="flex justify-between mb-4 items-center sm:px-4 lg:px-0 px-6 ">
                  <Link href="/dating"  >
                    <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:underline hover:text-blue-700 cursor-pointer
                     text-black font-bold">
                      DATING
                    </span>
                  </Link>
                  
           </div>

           {/* <div className='bg-white mt-8 '>
           <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-2  w-full  gap-4">
            {entertainment.slice(5,7).map((post, index) => (
              <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
                <div className="bg-white ">
                  <Post2  
                    pimg={`/articles/${post.imgUrl}`} 
                    pheading={post.title}  
                    pcontent={post.contents} 
                    articleNumber={post.articleNumber}
                  />
                </div>
              </Link>
            ))}
          </div>
          </div> */}


            <div className="grid mt-6 grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center w-full  mx-auto">
              {usNews.slice(0, visiblePosts).map((post, index) => (
                <Link 
                  key={index} 
                  href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} 
                  passHref 
                  className='bg-white p-4 lg:p-0'
                >
                  <Image 
                    src={`/blogassets/${post.imgUrl}`} 
                    width={1000} 
                    height={1000} 
                    alt={post.title} 
                    className='h-[250px] xl:h-[200px] w-full rounded-xl shadow-md object-cover transition-transform duration-300 ease-in-out
                    hover:scale-105 hover:brightness-110'
                  />
                  <h2 className='mt-3 text-xl text-left font-bold text-black'>{post.title}</h2>
                  <div className='mt-6 flex'>
              <Image 
                src={`/authors/${post.authorName}.jpg`} 
                alt="" 
                width={100} 
                height={100} 
                className="rounded-full object-cover object-center  size-8 "/>
  
                <div className='flex mb-0 lg:mb-8'>
                <Link href={`/authors/${post.authorName.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase()}`}>
                <p className='text-pink-600 hover:text-black font-medium mt-1 ml-4  text-sm md:text-sm'>By {post.authorName}</p>
                </Link>
                <p className="text-gray-500 ml-12 lg:ml-32 mt-1 text-sm ">
                    <CreationDate articleNumber={post.articleNumber} />
                  </p>
                </div>
              </div>
                </Link>
              ))}
            </div>


            {visiblePosts < usNews.length && (
              <div className='flex justify-center mt-8'>
                <button 
                  onClick={loadMore} 
                  className='mt-6 px-6 py-2 text-white font-semibold rounded-lg transition-all duration-300 bg-gradient-to-r
   from-pink-500 to-orange-400 hover:cursor-pointer hover:from-orange-500 hover:to-pink-600 shadow-md hover:shadow-lg'
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>

        <div className='h-20 bg-white'></div>
        <Footer/>
      </div>
    </>
  )
}

export default Entertainment
