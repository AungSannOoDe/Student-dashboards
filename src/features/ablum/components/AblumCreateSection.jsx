"use client"
import React, { useState } from 'react'
import AblumCreateForm from './AblumCreateForm'
import useSWR from 'swr'
import { electorApiUrl, electorNameUrl, electorUrl, fetchElectors } from '@/services/electors'

const AblumCreateSection = () => {
  const [selectedElector, setSelectedElector] = useState(null)
  const { data, isLoading, error } = useSWR(`${electorNameUrl}`, fetchElectors)
 

  const handleSelectChange = (e) => {
    setSelectedElector(e.target.value || null)
  }

  return (
    <section className='pl-6 space-y-10'>
      <div className="flex justify-between">
        <h1 className='text-xl font-bold'>Album Create Form</h1>
        <select 
          onChange={handleSelectChange}
          value={selectedElector || ''}
          className='self-top'
        >
          <option value="">Select an elector...</option>
          {isLoading ? (
            <option>Loading electors...</option>
          ) : (
            data?.data.map((item) => (
              <option key={item.id} value={item.id}>
                {item.elector_name}
              </option>
            ))
          )}
        </select>
      </div>
      
      {selectedElector && <AblumCreateForm electorId={selectedElector} />}
    </section>
  )
}

export default AblumCreateSection