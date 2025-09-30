import React from 'react'
import ElectorRows from './ElectorRows'
import ElectorEmptyRows from './ElectorEmptyRows'
import { useTranslations } from 'next-intl'

const ElectorTable = ({electors,t}) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">#</th>
            <th scope="col" className="px-4 py-3">{t('headers.name')}</th>
            <th scope="col" className="px-4 py-3">{t('headers.phone')}</th>
            <th scope="col" className="px-4 py-3">{t('headers.address')}</th>
            <th scope="col" className="px-4 py-3">{t('headers.gender')}</th>
            <th scope="col" className="px-4 py-3">{t('headers.years')}</th>
            <th scope="col" className="px-4 py-3 text-nowrap">{t('headers.wonStatus')}</th>
            <th scope="col" className="px-4 py-3">
              <span className="sr-only">{t('headers.actions')}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            electors.length === 0 ? <ElectorEmptyRows/> : (
              electors.map((elector) => (
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