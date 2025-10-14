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
import useAccountStore from '@/stores/useAccountStore';
const DashboardSection = () => {
  const{dashboardData,error,status}=useDashboard();
  const{setSlideShow,setVoteFinal,VoteFinal,setVoteFemale,setVoteMale}=useAccountStore();
   const  t=useTranslations("AdminDashboard")
  const{register}=useForm();
  const handleReset=()=>{
    setVoteFinal(0)
    setVoteFemale(0)
    setVoteMale(0)
    setSlideShow(0)
  }
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
    <div className="">
      <button className='bg-blue-500 text-white text-nowrap hover:bg-blue-600 duration-200 px-3 py-2 rounded-sm' onClick={handleReset}>Reset Voting</button>
    </div>
  </div>
  <DashboardCard dashboardData={dashboardData} t={t} />
  <DashboardTableSection dashboardData={dashboardData} t={t} />
  </section>
  )
}

export default DashboardSection