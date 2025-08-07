"use client";
import React from 'react'
import DashboardCard from './DashboardCard'
import DashboardTeamSection from './DashboardTeamSection'
import DashboardTableSection from './DashboardTableSection'
import DashboardCharts from './DashboardCharts';
import useDashboard from '../hooks/useDashboard';
import DashboardCardSkeleton from './DashboardCardSkeleton';

const DashboardSection = () => {
  const{dashboardData,error,status}=useDashboard();
  if(!dashboardData){
    return <DashboardCardSkeleton count={4}/>
  }
  return (
<section className="pl-3">
  <div className="w-full flex flex-col space-y-4 ">
    <h1 className="text-4xl font-bold">Dashboard</h1>
    <p className="text-sm text-gray-500">Welcome,to mydashboard This is showing information</p>
  </div>
  <DashboardCard dashboardData={dashboardData}/>
  <DashboardTeamSection dashboardData={dashboardData}/>
  <DashboardCharts/>
  <DashboardTableSection/>
  </section>
  )
}

export default DashboardSection