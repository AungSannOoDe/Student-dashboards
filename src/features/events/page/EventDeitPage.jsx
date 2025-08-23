
import Container from '@/components/Container'
import DashboardMiddlware from '@/features/dashboard/components/DashboardMiddlware'
import React from 'react'
import Navbar from '@/components/navbar'
import DashboardLayout from '@/components/DashboardLayout'
import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import EventEditSection from '../components/EventEditSection'
const EventDeitPage = () => {
  return (
<DashboardMiddlware>
    <Container>
        <Navbar/>
        <DashboardLayout>
       <Header/>
       <BreadCrumb currentPage='Edit' links={[{title:"events",path:"/dashboard/events"}]} />
     <EventEditSection/>
        </DashboardLayout>
    </Container>
  </DashboardMiddlware>
  )
}

export default EventDeitPage