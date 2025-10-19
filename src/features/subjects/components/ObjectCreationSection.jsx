"use client"
import React, { useState } from 'react'
import SubjectCreateSection from './SubjectCreateSection'
import YearCreateSection from './YearCreateSection'
import { useTranslations } from 'next-intl'
import YearSection from './YearSection'

const ObjectCreationSection = () => {
  const [selectedOption, setSelectedOption] = useState('subject')
  const t = useTranslations('ObjectCreation')

  return (
    <section className='pl-6'>
      {/* Radio Button Selection */}
      <div className="mb-4">
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="subject"
              checked={selectedOption === 'subject'}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>{t('subject')}</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="year"
              checked={selectedOption === 'year'}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span>{t('year')}</span>
          </label>
        </div>
      </div>
      {/* Conditional Rendering */}
      {selectedOption === 'subject' && <YearCreateSection /> }
      {selectedOption === 'year' &&   <SubjectCreateSection />}
     
    </section>
  )
}

export default ObjectCreationSection