import React from 'react'
import EventRows from './EventRows'
import TokenEmptyRows from './EventEmptyRows'
import EventEmptyRows from './EventEmptyRows'

const EventTable = ({event,t}) => {
  return (
<div className="overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-4 py-3">#</th>
          <th scope="col" className="px-4 py-3">{t('eventName')}</th>
          <th scope="col" className="px-4 py-3">{t('eventStart')}</th>
          <th scope="col" className="px-4 py-3">{t('eventPar')}</th>
          <th scope="col" className="px-4 py-3">
            {t('Action')}
          </th>
        </tr>
      </thead>
      <tbody>
        {
          event?.length==0 ?<EventEmptyRows/>: (
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