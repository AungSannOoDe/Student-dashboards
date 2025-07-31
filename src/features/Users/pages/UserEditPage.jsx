
import React from 'react'
import Navbar from '@/components/navbar'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import Container from '@/components/Container'
import UserSection from '../components/UserSection'
import BreadCrumb from '@/components/BreadCrumb'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
import UserEditSection from '../components/UserEditSection'
const UserEditPage = () => {
  return (
 <DashboardMiddlware>
  <Container>
    <Navbar/>
    <DashboardLayout >
   <Header/>
   <BreadCrumb currentPage='edit' links={[{title:"Users",path:"/dashboard/users"}]} />
      <UserEditSection/>
    </DashboardLayout>
    </Container>
</DashboardMiddlware>
  )
}

export default UserEditPage