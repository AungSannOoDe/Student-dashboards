import Container from '@/components/Container'
import React from 'react'
import Navbar from '@/components/navbar'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import ChangeNameSection from '../components/ChangeNameSection'
import BreadCrumb from '@/components/BreadCrumb'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
const ChangeNamePage = () => {
  return (
    <DashboardMiddlware>
      <Container>
        <Navbar/>
        <DashboardLayout>
          <Header />
          <BreadCrumb currentPage='ChangeName' links={[{title:"profile",path:"/dashboard/profile"}]}/>
          <ChangeNameSection/>
        </DashboardLayout>
      </Container>
    </DashboardMiddlware>
  )
}

export default ChangeNamePage