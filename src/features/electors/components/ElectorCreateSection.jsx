import React from 'react'
import ElectorCreateForm from './ElectorCreateForm'
import { useTranslations } from 'next-intl'

const ElectorCreateSection = () => {
  const t=useTranslations("ElectorCreateSection")
  return (
    <section  className='pl-6'>
        <h1 className='text-xl font-bold'>{t('Elector')}</h1>
        <ElectorCreateForm/>
    </section>
  )
}

export default ElectorCreateSection