"use client";
import { LucideCircleUser } from 'lucide-react'
import React from 'react'

const AblumSection = () => {
  return (
    <section className='pl-6 grid grid-cols-2 gap-10'>
        <div className="space-y-5">
           <div className="h-[300px]  w-full bg-amber-300"></div>
           <div className="flex  gap-4">
            <div className="h-[100px] w-full bg-blue-400"></div>
            <div className="h-[100px] w-full bg-blue-400"></div>
            <div className="h-[100px] w-full bg-blue-400"></div>
           </div>
           <div className="">
                <button className='bg-blue-600 px-3 py-2 w-full text-white rounded-sm '>Update Ablum</button>
             </div>
        </div>
        <div className=" p-6 max-w-lg order-1   space-y-4.5">
            <div className="flex items-center gap-2">
              <LucideCircleUser className="size-5 text-blue-500  " />
              <h4 className="font-medium text-xl">Elector Information</h4>
            </div>
            <div className="space-y-5">
              <dl className=" flex  items-center">
                <dt className="text-stone-500 w-[150px] text-sm  dark:text-white">
                  User Name
                </dt>
                <dd className="text-sm dark:text-stone-400">dddd</dd>
              </dl>
              <dl className=" flex  items-center">
                <dt className="text-stone-500 w-[150px] text-sm dark:text-white">
                  Email Address
                </dt>
                <dd className="text-sm dark:text-stone-400">exapfff</dd>
              </dl>
              <dl className=" flex  items-center">
                <dt className="text-stone-500 w-[150px] text-sm dark:text-white">
                  Role
                </dt>
                <dd className="text-sm dark:text-stone-400">User</dd>
              </dl>
            </div>
             <div className="">
                <button className='bg-blue-600 px-3 py-2 w-1/2 text-white rounded-sm '>Update Elector</button>
             </div>
          </div>
    </section>
  )
}

export default AblumSection