import React from 'react'
import ElectorRows from './ElectorRows'
import ElectorEmptyRows from './ElectorEmptyRows'

const ElectorTable = ({electors}) => {
  return (
<div className="overflow-x-auto">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
      <th scope="col" className="px-4 py-3">#</th>
        <th scope="col" className="px-4 py-3">User  name</th>
        <th scope="col" className="px-4 py-3">phone</th>
        <th scope="col" className="px-4 py-3">Address</th>
        <th scope="col" className="px-4 py-3">Gender</th>
        <th scope="col" className="px-4 py-3">Years</th>
        <th scope="col" className="px-4 py-3 text-nowrap">Won status</th>
        <th scope="col" className="px-4 py-3">
          <span className="sr-only">Actions</span>
        </th>
      </tr>
    </thead>
    <tbody>
      {
       electors.length==0 ?<ElectorEmptyRows/>:(
      electors.map((elector)=>(
          <ElectorRows key={elector.id} elector={elector}/>
      ))
       ) 
        
      }
    </tbody>
  </table>
</div>
  )
}

export default ElectorTable