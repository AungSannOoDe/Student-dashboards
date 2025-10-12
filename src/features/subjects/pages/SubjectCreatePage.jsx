import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Container from '@/components/Container'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import Navbar from '@/components/navbar'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
import SubjectSection from '../components/SubjectSection'
import SubjectCreateSection from '../components/SubjectCreateSection'
import ObjectCreationSection from '../components/ObjectCreationSection'
const SubjectCreatePage = () => {
  return (
<DashboardMiddlware>
  <Container>
    <Navbar/>
    <DashboardLayout>
   <Header/>
   <BreadCrumb/>
   <ObjectCreationSection/>
    </DashboardLayout>
    </Container>
</DashboardMiddlware>
  )
}

export default SubjectCreatePage