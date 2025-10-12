"use client";
import React from 'react'
import EmployeeInventorySection from './EmployeeInventorySection'
import EmployeeTable from './EmployeeTable'
import useSWR from 'swr'
import { fetchUsers, userApiUrl } from '@/services/users';
import EmployeeSkeleton from './EmployeeSkeleton';
import useEmployee from '../hooks/useEmployee';
import Pagnition from '@/components/Pagnition';
import { useTranslations } from 'next-intl';

const EmployeeSection = () => {
  const t=useTranslations('EmployeePage')
  const{ searchRef,
    data,
    isLoading,
    error,
    handleSearchInput,
    clearSearchInput,
    handleSort,
    handlePaginate,
    handleLimit,
    updateUrlParams,
    mutate,
    searchParams}=useEmployee()
  return (
   <section className='pl-6 flex flex-col space-y-6'>
    <h1 className='font-bold text-4xl'>{t('Volunteers')}</h1>
<EmployeeInventorySection  searchRef={searchRef}  clearSearchInput={clearSearchInput} handleSearchInput={handleSearchInput} searchParams={searchParams} />
{
  isLoading ? <EmployeeSkeleton/> : <EmployeeTable t={t} employee={data?.data} mutate={mutate}/>
}
{
       <Pagnition
       links={data?.links}
       meta={data?.meta}
       handlePaginate={handlePaginate}
       handleLimit={handleLimit}
     />
    }
   </section>
  )
}

export default EmployeeSection