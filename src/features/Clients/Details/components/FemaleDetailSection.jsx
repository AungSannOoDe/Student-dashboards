"use client"
import React from 'react'
import useFemaleDetails from '../hooks/useFemaleDetails'
import parse from 'html-react-parser';
import useSWR from 'swr'
import { fetchvote, voteapiUrl } from '@/services/votes'
import useAccountStore from '@/stores/useAccountStore'
import DetailSkeleton from './DetailSkeleton'

const FemaleDetailSection = () => {
    const{data,isLoading,isSubmitting,register,handleSubmit,onSubmit,account,id, VoteFemale}=useFemaleDetails()
    const{data:votes,isLoading:voteLoading,error}=useSWR(`${voteapiUrl}/${useAccountStore.getState().account.id}`,fetchvote)
    if(isLoading || voteLoading){
      return <DetailSkeleton/>
    }
  return (
    <section className='max-w-7xl mx-auto grid  px-5 grid-cols-2 mt-10 gap-x-10'>
    <div className="">
      {
      data.image_1_url ?  <img src={data.image_1_url} className='w-full h-[450px]  object-cover' /> :<img src="/image-not-found.png" className='w-full h-[450px]  object-cover' />
      }
          <div className="flex  justify-between mt-4 ">
          {
          data.image_2_url ?  <img src={data.image_2_url} className='w-1/4  ' /> :<img src="/image-not-found.png" className='w-1/4' />
          }
           {
          data.image_3_url ?  <img src={data.image_3_url} className='w-1/4' /> :<img src="/image-not-found.png" className='w-1/4' />
          }
           {
          data.image_4_url ?  <img src={data.image_4_url} className='w-1/4' /> :<img src="/image-not-found.png" className='w-1/4' />
          }
          </div>
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-6">
        <input type="hidden" defaultValue={account.id} {...register('voter_id')} />
         <input type="hidden" defaultValue={id} {...register('elector_id')}/>
           <p className='text-4xl font-bold'>{data?.elector_name}</p>
           <p className='text-2xl'>{data?.gender}</p>
           <p className='text-2xl'>{data?.phone}</p>
         <p >{data?.address}</p>
         <div className="ProseMirror">
           {
            parse(data?.description || "Hello")
           }
         </div>
         {
         VoteFemale=="1" ?  (
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

export default FemaleDetailSection