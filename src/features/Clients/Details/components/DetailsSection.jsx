"use client"
import { electorDeailsApiUrl, fetchElectors } from '@/services/electors';
import { useParams } from 'next/navigation'
import React from 'react'
import useSWR from 'swr';
import DetailSkeleton from './DetailSkeleton';

const DetailsSection = () => {
  const {id}=useParams();
  const  {data,isLoading,error}=useSWR(`${electorDeailsApiUrl}/${id}`,fetchElectors)
  console.log(data);
if(isLoading){
  return <DetailSkeleton/>
}
  return (
   <section className='max-w-7xl mx-auto grid  px-5 grid-cols-2 mt-10 gap-x-10'>
    <div className="">
        <img src="../images/1.png" className='w-full h-[450px]  object-cover' />
        <div className="flex  justify-between mt-4 ">
        <img src="../images/4.png" className='w-1/4' />
            <img src="../images/2.png" className='w-1/4'  />
            <img src="../images/3.png" className='w-1/4'/>
        </div>
    </div>
    <div className="flex flex-col space-y-10">
     <p className='text-4xl font-bold'>{data?.elector_name}</p>
     <p className='text-2xl'>{data?.gender}</p>
     <p className='text-2xl'>{data?.phone}</p>
   <p >{data?.address}</p>
   <button className='bg-blue-500 py-3 text-white'>Select</button>
    </div>
   </section>
  )
}

export default DetailsSection