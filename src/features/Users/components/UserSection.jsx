"use client"
import React from 'react'
import UserInventoryAction from './UserInventoryAction'
import UserTable from './UserTable'
import UserPagnation from './UserPagnation'
import useSWR from 'swr'

import UserSkeletonSection from './UserSkeletonSection'
import NotFound from '@/components/NotFound'
import useUser from '../hooks/useUser'
import Pagnition from '@/components/Pagnition'

const UserSection = () => {
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
    <h1 className="text-3xl font-bold">Users</h1>
    <section className="w-full   mt-3">
  <div>
    <UserInventoryAction searchRef={searchRef} handleSearchInput={handleSearchInput}  clearSearchInput={clearSearchInput}  searchParams={searchParams}/>
    {
      isLoading ? <UserSkeletonSection /> : <UserTable users={data?.data}/>
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