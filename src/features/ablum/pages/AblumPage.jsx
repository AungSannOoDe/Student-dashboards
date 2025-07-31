import BreadCrumb from '@/components/BreadCrumb'
import Container from '@/components/Container'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import React from 'react'
import Navbar from '@/components/navbar'
import AblumSection from '../components/AblumSection'
const AblumPage = () => {
  return (
   <Container>
    <Navbar/>
        <DashboardLayout>
       <Header/>
       <BreadCrumb currentPage='Ablum' links={[{title:"elector",path:"/dashboard/elector"}]}/>
       <AblumSection/>
        </DashboardLayout>
   </Container>
  )
}

export default AblumPage