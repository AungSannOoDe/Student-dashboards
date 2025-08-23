"use client"
import React from 'react'
import useSWR from 'swr'
import { eventApiUrl, fechEvent } from '@/services/event';
import { useParams, useRouter } from 'next/navigation';
import EventEditForm from './EventEditForm';
import EventEditSkeleton from './EventEditSkeleton';
const EventEditSection = () => {
    const{id}=useParams();
    const{data,isLoading,error}=useSWR(`${eventApiUrl}/${id}`,fechEvent)
    if(isLoading){
        return <EventEditSkeleton/>
    }
  return (
    <section className='pl-6'>
   <h1>Event edit Form</h1>
   <EventEditForm  event={data?.data}  />
</section>
  )
}

export default EventEditSection