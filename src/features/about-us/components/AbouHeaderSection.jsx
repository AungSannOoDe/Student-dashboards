import React from 'react'

const AbouHeaderSection = () => {
  return (
<section className="w-full h-[400px] bg-blue-500 -z-10 bg-[url('/images/HeroSection.jpg')]  bg-blend-multiply bg-cover bg-center flex items-center  justify-center   " >
   <div className="relative">
    <h1 className='text-white text-center'>About us</h1>
     <div className="bg-white w-full  h-1 absolute top-10"></div>
   </div>
   </section>
  )
}

export default AbouHeaderSection