"use client";
import React from 'react'
import DashboardCard from './DashboardCard'
import DashboardTeamSection from './DashboardTeamSection'
import DashboardTableSection from './DashboardTableSection'
import DashboardCharts from './DashboardCharts';
import useDashboard from '../hooks/useDashboard';
import DashboardCardSkeleton from './DashboardCardSkeleton';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import { fetchTime, timerapiUrl } from '@/services/timer';

const DashboardSection = () => {
  const{dashboardData,error,status}=useDashboard();
  
  const{register}=useForm();
  if(!dashboardData){
    return <DashboardCardSkeleton count={4}/>
  }
  return (
<section className="pl-3">
  <div className="flex justify-between">
  <div className="w-full flex flex-col space-y-4 ">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="text-sm text-gray-500">Welcome,to mydashboard This is showing information</p>
    </div>
  </div>
  <DashboardCard dashboardData={dashboardData}/>
  <DashboardTeamSection dashboardData={dashboardData}/>
  <DashboardTableSection dashboardData={dashboardData} />
  </section>
  )
}

export default DashboardSection