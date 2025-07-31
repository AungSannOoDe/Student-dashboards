"use client";
import { Pencil, Trash } from 'lucide-react';
import React from 'react'
import useToken from '../hooks/useToken';
import TokenInventoryAction from './TokenInventoryAction';
import TokenSkeletonSection from './TokenSkeletonSection';
import TokenTable from './TokenTable';
import TokenPagnition from './TokenPagnition';
import Pagnition from '@/components/Pagnition';

const TokenSection = () => {
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
  } = useToken();
  return (
    <section className='pl-10 '>
       <h1 className="text-3xl font-bold">Tokens</h1>
       <div className="w-full   mt-3  space-y-10">
       <TokenInventoryAction searchRef={searchRef} clearSearchInput={clearSearchInput} handleSearchInput={handleSearchInput} searchParams={searchParams} />
       {
          isLoading ? <TokenSkeletonSection/> :  <TokenTable token={data?.data} />
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

export default TokenSection