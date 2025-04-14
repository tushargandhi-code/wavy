"use client"
import React from 'react'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import politics from '@/constants/politics'
import Link from "next/link";
import Post3 from '@/components/Post3'
import allArticles from '@/constants/all'
import Newsletter from '@/components/Newsletter'

const page = () => {

  


  return (
    <div className="bg-white">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row ">

  
    {/* Main Article Section */}
    <div className="flex-1 py-20">
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

      <Newsletter/>

      {politics.slice(4,7).map((post, index) => (
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


    {/* <Newsletter /> */}


  </div>

   



{/* <main className='mt-16 p-4'>
   
  <Slider/>
    
</main>

<div className="bg-white">
<div className="max-w-7xl mx-auto lg:p-4">


<div className='pt-10'>


<div className="flex justify-between mb-4 items-center sm:px-4 lg:px-0 px-6 ">
  <Link href="/etfs"  >
    <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:underline hover:text-blue-700 cursor-pointer text-black font-bold">
      ETFS
    </span>
  </Link>
  <Link href="/etfs">
    <button
      className= "px-6 py-2 hover:cursor-pointer text-black hover:text-blue-700 rounded-lg transition duration-300  "
    >
      See all
    </button>
  </Link>
</div>

<div className='bg-white mt-8 '>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-2  w-full  gap-4">
  {politics.slice(5,7).map((post, index) => (
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
</div>

<div className='bg-white mt-4'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full  mx-auto">
  {politics.slice(1, 5).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white w-[330px]">
        <Posts  
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

<div className='mt-10 '>


<div className="flex justify-between p-8 items-center sm:px-4 lg:px-0 px-6 ">
  <Link href="/finance"  >
    <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:text-blue-700 hover:underline cursor-pointer text-black font-bold">
      FINANCE
    </span>
  </Link>
  <Link href="/finance">
    <button
      className= "px-6 py-2 hover:cursor-pointer text-black hover:text-blue-700 rounded-lg transition duration-300 "
    >
      See all
    </button>
  </Link>
</div>


<div className='bg-white '>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-3  w-full  gap-4">
  {money.slice(5,8).map((post, index) => (
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
</div>

<div className='bg-white mt-4'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full ">
  {money.slice(1, 5).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white w-[330px]">
        <Posts  
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

<div className='mt-10'>


<div className="flex justify-between p-8 items-center sm:px-4 lg:px-0 px-6 ">
  <Link href="/stock"  >
    <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:text-blue-700 hover:underline cursor-pointer text-black font-bold">
      STOCK
    </span>
  </Link>
  <Link href="/stock">
    <button
      className= "px-6 py-2 hover:cursor-pointer text-black hover:text-blue-700 rounded-lg transition duration-300  "
    >
      See all
    </button>
  </Link>
</div>

<div className='bg-white'>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full  mx-auto">
  {usNews.slice(0, 4).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white w-[330px]">
        <Posts  
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

<div className='mt-10'>


<div className="flex justify-between p-8 items-center sm:px-4 lg:px-0 px-6 ">
  <Link href="/trading"  >
    <span className="uppercase text-xl sm:text-3xl md:text-5xl hover:underline hover:text-blue-700 cursor-pointer text-black font-bold">
      TRADING
    </span>
  </Link>
  <Link href="/trading">
    <button
      className= "px-6 py-2 hover:cursor-pointer  rounded-lg transition duration-300 text-black hover:text-blue-700 "
    >
      See all
    </button>
  </Link>
</div>


<div className='bg-white '>
 <div className="grid  grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center w-full ">
  {entertainment.slice(1, 13).map((post, index) => (
    <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
      <div className="bg-white w-[330px]">
        <Posts  
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
</div>
</div>*/}


<Footer/> 

    </div>


  )
}


export default page


