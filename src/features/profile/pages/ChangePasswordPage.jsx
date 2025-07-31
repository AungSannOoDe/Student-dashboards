import Container from '@/components/Container'
import DashboardLayout from '@/components/DashboardLayout'
import React from 'react'
import Navbar from '@/components/navbar'
import BreadCrumb from '@/components/BreadCrumb'
import Header from '@/components/Header'
import ProfileChangePasswordSectin from '../components/ProfileChangePasswordSectin'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
const ChangePasswordPage = () => {
  return (
    <DashboardMiddlware>
      <Container>
        <Navbar/>
        <DashboardLayout>
          <Header />
          <BreadCrumb currentPage='ChangePassword' links={[{title:"profile",path:"/dashboard/profile"}]}/>
          <ProfileChangePasswordSectin/>
        </DashboardLayout>
      </Container>
    </DashboardMiddlware>

  )
}

export default ChangePasswordPage