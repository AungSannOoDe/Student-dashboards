import Container from '@/components/Container'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
import React from 'react'
import Navbar from '@/components/navbar'
import Header from '@/components/Header'
import DashboardLayout from '@/components/DashboardLayout'
import BreadCrumb from '@/components/BreadCrumb'
import ChampionSection from '../components/ChampionSection'

const ChampionPage = () => {
  return (
    <DashboardMiddlware>
    <Container>
      <Navbar/>
      <DashboardLayout>
     <Header/>
     <BreadCrumb/>
     <ChampionSection/>
      </DashboardLayout>
    </Container>
  </DashboardMiddlware>
  )
}

export default ChampionPage