import React from 'react'
import EventSkeletonRows from './EventSkeletonRows'
import Sortable from '@/components/Sortable'

const EventSkeletonSection = () => {
  return (
    <div className="overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
        <th scope="col" className="px-4 py-3">#</th>
          <th scope="col" className="px-4 py-3">
            <Sortable>
            User  name
            </Sortable>
            </th>
          <th scope="col" className="px-4 py-3">
            <Sortable>
            email
            </Sortable>
           </th>
          <th scope="col" className="px-4 py-3">
            <Sortable>
            Major
            </Sortable>
            </th>
          <th scope="col" className="px-4 py-3">
            <Sortable>
            Year
            </Sortable>
           </th>
          <th scope="col" className="px-4 py-3">Roll Name</th>
          <th scope="col" className="px-4 py-3">
            <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          Array(19).fill(0).map((_,index)=>(
            <EventSkeletonRows key={index}/>
          ))
        }
      </tbody>
    </table>
  </div>
  )
}

export default EventSkeletonSection