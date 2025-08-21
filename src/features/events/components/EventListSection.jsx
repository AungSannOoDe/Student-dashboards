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
const EventListSection = () => {
  const{setTimeValue,TimeValue}=useAccountStore()
  const { 
    remaining, 
    isActive, 
    Loading, 
    startTimer, 
    resetTimer ,
    fetchTimer
  } = useTimer();
  const handleCustomStart = () => {
    startTimer(customTime);
    setTimeValue(TimeValue);
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
      <h1 className="text-3xl font-bold">Events</h1> 
      {
        Loading  ?(<p>loading...</p>) :(
          <div>
            <p>Enter minutes</p>
             <div className="flex items-center space-x-3">
              <input
                type="number"
                min="1"
                value={customTime}
                onChange={(e) => setCustomTime(parseInt(e.target.value) || 0)}
                className="flex-1 px-3 py-2 border rounded"
                placeholder="Seconds"
              />
              <button
                onClick={handleCustomStart}
                disabled={isActive}
                className={`px-4 py-2 rounded transition ${isActive ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
              >
                Start
              </button>
            </div> 
          </div>
         
        )
      }
      </div>
         <div className="w-full mt-3  space-y-10">
            <EventAction searchRef={searchRef} clearSearchInput={clearSearchInput} handleSearchInput={handleSearchInput} searchParams={searchParams} />
            {
              isLoading ? <EventSkeletonSection/> :  <EventTable event={data?.data} />
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