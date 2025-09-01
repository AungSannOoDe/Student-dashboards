"use client";
import React from 'react'
import EventCreateForm from './EventCreateForm'
import { useTranslations } from 'next-intl';

const EventCreateSection = () => {
  const t=useTranslations("EventCeatePage")
  return (
    <section  className='pl-6'>
    <h1 className='text-xl font-bold'>{t('Event')}</h1>
    <EventCreateForm t={t}/>
</section>
  )
}

export default EventCreateSection