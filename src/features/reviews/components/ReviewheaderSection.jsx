"use client"
import Link from 'next/link'
import React from 'react'

const ReviewheaderSection = () => {
  return (
   <section className="w-full h-[400px] bg-blue-500 -z-10 bg-[url('/images/HeroSection.jpg')]  bg-blend-multiply bg-cover bg-center flex items-center  justify-center   " >
     <div className="">
       <div className="relative">
        <h1 className='text-white text-center'>Review</h1>
         <div className="bg-white w-full  h-1 absolute top-10"></div>
       </div>
       <div className="ml-5">
          <Link href={"/"} className='text-white'>Home</Link> <span className='text-white'>/</span> <span className='text-white'>Review</span>
       </div>
     </div>
    
   </section>
  )
}

export default ReviewheaderSection