"use client"

import { X } from 'lucide-react'
import usetemp from '../hooks/usetemp'
import Tempskeleton from './Tempskeleton'

const TempSection = () => {
   const{data,isLoading,selectAllItems,selectedItems,toggleSelectItem,handleVote}=usetemp()
  return (
    <section className="overflow-x-auto h-[300px] mt-5 px-6">
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
              <th  scope="col" className="px-4 py-3 font-bold text-lg">

              </th>
        </tr>
      </thead>
      <tbody>
        {
            isLoading ? <Tempskeleton/>  :data?.data?.length > 0 ? (
                data.data.map((temp) => (
                    <tr key={temp.id} className={selectedItems.includes(temp.id) ? 'bg-blue-50' : ''}>
                    <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(temp.id)}
                          onChange={() => toggleSelectItem(temp.id)}
                          className="mr-2"
                        />
                      </td>
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
                    <th  scope="col" className="px-4 py-3">
                       <X/>
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
       <tr>
        <td colSpan={6}   className=" py-4 text-end">
        <button 
                onClick={handleVote}
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
</section>
  )
}

export default TempSection