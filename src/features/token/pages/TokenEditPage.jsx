import Container from '@/components/Container'
import React from 'react'
import Navbar from '@/components/navbar'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
import TokenEditSection from '../components/TokenEditSection'
import BreadCrumb from '@/components/BreadCrumb'


const TokenEditPage = () => {
  return (
    <DashboardMiddlware>
    <Container>
      <Navbar />
      <DashboardLayout>
        <Header />
        <BreadCrumb currentPage='edit' links={[{title:"token",path:"/dashboard/token"}]}/>
      <TokenEditSection/>
      </DashboardLayout>
    </Container>
  </DashboardMiddlware>

  )
}

export default TokenEditPage