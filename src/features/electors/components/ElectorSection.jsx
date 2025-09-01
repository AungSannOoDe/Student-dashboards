"use client"
import React from 'react'
import ElectorTable from './ElectorTable'
import ElectorInventoryAction from './ElectorInventoryAction'
import NotFound from '@/components/NotFound'
import Pagnition from '@/components/Pagnition'
import useElector from '../hooks/useElector'
import ElectorSkeletonSection from './ElectorSkeletonSection'
import { useTranslations } from 'next-intl'

const ElectorSection = () => {
  const t=useTranslations("ElectorPage")
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
    <h1 className="text-3xl font-bold">{t('Electors')}</h1>
    <section className="w-full   mt-3">
  <div>

     <ElectorInventoryAction searchRef={searchRef} t={t} clearSearchInput={clearSearchInput} handleSearchInput={handleSearchInput} searchParams={searchParams} />
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