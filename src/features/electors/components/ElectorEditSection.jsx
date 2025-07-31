"use client";
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
import React from 'react'
import ElectorEditForm from './ElectorEditForm'
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import { electorApiUrl, fetchElectors } from '@/services/electors';

const ElectorEditSection = () => {
  const{id}=useParams();
  const{data,isLoading,error}=useSWR(`${electorApiUrl}/${id}`,fetchElectors);
  return (
   <div className="pl-6">
     <h1 className='text-xl font-bold'>Elector Edit Form</h1>
    <ElectorEditForm elector={data.data}/>
   </div>
  )
}

export default ElectorEditSection