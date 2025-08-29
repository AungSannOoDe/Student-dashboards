"use client"
import React from 'react'
import GalleryRows from './GalleryRows'
import GalleryEmptRows from './GalleryEmptRows'

const GalleryTable = ({gallery,mutate}) => {
  return (
<div className="overflow-x-auto">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
      <th scope="col" className="px-4 py-3">#</th>
        <th scope="col" className="px-4 py-3">Title</th>
        <th scope="col" className="px-4 py-3">description</th>
         <th scope="col" className="px-4 py-3">date</th>
         <th scope="col" className="px-4 py-3">Time</th>
        <th scope="col" className="px-4 py-3">
          <span className="sr-only">Actions</span>
        </th>
      </tr>
    </thead>
    <tbody>
      {
       gallery.length==0 ? <GalleryEmptRows/>:(
      gallery.map((gallery)=>(
         <GalleryRows key={gallery.id} gallery={gallery} mutate={mutate}/>
      ))
       ) 
        
      }
    </tbody>
  </table>
</div>
  )
}

export default GalleryTable