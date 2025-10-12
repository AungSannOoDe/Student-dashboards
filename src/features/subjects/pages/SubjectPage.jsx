import BreadCrumb from '@/components/BreadCrumb'
import Container from '@/components/Container'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import Navbar from '@/components/navbar'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
import React from 'react'
import SubjectSection from '../components/SubjectSection'

const SubjectPage = () => {
  return (
<DashboardMiddlware>
  <Container>
    <Navbar/>
    <DashboardLayout>
   <Header/>
   <BreadCrumb/>
   <SubjectSection/>
    </DashboardLayout>
    </Container>
</DashboardMiddlware>
  )
}

export default SubjectPage