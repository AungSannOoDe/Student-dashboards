"use client";
import { fetchHistory, fetchHistoryDetail, historyApiUrl, histroyDetailUrl } from '@/services/history';
import React from 'react'
import useSWR from 'swr'
import DetailSkeleton from './DetailSkeleton';
import parse from 'html-react-parser';
import { useParams } from 'next/navigation';
const HistoryDetailSection = () => {
    const {id}=useParams()
    const{data,isLoading,error}=useSWR(`${histroyDetailUrl}/${id}`,fetchHistoryDetail)
    if(isLoading){
        return <DetailSkeleton/>
    }
  return (
<section className='max-w-7xl mx-auto grid  px-5 grid-cols-2 mt-10 gap-x-10 h-screen' >
    <div className="">
      {
      data?.data.image_1_url ?  <img src={data?.data.image_1_url} className='w-full h-[450px]  object-cover' /> :<img src="/image-not-found.png" className='w-full h-[450px]  object-cover' />
      }
          <div className="flex  justify-between mt-4 ">
          {
          data?.data.image_2_url ?  <img src={data?.data.image_2_url} className='w-1/4  ' /> :<img src={`/image-not-found.png`} className='w-1/4' />
          }
           {
          data?.data.image_3_url ?  <img src={data?.data.image_3_url} className='w-1/4' /> :<img src="/image-not-found.png" className='w-1/4' />
          }
           {
          data?.data.image_4_url ?  <img src={data?.data.image_4_url} className='w-1/4' /> :<img src="/image-not-found.png" className='w-1/4' />
          }
          </div>
      </div>
      <div>
      <div className="flex flex-col space-y-6">
           <p className='text-4xl font-bold'>{data?.data.elector_name}</p>
           <p className='text-2xl'>{data?.data.gender}</p>
           <p className='text-2xl'>{data?.data.phone}</p>
         <p >{data?.data.address}</p>
         <div className="ProseMirror">
           {
            parse(data?.data.description || "Hello")
           }
         </div>
          </div>
      </div>
   </section>
  )
}

export default HistoryDetailSection