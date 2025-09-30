"use client";
import { Pencil, Trash } from 'lucide-react';
import React from 'react'
import useToken from '../hooks/useToken';
import TokenInventoryAction from './TokenInventoryAction';
import TokenSkeletonSection from './TokenSkeletonSection';
import TokenTable from './TokenTable';
import TokenPagnition from './TokenPagnition';
import Pagnition from '@/components/Pagnition';
import { useTranslations } from 'next-intl';

const TokenSection = () => {
  const t = useTranslations('TokenPage');
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
    mutate
  } = useToken();
  return (
    <section className='pl-10 '>
       <h1 className="text-3xl font-bold">Tokens</h1>
       <div className="w-full   mt-3  space-y-10">
       <TokenInventoryAction t={t} searchRef={searchRef} clearSearchInput={clearSearchInput} handleSearchInput={handleSearchInput} searchParams={searchParams} />
       {
          isLoading ? <TokenSkeletonSection/> :  <TokenTable data={data?.data} mutate={mutate} />
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