"use client";
import { electorChampionApiUrl, fetchchampion } from '@/services/electors'
import React from 'react'
import useSWR from 'swr'
import ChampionMaleCard from './ChampionMaleCard'
import ChampionFemaleCard from './ChampionFemaleCard'
import SkeletonSection from '@/features/Clients/Card/components/SkeletonSection';

const ChampionSection = () => {
  const{data,isLoading,error}=useSWR(`${electorChampionApiUrl}`,fetchchampion)
  if(isLoading){
    return <SkeletonSection/>
  }
  const electorList = Object.values(data?.data)
  const males = electorList.filter((item) => item.gender === "male");
  const females = electorList.filter((item) => item.gender === "female");
  console.log(males);
  return (
    <section className="w-ful">
    <div className="mt-10 space-y-10">
    <h1 className="text-center font-bold text-4xl">Select for Male Champion</h1>
    <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 sm:gap-y-20 sm:px-6">
    {  
      males.length>0 ? 
        males?.map((item)=>(
          <ChampionMaleCard male={item} key={item.id}/>
        ))
        :(
            <p className='text-red-400  text-xs  text-center col-span-4'>There is no Male Champion</p>
        )
      }
      </div>
    </div>
    <div className="mt-10 space-y-10">
    <h1 className="text-center font-bold text-4xl">Select for female Champion</h1>
    <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 sm:gap-y-20 sm:px-6">
    {     females.length>0 ?
        females?.map((item)=>(
          <ChampionFemaleCard female={item}  key={item.id}/>
        ))
        :
        (
            <p className='text-red-400  text-xs text-center col-span-4'>There is no female Champion</p>
        )
      }
      </div>
    </div>      
   </section>
  )
}

export default ChampionSection