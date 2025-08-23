import React from 'react'
import GallerySkeletonRows from './GallerySkeletonRows'

const GallerySkeleton = () => {
  return (
    <div className="overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
        <th scope="col" className="px-4 py-3">#</th>
          <th scope="col" className="px-4 py-3">Title</th>
          <th scope="col" className="px-4 py-3">Description</th>
          <th scope="col" className="px-4 py-3">
            <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {
           Array.from({ length: 5 }).map((_, index) => (
          <GallerySkeletonRows key={index}/>
          ))
        }
      </tbody>
    </table>
  </div>
  )
}

export default GallerySkeleton