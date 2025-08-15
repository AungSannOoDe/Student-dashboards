"use client"
import { fetchvote, voteapiUrl } from '@/services/votes'
import React from 'react'
import useSWR from 'swr'
import VoteSkeleton from './VoteSkeleton'
import useAccountStore from '@/stores/useAccountStore'

const VoteSection = () => {
  const{account,VoteMale}=useAccountStore()
  const{data,isLoading,error}=useSWR(`${voteapiUrl}/${account.id}`,fetchvote)
  return (
    <section className="overflow-x-auto h-[300px] mt-5 px-6">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase border-b-2 border-gray-700 w-fit">
            <tr>
              <th scope="col" className="px-4 py-3  font-extrabold text-lg">Elector Name</th>
              <th scope="col" className="px-4 py-3 font-bold  text-lg">voter code</th>
              <th scope="col" className="px-4 py-3 font-bold text-lg">
                 Address
              </th>
                 <th scope="col" className="px-4 py-3 font-bold text-lg">
                     gnder
                  </th>
                <th scope="col" className="px-4 py-3 font-bold text-lg">
                     phone
                  </th>
            </tr>
          </thead>
          <tbody>
        {
          isLoading ? <VoteSkeleton/>: data?.data?.length > 0? (
            data?.data?.map((item)=>(
              <tr key={item.id}>
              <th scope="col" className="px-4 py-3">
                {
                  item.elector.elector_name
                }
              </th>
              <th scope="col" className="px-4 py-3">
                {
                  item.vote_code
                }
              </th>
              <th scope="col" className="px-4 py-3">
                {
                   item.elector.address
                }
              </th>
                <th scope="col" className="px-4 py-3">
                     {
item.elector.gender
                     }
                  </th>
                  <th scope="col" className="px-4 py-3">
                                   {

              item.elector.phone

                                   }
                                </th>
            </tr>
            ))

          ):(
            <tr className="col-span-5 ">
            <td colSpan={6} className='text-center'>
               <p className='text-xl font-bold'> No data available  </p> 
            </td>
          </tr>
          )
        }
           
          </tbody>
          </table>
    </section>
  )
}

export default VoteSection