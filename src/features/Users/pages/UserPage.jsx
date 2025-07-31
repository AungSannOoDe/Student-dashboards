import React from 'react'
import Navbar from '@/components/navbar'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import Container from '@/components/Container'
import UserSection from '../components/UserSection'
import BreadCrumb from '@/components/BreadCrumb'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
const UserPage = () => {
  return (
    <DashboardMiddlware>
      <Container>
        <Navbar/>
        <DashboardLayout >
       <Header/>
       <BreadCrumb currentPage='Users'/>
       <UserSection/>
        </DashboardLayout>
        </Container>
    </DashboardMiddlware>
  )
}

export default UserPage