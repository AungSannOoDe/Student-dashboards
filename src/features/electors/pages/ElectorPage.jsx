import Container from '@/components/Container'
import React from 'react'
import Navbar from '@/components/navbar'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import ElectorSection from '../components/ElectorSection'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
const ElectorPage = () => {
  return (
    <DashboardMiddlware>
      <Container>
          <Navbar/>
          <DashboardLayout>
         <Header/>
         <ElectorSection/>
          </DashboardLayout>
      </Container>
    </DashboardMiddlware>

  )
}

export default ElectorPage