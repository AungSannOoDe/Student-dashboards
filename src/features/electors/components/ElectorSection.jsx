"use client"
import React from 'react'
import ElectorTable from './ElectorTable'
import ElectorInventoryAction from './ElectorInventoryAction'
import NotFound from '@/components/NotFound'
import Pagnition from '@/components/Pagnition'
import useElector from '../hooks/useElector'
import ElectorSkeletonSection from './ElectorSkeletonSection'

const ElectorSection = () => {
    const {
      searchRef,
      data,
      error,
      isLoading,
      handleSearchInput,
      handleSort,
      handleLimit,
      handlePaginate,
      clearSearchInput,
      updateUrlParams,
      searchParams,
    } = useElector();
    if(error){
      return <NotFound/>
    }
    
  return (
<section  className='pl-10'>
    <h1 className="text-3xl font-bold">Electors</h1>
    <section className="w-full   mt-3">
  <div>
     <ElectorInventoryAction searchRef={searchRef} clearSearchInput={clearSearchInput} handleSearchInput={handleSearchInput} searchParams={searchParams} />
    {
          isLoading ? <ElectorSkeletonSection/> : <ElectorTable electors={data?.data}/>
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
   </section>
  )
}

export default ElectorSection