import React from 'react'
import EmployeeEmptyRows from './EmployeeEmptyRows'

const EmployeeTable = () => {
  return (
<div className="overflow-x-auto">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
      <th scope="col" className="px-4 py-3">#</th>
        <th scope="col" className="px-4 py-3">User  name</th>
        <th scope="col" className="px-4 py-3">email</th>
        <th scope="col" className="px-4 py-3">Major</th>
        <th scope="col" className="px-4 py-3">Year</th>
        <th scope="col" className="px-4 py-3">Roll Name</th>
        <th scope="col" className="px-4 py-3">
          <span className="sr-only">Actions</span>
        </th>
      </tr>
    </thead>
    <tbody>
        <EmployeeEmptyRows/>
    </tbody>
  </table>
</div>
  )
}

export default EmployeeTable