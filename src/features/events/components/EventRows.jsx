import { Pencil, Trash } from 'lucide-react'
import React from 'react'

const EventRows = ({
event:{
  id,event_name,event_start_time,event_participant
}
}
) => {
  return (
<tr  className="odd:bg-white  odd:dark:bg-gray-900">
    <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{id}</th>
    <td className="px-4 py-3">{event_name}</td>
    <td className="px-4 py-3">{event_start_time}</td>
    <td className="px-4 py-3">{event_participant}</td>
    <td className="px-4 py-3 flex gap-3">
    <button className=' size-10 flex justify-center items-center  bg-white border border-stone-200    hover:bg-stone-100 hover:text-blue-500 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-500 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-blue-500 dark:focus:text-white'>
        <Pencil  className='size-4'/>
      </button>
      <button className=' size-10 flex justify-center items-center  bg-white border border-stone-200    hover:bg-stone-100 hover:text-blue-500 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-500 dark:bg-stone-800 dark:border-stone-700 dark:text-white dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-blue-500 dark:focus:text-white'>
        <Trash className='size-4'/>
      </button>
    </td>
  </tr>
  )
}

export default EventRows