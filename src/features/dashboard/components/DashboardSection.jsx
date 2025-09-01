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
import {useTranslations} from "next-intl"
const DashboardSection = () => {
  const{dashboardData,error,status}=useDashboard();
   const  t=useTranslations("AdminDashboard")
  const{register}=useForm();
  if(!dashboardData){
    return <DashboardCardSkeleton count={4}/>
  }
  return (
<section className="pl-3">
  <div className="flex justify-between">
  <div className="w-full flex flex-col space-y-4 ">
      <h1 className="text-4xl font-bold">{t('dashoard')}</h1>
      <p className="text-sm text-gray-500">{t('welcome')}</p>
    </div>
  </div>
  <DashboardCard dashboardData={dashboardData} t={t} />
  <DashboardTeamSection dashboardData={dashboardData}/>
  <DashboardTableSection dashboardData={dashboardData} t={t} />
  </section>
  )
}

export default DashboardSection