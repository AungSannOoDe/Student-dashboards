"use client";
import useAccountStore from '@/stores/useAccountStore'
import React from 'react'

const DashboardLayout = ({children}) => {
  const {isCollpased}=useAccountStore()
  return (
<div className={` transition-all  duration-1000  ${!isCollpased ? "md:pl-72" :"md:pl-30"} flex flex-col w-full h-full py-7 px-9 bg-gray-50`}>
{children}
</div>
  )
}

export default DashboardLayout