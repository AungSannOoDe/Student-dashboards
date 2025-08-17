import React from 'react'

const ElectorSkeletonrows = () => {
  return (
<tr className="odd:bg-gray-100 even:bg-white hover:bg-blue-100 duration-200 animate-pulse">
  <th scope="row" className="px-4 py-3">
    <div className="h-6 bg-gray-200 rounded dark:bg-gray-700 w-8"></div>
  </th>
  <td className="px-4 py-3">
    <div className="h-6 bg-gray-200 rounded dark:bg-gray-700 w-32"></div>
  </td>
  <td className="px-4 py-3">
    <div className="h-6 bg-gray-200 rounded dark:bg-gray-700 w-24"></div>
  </td>
  <td className="px-4 py-3">
    <div className="h-6 bg-gray-200 rounded dark:bg-gray-700 w-40"></div>
  </td>
  <td className="px-4 py-3">
    <div className="h-6 bg-gray-200 rounded dark:bg-gray-700 w-16"></div>
  </td>
  <td className="px-4 py-3">
    <div className="h-6 bg-gray-200 rounded dark:bg-gray-700 w-12"></div>
  </td>
  <td className="px-4 py-3">
    <div className="h-6 bg-gray-200 rounded dark:bg-gray-700 w-20"></div>
  </td>
  <td className="px-4 py-3 flex gap-6">
    <div className="size-10 bg-gray-200 rounded dark:bg-gray-700"></div>
    <div className="size-10 bg-gray-200 rounded dark:bg-gray-700"></div>
    <div className="size-10 bg-gray-200 rounded dark:bg-gray-700"></div>
  </td>
</tr>
  )
}

export default ElectorSkeletonrows