"use client"

import { X } from 'lucide-react'
import usetemp from '../hooks/usetemp'
import Tempskeleton from './Tempskeleton'
import { destorytemp } from '@/services/tempo'
import { toast } from 'sonner'

const TempSection = () => {
   const{data,isLoading,selectAllItems,selectedItems,toggleSelectItem,handleVote,refreshVote,
  triggerVote,mutate,register,reset,handleSubmit,onSubmit}=usetemp()
   const handleDelete=async(id)=>{
    try{
       const res=await destorytemp(id)
       const json=await res.json()
       if(!res.ok){
        throw new Error(`${json.message}`||"Undeined Error")
       }
       toast.success("BookMareked deleletedsuccessfully")
       triggerVote(refreshVote)
       mutate()
    }
    catch(error){
      toast.error(error.message)
    }
      
   }
  return (
    <section className="overflow-x-auto h-[300px] lg:mt-5 mt-20 px-6">
      <form action=""  onSubmit={handleSubmit(onSubmit)}>
       
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase border-b-2 border-gray-700 w-fit">
        <tr>
            {
                isLoading ? (
                    <th className="px-4 py-2">
                    <div className="flex items-center animate-pulse">
                      <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
                      <div className="h-4 bg-gray-300 rounded w-16"></div>
                    </div>
                  </th>
                ) :(
                    <th  className="px-4 py-2 font-extrabold">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedItems.length === data.data.length && data.data.length > 0}
                        onChange={selectAllItems}
                        className="mr-2"
                      />
                      Select All
                    </label>
                  </th>
                )
            }
       
          <th scope="col" className="px-4 py-3  font-extrabold md:text-md lg:text-lg">Elector Name</th>
          <th scope="col" className="px-4 py-3 font-bold  md:text-md lg:text-lg">Image</th>
        <th scope="col" className="px-4 py-3 font-bold md:text-md lg:text-lg">
             Address
          </th>
             <th scope="col" className="px-4 py-3 font-bold md:text-md lg:text-lg">
                 gnder
              </th>
            <th scope="col" className="px-4 py-3 font-bold md:text-md lg:text-lg">
                 phone
              </th>
              <th  scope="col" className="px-4 py-3 font-bold md:text-md lg:text-lg">

              </th>
        </tr>
      </thead>
      <tbody>
        {
            isLoading ? <Tempskeleton/>  :data?.data?.length > 0 ? (
                data.data.map((temp) => (
                    <tr key={temp.id} className={selectedItems.includes(temp.id) ? 'bg-blue-50' : ''}>
                    <td className="px-4 py-3">
                    <input type="hidden" {...register('elector_id')} value={temp.elector_id} />
                        <p>{temp.elector_id}</p>
                        <input
                          type="checkbox"
                          checked={selectedItems.some(item => item.tempId === temp.id)}
                           onChange={() => toggleSelectItem(temp.elector.id, temp.id,temp?.elector?.gender)}
                          className="mr-2"
                        />
                      </td>
                    
                    <th scope="col" className="px-4 py-3 md:text-sm lg:text-md ">{temp.elector?.elector_name || 'Unknown'}</th>
                    <th scope="col" className="px-4 py-3 md:text-sm lg:text-md">images</th>
                    <th scope="col" className="px-4 py-3 md:text-sm lg:text-md">
                       {temp?.elector?.address}
                    </th>
                      <th scope="col" className="px-4 py-3 md:text-sm lg:text-md">
                           {temp?.elector?.gender}
                        </th>
                        <th scope="col" className="px-4 py-3 md:text-sm lg:text-md">
                       {temp?.elector?.phone}
                    </th>
                    <th  scope="col" className="px-4 py-3 md:text-sm lg:text-md">
                      <button onClick={()=>handleDelete(temp.id)}>
                         <X/>
                      </button>
                    </th>
                  </tr>
                ))
            ):(
                <tr className="col-span-5 ">
                  <td colSpan={6} className='text-center'>
                     <p className='font-bold md:text-sm lg:text-md'  > No data available  </p> 
                  </td>
                </tr>
            )
        }
       <tr>
        <td colSpan={6}   className=" py-4 text-end">
        <button 
                className={`bg-blue-500 w-3/12 text-white text-xl px-6 py-2 ${
                  selectedItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={selectedItems.length === 0}
              >
                Vote ({selectedItems.length})
              </button>
        </td>
       </tr>
      </tbody>
      </table>
      </form>
</section>
  )
}

export default TempSection