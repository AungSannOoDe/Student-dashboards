"use client";
import { fetchVoters, voterApiUrl } from '@/services/users'
import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'
import useSWR from 'swr'

const useDetails = () => {
    const{id}=useParams()
    console.log(id);
  const{data,isLoading,error}=useSWR(`${voterApiUrl}/${id}`,fetchVoters)
  return{
    data,
    isLoading,
    error
  }

}

export default useDetails