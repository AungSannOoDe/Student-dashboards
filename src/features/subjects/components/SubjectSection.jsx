"use client";
import Pagnition from '@/components/Pagnition'
import React from 'react'
import SubjectTable from './SubjectTable'
import SubjectSkeletonSection from './SubjectSkeletonSection'
import SubjectInventoryAction from './SubjectInventoryAction'
import { useTranslations } from 'next-intl'
import useSubject from '../hooks/useSubject'

const SubjectSection = () => {
    const t=useTranslations('Subjects')
    const{searchRef,
        data,
        isLoading,
        error,
        handleSearchInput,
        clearSearchInput,
        handleSort,
        handlePaginate,
        handleLimit,
        updateUrlParams,
        searchParams,
        mutate}=useSubject();
  return (
    <section className='pl-10 '>
    <h1 className="text-3xl font-bold">Subjects</h1>
    <div className="w-full   mt-3  space-y-10">
    <SubjectInventoryAction t={t} searchRef={searchRef} clearSearchInput={clearSearchInput} handleSearchInput={handleSearchInput} searchParams={searchParams} />
    {
       isLoading ? <SubjectSkeletonSection t={t}/> :  <SubjectTable data={data?.data} mutate={mutate} t={t} />
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

export default SubjectSection