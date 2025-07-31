import React from 'react'
import UserRows from './UserRows';
import Sortable from '@/components/Sortable';
import UserEmptyRows from './UserEmptyRows';

const UserTable = ({users}) => {
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
        users?.length==0 ? <UserEmptyRows/> :(
          users?.map(user=><UserRows  key={user.id} user={user}/>)
        )
      }
    </tbody>
  </table>
</div>
  )
}

export default UserTable