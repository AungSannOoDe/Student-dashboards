"use client"
import React from 'react'
import DetailSkeleton from './DetailSkeleton';
import useDetails from '../hooks/useDetails';
import useSWR from 'swr';
import { fetchvote, voteapiUrl } from '@/services/votes';
import useAccountStore from '@/stores/useAccountStore';
const DetailsSection = () => {
  const{data,isLoading,isSubmitting,register,handleSubmit,onSubmit,account,id}=useDetails()
const{data:votes,isLoading:voteLoading,error}=useSWR(`${voteapiUrl}/${useAccountStore.getState().account.id}`,fetchvote)
console.log(votes);
if(isLoading || voteLoading){
  return <DetailSkeleton/>
}
  return (
   <section className='max-w-7xl mx-auto grid  px-5 grid-cols-2 mt-10 gap-x-10'>
    <div className="">
          <img src="../images/1.png" className='w-full h-[450px]  object-cover' />
          <div className="flex  justify-between mt-4 ">
          <img src="../images/4.png" className='w-1/4' />
              <img src="../images/2.png" className='w-1/4'  />
              <img src="../images/3.png" className='w-1/4'/>
          </div>
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-10">
        <input type="hidden" defaultValue={account.id} {...register('voter_id')} />
         <input type="hidden" defaultValue={id} {...register('elector_id')}/>
           <p className='text-4xl font-bold'>{data?.elector_name}</p>
           <p className='text-2xl'>{data?.gender}</p>
           <p className='text-2xl'>{data?.phone}</p>
         <p >{data?.address}</p>
         {
           votes.data.archived_at==="1" ?  (
          " "
           ):(
            <button type='submit' className='bg-blue-500 py-3 text-white'>
            {
              isSubmitting ? "selecting...."  :" Select"
            }
       </button>
           )
         }
          </div>
      </form>
   </section>
  )
}
export default DetailsSection