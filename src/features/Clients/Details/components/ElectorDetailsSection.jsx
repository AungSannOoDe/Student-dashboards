"use client";
import Spinner from '@/components/Spinner';
import { ablumsApiUrl, detailsUrl, electorApiUrl, electorDeailsApiUrl, fetchElectors } from '@/services/electors';

import { LucideCircleUser } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React from 'react'
import useSWR from 'swr';

const ElectorDetailsSection = () => {
  const {id}=useParams();
  const{data:ablums,isLoading,error}=useSWR(`${ablumsApiUrl}/${id}`,fetchElectors)
  const{data:electors,isLoading:detailsLoading,error:detailsError}=useSWR(`${detailsUrl}/${id}`,fetchElectors)
  console.log(electors);
  return (
 <section className='pl-6 grid grid-cols-2 gap-10'>
    {
      isLoading ? (
        <Spinner />
      ) : ablums.data.length > 0 ? (
        ablums.data.map((item) => (
          <div className="space-y-5" key={item.id}>
            <div className="h-[300px] w-full">
              <img src={item.image_1_url} alt="" className='h-[300px] w-full object-cover' />
            </div>
            <div className="flex gap-4">
              <div className="h-[100px] w-full">
                <img src={item.image_2_url} alt=""   className='h-[100px] w-full object-cover' />
              </div>
              <div className="h-[100px] w-full">
                <img src={item.image_3_url} alt="" className="h-[100px] w-full  object-cover"  />
              </div>
              <div className="h-[100px] w-full bg-blue-400"></div>
            </div>
            <div>
              <button className="bg-blue-600 px-3  py-2 w-full text-white rounded-sm">
                Update Album
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="space-y-5">
          <div className="h-[300px] w-full">
            <img src={`/images/image-not-found.png`} alt="" />
          </div>
          <div className="flex gap-4">
            <div className="h-[100px] w-full">
              <img src={`/images/image-not-found.png`} alt="" />
            </div>
            <div className="h-[100px] w-full">
              <img src={`/images/image-not-found.png`} alt="" />
            </div>
            <div className="h-[100px] w-full">
              <img src={`/images/image-not-found.png`} alt="" />
            </div>
          </div>
          <div>
            <Link href={`/dashboard/ablum/create`} className="bg-blue-600 px-3  py-2 w-full text-white rounded-sm">
              Create Album
            </Link>
          </div>
        </div>
      )
    }

    <div className="p-6 max-w-lg order-1 space-y-4.5">
    <div className="flex items-center gap-2">
      <LucideCircleUser className="size-5 text-blue-500" />
      <h4 className="font-medium text-xl">Elector Information</h4>
    </div>
    {
        detailsLoading ? (
          "loading..."
        ) :  (
          <>
            <div className="space-y-5">
              <dl className="flex items-center">
                <dt className="text-stone-500 w-[150px] text-sm dark:text-white">User Name</dt>
                <dd className="text-sm dark:text-stone-400">{electors.data.elector_name}</dd>
              </dl>
              <dl className="flex items-center">
                <dt className="text-stone-500 w-[150px] text-sm dark:text-white">Email Address</dt>
                <dd className="text-sm dark:text-stone-400">{electors.data.address}</dd>
              </dl>
              <dl className="flex items-center">
                <dt className="text-stone-500 w-[150px] text-sm dark:text-white">gender</dt>
                <dd className="text-sm dark:text-stone-400">{electors.data.gender}</dd>
              </dl>
            </div>
            <Link href={`/dashboard/elector/${id}/edit`} className="bg-blue-500 text-white text-center px-3 py-2 w-full">
              Edit
            </Link>
            </>
        ) 
    }
    </div>
   </section>
  )
}

export default ElectorDetailsSection