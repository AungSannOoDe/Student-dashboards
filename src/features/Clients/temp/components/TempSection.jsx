"use client"
import { fetchtemp, tempoApiUrl } from '@/services/tempo'
import useAccountStore from '@/stores/useAccountStore'
import React from 'react'
import useSWR from 'swr'
import Tempskeleton from './Tempskeleton'

const TempSection = () => {
    const{account}=useAccountStore()
    const{data,isLoading,error}=useSWR(`${tempoApiUrl}/${account.id}`,fetchtemp,{
        revalidateOnFocus: true,
        refreshWhenHidden: true,
      })

  return (
    <section className="overflow-x-auto h-[300px] mt-5 px-6">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase border-b-2 border-gray-700 w-fit">
        <tr>
          <th scope="col" className="px-4 py-3  font-extrabold text-lg">Elector Name</th>
          <th scope="col" className="px-4 py-3 font-bold  text-lg">Image</th>
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
            isLoading ? <Tempskeleton/>  :data?.data?.length > 0 ? (
                data.data.map((temp) => (
                    <tr key={temp.id}>
                    <th scope="col" className="px-4 py-3">{temp.elector?.elector_name || 'Unknown'}</th>
                    <th scope="col" className="px-4 py-3">images</th>
                    <th scope="col" className="px-4 py-3">
                       {temp?.elector?.address}
                    </th>
                      <th scope="col" className="px-4 py-3">
                           {temp?.elector?.gender}
                        </th>
                        <th scope="col" className="px-4 py-3">
                       {temp?.elector?.phone}
                    </th>
                  </tr>
                ))
            ):(
                <tr className="col-span-5">No data available</tr>
            )
        }
       <tr>
        <td colSpan={5}  className=" py-4 text-end">
            <button className='bg-blue-500  w-3/12 text-white text-xl px-6 py-2'>Votes</button>
        </td>
       </tr>
      </tbody>
      </table>
</section>
  )
}

export default TempSection