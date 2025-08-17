"use client"
import React from 'react'
import AblumEditForm from './AblumEditForm'
import { useParams, useRouter } from 'next/navigation'

const AblumEditSection = () => {
  const{id}=useParams()
  return (
<section  className='pl-6 space-y-10'>
    <h1 className='text-xl font-bold'> Ablum 's Edit Form</h1>
    <AblumEditForm elector_id={id}/>
</section>
  )
}

export default AblumEditSection