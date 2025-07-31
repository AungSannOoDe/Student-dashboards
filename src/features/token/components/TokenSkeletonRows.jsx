import React from 'react'

const TokenSkeletonRows = () => {
  return (
<tr className="animate-pulse odd:bg-gray-100 even:bg-white">
  <th scope="row" className="px-4 py-3">
    <div className="h-4 w-12 bg-gray-300 rounded"></div>
  </th>
  <td className="px-4 py-3">
    <div className="h-4 w-24 bg-gray-300 rounded"></div>
  </td>
  <td className="px-4 py-3">
    <div className="h-4 w-32 bg-gray-300 rounded"></div>
  </td>
  <td className="px-4 py-3">
    <div className="h-4 w-28 bg-gray-300 rounded"></div>
  </td>
  <td className="px-4 py-3">
    <div className="h-4 w-20 bg-gray-300 rounded"></div>
  </td>
  <td className="px-4 py-3">
    <div className="h-4 w-24 bg-gray-300 rounded"></div>
  </td>
  <td className="px-4 py-3 flex gap-6">
    <div className="size-10 bg-gray-300 rounded"></div>
    <div className="size-10 bg-gray-300 rounded"></div>
    <div className="size-10 bg-gray-300 rounded"></div>
  </td>
</tr>
  )
}

export default TokenSkeletonRows