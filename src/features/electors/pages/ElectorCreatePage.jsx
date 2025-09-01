import React from 'react'
import Container from '@/components/Container'
import Navbar from '@/components/navbar'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import ElectorCreateSection from '../components/ElectorCreateSection'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
const ElectorCreatePage = () => {
  return (
    <DashboardMiddlware>
      <Container>
            <Navbar/>
            <DashboardLayout>
           <Header/>
      <BreadCrumb currentPage='Create' links={[{title:"elector",path:"/dashboard/elector"}]}/>
      <ElectorCreateSection/>
            </DashboardLayout>
        </Container>
    </DashboardMiddlware>
  )
}

export default ElectorCreatePage