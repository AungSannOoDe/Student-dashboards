"use client";
import { BookMarked } from 'lucide-react';
import React from 'react'

const HistorySection = () => {
  return (
    <section className='max-w-7xl mx-auto h-screen '>
        <div className="">
            <h1 className='text-center font-bold'>History of Section</h1>
        <p className="text-stone-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi assumenda praesentium quas rem eveniet eum aut repudiandae, natus est modi provident, suscipit, tempora corporis facere? Tenetur qui consequuntur eius deleniti error fugit officiis provident aut esse aperiam ipsa, accusamus rerum vero cumque vel! Hic quam minima incidunt rerum, qui perferendis, autem pariatur illum soluta quibusdam voluptatem animi commodi provident, natus at iusto! Laudantium iste totam obcaecati magni illo, earum perferendis itaque rerum suscipit eligendi! Sunt beatae temporibus recusandae eveniet veritatis ex rem doloribus expedita enim labore ad corporis, similique laudantium quas corrupti laboriosam nemo quo id hic quae facilis. Officia.</p>
        </div>
        <div className="w-3/4 mx-auto flex text-lg pointer-events-auto   text-stone-500 justify-around  mt-4">
          <p>All</p>
          <p>2021</p>
          <p>2022</p>
          <p>2023</p>
          <p>2024</p>
        </div>
        <div className="mt-10 space-y-10">
            <h1 className="text-center font-bold text-4xl">2024's King Queen  selections</h1>
            <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 sm:gap-y-20 sm:px-6">
                <div className="   w-full">
                  <img src={`/images/3.png`} alt="" className="object-cover w-[100%]" />
                  <div className="flex justify-between">
                    <h1>Mg Mg</h1>
                    <button className="underline text-stone-600">View Details</button>
                  </div>
                 </div>
                <div className="   w-full">
                  <img src={`/images/3.png`} alt="" className="object-cover  w-[100%]" />
                  <div className="flex justify-between">
                    <h1>Mg Mg</h1>
                    <button className="underline text-stone-600">View Details</button>
                  </div>
                 </div>
                <div className="   w-full">
                  <img src={`/images/3.png`} alt="" className="object-cover w-[100%]" />
                  <div className="flex justify-between">
                    <h1>Mg Mg</h1>
                    <button className="underline text-stone-600">View Details</button>
                  </div>
                 </div>
              <div className="   w-full">
                <img src={`/images/3.png`} alt="" className="object-cover w-[100%]" />
                <div className="flex justify-between">
                  <h1>Mg Mg</h1>
                  <button className="underline text-stone-600">View Details</button>
                </div>
               </div>
            </div>
          </div>
    </section>
  )
}

export default HistorySection