"use client";
import { eventApiUrl, fechEvent } from '@/services/event';
import React from 'react'
import useSWR from 'swr'

const IndexEvent = () => {
  const{data,isLoading,error}=useSWR(eventApiUrl,fechEvent);
  console.log(data);
  if(isLoading){
    return<>loading...</>;
  }
  return (
<section className="mt-6">
    <h1 className="text-center font-bold  underline  text-stone-600  font-bold text-4xl  mb-6">ပွဲအစီအစဉ်များ</h1>
    <section className=" relative   max-w-7xl mx-auto  after:content-['']  after:absolute after:w-[6px] after:h-[100%] after:top-0 after:bg-black  after:left-[50%] after:-ml-3px after:z-1 animate-moveline">
      {
        data?.data.map((event,index)=>(
        <div key={index}  className={`px-[50px] py-[10px] relative w-[50%] move-down container ${index % 2 === 0 ? 'left-0' : 'left-[50%]'}`}>
          <div  className={`w-[50px] h-[50px] bg-stone-600 rounded-full absolute z-10 top-[32px] 
          ${index % 2 === 0 ? '-right-[20px]' : '-left-[20px]'}`}  />
          <div className="px-[30px] py-[20px] bg-blue-500 relative rounded-md ">
            <h2>{event.event_name}</h2>
            <small>{event.event_start_time}</small>
            <p>{event.event_participant}</p>
            <span className={`absolute top-1/2 w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent 
            ${index % 2 === 0 ? 'right-0 border-l-[15px] border-l-blue-500 -translate-y-1/2 translate-x-full' : 'left-0 border-r-[15px] border-r-blue-500 -translate-y-1/2 -translate-x-full'}`} ></span>
          </div>
        </div>
        ))
      }
      
    </section>
   
  </section>
  )
}

export default IndexEvent