
import BreadCrumb from '@/components/BreadCrumb'
import Container from '@/components/Container'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import React from 'react'
import Navbar from '@/components/navbar'
import AblumEditSection from '../components/AblumEditSection'
const AblumEditPage = () => {
  return (
    <Container>
    <Navbar/>
        <DashboardLayout>
       <Header/>
       <BreadCrumb currentPage='Edit' links={[{title:"elector",path:"/dashboard/elector"},{title:"Ablum",path:"/dashboard/elector/ablum"}]}/>
      <AblumEditSection/>
        </DashboardLayout>
   </Container>
  )
}

export default AblumEditPage