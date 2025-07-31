import React from 'react'
import Container from '@/components/Container'
import Navbar from '@/components/navbar'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
import BreadCrumb from '@/components/BreadCrumb'
import TokenCreateSection from '../components/TokenCreateSection'
const TokenCreatePage = () => {
  return (
<DashboardMiddlware>
    <Container>
      <Navbar />
      <DashboardLayout>
        <Header />
        <BreadCrumb currentPage='create' links={[{title:"token",path:"/dashboard/token"}]}/>
        <TokenCreateSection/>
      </DashboardLayout>
    </Container>
  </DashboardMiddlware>
  )
}

export default TokenCreatePage