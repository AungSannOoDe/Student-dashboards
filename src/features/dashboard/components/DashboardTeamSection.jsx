"use client";
import React from 'react'
import useDashboard from '../hooks/useDashboard';
import DashboardCardSkeleton from './DashboardCardSkeleton';

const DashboardTeamSection = ({dashboardData:{
  token_completed
}}) => {
  return (
<section className="grid grid-cols-2 text-stone-500 gap-5 mt-10">
    <div className="w-[500px] h-40  bg-gray-200 opacity-90 shadow-md rounded-lg px-6 py-5 flex flex-col space-y-3  overflow-y-scroll ">
      <div className="flex    justify-center gap-53  ">
        <h2 className="text-3xl font-bold mb-4">Used Token</h2>
        <div className="w-3  h-3 bg-red-400 shadow-2xl rounded-full self-center -translate-y-1"></div>
      </div>
       <p className='ml-7 text-4xl font-bold '>{token_completed}</p>
    </div>
    <div className="w-[500px] h-40  bg-gray-200 opacity-90 shadow-md rounded-lg px-6 py-5 flex flex-col space-y-3  overflow-y-scroll ">
      <div className="flex    justify-center gap-53  ">
        <h2 className="text-3xl font-bold mb-4">Voted users</h2>
        <div className="w-3  h-3 bg-red-400 shadow-2xl rounded-full self-center -translate-y-1"></div>
      </div>
       <p className='ml-7 text-4xl font-bold '>59</p>
    </div>
  </section>
  )
}

export default DashboardTeamSection