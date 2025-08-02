"use client"
import React from 'react'
import MaleCard from './MaleCard'
import FemaleCard from './FemaleCard'
import useSWR from 'swr'
import { electorApiUrl, fetchElectors } from '@/services/electors'

const CardSection = () => {
  const{data,isLoading,error}=useSWR(`${electorApiUrl}`,fetchElectors);
  console.log(data);
  return (
         <section className="max-w-7xl   mx-auto">
          <MaleCard/>
          <FemaleCard/>
         </section>
  )
}

export default CardSection