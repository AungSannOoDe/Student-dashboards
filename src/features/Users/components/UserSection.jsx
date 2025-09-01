"use client"
import React from 'react'
import UserInventoryAction from './UserInventoryAction'
import UserTable from './UserTable'
import UserPagnation from './UserPagnation'
import UserSkeletonSection from './UserSkeletonSection'
import NotFound from '@/components/NotFound'
import useUser from '../hooks/useUser'
import Pagnition from '@/components/Pagnition'
import { useTranslations } from 'next-intl'


const UserSection = () => {
  const t=useTranslations("UserPage")
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
  } = useUser();

  return (
   <section  className='pl-10'>
    <div className="flex justify-between">
    <h1 className="text-3xl font-bold">{t('users')}</h1>
   
    </div>
   
    <section className="w-full   mt-3">
  <div>
    <UserInventoryAction t={t} searchRef={searchRef} handleSearchInput={handleSearchInput}  clearSearchInput={clearSearchInput}  searchParams={searchParams}/>
    {
      isLoading ? <UserSkeletonSection /> : <UserTable t={t} users={data?.data}/>
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

export default UserSection