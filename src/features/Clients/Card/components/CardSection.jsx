"use client"
import React from 'react'
import MaleCard from './MaleCard'
import FemaleCard from './FemaleCard'
import useSWR from 'swr'
import { electorApiUrl, fetchElectors } from '@/services/electors'
import SkeletonSection from './SkeletonSection'
import { ablumApiUrl } from '@/services/ablum'

const CardSection = () => {
  const{data,isLoading,error}=useSWR(`${electorApiUrl}`,fetchElectors);
if(isLoading){
  return <SkeletonSection/>
}
const electorList = Object.values(data?.data)
const males = electorList.filter((item) => item.gender === "male");
const females = electorList.filter((item) => item.gender === "female");
  return (
         <section className="max-w-7xl   mx-auto">
          <div className="mt-10 space-y-10">
          <h1 className="text-center font-bold text-4xl">Select for Male</h1>
          <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 sm:gap-y-20 sm:px-6">
          {
              males?.map((item)=>(
                <MaleCard male={item} key={item.id}/>
              ))
            }
            </div>
          </div>
          <div className="mt-10 space-y-10">
          <h1 className="text-center font-bold text-4xl">Select for Female</h1>
          <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 sm:gap-y-20 sm:px-6">
          {
              females?.map((item)=>(
                <FemaleCard female={item}  key={item.id}/>
              ))
            }
            </div>
          </div>
          
         </section>
  )
}

export default CardSection