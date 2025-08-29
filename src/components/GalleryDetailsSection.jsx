import { X } from 'lucide-react';
import React,{ useState,useRef } from 'react'

const GalleryDetailsSection = () => {
    const[close,setClose]=useState(false);
    const sectionRef=useRef(null);
  return (
  <section className="fixed h-screen w-full bg-black/20 top-[-20px] -mt-1 z-[1000000] opacity-0"  ref={sectionRef}>
     <div className="flex justify-end p-4">
      <X 
        className='text-white cursor-pointer hover:scale-110 transition-transform' 
        onClick={handleClose} 
      />
    </div>

  </section>
  )
}

export default GalleryDetailsSection