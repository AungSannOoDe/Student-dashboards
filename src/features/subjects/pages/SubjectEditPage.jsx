import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Container from '@/components/Container'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import Navbar from '@/components/navbar'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
import SubjectSection from '../components/SubjectSection'
import SubjectEditSection from '../components/SubjectEditSection'
const SubjectEditPage = () => {
  return (
<DashboardMiddlware>
  <Container>
    <Navbar/>
    <DashboardLayout>
   <Header/>
   <BreadCrumb/>
  <SubjectEditSection/>
    </DashboardLayout>
    </Container>
</DashboardMiddlware>
  )
}

export default SubjectEditPage