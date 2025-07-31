"use client";
import React from 'react'
import EventAction from './EventAction'
import EventSkeletonSection from './EventSkeletonSection'
import EventTable from './EventTable'
import useEvent from '../hooks/useEvent'
import Pagnition from '@/components/Pagnition';

const EventListSection = () => {
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
  return (
    <section className='pl-10'>
         <h1 className="text-3xl font-bold">Events</h1>
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