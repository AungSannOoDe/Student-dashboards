"use client";
import React from 'react'
import EventAction from './EventAction'
import { useState } from 'react';
import EventSkeletonSection from './EventSkeletonSection'
import EventTable from './EventTable'
import useEvent from '../hooks/useEvent'
import Pagnition from '@/components/Pagnition';
import useTimer from '../hooks/useTimer';
import useAccountStore from '@/stores/useAccountStore';
import { formatTime } from '@/lib/Timer';
import { useTranslations } from 'next-intl';
import { updateSuccess } from '@/services/electors';
const EventListSection = () => {
  const t=useTranslations("EventPage")

  const{setTimeValue,TimeValue,setVoteFemale,setVoteMale, setVoteFinal, setSlideShow}=useAccountStore()
  const handleCustomStart = async() => {
    try{
      const res=await updateSuccess();
      const json=await res.json();
      if(!res.ok){
        throw new Error(json.message || 'Failed to update success');
      }
      setVoteFinal(1);
      setSlideShow(1);
      setNothing(1);
    }catch(error){
      console.error('Error updating success:', error.message);
    }
  };
    const {
        searchRef,
        data,
        isLoading,
        handleSearchInput,
        handleSort,
        handleLimit,
        handlePaginate,
        clearSearchInput,
        updateUrlParams,
        searchParams,
      } = useEvent();
      const [customTime, setCustomTime] = useState(300);
  return (
    <section className='pl-10'>
      <div className="flex justify-between">
        <h1>Event</h1>
        <button className='bg-blue-500 text-white px-4  rounded-md' onClick={handleCustomStart}>
          Show Result
        </button>
      </div>
         <div className="w-full mt-3  space-y-10">
            <EventAction t={t} searchRef={searchRef} clearSearchInput={clearSearchInput} handleSearchInput={handleSearchInput} searchParams={searchParams} />
            {
              isLoading ? <EventSkeletonSection/> :  <EventTable t={t} event={data?.data} />
            }
            {
               <Pagnition
               links={data?.links}
               meta={data?.meta}
               handlePaginate={handlePaginate}
               handleLimit={handleLimit}
             />
            }
         </div>
    </section>
  )
}

export default EventListSection