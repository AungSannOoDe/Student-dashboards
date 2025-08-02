import { BookMarked } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MaleCard = () => {
  return (
<div className="mt-10 space-y-10">
    <h1 className="text-center font-bold text-4xl">Select for Male</h1>
    <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 sm:gap-y-20 sm:px-6">
         <div className="  w-full ">
          <img src={`/images/1.png`} alt="" className="object-cover w-[100%] " />
          <div className="flex justify-between">
            <h1>Mg Mg</h1>
             <button className="outline-1 px-3 py-1 self-center bg-stone-50 outline-stone-600"><BookMarked /></button>
          </div>
          <div className="flex justify-between">
            <Link href={'/clients/${id}'} className="underline text-stone-600">View Details</Link>
            <button className="bg-blue-400  text-white px-3 py-1 rounded-xs">Select</button>
          </div>
         </div>
        <div className="   w-full">
          <img src={`/images/2.png`} alt="" className="object-cover w-[100%]" />
          <div className="flex justify-between">
            <h1>Mg Mg</h1>
             <button className="outline-1 px-3 py-1 self-center bg-stone-50 outline-stone-600"><BookMarked /></button>
          </div>
          <div className="flex justify-between">
            <Link href={'/clients/details'} className="underline text-stone-600">View Details</Link>
            <button className="bg-blue-400  text-white px-3 py-1 rounded-xs">Select</button>
          </div>
         </div>
        <div className="   w-full">
          <img src={`/images/2.png`} alt="" className="object-cover w-[100%]" />
          <div className="flex justify-between">
            <h1>Mg Mg</h1>
             <button className="outline-1 px-3 py-1 self-center bg-stone-50 outline-stone-600"><BookMarked /></button>
          </div>
          <div className="flex justify-between">
            <button className="underline text-stone-600">View Details</button>
            <button className="bg-blue-400  text-white px-3 py-1 rounded-xs">Select</button>
          </div>
         </div>
        <div className="   w-full">
          <img src={`/images/2.png`} alt="" className="object-cover w-[100%]" />
          <div className="flex justify-between">
            <h1>Mg Mg</h1>
             <button className="outline-1 px-3 py-1 self-center bg-stone-50 outline-stone-600"><BookMarked /></button>
          </div>
          <div className="flex justify-between">
            <button className="underline text-stone-600">View Details</button>
            <button className="bg-blue-400  text-white px-3 py-1 rounded-xs">Select</button>
          </div>
         </div>
        <div className="   w-full">
          <img src={`/images/3.png`} alt="" className="object-cover w-[100%]" />
          <div className="flex justify-between">
            <h1>Mg Mg</h1>
             <button className="bg-blue-400 self-center text-white px-3 py-1 rounded-xs">Select</button>
          </div>
          <div className="flex justify-between">
            <button className="underline text-stone-600">View Details</button>
            <button className="outline-1 px-3 py-1  bg-stone-50 outline-stone-600"><BookMarked /></button>
           
          </div>
         </div>
        <div className="   w-full">
          <img src={`/images/3.png`} alt="" className="object-cover  w-[100%]" />
          <div className="flex justify-between">
            <h1>Mg Mg</h1>
             <button className="bg-blue-400 self-center text-white px-3 py-1 rounded-xs">Select</button>
          </div>
          <div className="flex justify-between">
            <button className="underline text-stone-600">View Details</button>
            <button className="outline-1 px-3 py-1  bg-stone-50 outline-stone-600"><BookMarked /></button>
           
          </div>
         </div>
        <div className="   w-full">
          <img src={`/images/3.png`} alt="" className="object-cover w-[100%]" />
          <div className="flex justify-between">
            <h1>Mg Mg</h1>
             <button className="bg-blue-400 self-center text-white px-3 py-1 rounded-xs">Select</button>
          </div>
          <div className="flex justify-between">
            <button className="underline text-stone-600">View Details</button>
            <button className="outline-1 px-3 py-1  bg-stone-50 outline-stone-600"><BookMarked /></button>
           
          </div>
         </div>
      <div className="   w-full">
        <img src={`/images/3.png`} alt="" className="object-cover w-[100%]" />
        <div className="flex justify-between">
          <h1>Mg Mg</h1>
           <button className="bg-blue-400 self-center text-white px-3 py-1 rounded-xs">Select</button>
        </div>
        <div className="flex justify-between">
          <button className="underline text-stone-600">View Details</button>
          <button className="outline-1 px-3 py-1  bg-stone-50 outline-stone-600"><BookMarked /></button>
           
        </div>
       </div>
    </div>
  </div>
  )
}

export default MaleCard