"use client";
import React from 'react'
import DashboardCard from './DashboardCard'
import DashboardTeamSection from './DashboardTeamSection'
import DashboardTableSection from './DashboardTableSection'
import DashboardCharts from './DashboardCharts';

const DashboardSection = () => {
  return (
<section className="pl-3">
  <div className="w-full flex flex-col space-y-4 ">
    <h1 className="text-4xl font-bold">Dashboard</h1>
    <p className="text-sm text-gray-500">Welcome,to mydashboard This is showing information</p>
  </div>
  <DashboardCard/>
  <DashboardTeamSection/>
  <DashboardCharts/>
  <DashboardTableSection/>
  </section>
  )
}

export default DashboardSection