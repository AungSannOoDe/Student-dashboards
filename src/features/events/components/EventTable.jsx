import React from 'react'
import EventRows from './EventRows'
import TokenEmptyRows from './EventEmptyRows'

const EventTable = ({event}) => {
  return (
<div className="overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-4 py-3">#</th>
          <th scope="col" className="px-4 py-3">event Name</th>
          <th scope="col" className="px-4 py-3">event start  time</th>
          <th scope="col" className="px-4 py-3">event participant</th>
          <th scope="col" className="px-4 py-3">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {
          event?.length==0 ?<TokenEmptyRows/>: (
            event.map(event=>(
                <EventRows event={event} key={event.id}/>
                ))
          )  
        }
      
      </tbody>
    </table>
  </div>
  )
}

export default EventTable